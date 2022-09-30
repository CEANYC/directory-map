import { getSectors } from "@/connectors/airtable";

export const state = () => {
  return {
    sectors: [],
  };
};

export const mutations = {
  setSectors(state, { sectors }) {
    state.sectors = sectors;
  },
};

export const actions = {
  async loadSectors({ commit }) {
    const sectors = (await getSectors())
      .filter(({ Status }) => Status === "Done")
      .sort((a, b) => a.Order - b.Order);
    commit("setSectors", { sectors });
  },
};
