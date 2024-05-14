/*
 * Try to match airtable records
 */
export const fromSource = d => {
  return {
    ID: d.id,
    lat: d.lat,
    lon: d.lng,
    Address: `${d.streetAddress} ${d.neighborhood} ${d.borough}`,
    'Display Name': d.name,
    Sector: 'Community Fridges',
    // sectorSlug: 'community-fridges',
    sectorSlug: 'story', // TODO just using temporarily while we finalize colors
  };
};
