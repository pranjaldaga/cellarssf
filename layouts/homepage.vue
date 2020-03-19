<template>
  <div>
    <div class="relative h-screen overflow-hidden bg-white">
      <div class="h-full max-w-screen-xl mx-auto">
        <div
          class="relative z-10 h-full pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
        >
          <navbar />

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
                    <nuxt-link
                      to="/map"
                      class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-contraption-primary-600 hover:bg-contraption-primary-500 focus:outline-none focus:shadow-outline md:py-4 md:text-lg md:px-10"
                    >
                      Find local cellars
                    </nuxt-link>
                  </div>
                  <div class="mt-3 sm:mt-0 sm:ml-3">
                    <nuxt-link
                      to="/submit"
                      class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 transition duration-150 ease-in-out border border-transparent rounded-md text-contraption-primary-700 bg-contraption-primary-100 hover:text-contraption-primary-600 hover:bg-contraption-primary-50 focus:outline-none focus:shadow-outline focus:border-contraption-primary-300 md:py-4 md:text-lg md:px-10"
                    >
                      Submit a restaurant
                    </nuxt-link>
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
          alt="Restaurant cellar"
        />
      </div>
    </div>

    <div>
      <nuxt />
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'

export default {
  components: { Navbar }
}
</script>

<style></style>
