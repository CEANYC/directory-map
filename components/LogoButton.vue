<template>
  <div class="logo-button">
    <a target="_blank" :href="url">
      <img :src="logo" />
    </a>
  </div>
</template>

<script>
import logo from '../icons/ceanyc-logo-small.png';
import { CEANYC_URL } from '@/constants';

export default {
  data() {
    return {
      logo: null,
      url: null,
    };
  },

  mounted() {
    this.logo = logo;
    this.url = CEANYC_URL;
  },
}
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.logo-button {
  background: none;
  cursor: pointer;
  font-size: 3em;
  width: 1.1em;
  height: 1.1em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  padding: 0.25rem;
  position: absolute;
  z-index: 1000;
  bottom: 1rem;
  right: 1rem;
  border-radius: 10px;

  @media (max-width: $mobile-maximum) {
    top: unset;
    bottom: 4rem;
  }

  a {
    display: inline-block;
  }

  img {
    height: 100%;
    width: 100%;
  }
}
</style>
