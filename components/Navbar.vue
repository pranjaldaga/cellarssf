<template>
  <div>
    <div class="px-4 pt-6 sm:px-6 lg:px-8">
      <nav
        class="relative flex items-center justify-between h-full sm:h-10 lg:justify-start"
      >
        <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div class="flex items-center justify-between w-full md:w-auto">
            <nuxt-link to="/">
              <img
                class="w-auto h-8 sm:h-10"
                src="~/assets/logo.svg"
                alt="Cellars.NYC logo"
              />
            </nuxt-link>
            <div class="flex items-center -mr-2 md:hidden">
              <button
                type="button"
                class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                @click="open = true"
              >
                <svg
                  class="w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="hidden md:block md:ml-10 md:pr-4">
          <nuxt-link
            v-for="(v, k, i) in menu"
            :key="i"
            :to="v"
            class="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
            :class="{ 'ml-8': i > 0 }"
            >{{ k }}</nuxt-link
          >
        </div>
      </nav>
    </div>

    <div
      v-show="open"
      class="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
    >
      <div class="rounded-lg shadow-md">
        <div class="overflow-hidden bg-white rounded-lg shadow-xs">
          <div class="flex items-center justify-between px-5 pt-4">
            <nuxt-link to="/">
              <img
                class="w-auto h-8"
                src="~/assets/logomark.svg"
                alt="Cellars.NYC Logomark"
              />
            </nuxt-link>
            <div class="-mr-2">
              <button
                type="button"
                class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                @click="open = false"
              >
                <svg
                  class="w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="px-2 pt-2 pb-3">
            <nuxt-link
              v-for="(v, k, i) in menu"
              :key="i"
              :to="v"
              class="block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
              >{{ k }}</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      menu: {
        'View map': '/map',
        'Submit restaurant': '/submit',
        About: '/about'
      }
    }
  }
}
</script>
