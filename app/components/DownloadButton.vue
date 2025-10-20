<template>
  <button @click="handleDownload">Download data</button>
</template>

<script setup>
import * as d3 from 'd3';
import { Parser } from '@json2csv/plainjs';

const dataStore = useDataStore();
const { locations } = storeToRefs(dataStore);

const filename = computed(() => {
  const dateFormatter = d3.timeFormat('%Y%m%d');
  return `CEANYC_Seeding_Solidarity_Map_${dateFormatter(new Date())}`;
});

const fields = [
  'Sector',
  'Display Name',
  'Brief Description',
  'Address',
  'Website',
  'lat',
  'lon',
];

const handleDownload = () => {
  const opts = { fields };
  const parser = new Parser(opts);
  console.log(locations.value[0]);
  const csv = parser.parse(locations.value);

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${filename.value}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
</script>

<style lang="scss" scoped>
@use '../../styles/variables.scss' as *;
button {
  appearance: none;
  border: none;
  background: #eee;
  border-radius: 1rem;
  padding: 0.25rem 1.5rem;

  &:hover {
    background: #ccc;
  }
}
</style>
