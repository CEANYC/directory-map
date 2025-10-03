import * as d3 from 'd3';

const loadCsv = async (file) => {
  return d3.csv(`data/${file}`);
};

export const getLocations = async () => {
  return loadCsv('listings.csv');
};
