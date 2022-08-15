<template>
  <div :class="{
    'sector-pill': true,
    [slug(sector)]: true,
    selected
  }">
    {{sector}}
  </div>
</template>

<script>
export default {
  props: {
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
  background: gray;
  border-radius: 10px;
  color: white;
  cursor: default;
  display: inline;
  font-family: sans-serif;
  padding: 0.1rem 1rem;
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
}
</style>
