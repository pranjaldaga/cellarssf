<template>
  <div>
    <GmapMap
      :center="{ lat: 40.7128, lng: -74.006 }"
      :zoom="11"
      style="width: 100%; height: 500px"
    >
      <GmapMarker
        v-for="r in restaurants"
        :key="r.id"
        :position="r.fields.geo.loc"
        :clickable="true"
        :draggable="true"
      />
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
      fields: {
        BUY_LINK: 'Buy link',
        GEOCACHE: 'Geocache',
        SELLING_BEER: 'Selling Beer',
        PHONE: 'Phone',
        ADDRESS: 'Address',
        SELLING_COCKTAILS: 'Selling Cocktails',
        DESCRIPTION: 'Description',
        SELLING_WINE: 'Selling Wine',
        NAME: 'Name'
      }
    }
  },
  computed: {
    ...mapState('restaurants', ['restaurants'])
  },
  methods: {}
}
</script>
