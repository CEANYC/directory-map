<template>
  <section class="sector">
    <h3 :class="{ name: true, expanded }" @click="toggle">{{name}}</h3>
    <div class="content" v-if="expanded">
      <div v-html="detailsHtml" />
      <img v-if="imageUrl" :src="imageUrl" @click="handleSelectImage" />
    </div>
  </section>
</template>

<script>
import showdown from 'showdown';

export default {
  data() {
    return {
      expanded: false,
    };
  },

  props: {
    sector: [Object, true],
  },

  methods: {
    handleSelectImage() {
      this.$store.dispatch("imageModal/open", { imageUrl: this.imageUrl });
    },

    toggle() {
      this.expanded = !this.expanded;
    },
  },

  computed: {
    markdownConverter() {
      return new showdown.Converter();
    },

    name() {
      return this.sector.Name;
    },

    details() {
      return this.sector.Notes;
    },

    detailsHtml() {
      return this.markdownConverter.makeHtml(this.details);
    },

    imageUrl() {
      return this.sector.Attachments?.[0]?.url ?? null;
    },
  },
}
</script>

<style lang="scss" scoped>
@import "/styles/variables";

.name {
  border: 1px solid black;
  border-radius: 20px;
  cursor: pointer;
  background: #eee;
  font-family: $support-font-family, sans-serif;
  font-size: 0.75em;
  text-transform: uppercase;
  padding: 1.25em 4.5em;
  position: relative;

  &::after {
    content: "›";
    font-size: 2em;
    line-height: 0;
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: rotate(90deg);
  }

  &.expanded {
    &::after {
      right: 1.5rem;
      transform: rotate(270deg);
    }
  }
}

img {
  cursor: pointer;
  max-width: 100%;
  max-height: 40vh;
}

.content {
  padding: 0 1.5em;
}
</style>
