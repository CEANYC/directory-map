export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      airtableApiKey: nuxtApp.$config.public.airtableApiKey,
    },
  };
});
