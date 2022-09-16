<template>
  <div class="layer-picker-button" @click="toggle">
    <img :src="layersIcon" />
  </div>
</template>

<script>
import layersIcon from '../icons/layers.svg';

export default {
  data() {
    return {
      layersIcon: null,
    };
  },

  mounted() {
    this.layersIcon = layersIcon;
  },

  methods: {
    toggle() {
      this.layerPickerVisible = !this.layerPickerVisible;
    }
  },

  computed: {
    layerPickerVisible: {
      get() {
        return this.$store.state.layerPicker.visible;
      },
      set(value) {
        this.$store.dispatch(value ? 'layerPicker/setVisible' : 'layerPicker/setHidden');
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

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
