import { getLocations } from "@/connectors/airtable";
import { get as getCommunityFridges } from "@/connectors/communityFridges";
import { get as getMeshNodes } from "@/connectors/meshNodes";
import { fromAirtable, toGeoJson } from "@/transformers/locations";
import { fromSource as fromCommunityFridgesSource } from "@/transformers/communityFridges";
import { fromSource as fromMeshNodes } from "@/transformers/meshNodes";

export const useDataStore = defineStore('data', {
  state: () => ({
    locations: [],
  }),

  actions: {
    addLocations(locations) {
      this.locations = [...this.locations, ...locations];
    },

    async loadLocations(apiKey, params) {
      const filtersStore = useFiltersStore();
      const popupStore = usePopupStore();

      const { sectors } = storeToRefs(filtersStore);

      await getLocations(apiKey, records => {
        this.addLocations(records.map(fromAirtable));
      });

      if (!sectors.value.length) {
        sectors.value = this.sectors;
      }
      popupStore.loadQueryParams(params);
    },

    async loadCommunityFridges() {
      const fridges = await getCommunityFridges();
      const locations = Object.values(fridges).map(fromCommunityFridgesSource);
      this.addLocations(locations);
    },

    async loadMeshNodes() {
      const nodes = await getMeshNodes();
      const locations = Object.values(nodes).map(fromMeshNodes);
      this.addLocations(locations);
    },
  },

  getters: {
    locationsGeoJson: state => toGeoJson(state.locations),

    sectors: state => {
      const sectorsFlattened = state.locations
        .map(({ Sector }) => Sector)
        .flat(Infinity);
      return Array.from(new Set(sectorsFlattened));
    },
  },
});
