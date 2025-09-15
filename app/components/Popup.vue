<template>
  <div class="popup">
    <div class="close" @click="handleClose">⨉</div>
    <h2>{{properties['Display Name']}}</h2>
    <SectorPill :sector="properties['Sector']" />
    <div class="popup-sections">
      <PopupSection>{{properties['Brief Description']}}</PopupSection>

      <PopupSection v-if="properties['Address']">
        Address: {{properties['Address']}}
      </PopupSection>

      <PopupSection v-if="properties['Phone']">
        Phone: {{properties['Phone']}}
      </PopupSection>

      <PopupSection v-if="website">
        Website: <a :href="website" target="_blank">{{website}}</a>
      </PopupSection>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  feature: Object,
});

const { feature } = toRefs(props);

const popupStore = usePopupStore();
const { selectedFeatures } = storeToRefs(popupStore);

const properties = computed(() => {
  return feature.value?.properties ?? {};
});

const website = computed(() => {
  return properties.value?.['Website'];
});

const handleClose = () => {
  selectedFeatures.value = [];
};
</script>

<style lang="scss" scoped>
.popup {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: 50vh;
  overflow-y: auto;

  h2 {
    margin-top: 0.5em;
  }

  .close {
    position: absolute;
    right: 0;
    cursor: pointer;
    font-size: 2rem;
    top: -0.5rem;
  }
}

.popup-sections {
  margin-top: 1rem;
}
</style>
