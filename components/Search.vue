<template>
  <div class="search-container">
    <model-list-select
      :list="locations"
      v-model="selected"
      option-value="ID"
      option-text="Display Name"
      placeholder="Search"
    />
  </div>
</template>

<script>
import { ModelListSelect } from 'vue-search-select'
import 'vue-search-select/dist/VueSearchSelect.css';

import { toGeoJsonFeature } from '@/transformers/locations';

export default {
  components: { ModelListSelect },

  data() {
    return {
      selected: null,
    };
  },

  computed: {
    locations() {
      return [...this.$store.state.data.locations]
        .filter(({ Sector }) => this.selectedSectors.includes(Sector))
        .sort((a, b) => a?.["Display Name"]?.localeCompare(b?.["Display Name"]));
    },

    selectedLocation() {
      return this.locations.filter(({ ID }) => ID === this.selected)[0];
    },

    selectedSectors() {
      return this.$store.state.filters.sectors;
    },
  },

  watch: {
    selected() {
      const selectedFeatures = [{
        ...toGeoJsonFeature(this.selectedLocation),
        layer: { id: 'locations' },
      }];
      this.$store.dispatch('popup/setSelectedFeatures', { selectedFeatures });

      const { lat, lon } = this.selectedLocation;
      this.$store.dispatch('map/setPosition', {
        center: { lng: lon, lat },
        zoom: 15
      });
    },
  },
}
</script>

<style lang="scss" scoped>
.search-container {
  input[type="search"] {
    border-radius: 15px;
    border: 1px solid #54595F;
    font-size: 1.2rem;
    padding: 0.25em;
    width: 100%;
  }
}
</style>
