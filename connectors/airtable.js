import Airtable from "airtable";
import {
  AIRTABLE_API_KEY,
  AIRTABLE_DATABASE_ID,
  AIRTABLE_LISTINGS_TABLE,
  AIRTABLE_SECTORS_TABLE,
  AIRTABLE_TEXT_BLOCKS_TABLE,
} from "@/constants";

const getRecords = async (table, progressCallback) => {
  const base = new Airtable({apiKey: AIRTABLE_API_KEY}).base(AIRTABLE_DATABASE_ID);

  return new Promise((resolve, reject) => {
    let allRecords = [];

    base(table).select({ maxRecords: 2500 })
      .eachPage(
        (records, fetchNextPage) => {
          const recordsBatch = records.map(r => r.fields);
          allRecords = [...allRecords, ...recordsBatch];
          if (progressCallback) {
            progressCallback(recordsBatch);
          }
          fetchNextPage();
        },
        err => {
          if (err) return reject(err);
          resolve(allRecords);
        }
      );
  });
};

export const getLocations = async (progressCallback) => {
  return await getRecords(AIRTABLE_LISTINGS_TABLE, progressCallback);
};

export const getSectors = async () => {
  return await getRecords(AIRTABLE_SECTORS_TABLE);
};

export const getTextBlocks = async () => {
  return await getRecords(AIRTABLE_TEXT_BLOCKS_TABLE);
};
