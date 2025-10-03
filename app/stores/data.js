import { getLocations } from '@/connectors/file';
import { get as getCommunityFridges } from '@/connectors/communityFridges';
import { get as getMeshNodes } from '@/connectors/meshNodes';
import { fromFile, toGeoJson } from '@/transformers/locations';
import { fromSource as fromCommunityFridgesSource } from '@/transformers/communityFridges';
import { fromSource as fromMeshNodes } from '@/transformers/meshNodes';

export const useDataStore = defineStore('data', () => {
  const locations = ref([]);

  const locationsGeoJson = computed(() => toGeoJson(locations.value));

  const availableSectors = computed(() => {
    const sectorsFlattened = locations.value
      .map(({ Sector }) => Sector)
      .flat(Infinity);
    return Array.from(new Set(sectorsFlattened));
  });

  const addLocations = (toAdd) => {
    locations.value = [...locations.value, ...toAdd];
  };

  const loadLocations = async (params) => {
    const locations = await getLocations();
    addLocations(locations.map(fromFile));
  };

  const loadCommunityFridges = async () => {
    const fridges = await getCommunityFridges();
    const locations = Object.values(fridges).map(fromCommunityFridgesSource);
    addLocations(locations);
  };

  const loadMeshNodes = async () => {
    const nodes = await getMeshNodes();
    const locations = Object.values(nodes).map(fromMeshNodes);
    addLocations(locations);
  };

  return {
    locations,
    loadLocations,
    loadCommunityFridges,
    loadMeshNodes,
    locationsGeoJson,
    sectors: availableSectors,
  };
});
