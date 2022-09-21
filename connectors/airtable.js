import Airtable from "airtable";
import {
  AIRTABLE_API_KEY,
  AIRTABLE_DATABASE_ID,
  AIRTABLE_LISTINGS_TABLE,
  AIRTABLE_SECTORS_TABLE,
  AIRTABLE_TEXT_BLOCKS_TABLE,
} from "@/constants";

const getRecords = async (table) => {
  const base = new Airtable({apiKey: AIRTABLE_API_KEY}).base(AIRTABLE_DATABASE_ID);

  return new Promise((resolve, reject) => {
    let allRecords = [];

    base(table).select({ maxRecords: 2500 })
      .eachPage(
        (records, fetchNextPage) => {
          allRecords = [
            ...allRecords,
            ...records.map(r => r.fields)
          ];
          fetchNextPage();
        },
        err => {
          if (err) return reject(err);
          resolve(allRecords);
        }
      );
  });
};

export const getLocations = async () => {
  return await getRecords(AIRTABLE_LISTINGS_TABLE);
};

export const getSectors = async () => {
  return await getRecords(AIRTABLE_SECTORS_TABLE);
};

export const getTextBlocks = async () => {
  return await getRecords(AIRTABLE_TEXT_BLOCKS_TABLE);
};
