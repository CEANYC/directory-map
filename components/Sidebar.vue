<template>
  <div class="sidebar">
    <SidebarSection class="top-section">
      <h1>{{title}}</h1>
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
    },

    title() {
      return this.$store.getters['textBlocks/byType']('Title')[0];
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.sidebar {
  border-radius: 20px;
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 1000;
  width: 25%;

  @media (max-width: $mobile-maximum) {
    left: 0.5rem;
    right: 0.5rem;
    top: 0.5rem;
    width: unset;
  }

  h1 {
    margin: 0;
    margin-bottom: 1em;

    @media (max-width: $mobile-maximum) {
      margin-bottom: 0;
    }
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

<style lang="scss">
@import "../styles/variables.scss";

@media (max-width: $mobile-maximum) {
  .sidebar .sector-picker {
    display: none;
  }

  .top-section-content {
    width: 100%;
  }
}

.top-section {
  align-items: center;
  display: flex;
  flex-direction: column;
}
</style>
