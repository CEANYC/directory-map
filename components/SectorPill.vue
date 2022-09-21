<template>
  <div :class="{
    'sector-pill': true,
    [slug(sector)]: true,
    selected,
    interactive,
  }">
    {{sector}}
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
}
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
      background: #5BA8F7;
    }

    &.clts {
      background: #33B983;
    }

    &.csas {
      background: #CC34CD;
    }

    &.energy {
      background: #1077F3;
    }

    &.food {
      background: #7018D3;
    }

    &.gardens {
      background: #72B622;
    }

    &.housing {
      background: #F98517;
    }

    &.worker {
      background: #FDCC0D;
    }
  }

  &.interactive:hover {
    filter: brightness(90%);
  }
}
</style>
