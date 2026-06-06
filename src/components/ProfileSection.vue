<script setup lang="ts">
import ContactButton from './ContactButton.vue'

const baseUrl = import.meta.env.BASE_URL
</script>

<template>
  <div class="py-20 profile-gradient text-black relative">
    <div class="text-center">
      <h1 class="font-bold text-4xl">
        Yem Daro
      </h1>
      <h2 class="text-3xl">
        Fullstack Developer
      </h2>
    </div>
    <div class="flex items-center justify-center gap-4 mt-4">
      <ContactButton
        url="https://github.com/darororo"
        :img-src="`${baseUrl}/github.png`"
        alt="github"
      />
      <ContactButton
        url="https://t.me/daroyem"
        :img-src="`${baseUrl}/telegram.webp`"
        alt="telegram"
      />
      <ContactButton
        url="mailto:daroyem99@gmail.com"
        :img-src="`${baseUrl}/gmail.svg`"
        alt="gmail"
        class="bg-white"
      />
      <ContactButton
        url="https://www.linkedin.com/in/daro-yem-723b66229/"
        :img-src="`${baseUrl}/linkedin.webp`"
        alt="linkedin"
      />
    </div>
  </div>
</template>

<style scoped>
  .profile-gradient {
    background: linear-gradient(to bottom,
    #f6fed4 0%,
    #f6fed4 90%,
     transparent 100%);
  }
</style>
