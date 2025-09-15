<template>
  <div class="text-block">
    <div
      v-for="block in textBlocks"
      :key="block"
      v-html="markdownConverter.makeHtml(block)"
    />
  </div>
</template>

<script setup>
import showdown from 'showdown';

const props = defineProps({
  type: String,
});
const { type } = toRefs(props);

const textBlocksStore = useTextBlocksStore();

const markdownConverter = new showdown.Converter({ simpleLineBreaks: true });

const textBlocks = computed(() => {
  return textBlocksStore.byType(type.value);
});
</script>

<style lang="scss" scoped>
@use "../../styles/variables.scss" as *;

.text-block {
  padding: 1em;
  font-size: 0.8em;
}
</style>

