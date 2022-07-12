<template>
  <main>
    <Map />
  </main>
</template>

<script>
export default {
  name: 'IndexPage',

  mounted() {
    this.$store.dispatch('data/loadLocations');
  }
}
</script>

<style>
body {
  margin: 0;
}

main {
  display: flex;
  height: 100vh;
  width: 100vw;
}
</style>
