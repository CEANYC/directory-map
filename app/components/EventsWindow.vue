<template>
  <Overlay @close="close">
    <h2>Events</h2>
    <div class="inner">
      <div class="filters">
        <div class="filters-column">
          <div class="category-picker">
            Category
            <select v-model="filterCategory">
              <option value="">Pick a category</option>
              <option v-for="category in categories" :value="category"
                      :key="category">
                {{ category }}
              </option>
            </select>
          </div>
          <div class="date-picker">
            Date
            <div class="date-picker date-picker-start">
              <input type="date" v-model="filterDateStart" />
            </div>
            -
            <div class="date-picker date-picker-end">
              <input type="date" v-model="filterDateEnd" />
            </div>
          </div>
          <div class="map-visible-picker">
            <label>Only visible on map
              <input type="checkbox" v-model="filterMapVisible" />
            </label>
          </div>
        </div>
      </div>
      <ol class="events-list">
        <li v-for="event in filteredEvents" class="events-item">
          <h3>{{ event.title }}</h3>
          <div class="row">
            <div class="col-left">
              <div class="date">
                {{ getMonth(event.startDate) }}
                {{ getDay(event.startDate) }}
              </div>
              <div class="time">
                {{ getTime(event.startTime) }} to {{ getTime(event.endTime) }}
              </div>
            </div>
            <div class="col-right">
              <div class="description"
                v-html="markdownConverter.makeHtml(event.description)"
              />
              <div class="row address">
                <div class="field-label">
                  Where:
                </div>
                {{ event.streetAddress }}, {{ event.borough }}
              </div>
              <div class="row details">
                <div class="field-label">
                  Details:
                </div>
                {{ event.rsvp ? 'RSVP required' : 'no RSVP' }} /
                {{ event.free ? 'free' : 'not free' }} /
                {{ event.public ? 'open to the public' : 'not open to the public' }}
              </div>
              <div v-if="event.downloaded" class="image">
                <img :src="`data/events/${event.downloaded}`" />
              </div>
              <div class="more-links" v-if="event.link1 || event.link2">
                <div class="field-label">Learn more:</div>
                <span v-if="event.link1">
                  <a :href="event.link1">{{ shortenLink(event.link1) }}</a>
                  <span v-if="event.link2"> | </span>
                </span>
                <span v-if="event.link2">
                  <a :href="event.link2">{{ shortenLink(event.link2) }}</a>
                </span>
              </div>
              <div class="categories">
                <ul>
                  <li v-for="category in event.categories" :key="category">{{ category }}</li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ol>
    </div>
  </Overlay>
</template>

<script setup>
import showdown from 'showdown';
import * as d3 from 'd3';

const dataStore = useDataStore();
const eventsStore = useEventsStore();
const mapStore = useMapStore();

const close = () => eventsStore.setHidden();

const { events } = storeToRefs(dataStore);
const { currentBbox } = storeToRefs(mapStore);
const {
  filterCategory,
  filterDateStart,
  filterDateEnd,
  filterMapVisible,
} = storeToRefs(eventsStore);

const categories = computed(() => {
  return Array.from(new Set(
    events.value.flatMap(e => e.categories)
  )).filter(v => v !== '').sort();
});

const getTime = (timeString) => {
  const date = d3.timeParse('%I:%M:%S %p')(timeString);
  let result = d3.timeFormat('%I%p')(date).toLowerCase();
  if (result.startsWith('0')) result = result.slice(1);
  return result;
};

const getMonth = (dateString) => {
  return d3.timeFormat('%B')(new Date(dateString));
};

const getDay = (dateString) => {
  return d3.timeFormat('%d')(new Date(dateString));
};

const markdownConverter = new showdown.Converter({ simpleLineBreaks: true });

const shortenLink = (link) => {
  return link.split('://')[1].split('/')[0].replace('www.', '');
};

const filteredEvents = computed(() => {
  let filtered = [...events.value];

  if (filterCategory.value) {
    filtered = filtered.filter(e =>
      e.categories.includes(filterCategory.value));
  }

  if (filterDateStart.value) {
    console.log(filterDateStart.value);
    filtered = filtered.filter(e => +e.startDate >= +(new
      Date(filterDateStart.value)));
  }

  if (filterDateEnd.value) {
    filtered = filtered.filter(e => +e.startDate <= +(new
      Date(filterDateEnd.value)));
  }

  if (filterMapVisible.value) {
    filtered = filtered.filter(e => {
      const [lat, lng] = e.lnglat;
      console.log(lng, lat, currentBbox.value);
      return (
        lng >= currentBbox.value[0][0] &&
        lng <= currentBbox.value[1][0] &&
        lat >= currentBbox.value[0][1] &&
        lat <= currentBbox.value[1][1]
      );
    });
  }

  return filtered;
});
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 0;
}

.events-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.events-item {
  padding-bottom: 2rem;
  border-bottom: 1px solid black;
}

.events-item:last-of-type {
  border-bottom: none;
}

h3 {
  font-size: 1rem;
  font-weight: 600;
}

.date {
  background: black;
  color: white;
  padding: 0.25rem;
  font-weight: bold;
}

.row {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.filters-column {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 2rem;
  font-size: 0.8rem;
}

.col-left {
  flex: 1;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
}

.col-right {
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.field-label {
  font-weight: bold;
}

.col-right .row {
  gap: 0.5rem;
}

.address,
.details {
  font-size: 0.9em;
}

a {
  color: black;
}

.image img {
  max-width: 90%;
}

.description :global(p:first-of-type) {
  margin-top: 0;
}

.date-picker {
  display: flex;
  gap: 0.5rem;
}

.more-links {
  display: flex;
  gap: 0.5rem;
}

.categories ul {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 1rem;
}

.categories li {
  background: #777;
  color: white;
  padding: 0.25rem 0.5rem;
  font-size: 0.7rem;
}
</style>
