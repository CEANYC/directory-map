<template>
  <div class="info-button" @click="emit('toggle')">
    <span class="button-text">{{ label }}</span>
  </div>
</template>

<script setup>
const infoStore = useInfoStore();

const { visible: infoVisible } = storeToRefs(infoStore);

const props = defineProps({
  label: String,
});

const { label } = toRefs(props);

const emit = defineEmits(['toggle']);

const toggle = () => {
  infoVisible.value = !infoVisible.value;
};
</script>

<style lang="scss" scoped>
.info-button {
  align-items: center;
  background: white;
  cursor: pointer;
  display: flex;
  font-size: 1.5em;
  justify-content: center;
  padding: 0.5rem;
  text-align: center;
  border-radius: 10px;

  &:hover {
    background: #eee;
  }
}

.button-text {
  font-size: 0.75em;
  font-weight: bold;
}
</style>
