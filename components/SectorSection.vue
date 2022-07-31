<template>
  <section class="sector">
    <h3 :class="{ name: true, expanded }" @click="toggle">{{name}}</h3>
    <div class="content" v-if="expanded">
      <div>{{details}}</div>
      <img v-if="imgUrl" :src="imgUrl" />
    </div>
  </section>
</template>

<script>
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
    toggle() {
      this.expanded = !this.expanded;
    },
  },

  computed: {
    name() {
      return this.sector.Name;
    },

    details() {
      return this.sector.Notes;
    },

    imgUrl() {
      return this.sector.Attachments?.[0]?.url ?? null;
    },
  },
}
</script>

<style lang="scss" scoped>
.name {
  border: 1px solid black;
  border-radius: 20px;
  cursor: pointer;
  background: #eee;
  padding: 0.5em 2em;
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
  max-width: 100%;
}

.content {
  padding: 0 1.5em;
}
</style>
