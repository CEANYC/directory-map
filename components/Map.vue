<template>
  <client-only>
    <MglMap
      :class="{ map: true, hovered }"
      @click="handleClick"
      @load="mapLoaded"
      @move="handleMove"
      @moveend="handleMoveEnd"
      :mapStyle="style"
      :accessToken="accessToken"
      :center="center"
      :maxBounds="maximumExtent"
      :zoom="zoom"
    >
      <MglGeojsonLayer
        v-if="assetsLoaded"
        sourceId="locations"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
        :source="locationsSource"
        :layer="locationsLayer"
        :layerId="locationsLayer.id"
      />
    </MglMap>
  </client-only>
</template>

<script>
import { loadStoredFigmassets } from "figmasset";
import {
  INITIAL_CENTER,
  INITIAL_ZOOM,
  MAPBOX_ACCESS_TOKEN,
  MAPBOX_STYLE,
  MAXIMUM_EXTENT,
} from "@/constants";

export default {
  data() {
    return {
      accessToken: MAPBOX_ACCESS_TOKEN,
      flyToInProgress: false,
      maximumExtent: MAXIMUM_EXTENT,
      style: MAPBOX_STYLE,
      hovered: false,

      assetsLoaded: false,
      center: INITIAL_CENTER,
      zoom: INITIAL_ZOOM,
    };
  },

  computed: {
    expectedImages() {
      return Array.from(new Set(
        this.locationsGeoJson.features
          .map(f => `marker_${f.properties.sectorSlug}`)
      ));
    },

    locationsLayer() {
      return {
        id: 'locations',
        type: 'symbol',
        layout: {
          'icon-allow-overlap': true,
          'icon-image': ['concat', 'marker_', ['get', 'sectorSlug']],
          'icon-size': [
            'interpolate', ['linear'], ['zoom'],
            12, 0.5,
            16, 1.5,
          ]
        },
        filter: this.sectorFilter,
      };
    },

    locationsSource() {
      return {
        data: this.locationsGeoJson,
      };
    },

    locationsGeoJson() {
      return this.$store.getters['data/locationsGeoJson'];
    },

    highlightedFeatures() {
      return this.$store.getters['map/highlightedFeatures'];
    },

    selectedSectors() {
      return this.$store.state.filters.sectors;
    },

    sectorFilter() {
      // Since the Sector property is an array, loop over selected sectors to
      // make a series of conditions
      return ["any",
        ...this.selectedSectors.map(sector => (
          [
            "in",
            sector,
            ["get", "Sector"]
          ]
        ))
      ];
    },

    storeCenter() {
      return this.$store.state.map.center;
    },

    storeZoom() {
      return this.$store.state.map.zoom;
    },

    unselectedLayers() {
      return this.$store.getters['layerPicker/unselectedLayers'];
    },

    selectedLayers() {
      return this.$store.getters['layerPicker/selectedLayers'];
    },
  },

  methods: {
    mapLoaded({ map }) {
      this.map = map;
      this.map.jumpTo({
        center: this.storeCenter,
        zoom: this.storeZoom
      });

      loadStoredFigmassets({ map, path: "map-assets/assets@2x" });

      setTimeout(() => {
        const hasAllImages = this.expectedImages.filter(i =>
          !this.map.hasImage(i));
        this.assetsLoaded = true;
      }, 200);

    },

    handleClick(e) {
      const selectedFeatures = this.map.queryRenderedFeatures(
        e.mapboxEvent.point, { layers: [this.locationsLayer.id] }
      );
      this.$store.dispatch("popup/setSelectedFeatures", { selectedFeatures });
    },

    handleMouseMove(e) {
      const feature = e.mapboxEvent.features[0];
      if (feature) {
        const layer = feature.layer.id;
        const id = feature.id;
        this.$store.dispatch("map/setHoveredFeature", { layer, id });
      } else {
        this.$store.dispatch("map/setHoveredFeature", {});
      }

      this.hovered = true;
    },

    handleMouseLeave() {
      this.$store.dispatch("map/setHoveredFeature", {});
      this.hovered = false;
    },

    handleMove() {
      if (this.flyToInProgress) return;
      const center = this.map.getCenter();
      const zoom = this.map.getZoom();
      this.$store.dispatch("map/setPosition", { center, zoom });
    },

    handleMoveEnd() {
      this.flyToInProgress = false;
    },

    moveToStorePosition() {
      if (!this.map || this.flyToInProgress) return;
      if (
        this.map.getCenter().lat === this.storeCenter.lat &&
        this.map.getCenter().lng === this.storeCenter.lng &&
        this.map.getZoom() === this.storeZoom
      ) return;
      this.flyToInProgress = true;
      this.map.flyTo({
        center: this.storeCenter,
        zoom: this.storeZoom,
      });
    },

    changeLayersVisibility(layerIds, visibility) {
      layerIds.forEach(layerId => {
        this.map.setLayoutProperty(layerId, 'visibility', visibility);
      });
    },

    hideUnselectedLayers() {
      this.unselectedLayers.forEach(layer => {
        this.changeLayersVisibility(layer.layerIds, 'none');
      });
    },

    showSelectedLayers() {
      this.selectedLayers.forEach(layer => {
        this.changeLayersVisibility(layer.layerIds, 'visible');
      });
    },
  },

  watch: {
    unselectedLayers() {
      this.hideUnselectedLayers();
    },

    selectedLayers() {
      this.showSelectedLayers();
    },

    sectorFilter() {
      if (this.map) {
        this.map.setFilter(this.locationsLayer.id, this.sectorFilter);
      }
    },

    highlightedFeatures(currentValue, previousValue) {
      let layer = currentValue?.[0]?.layer;
      let ids = currentValue.map(({ id }) => id);
      let iconImageExpression;
      let symbolSortKeyExpression;

      if (layer && ids) {
        iconImageExpression = [
          "case",
          ["in", ['get', 'ID'], ["literal", ids]],
          ['concat', 'marker_', ['get', 'sectorSlug'], '_highlight'],
          ['concat', 'marker_', ['get', 'sectorSlug']],
        ];
        symbolSortKeyExpression = [
          "case",
          ["in", ['get', 'ID'], ["literal", ids]],
          1,
          0,
        ];
      } else {
        ({ layer } = previousValue?.[0] ?? {});
        iconImageExpression = ['concat', 'marker_', ['get', 'sectorSlug']];
        symbolSortKeyExpression = 0;
      }

      if (layer) {
        this.map.setLayoutProperty(layer, 'icon-image', iconImageExpression);
        this.map.setLayoutProperty(layer, 'symbol-sort-key',
          symbolSortKeyExpression);
      }
    },

    storeCenter() {
      this.moveToStorePosition();
    },

    storeZoom() {
      this.moveToStorePosition();
    },
  }
}
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
