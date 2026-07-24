<template>
  <main>
    <Map />
    <Sidebar />
    <div class="info-buttons">
      <InfoButton label="About" @toggle="infoVisible = !infoVisible" />
      <InfoButton label="Events" @toggle="eventsVisible = !eventsVisible" />
    </div>
    <LogoButton />
    <LayerPickerButton />
    <InfoWindow v-if="infoVisible" />
    <EventsWindow v-if="eventsVisible" />
    <ImageModal v-if="imageModalOpen" />
    <LayerPicker v-if="layerPickerVisible" />
  </main>
</template>

<script setup>
const contentStore = useContentStore();
const dataStore = useDataStore();
const filtersStore = useFiltersStore();
const imageModalStore = useImageModalStore();
const infoStore = useInfoStore();
const eventsStore = useEventsStore();
const layerPickerStore = useLayerPickerStore();
const queryStore = useQueryStore();
const mapStore = useMapStore();
const popupStore = usePopupStore();
const textBlocksStore = useTextBlocksStore();
const { $airtableApiKey } = useNuxtApp();
const route = useRoute();

const { sectors: availableSectors } = storeToRefs(dataStore);
const { sectors: selectedSectors } = storeToRefs(filtersStore);
const { open: imageModalOpen } = storeToRefs(imageModalStore);
const { visible: infoVisible } = storeToRefs(infoStore);
const { visible: layerPickerVisible } = storeToRefs(layerPickerStore);
const { visible: eventsVisible } = storeToRefs(eventsStore);

onMounted(async () => {
  if (import.meta.client) {
    const params = route.query;

    await dataStore.loadLocations(params);
    await dataStore.loadCommunityFridges();
    await dataStore.loadMeshNodes();
    await dataStore.loadEvents();

    if (!selectedSectors.value.length) {
      selectedSectors.value = availableSectors.value;
    }
    popupStore.loadQueryParams(params);

    await contentStore.loadSectors($airtableApiKey);
    await textBlocksStore.loadTextBlocks($airtableApiKey);

    selectedSectors.value = dataStore.sectors;

    queryStore.loadQueryParams(params);
  }
});

const title = computed(() => {
  return textBlocksStore.byType('Title')[0];
});
</script>

<style>
@use '../../styles/variables.scss' as *;

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
}

main {
  display: flex;
  height: 100vh;
  width: 100vw;
}

.info-buttons {
  position: absolute;
  z-index: 1000;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media (max-width: $mobile-maximum) {
    top: unset;
    bottom: 1rem;
  }
}
</style>
