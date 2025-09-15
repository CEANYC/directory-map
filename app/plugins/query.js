function QueryPlugin({ store }) {
  const queryStore = useQueryStore();
  const router = useRouter();

  store.$subscribe((mutation) => {
    router.replace({
      query: queryStore.params,
    });
  })
}

export default defineNuxtPlugin(({ $pinia }) => {
  $pinia.use(QueryPlugin)
})
