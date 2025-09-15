import { MESH_NODES_URL } from "@/constants";

const getRecords = async () => {
  const response = await fetch(MESH_NODES_URL);
  return await response.json();
};

export const get = async () => {
  return (await getRecords()).filter(d => d.status === 'Installed');
};
