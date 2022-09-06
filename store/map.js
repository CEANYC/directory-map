import {
  INITIAL_CENTER,
  INITIAL_ZOOM,
} from "@/constants";

function getPositionParams(center, zoom) {
  let pushParams = {};

  if (center) {
    pushParams = {
      ...pushParams,
      lng: (+center.lng).toFixed(4),
      lat: (+center.lat).toFixed(4),
    };
  }

  if (zoom) {
    pushParams = {
      ...pushParams,
      zoom: (+zoom).toFixed(2),
    };
  }

  return pushParams;
}

function createMapSettings() {
  return {
    center: { ...INITIAL_CENTER },
    zoom: INITIAL_ZOOM,
  };
};

export const state = () => {
  return {
    initialCenter: { ...INITIAL_CENTER },
    initialZoom: INITIAL_ZOOM,

    center: { ...INITIAL_CENTER },
    zoom: INITIAL_ZOOM,
    
    hoveredFeature: {},
  };
};

export const mutations = {
  setCenter(state, { center }) {
    state.center = center;
  },

  setInitialCenter(state, { center }) {
    state.initialCenter = center;
  },

  setPosition(state, { center, zoom }) {
    state.center = center;
    state.zoom = zoom;
  },

  setZoom(state, { zoom }) {
    state.zoom = zoom;
  },

  setHoveredFeature(state, feature) {
    state.hoveredFeature = { ...feature };
  },

  setInitialZoom(state, { zoom }) {
    state.initialZoom = zoom;
  },
};

export const actions = {
  setCenter({ commit, state }, { center }) {
    commit("setCenter", {
      center,
      pushToURL: getPositionParams(center, state.zoom)
    });
  },

  setZoom({ commit, state }, { zoom }) {
    commit("setZoom", {
      zoom,
      pushToURL: getPositionParams(state.center, zoom)
    });
  },

  setPosition({ commit }, { center, zoom }) {
    commit("setPosition", {
      center,
      zoom,
      pushToURL: getPositionParams(center, zoom)
    });
  },

  setHoveredFeature({ commit }, feature) {
    commit("setHoveredFeature", JSON.parse(JSON.stringify(feature)));
  },

  loadQueryParams({ commit, dispatch }, { params }) {
    let center = INITIAL_CENTER;
    let zoom = INITIAL_ZOOM;

    if (params.lat && params.lng) {
      center = {
        lat: +params.lat,
        lng: +params.lng
      };
    }
    commit('setInitialCenter', { center });

    if (params.zoom) {
      zoom = +params.zoom;
    }
    commit('setInitialZoom', { zoom });

    commit('setPosition', { center, zoom });
  },
};

export const getters = {
  queryParams: state => {
    let params = {
      ...getPositionParams(state.center, state.zoom),
    };

    return params;
  },

  highlightedFeatures: (state, getters, rootState) => {
    return [
      state.hoveredFeature,
      rootState.popup.selectedFeatures
        .map((f) => ({ layer: f?.layer?.id, id: f.id }))[0],
    ].filter(v => !!v && Object.keys(v).length > 0);
  },
}
