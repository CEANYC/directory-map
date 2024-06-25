import { getLocations } from "@/connectors/airtable";
import { get as getCommunityFridges } from "@/connectors/communityFridges";
import { get as getMeshNodes } from "@/connectors/meshNodes";
import { fromAirtable, toGeoJson } from "@/transformers/locations";
import { fromSource as fromCommunityFridgesSource } from "@/transformers/communityFridges";
import { fromSource as fromMeshNodes } from "@/transformers/meshNodes";

export const state = () => {
  return {
    locations: [],
  };
};

export const mutations = {
  addLocations(state, { locations }) {
    state.locations = [...state.locations, ...locations];
  },

  setLocations(state, { locations }) {
    state.locations = locations;
  },
};

export const actions = {
  async loadLocations({ commit, dispatch, getters, rootState }, { params }) {
    dispatch('filters/loadQueryParams', { params }, { root: true });
    const sectorFilters = rootState.filters.sectors.length;

    await getLocations(records => {
      commit("addLocations", { locations: records.map(fromAirtable) });
      if (!sectorFilters) {
        dispatch('filters/setSectors', {
          sectors: getters['sectors'],
        }, { root: true });
      }
    });
    dispatch('popup/loadQueryParams', { params }, { root: true });
  },

  async loadCommunityFridges({ commit }) {
    const fridges = await getCommunityFridges();
    const locations = Object.values(fridges).map(fromCommunityFridgesSource);
    commit("addLocations", { locations });
  },

  async loadMeshNodes({ commit }) {
    const nodes = await getMeshNodes();
    const locations = Object.values(nodes).map(fromMeshNodes);
    commit("addLocations", { locations });
  },
};

export const getters = {
  locationsGeoJson: state => toGeoJson(state.locations),

  sectors: state => {
    const sectorsFlattened = state.locations
      .map(({ Sector }) => Sector)
      .flat(Infinity);
    return Array.from(new Set(sectorsFlattened));
  }
};
