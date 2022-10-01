<template>
  <div class="text-block">
    <div
      v-for="block in textBlocks"
      :key="block"
      v-html="markdownConverter.makeHtml(block)"
    />
  </div>
</template>

<script>
import showdown from 'showdown';

export default {
  props: {
    type: String,
  },

  computed: {
    markdownConverter() {
      return new showdown.Converter({ simpleLineBreaks: true });
    },

    textBlocks() {
      return this.$store.getters['textBlocks/byType'](this.type);
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.text-block {
  padding: 1em;
  font-size: 0.8em;
}
</style>

