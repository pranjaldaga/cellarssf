<template>
  <div>
    <h2
      class="block mx-0 text-2xl font-bold leading-10 tracking-tight text-gray-900 lg:text-4xl sm:leading-none"
    >
      Submit a restaurant
    </h2>
    <p
      class="mt-5 text-base text-gray-500 md:mt-8 sm:mt-10 lg:mt-14 sm:text-lg sm:max-w-xl md:text-xl lg:mx-0"
    >
      This site is built as a
      <nuxt-link to="/about">free public service </nuxt-link> to locally-owned
      NYC restaurants that are legally selling to-go alcohol alongside food.
      Call or text us at <a href="tel:718-550-3498">718-550-3498</a> for help!
    </p>
    <div class="mt-8 text-white sm:mt-10 md:mt-14 lg:mt-20">
      <div class="rounded-md">
        <a
          href="https://airtable.com/shrTpAOzZl3XcZ03d"
          target="_BLANK"
          class="px-8 py-3 text-base font-medium leading-6 text-center text-white border border-transparent rounded-md bg-contraption-primary-600 hover:bg-contraption-primary-500 focus:outline-none focus:shadow-outline md:py-4 md:text-lg md:px-10"
        >
          Fill out form
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'submit'
}
</script>

<style scoped>
p > a {
  @apply text-contraption-primary-600;
}
</style>
