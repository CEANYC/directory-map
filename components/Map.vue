<template>
  <client-only>
    <MglMap
      class="map"
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
        sourceId="locations"
        :source="locationsSource"
        :layer="locationsLayer"
        :layerId="locationsLayer.id"
      />
    </MglMap>
  </client-only>
</template>

<script>
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
      center: INITIAL_CENTER,
      maximumExtent: MAXIMUM_EXTENT,
      style: MAPBOX_STYLE,
      zoom: INITIAL_ZOOM,
    };
  },

  computed: {
    locationsLayer() {
      return {
        id: 'locations',
        type: 'circle',
        paint: {
          'circle-radius': 3
        },
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

    selectedSectors() {
      return this.$store.state.filters.sectors;
    },

    storeCenter() {
      return this.$store.state.map.center;
    },

    storeZoom() {
      return this.$store.state.map.zoom;
    },
  },

  methods: {
    mapLoaded({ map }) {
      this.map = map;
      this.map.jumpTo({
        center: this.center,
        zoom: this.zoom
      });
    },

    handleClick(e) {
      const selectedFeatures = this.map.queryRenderedFeatures(
        e.mapboxEvent.point, { layers: [this.locationsLayer.id] }
      );
      this.$store.dispatch("popup/setSelectedFeatures", { selectedFeatures });
    },

    handleMove() {
      if (this.flyToInProgress) return;
      this.$store.dispatch("map/setPosition", {
        center: this.map.getCenter(),
        zoom: this.map.getZoom(),
      });
    },

    handleMoveEnd() {
      this.flyToInProgress = false;
    },

    moveToStorePosition() {
      if (this.flyToInProgress) return;
      this.flyToInProgress = true;
      this.map.flyTo({
        center: this.storeCenter,
        zoom: this.storeZoom,
      });
    }
  },

  watch: {
    selectedSectors() {
      // Since the Sector property is an array, loop over selected sectors to
      // make a series of conditions
      this.map.setFilter(this.locationsLayer.id, ["any",
        ...this.selectedSectors.map(sector => (
          [
            "in",
            sector,
            ["get", "Sector"]
          ]
        ))
      ]);
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
</style>
