<template>
  <div
    ref="rootRef"
    class="image-modal"
    tabindex="-1"
    @click.self="close"
    @keyup.esc="close"
  >
    <img :src="imageUrl" />
  </div>
</template>

<script setup>
const imageModalStore = useImageModalStore();

const { imageUrl } = storeToRefs(imageModalStore);

const rootRef = ref(null);
const close = () => imageModalStore.close();

onMounted(() => {
  if (!rootRef.value) return;
  rootRef.value.focus();
});
</script>

<style lang="scss" scoped>
.image-modal {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  z-index: 1001;
  background: rgba(255, 255, 255, 0.5);
  align-items: center;
  display: flex;
  justify-content: center;

  img {
    max-height: 90vh;
    max-width: 90vw;
  }
}
</style>
