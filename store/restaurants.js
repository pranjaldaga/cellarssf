export const state = () => {
  return {
    restaurants: null
  }
}

export const mutations = {
  SET_DATA: (state, { restaurants }) => {
    // Decode geocache, which contains google location data
    Object.keys(restaurants).forEach((k) => {
      const geocache = restaurants[k].fields.Geocache

      // Trim first two characters, which are an emoji traffic light and a space
      const encodedData = geocache.substring(2)
      // Turn Base64-encoded JSON into an object
      const geoData = JSON.parse(atob(encodedData))

      const geoOut = geoData.o

      restaurants[k].fields.geo = {
        ...geoOut,
        ...{
          loc: {
            lat: geoOut.lat,
            lng: geoOut.lng
          }
        }
      }
    })

    state.restaurants = restaurants
  }
}

export const actions = {
  // Once we have more than 100 restaurants - this will have to be rewritten for pagination
  // example: https://github.com/nuxt/hackernews/blob/master/store/index.js#L72

  async fetch({ commit }) {
    // Be sure to generate a "readonly" API key. In Airtable, this means creating a different user account!
    const token = 'keyyg08Q7f2DEw9Nq'

    const res = await this.$axios.$get(
      'https://api.airtable.com/v0/appSmPvDZxyPKf2ZS/Restaurants?maxRecords=100&view=Public',
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    commit('SET_DATA', { restaurants: res.records })
  }
}
