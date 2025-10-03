import Airtable from 'airtable';
import {
  AIRTABLE_DATABASE_ID,
  AIRTABLE_SECTORS_TABLE,
  AIRTABLE_TEXT_BLOCKS_TABLE,
} from '@/constants';

const getRecords = async (apiKey, table, progressCallback) => {
  const base = new Airtable({ apiKey }).base(AIRTABLE_DATABASE_ID);

  return new Promise((resolve, reject) => {
    let allRecords = [];

    base(table)
      .select({ maxRecords: 2500 })
      .eachPage(
        (records, fetchNextPage) => {
          const recordsBatch = records.map((r) => r.fields);
          allRecords = [...allRecords, ...recordsBatch];
          if (progressCallback) {
            progressCallback(recordsBatch);
          }
          fetchNextPage();
        },
        (err) => {
          if (err) return reject(err);
          resolve(allRecords);
        }
      );
  });
};

export const getSectors = async (apiKey) => {
  return await getRecords(apiKey, AIRTABLE_SECTORS_TABLE);
};

export const getTextBlocks = async (apiKey) => {
  return await getRecords(apiKey, AIRTABLE_TEXT_BLOCKS_TABLE);
};
