<template>
  <div class="overlay">
    <div class="close" @click="emit('close')">⨉</div>
    <div class="content">
      <div class="content-scroll">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['close']);
</script>

<style>
@use '../../styles/variables.scss' as *;

.overlay {
  background: white;
  width: 50%;
  position: absolute;
  z-index: 1001;
  top: 1rem;
  right: 1rem;
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

.content {
  height: 100%;
  padding: 2em;

  @media (max-width: $mobile-maximum) {
    padding: 0.5em;
  }
}

.content-scroll {
  height: 100%;
  overflow-y: auto;
}


.close {
  cursor: pointer;
  float: right;
  font-size: 1.5rem;
  margin-right: 0.25em;

  @media (max-width: $mobile-maximum) {
    font-size: 3rem;
    background: white;
    right: 1rem;
    position: absolute;
    z-index: 1001;
  }
}
</style>

