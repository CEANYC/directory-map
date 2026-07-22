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

export const toGeoJson = (events) => {
  return {
    type: 'FeatureCollection',
    features: events.map(toGeoJsonFeature),
  };
};

export const toGeoJsonFeature = (event) => {
  console.log(event);
  return {
    type: 'Feature',
    properties: { ...event },
    geometry: {
      type: 'Point',
      coordinates: [...event.lnglat].reverse(),
    },
  };
};
