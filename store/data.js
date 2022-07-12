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
