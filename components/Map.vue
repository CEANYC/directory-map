<template>
  <client-only>
    <MglMap
      class="map"
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
    locations() {
      return this.$store.state.data.locations;
    },

    locationsLayer() {
      return {
        id: 'locations',
        type: 'circle',
        paint: {
          'circle-radius': 3
        }
      };
    },

    locationsSource() {
      return {
        data: this.locationsGeoJson,
      };
    },

    locationsGeoJson() {
      return {
        type: "FeatureCollection",
        features: this.locations.map(location => ({
          type: "Feature",
          properties: { ...location },
          geometry: {
            type: "Point",
            coordinates: [
              location.lon,
              location.lat
            ]
          }
        }))
      };
    }
  },

  methods: {
    mapLoaded({ map }) {
      this.map = map;
      this.map.jumpTo({
        center: this.center,
        zoom: this.zoom
      });
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
