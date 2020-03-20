<template>
  <div class="w-full h-full">
    <GmapMap
      :center="{ lat: 40.7128, lng: -74.006 }"
      :zoom="12"
      style="width: 100%; height: 100%; min-height: 400px;"
      :options="{ MapTypeControlOptions: ['ROADMAP'] }"
    >
      <GmapMarker
        v-for="r in restaurants"
        :key="r.id"
        :position="r.fields.geo.loc"
        :clickable="true"
        :title="r.fields.Name"
        @click="
          infoOpen = r.id
          infoPos = r.fields.geo.loc
        "
      />

      <GmapInfoWindow
        v-for="r in restaurants"
        :key="'window' + r.id"
        :title="r.fields.Name"
        :position="infoPos"
        :opened="infoOpen === r.id"
        :options="infoOptions(r)"
        @closeclick="
          infoOpen = null
          infoPos = null
        "
      >
        <div class="p-2 font-sans text-sm text-gray-700">
          <h1 class="text-base font-bold text-gray-900">{{ r.fields.Name }}</h1>
          <p class="pt-2">{{ r.fields.Description }}</p>
          <p class="pt-2 ">
            <i>
              Available: Food<span
                v-for="f in features"
                v-show="r.fields[f]"
                :key="f"
                >, {{ f }}</span
              >.
            </i>
          </p>

          <p v-if="r.fields.Phone" class="pt-2">
            Questions? Call
            <a
              class="text-contraption-primary-300"
              :href="`tel:${r.fields.Phone}`"
              >{{ r.fields.Phone }}</a
            >
          </p>
          <p class="pt-2 font-bold">
            <a
              v-if="r.fields.Link"
              class="text-base text-contraption-primary-500"
              :href="r.fields.Link"
            >
              View and order →
            </a>
          </p>
        </div></GmapInfoWindow
      >
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
      infoPos: null,
      features: ['Wine', 'Beer', 'Cocktails', 'Meal kits', 'Delivery']
    }
  },
  computed: {
    ...mapState('restaurants', ['restaurants'])
  },
  methods: {
    infoOptions(r) {
      return {
        maxWidth: 300,
        pixelOffset: {
          width: 0,
          height: -35
        }
      }
    }
  }
}
</script>

<style>
.vue-map {
  width: 100%;
  height: 100%;
  min-height: 400px;
}
</style>
