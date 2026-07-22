<template>
  <Overlay @close="close">
    <h2>Events</h2>
    <div class="inner">
      <div class="filters">
        Filters (TODO)
        TODO update form
        <ul>
          <li>type</li>
          <li>dates</li>
          <li>free</li>
          <li>show on map</li>
          <li>filter by viewed location</li>
        </ul>
      </div>
      <ol class="events-list">
        <li v-for="event in events" class="events-item">
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
                Learn more:
                <span v-if="event.link1">
                  <a :href="event.link1">{{ shortenLink(event.link1) }}</a>
                  <span v-if="event.link2"> | </span>
                </span>
                <span v-if="event.link2">
                  <a :href="event.link2">{{ shortenLink(event.link2) }}</a>
                </span>
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

const close = () => eventsStore.setHidden();

const { events } = storeToRefs(dataStore);

const getTime = (timeString) => {
  const date = d3.timeParse('%I:%M %p')(timeString);
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
</script>

<style lang="scss" scoped>
h2 {
  padding-left: 0.5em;
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
</style>
