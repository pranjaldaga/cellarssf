<template>
  <div>
    <div class="relative h-screen overflow-hidden bg-white">
      <div class="h-full max-w-screen-xl mx-auto">
        <div
          class="relative z-10 h-full pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
        >
          <div class="px-4 pt-6 sm:px-6 lg:px-8">
            <nav
              class="relative flex items-center justify-between h-full sm:h-10 lg:justify-start"
            >
              <div
                class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
              >
                <div class="flex items-center justify-between w-full md:w-auto">
                  <nuxt-link to="/">
                    <img
                      class="w-auto h-8 sm:h-10"
                      src="~/assets/logo.svg"
                      alt="Cellar.NYC logo"
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
                <a
                  href="#"
                  class="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
                  >Product</a
                >
                <a
                  href="#"
                  class="ml-8 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
                  >Features</a
                >
                <a
                  href="#"
                  class="ml-8 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
                  >Marketplace</a
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
                  <div>
                    <img
                      class="w-auto h-8"
                      src="~/assets/logomark.svg"
                      alt=""
                    />
                  </div>
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
                  <a
                    href="#"
                    class="block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                    >Product</a
                  >
                  <a
                    href="#"
                    class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                    >Features</a
                  >
                  <a
                    href="#"
                    class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                    >Marketplace</a
                  >
                  <a
                    href="#"
                    class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                    >Company</a
                  >
                </div>
                <div>
                  <a
                    href="#"
                    class="block w-full px-5 py-3 font-medium text-center transition duration-150 ease-in-out text-contraption-primary-600 bg-gray-50 hover:bg-gray-100 hover:text-contraption-primary-700 focus:outline-none focus:bg-gray-100 focus:text-contraption-primary-700"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            class="h-full max-w-screen-xl px-4 mx-auto mt-10 sm:mt-12 sm:px-6 md:my-16 lg:my-8 lg:px-8"
          >
            <div
              class="h-full sm:text-center lg:text-left lg:flex lg:items-center"
            >
              <div>
                <h2
                  class="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
                >
                  Save NYC restaurants by
                  <br class="hidden sm:block" />
                  <span class="text-contraption-primary-600"
                    >buying their wine</span
                  >
                </h2>
                <p
                  class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                >
                  Your local restaurant has thousands of dollars of food and
                  beverage inventory sitting in their cellars. Help them stay
                  alive by buying it.
                </p>
                <div
                  class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                >
                  <div class="rounded-md shadow">
                    <a
                      href="#"
                      class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-contraption-primary-600 hover:bg-contraption-primary-500 focus:outline-none focus:shadow-outline md:py-4 md:text-lg md:px-10"
                    >
                      Find local cellars
                    </a>
                  </div>
                  <div class="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 transition duration-150 ease-in-out border border-transparent rounded-md text-contraption-primary-700 bg-contraption-primary-100 hover:text-contraption-primary-600 hover:bg-contraption-primary-50 focus:outline-none focus:shadow-outline focus:border-contraption-primary-300 md:py-4 md:text-lg md:px-10"
                    >
                      Submit a restaurant
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg
            class="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          class="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1570894324081-04e0365bec41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      open: false
    }
  }
}
</script>
<style></style>
