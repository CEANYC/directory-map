<template>
  <section class="sector">
    <h3 :class="{ name: true, expanded }" @click="toggle">{{ name }}</h3>
    <div class="content" v-if="expanded">
      <div v-html="detailsHtml" />

      <section class="voices">
        <h4>Voices of {{ name }}</h4>
        <img
          class="voices-image"
          v-if="imageUrl"
          :src="imageUrl"
          @click="handleSelectImage"
        />
        <div v-if="voices.name">{{ voices.name }}</div>
        <div v-if="voices.org || voices.role">
          <span v-if="voices.role">
            {{ voices.role }}<span v-if="voices.org">,</span>
          </span>
          <span v-if="voices.org">{{ voices.org }}</span>
        </div>
        <div class="voices-question" v-if="voices.question">
          {{ voices.question }}
        </div>
        <div v-if="voices.quote">{{ voices.quote }}</div>
      </section>
    </div>
  </section>
</template>

<script setup>
import showdown from 'showdown';

const expanded = ref(false);

const props = defineProps({
  sector: Object,
});

const { sector } = toRefs(props);

const imageModalStore = useImageModalStore();

const handleSelectImage = () => {
  imageModalStore.openImage(imageUrl);
};

const toggle = () => {
  expanded.value = !expanded.value;
};

const markdownConverter = new showdown.Converter();

const name = computed(() => sector.value.Name);
const details = computed(() => sector.value.Notes);

const detailsHtml = computed(() => {
  return markdownConverter.makeHtml(details.value);
});

const imageUrl = computed(() => {
  return sector.value.Attachments?.[0]?.url ?? null;
});

const voices = computed(() => {
  return Object.fromEntries(
    Object.entries(sector.value)
      .filter(([key]) => key.startsWith('Voices_'))
      .map(([key, value]) => {
        if (typeof value === 'string') value = value.trim();
        return [key.replace('Voices_', ''), value];
      })
  );
});
</script>

<style lang="scss" scoped>
@use '../../styles/variables.scss' as *;

h3,
h4 {
  font-family: $support-font-family, sans-serif;
  font-size: 0.9em;
  text-transform: uppercase;
}

section.sector {
  font-size: 0.8em;
}

.name {
  border: 1px solid black;
  border-radius: 20px;
  cursor: pointer;
  background: #eee;
  padding: 1.25em 4.5em;
  position: relative;

  &::after {
    content: '›';
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
  cursor: pointer;
  max-width: 100%;
  max-height: 40vh;
}

.content {
  padding: 0 1.5em;
}

section.voices {
  margin: 2rem 0;
}

.voices-image {
  margin-bottom: 1rem;
}

.voices-question {
  font-style: italic;
  margin-top: 1rem;
}
</style>
