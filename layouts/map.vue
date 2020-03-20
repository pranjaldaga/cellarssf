<template>
  <div class="flex flex-col h-screen overflow-hidden bg-white">
    <div class="w-full shadow ">
      <div class="w-full h-full max-w-screen-xl mx-auto">
        <div class="z-10 block h-full bg-white">
          <navbar class="pb-6" />
        </div>
      </div>
    </div>

    <div class="flex flex-col flex-grow w-full">
      <nuxt />
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
