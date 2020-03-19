<template>
  <div class="w-full h-full">
    <GmapMap
      :center="{ lat: 40.7128, lng: -74.006 }"
      :zoom="11"
      style="width: 100%; height: 100%; min-height: 400px;"
    >
      <GmapMarker
        v-for="r in restaurants"
        :key="r.id"
        :position="r.fields.geo.loc"
        :clickable="true"
        :label="r.fields.Title"
        :visible="true"
        @click="
          infoWinOpen = r.id
          infoWinPos = r.fields.geo.loc
        "
      >
        {{ r.fields.Description }}
      </GmapMarker>

      <GmapInfoWindow
        v-for="r in restaurants"
        :key="r.id"
        :clickable="true"
        :draggable="true"
        :title="r.fields['NAME']"
        :position="infoWinPos"
        :opened="infoWinOpen === r.id"
        @closeclick="
          infoWinOpen = null
          infoWinPos = null
        "
      >
        {{ r.fields.Description }}
      </GmapInfoWindow>
    </GmapMap>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'map',
  async fetch({ error, store }) {
    try {
      await store.dispatch('restaurants/fetch')
    } catch (e) {
      error({
        statusCode: 429,
        message: e
      })
    }
  },
  data() {
    return {
      infoOpen: null,
      infoWinPos: null
    }
  },
  computed: {
    ...mapState('restaurants', ['restaurants'])
  },
  methods: {
    infoOptions(r) {
      return {
        pixelOffset: {
          width: 0,
          height: 35
        }
      }
    }
  }
}
</script>
