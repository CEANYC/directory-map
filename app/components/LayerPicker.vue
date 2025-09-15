<template>
  <div class="layer-picker">
    <div class="close" @click="close">⨉</div>
    <div class="content">
      <div class="head">
        <h2>Display Districts</h2>
        <button v-if="canClear" class="clear" @click="clear">clear</button>
      </div>
      <div class="layers">
        <div v-for="layer in availableLayers" class="layer" :key="layer.name">
          <label>
            <span>{{ layer.name }}</span>
            <input
              type="radio"
              name="layer"
              :checked="selectedLayers.includes(layer.name)"
              :id="layer.name"
              :value="layer.name"
              @change="selectLayer"
            />
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const layerPickerStore = useLayerPickerStore();

const { availableLayers, visible, selectedLayers } =
  storeToRefs(layerPickerStore);

const canClear = computed(() => selectedLayers.value.length > 0);

const clear = () => (selectedLayers.value = []);
const close = () => (visible.value = false);
const selectLayer = (e) => (selectedLayers.value = [e.target.value]);
</script>

<style lang="scss" scoped>
@use '../../styles/variables.scss' as *;

.layer-picker {
  background: white;
  width: 25%;
  position: absolute;
  z-index: 1000;
  left: 1rem;
  bottom: 1rem;
  border-radius: 10px;

  @media (max-width: $mobile-maximum) {
    top: 0.5rem;
    right: 0.5rem;
    bottom: 0.5rem;
    left: 0.5rem;
    width: unset;
  }
}

.head {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h2 {
    margin: 0;
  }
}

.layer {
  border-bottom: 1px solid #ededed;

  &:last-of-type {
    border: none;
  }

  label {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 0;
  }

  input[type='radio'] {
    height: 1.25rem;
    width: 1.25rem;
  }
}

.content {
  height: 100%;
  overflow-y: auto;
  padding: 2em;
}

.close {
  cursor: pointer;
  float: right;
  font-size: 1.5rem;
  margin-right: 0.25em;
}

.clear {
  appearance: none;
  border: none;
  background: #7a7a7a;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  padding: 0 0.75rem;
}
</style>
