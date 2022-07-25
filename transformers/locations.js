export const toGeoJson = locations => {
  return {
    type: "FeatureCollection",
    features: locations.map(toGeoJsonFeature)
  };
};

export const toGeoJsonFeature = location => {
  return {
    type: "Feature",
    properties: { ...location },
    geometry: {
      type: "Point",
      coordinates: [
        location.lon,
        location.lat
      ]
    }
  };
};
