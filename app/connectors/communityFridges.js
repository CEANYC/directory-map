import { COMMUNITY_FRIDGES_URL } from '@/constants';

const getRecords = async () => {
  const response = await fetch(COMMUNITY_FRIDGES_URL);
  return await response.json();
};

export const get = async () => {
  return await getRecords();
};
