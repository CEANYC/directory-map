import camelCase from 'camelcase';
import * as d3 from 'd3';

import { getSectorSlug } from '@/transformers/locations';

const dateParse = d3.timeParse('%m/%d/%Y');

export const fromFile = (event) => {
  return {
    ...Object.fromEntries(
      Object.entries(event).map(([k, v]) => [camelCase(k), v])
    ),
    categories: event.Category.split(',').map(s => s.trim()),
    sectorSlug: getSectorSlug(event.Sector),
    lnglat: [+event.Longitude, +event.Latitude],
    startDate: dateParse(event['Start Date']),
    endDate: dateParse(event['End Date']),
    free: event.Free === 'Yes',
    rsvp: event.RSVP === 'Yes',
    public: event.Public === 'Yes',
  };
};

export const toGeoJson = (locations) => {
  return {
    type: 'FeatureCollection',
    features: locations.map(toGeoJsonFeature),
  };
};

export const toGeoJsonFeature = (location) => {
  return {
    type: 'Feature',
    properties: { ...location },
    geometry: {
      type: 'Point',
      coordinates: [+location.Longitude, +location.Latitude],
    },
  };
};
