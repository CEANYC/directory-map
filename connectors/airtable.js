import Airtable from "airtable";
import {
  AIRTABLE_API_KEY,
  AIRTABLE_DATABASE_ID,
  AIRTABLE_TABLE
} from "@/constants";

export const getLocations = async () => {
  const base = new Airtable({apiKey: AIRTABLE_API_KEY}).base(AIRTABLE_DATABASE_ID);

  return new Promise((resolve, reject) => {
    let allRecords = [];

    base(AIRTABLE_TABLE).select({ maxRecords: 2500 })
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
