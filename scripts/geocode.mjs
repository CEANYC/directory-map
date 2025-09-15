import Airtable from 'airtable';
import fetch from 'cross-fetch';

import * as constants from '../constants.js';

const AIRTABLE_API_KEY_WRITABLE = process.env.AIRTABLE_API_KEY_WRITABLE;
const AIRTABLE_MAX_UPDATE_SIZE = 10;
const GEOCLIENT_API_KEY = process.env.GEOCLIENT_API_KEY;
const GEOCLIENT_URL = 'https://api.nyc.gov/geo/geoclient/v1/search.json';

let allParametersPresent = true;

if (!AIRTABLE_API_KEY_WRITABLE) {
  console.error(
    'AIRTABLE_API_KEY_WRITABLE not set, writable Airtable API KEY required'
  );
  allParametersPresent = false;
}

if (!GEOCLIENT_API_KEY) {
  console.error('GEOCLIENT_API_KEY not set, Geoclient API KEY required');
  allParametersPresent = false;
}

if (!allParametersPresent) {
  console.error('Cannot continue with above errors, please fix and retry');
  process.exit(1);
}

const getBase = () => {
  return new Airtable({ apiKey: AIRTABLE_API_KEY_WRITABLE }).base(
    constants.AIRTABLE_DATABASE_ID
  );
};

const getLocations = async () => {
  await getBase()(constants.AIRTABLE_LISTINGS_TABLE)
    .select({
      filterByFormula: "OR({lon} = '', {lat} = '')",
      maxRecords: 2500,
    })
    .eachPage(async (records, fetchNextPage) => {
      console.log(`Found ${records.length} records missing locations`);
      await updateRecords(records);
      fetchNextPage();
    });
};

const updateRecords = async (records) => {
  const results = await Promise.all(records.map(geocode));
  let updateSet = records
    .map((record, index) => {
      const { id } = record;
      const { latitude: lat, longitude: lon } = results[index]?.response ?? {};
      if (!lat || !lon) return;
      return {
        id,
        fields: { lat, lon },
      };
    })
    .filter((v) => !!v);
  console.log(`Found ${updateSet.length} geocode results`);

  // We break the set into batches since Airtable only allows 10 at a time
  let updateBatch;

  while (updateSet.length > 0) {
    updateBatch = updateSet.slice(0, AIRTABLE_MAX_UPDATE_SIZE);
    updateSet = updateSet.slice(AIRTABLE_MAX_UPDATE_SIZE);

    console.log(`Sending ${updateBatch.length} updates to Airtable`);
    getBase()(constants.AIRTABLE_LISTINGS_TABLE).update(
      updateBatch,
      (err, records) => {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach((r) => console.log(r.get('ID')));
      }
    );
  }
};

const geocode = async (location) => {
  const address = location.fields.Address;
  const response = await fetch(`${GEOCLIENT_URL}?input=${address}`, {
    headers: { 'Ocp-Apim-Subscription-Key': GEOCLIENT_API_KEY },
  });
  return (await response.json()).results[0];
};

console.log('Looking for records missing locations');
await getLocations();
console.log('Done');
