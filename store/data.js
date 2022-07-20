import { getLocations } from "../connectors/airtable";

export const state = () => {
  return {
    locations: [],
  };
};

export const mutations = {
  setLocations(state, { locations }) {
    state.locations = locations;
  },
};

export const actions = {
  async loadLocations({ commit }) {
    const locations = await getLocations();
    commit("setLocations", { locations });
  },
};

export const getters = {
  sectors: state => {
    const sectorsFlattened = state.locations
      .map(({ Sector }) => Sector)
      .flat(Infinity);
    return Array.from(new Set(sectorsFlattened));
  }
};
