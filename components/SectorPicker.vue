<template>
  <div class="sector-picker">
    <div
      v-for="sector in sectors"
      :key="sector"
      :class="{
        sector: true,
        [slug(sector)]: true,
        selected: isSelected(sector)
      }"
      @click="handleClick(sector)"
    >
      {{sector}}
    </div>
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

    slug(sector) {
      return sector.toLowerCase().replaceAll(' ', '-');
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

  .sector {
    background: gray;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    font-family: sans-serif;
    padding: 0.1rem 1rem;
    text-transform: uppercase;

    &.selected {
      &.credit-unions {
        background: #5BA8F7;
      }

      &.clts {
        background: #33B983;
      }

      &.csas {
        background: #CC34CD;
      }

      &.energy {
        background: #1077F3;
      }

      &.food {
        background: #7018D3;
      }

      &.gardens {
        background: #72B622;
      }

      &.housing {
        background: #F98517;
      }

      &.worker {
        background: #FDCC0D;
      }
    }
  }
}
</style>
