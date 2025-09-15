<template>
  <div class="sector-picker">
    <SectorPill
      v-for="sector in sectors"
      :key="sector"
      :sector="sector"
      :selected="isSelected(sector)"
      :interactive="true"
      @click.native="handleClick(sector)"
    />
  </div>
</template>

<script setup>
const dataStore = useDataStore();
const filtersStore = useFiltersStore();
const { sectors } = storeToRefs(dataStore);
const { sectors: selectedSectors } = storeToRefs(filtersStore);

const isSelected = (sector) => {
  return selectedSectors.value.includes(sector);
};

const handleSelect = (sector) => {
  let newSectors = [...selectedSectors.value, sector];
  selectedSectors.value = newSectors;
};

const handleDeselect = (sector) => {
  let newSectors = selectedSectors.value.filter((s) => s !== sector);
  if (newSectors.length === 0) newSectors = [...sectors.value];
  if (sectors.value.length === selectedSectors.value.length) {
    newSectors = [sector];
  }
  selectedSectors.value = newSectors;
};

const handleClick = (sector) => {
  isSelected(sector) ? handleDeselect(sector) : handleSelect(sector);
};
</script>

<style lang="scss">
.sector-picker {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;

  .sector-pill {
    cursor: pointer;
  }
}
</style>
