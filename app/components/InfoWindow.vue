<template>
  <Overlay @close="close">
    <h2>About</h2>
    <TextBlock type="About" />
    <SectorSection
      v-for="sector in sectors"
      :key="sector.Name"
      :sector="sector"
    />
    <TextBlock type="Contributors" />
    <div class="download-section">
      <div class="header">Download the data</div>
      <div>
        We're happy to provide access to the data here for your research.
        Please cite CEANYC's Seeding Solidarity map when you use the data.
      </div>
      <div>
        <DownloadButton />
      </div>
    </div>
    <a href="https://gocoopnyc.org/" target="_blank">
      <img class="ceanyc-logo" src="~/assets/ceanyc-logo.png" />
    </a>
  </Overlay>
</template>

<script setup>
const contentStore = useContentStore();
const infoStore = useInfoStore();

const { sectors } = storeToRefs(contentStore);

const close = () => infoStore.setHidden();
</script>

<style lang="scss" scoped>
h2 {
  padding-left: 0.5em;
  margin-bottom: 0;
}

.ceanyc-logo {
  max-width: 250px;
}

.download-section {
  font-size: 0.8em;
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  .header {
    font-weight: bold;
  }
}
</style>
