<template>
  <div class="layer-picker-button" @click="toggle">
    <img :src="layersIcon" />
  </div>
</template>

<script setup>
import layersIcon from '../icons/layers.svg';

const layerPickerStore = useLayerPickerStore();
const { visible: layerPickerVisible } = storeToRefs(layerPickerStore);

const toggle = () => (layerPickerVisible.value = !layerPickerVisible.value);
</script>

<style lang="scss" scoped>
@use '../../styles/variables.scss' as *;

.layer-picker-button {
  background: white;
  cursor: pointer;
  font-size: 3em;
  width: 1.1em;
  height: 1.1em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  padding: 0.25rem;
  position: absolute;
  z-index: 1000;
  bottom: 1rem;
  left: 1rem;
  border-radius: 10px;

  @media (max-width: $mobile-maximum) {
    top: unset;
    bottom: 1rem;
  }
}
</style>
