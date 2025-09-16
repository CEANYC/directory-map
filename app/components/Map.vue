<template>
  <div id="map" :class="{ map: true, hovered }"></div>
</template>

<script setup>
import { loadStoredFigmassets } from 'figmasset';
import mapboxgl from 'mapbox-gl';

import {
  INITIAL_CENTER,
  INITIAL_ZOOM,
  MAPBOX_ACCESS_TOKEN,
  MAPBOX_STYLE,
  MAXIMUM_EXTENT,
} from '@/constants';

const map = shallowRef(null);
const mapReady = ref(false);
const popup = shallowRef(null);
const flyToInProgress = ref(false);
const hovered = ref(false);
const assetsLoaded = ref(false);
const center = ref(INITIAL_CENTER);
const zoom = ref(INITIAL_ZOOM);

const dataStore = useDataStore();
const filtersStore = useFiltersStore();
const mapStore = useMapStore();
const layerPickerStore = useLayerPickerStore();
const popupStore = usePopupStore();

const { locationsGeoJson } = storeToRefs(dataStore);
const { highlightedFeatures, hoveredFeature } = storeToRefs(mapStore);
const { sectors: selectedSectors } = storeToRefs(filtersStore);
const { center: storeCenter, zoom: storeZoom } = storeToRefs(mapStore);
const { unselectedLayers, selectedLayerObjects: selectedLayers } =
  storeToRefs(layerPickerStore);
const { selectedFeatures } = storeToRefs(popupStore);

onMounted(() => {
  mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
  initializeMap();
});

const initializeMap = () => {
  map.value = new mapboxgl.Map({
    container: 'map',
    style: MAPBOX_STYLE,
    maxBounds: MAXIMUM_EXTENT,
    center: center.value,
    zoom: zoom.value,
    projection: 'naturalEarth',
  });

  popup.value = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false,
  });

  map.value.on('load', mapLoaded);
  map.value.on('click', ['locations'], handleClick);
  map.value.on('mousemove', ['locations'], handleMouseMove);
  map.value.on('mouseleave', ['locations'], handleMouseLeave);
  map.value.on('move', handleMove);
  map.value.on('moveend', handleMoveEnd);
};

const sectorFilter = computed(() => {
  // Since the Sector property is an array, loop over selected sectors to
  // make a series of conditions
  return [
    'any',
    ...selectedSectors.value.map((sector) => ['in', sector, ['get', 'Sector']]),
  ];
});

const locationsLayer = computed(() => {
  return {
    id: 'locations',
    source: 'locations-source',
    type: 'symbol',
    layout: {
      'icon-allow-overlap': true,
      'icon-image': ['concat', 'marker_', ['get', 'sectorSlug']],
      'icon-size': ['interpolate', ['linear'], ['zoom'], 12, 0.5, 16, 1.5],
    },
    filter: sectorFilter.value,
  };
});

const locationsSource = computed(() => {
  return {
    type: 'geojson',
    data: locationsGeoJson.value,
  };
});

const expectedImages = computed(() => {
  if (!locationsGeoJson.value) return [];
  return Array.from(
    new Set(
      locationsGeoJson.value.features.map(
        (f) => `marker_${f.properties.sectorSlug}`
      )
    )
  );
});

const mapLoaded = ({ target }) => {
  mapReady.value = true;
  map.value = target;
  map.value.jumpTo({
    center: storeCenter.value,
    zoom: storeZoom.value,
  });

  addLocationsSource();

  loadStoredFigmassets({ map: map.value, path: 'map-assets/assets@2x' });

  setTimeout(() => {
    const hasAllImages =
      expectedImages.value.filter((i) => !map.value.hasImage(i)) === 0;
    assetsLoaded.value = true;
  }, 200);
};

const addLocationsSource = () => {
  if (!map.value || !mapReady.value) return;
  const existingSource = map.value.getSource('locations-source');
  if (existingSource) {
    existingSource.setData(locationsGeoJson.value);
  } else {
    map.value.addSource('locations-source', locationsSource.value);
  }
};

const addLocationsLayer = () => {
  if (!assetsLoaded.value) return;
  if (!map.value.getSource('locations-source')) return;
  if (map.value.getLayer(locationsLayer.value.id)) return;
  map.value.addLayer(locationsLayer.value);
};

const handleClick = (e) => {
  selectedFeatures.value = map.value.queryRenderedFeatures(e.point, {
    layers: [locationsLayer.value.id],
  });
};

const handleMouseMove = (e) => {
  const feature = e.features[0];
  if (feature) {
    hoveredFeature.value = {
      layer: feature.layer.id,
      id: feature.id,
    };
  } else {
    hoveredFeature.value = {};
  }

  hovered.value = true;
};

const handleMouseLeave = () => {
  hoveredFeature.value = {};
  hovered.value = false;
};

const handleMove = () => {
  if (flyToInProgress.value) return;
  mapStore.setPosition({
    center: map.value.getCenter(),
    zoom: map.value.getZoom(),
  });
};

const handleMoveEnd = () => {
  flyToInProgress.value = false;
};

const moveToStorePosition = () => {
  if (!map.value || flyToInProgress.value) return;
  if (
    map.value.getCenter().lat === storeCenter.value.lat &&
    map.value.getCenter().lng === storeCenter.value.lng &&
    map.value.getZoom() === storeZoom.value
  )
    return;
  flyToInProgress.value = true;
  map.value.flyTo({
    center: storeCenter.value,
    zoom: storeZoom.value,
  });
};

const changeLayersVisibility = (layerIds, visibility) => {
  layerIds.forEach((layerId) => {
    map.value.setLayoutProperty(layerId, 'visibility', visibility);
  });
};

const hideUnselectedLayers = () => {
  unselectedLayers.value.forEach((layer) => {
    changeLayersVisibility(layer.layerIds, 'none');
  });
};

const showSelectedLayers = () => {
  selectedLayers.value.forEach((layer) => {
    changeLayersVisibility(layer.layerIds, 'visible');
  });
};

watch([map, mapReady, locationsSource], addLocationsSource);
watch([assetsLoaded, map, mapReady, locationsSource], addLocationsLayer);
watch(unselectedLayers, hideUnselectedLayers);
watch(selectedLayers, showSelectedLayers);
watch([storeCenter, storeZoom], moveToStorePosition);

watch(sectorFilter, () => {
  if (!map.value || !mapReady.value) return;
  map.value.setFilter(locationsLayer.value.id, sectorFilter.value);
});

watch(highlightedFeatures, (currentValue, previousValue) => {
  let layer = currentValue?.[0]?.layer;
  let ids = currentValue.map(({ id }) => id);
  let iconImageExpression;
  let symbolSortKeyExpression;

  if (layer && ids) {
    iconImageExpression = [
      'case',
      ['in', ['get', 'ID'], ['literal', ids]],
      ['concat', 'marker_', ['get', 'sectorSlug'], '_highlight'],
      ['concat', 'marker_', ['get', 'sectorSlug']],
    ];
    symbolSortKeyExpression = [
      'case',
      ['in', ['get', 'ID'], ['literal', ids]],
      1,
      0,
    ];
  } else {
    ({ layer } = previousValue?.[0] ?? {});
    iconImageExpression = ['concat', 'marker_', ['get', 'sectorSlug']];
    symbolSortKeyExpression = 0;
  }

  if (layer) {
    map.value.setLayoutProperty(layer, 'icon-image', iconImageExpression);
    map.value.setLayoutProperty(
      layer,
      'symbol-sort-key',
      symbolSortKeyExpression
    );
  }
});
</script>

<style>
.map,
.mapboxgl-map {
  height: 100%;
  width: 100%;
}

.map.hovered {
  cursor: pointer;
}
</style>
