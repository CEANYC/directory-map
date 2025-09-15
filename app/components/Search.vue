<template>
  <div class="search-container">
    <ModelListSelect
      :list="locations"
      v-model="selected"
      option-value="ID"
      option-text="Display Name"
      placeholder="Search"
    />
  </div>
</template>

<script setup>
import { ModelListSelect } from 'vue-search-select';
import 'vue-search-select/dist/VueSearchSelect.css';

import { toGeoJsonFeature } from '@/transformers/locations';

const selected = ref(null);

const dataStore = useDataStore();
const filtersStore = useFiltersStore();
const mapStore = useMapStore();
const popupStore = usePopupStore();

const { locations: allLocations } = storeToRefs(dataStore);
const { sectors: selectedSectors } = storeToRefs(filtersStore);
const { selectedFeatures } = storeToRefs(popupStore);

const locations = computed(() => {
  return [...allLocations.value]
    .filter(({ Sector }) => selectedSectors.value.includes(Sector))
    .sort((a, b) => a?.['Display Name']?.localeCompare(b?.['Display Name']));
});

const selectedLocation = computed(() => {
  return locations.value.filter(({ ID }) => ID === selected.value)[0];
});

watch(selected, () => {
  selectedFeatures.value = [
    {
      ...toGeoJsonFeature(selectedLocation.value),
      layer: { id: 'locations' },
    },
  ];

  const { lat, lon } = selectedLocation.value;
  mapStore.setPosition({
    center: { lng: lon, lat },
    zoom: 15,
  });
});
</script>

<style lang="scss" scoped>
.search-container {
  input[type='search'] {
    border-radius: 15px;
    border: 1px solid #54595f;
    font-size: 1.2rem;
    padding: 0.25em;
    width: 100%;
  }
}
</style>
