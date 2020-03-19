import * as VueGoogleMaps from 'vue2-google-maps'
import Vue from 'vue'

Vue.use(VueGoogleMaps, {
  load: {
    // If you are forking this - be sure to change this!
    key: 'AIzaSyDD4F2frsjZEp_EmS4tcmTndD318fIf-QA',
    libraries: 'places'
  }
})
