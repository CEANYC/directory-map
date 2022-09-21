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

<script>
export default {
  methods: {
    isSelected(sector) {
      return this.selectedSectors.includes(sector);
    },

    handleSelect(sector) {
      let newSectors = [...this.selectedSectors, sector];
      this.$store.dispatch('filters/setSectors', { sectors: newSectors });
    },

    handleDeselect(sector) {
      let newSectors = this.selectedSectors.filter(s => s !== sector);
      if (newSectors.length === 0) newSectors = [...this.sectors];
      if (this.sectors.length === this.selectedSectors.length) {
        newSectors = [sector];
      }
      this.$store.dispatch('filters/setSectors', { sectors: newSectors });
    },

    handleClick(sector) {
      this.isSelected(sector) 
        ? this.handleDeselect(sector)
        : this.handleSelect(sector);
    },
  },

  computed: {
    sectors() {
      return this.$store.getters['data/sectors'];
    },

    selectedSectors() {
      return this.$store.state.filters.sectors;
    }
  }
}
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
