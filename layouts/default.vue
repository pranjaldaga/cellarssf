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
          src="https://images.unsplash.com/photo-1563472023321-6c8f4afff469?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1933&q=80"
          alt="Empty restaurant"
        />
      </div>
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
