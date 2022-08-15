import Airtable from "airtable";

import * as constants from "../constants.js";


// TODO get airtable locations
//  * if missing fields,
//   * use geoclient, get missing fields
//   * update in airtable

// TODO get from env var -- needs write access too
const AIRTABLE_API_KEY = 'key2ohFyZoWJ8Hp9q';

const getLocations = async () => {
  console.log(constants);
  const base = new Airtable({apiKey: AIRTABLE_API_KEY})
    .base(constants.AIRTABLE_DATABASE_ID);

  base(constants.AIRTABLE_LISTINGS_TABLE).select({
    filterByFormula: "OR({lon} = '', {lat} = '')",
    // filterByFormula: "{ID} = 1740",
    maxRecords: 2500,
  })
    .eachPage((records) => {
      console.log(records.length);
    });
};

// TODO implement
const geocode = async (location) => {
};

getLocations();
