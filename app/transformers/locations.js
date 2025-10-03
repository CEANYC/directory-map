export const getSectorSlug = (sector) => {
  return sector.toLowerCase().replaceAll(' ', '_');
};

export const fromFile = (location) => {
  return {
    ...location,
    ID: +location.ID,
    sectorSlug: getSectorSlug(location.Sector),
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
    id: location.ID,
    properties: { ...location },
    geometry: {
      type: 'Point',
      coordinates: [location.lon, location.lat],
    },
  };
};
