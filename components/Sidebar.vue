<template>
  <div class="sidebar">
    <SidebarSection>
      <h1>SE NYC Directory</h1>
      <div class="top-section-content">
        <SectorPicker /> 
        <Search />
      </div>
    </SidebarSection>

    <SidebarSection v-if="selectedFeatures.length" class="popup-wrapper">
      <Popup :feature="selectedFeatures[0]" />
    </SidebarSection>
  </div>
</template>

<script>
export default {
  computed: {
    selectedFeatures() {
      return this.$store.state.popup.selectedFeatures;
    }
  },
}
</script>

<style lang="scss">
.sidebar {
  border-radius: 20px;
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 1000;
  width: 25%;

  h1 {
    font-family: sans-serif;
    margin: 0;
    margin-bottom: 1em;
  }

  .top-section-content {
    > * {
      margin-bottom: 1em;

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  .popup-wrapper {
    margin-top: 0.5em;
  }
}
</style>
