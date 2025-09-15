<template>
  <div
    :class="{
      'sector-pill': true,
      [slug(sector)]: true,
      selected,
      interactive,
    }"
  >
    {{ sector }}
  </div>
</template>

<script>
export default {
  props: {
    interactive: {
      type: Boolean,
      default: false,
    },
    sector: String,
    selected: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    slug(sector) {
      return sector.toLowerCase().replaceAll(' ', '-');
    },
  },
};
</script>

<style lang="scss">
.sector-pill {
  background: #bcbcbc;
  border-radius: 1rem;
  color: white;
  cursor: default;
  display: inline;
  font-weight: bold;
  font-size: 0.75em;
  padding: 0.25rem 1.5rem;
  text-transform: uppercase;

  &.selected {
    &.credit-unions {
      background: #5ba8f7;
    }

    &.clts {
      background: #33b983;
    }

    &.csas {
      background: #cc34cd;
    }

    &.energy {
      background: #1077f3;
    }

    &.food {
      background: #7018d3;
    }

    &.gardens {
      background: #72b622;
    }

    &.housing {
      background: #f98517;
    }

    &.worker {
      background: #fdcc0d;
    }

    &.community-fridges {
      background: #4e1094;
    }

    &.mesh-nyc-nodes {
      background: #094084;
    }
  }

  &.interactive:hover {
    filter: brightness(90%);
  }
}
</style>
