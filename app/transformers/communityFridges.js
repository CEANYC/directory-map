/*
 * Try to match airtable records
 */
export const fromSource = (d, i) => {
  return {
    ID: 1e7 + i, // Force a numeric value as required
    lat: d.lat,
    lon: d.lng,
    Address: `${d.streetAddress} ${d.neighborhood} ${d.borough}`,
    'Display Name': d.name,
    Sector: 'Community Fridges',
    sectorSlug: 'community_fridges',
  };
};
