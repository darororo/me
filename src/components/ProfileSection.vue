<script setup lang="ts">
import { computed, ref } from 'vue'
import ContactButton from './ContactButton.vue'

const baseUrl = computed(() => {
  const url = import.meta.env.BASE_URL
  if (url === '/') {
    return ''
  }
  return url
})

const buttons = ref([
  {
    url: 'https://github.com/darororo',
    imgSrc: `${baseUrl.value}/github.png`,
    alt: 'github',

  },
  {
    url: 'https://t.me/daroyem',
    imgSrc: `${baseUrl.value}/telegram.webp`,
    alt: 'telegram',

  },
  {
    url: 'mailto:daroyem99@gmail.com',
    imgSrc: `${baseUrl.value}/gmail.svg`,
    alt: 'gmail',
    class: 'bg-white',
  },
  {
    url: 'https://www.linkedin.com/in/daro-yem-723b66229/',
    imgSrc: `${baseUrl.value}/linkedin.webp`,
    alt: 'linkedin',

  },
])
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
        v-for="(btn,) in buttons"
        :key="btn.url"
        :url="btn.url "
        :img-src="btn.imgSrc"
        :alt="btn.alt"
        :class="btn.class"
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
