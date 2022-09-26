<template>
  <div class="contributors">
    <div
      v-for="block in contributorsTextBlocks"
      :key="block"
      v-html="markdownConverter.makeHtml(block)"
    />
  </div>
</template>

<script>
import showdown from 'showdown';

export default {
  computed: {
    markdownConverter() {
      return new showdown.Converter({ simpleLineBreaks: true });
    },

    contributorsTextBlocks() {
      return this.$store.getters['textBlocks/byType']('Contributors');
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.contributors {
  padding: 1em;
  font-size: 0.8em;
}
</style>

