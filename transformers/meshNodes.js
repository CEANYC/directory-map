/*
 * Try to match airtable records
 */
export const fromSource = d => {
  return {
    ID: d.id,
    lat: d.coordinates[1],
    lon: d.coordinates[0],
    // TODO filter by status?
    // Address: `${d.streetAddress} ${d.neighborhood} ${d.borough}`,
    // 'Display Name': d.name,
    Sector: 'Mesh NYC Nodes',
    sectorSlug: 'mesh_nodes', // TODO just using temporarily while we finalize colors
  };
};

