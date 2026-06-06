<script setup lang="ts">
defineProps<{
  src: string

}>()
</script>

<template>
  <a
    target="_blank"
    rel="noopener noreferrer"
    :href="src"
    class="py-1 lg:py-2 px-2 lg:px-4 bg-gray-600 rounded-lg flex items-center gap-1 text-white font-semibold
    text-xs lg:text-xl"
  >
    <img
      src="/github.png" alt="Repository"
      loading="lazy"
      class="bg-white rounded-full w-6 lg:w-8"
    >
    <span>Github</span>
  </a>
</template>
