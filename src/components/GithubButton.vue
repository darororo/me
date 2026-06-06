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
    class="py-2 px-4 bg-gray-600 rounded-lg flex items-center gap-1 text-white font-semibold"
  >
    <img
      src="/github.png" alt="Repository" width="32"
      loading="lazy"
      class="bg-white rounded-full"
    >
    <span>Github</span>
  </a>
</template>
