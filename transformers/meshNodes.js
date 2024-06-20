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
    'Display Name': 'NYC Mesh Node',
    'Website' : 'https://www.nycmesh.net/',
    Sector: 'Mesh NYC Nodes',
    sectorSlug: 'mesh_nodes', 
  };
};

