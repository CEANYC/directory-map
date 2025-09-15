<template>
  <div class="info-button" @click="toggle">
    <span class="button-text">About</span>
  </div>
</template>

<script setup>
const infoStore = useInfoStore();

const { visible: infoVisible } = storeToRefs(infoStore);

const toggle = () => {
  infoVisible.value = !infoVisible.value;
};
</script>

<style lang="scss" scoped>
@use '../../styles/variables.scss' as *;

.info-button {
  align-items: center;
  background: white;
  cursor: pointer;
  display: flex;
  font-size: 1.5em;
  justify-content: center;
  padding: 0.5rem;
  text-align: center;
  position: absolute;
  z-index: 1000;
  top: 1rem;
  right: 1rem;
  border-radius: 10px;

  &:hover {
    background: #eee;
  }

  @media (max-width: $mobile-maximum) {
    top: unset;
    bottom: 1rem;
  }
}

.button-text {
  font-size: 0.75em;
  font-weight: bold;
}
</style>
