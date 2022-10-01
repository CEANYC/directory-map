import { getLocations } from "@/connectors/airtable";
import { fromAirtable, toGeoJson } from "@/transformers/locations";

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
