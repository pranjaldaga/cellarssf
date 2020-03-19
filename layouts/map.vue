<template>
  <div>
    <div class="relative h-screen overflow-hidden bg-white">
      <div class="h-full max-w-screen-xl mx-auto">
        <div
          class="relative z-10 h-full pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
        >
          <navbar />

          <div
            class="max-w-screen-xl px-4 mx-auto mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
          >
            <div class="h-full text-left">
              <div>
                <nuxt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>
