import { INITIAL_CENTER, INITIAL_ZOOM } from '@/constants';

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
      zoom: (+zoom).toFixed(1),
    };
  }

  return pushParams;
}

function createMapSettings() {
  return {
    center: { ...INITIAL_CENTER },
    zoom: INITIAL_ZOOM,
  };
}

export const useMapStore = defineStore('map', {
  state: () => ({
    initialCenter: { ...INITIAL_CENTER },
    initialZoom: INITIAL_ZOOM,

    center: { ...INITIAL_CENTER },
    zoom: INITIAL_ZOOM,

    hoveredFeature: {},
  }),

  actions: {
    setPosition({ center, zoom }) {
      this.center = center;
      this.zoom = zoom;
    },

    setHoveredFeature(feature) {
      this.hoveredFeature = JSON.parse(JSON.stringify(feature));
    },

    loadQueryParams(params) {
      let center = INITIAL_CENTER;
      let zoom = INITIAL_ZOOM;

      if (params.lat && params.lng) {
        center = {
          lat: +params.lat,
          lng: +params.lng,
        };
      }
      this.initialCenter = center;

      if (params.zoom) {
        zoom = +params.zoom;
      }
      this.initialZoom = zoom;

      this.setPosition({ center, zoom });
    },
  },

  getters: {
    queryParams(state) {
      let params = {
        ...getPositionParams(state.center, state.zoom),
      };

      return params;
    },

    highlightedFeatures(state) {
      const popupStore = usePopupStore();
      return [
        state.hoveredFeature,
        popupStore.selectedFeatures.map((f) => ({
          layer: f?.layer?.id,
          id: f.id,
        }))[0],
      ].filter((v) => !!v && Object.keys(v).length > 0);
    },
  },
});
