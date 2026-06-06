<script setup lang="ts">
defineProps<{
  url?: string
  imgSrc?: string
  alt?: string
}>()
</script>

<template>
  <a
    :href="url"
    target="_noblank"
    rel="noopener noreferrer"
  >
    <img
      :src="imgSrc" :alt="alt" width="40"
      loading="lazy"
      class="rounded-lg"
      :class="$attrs.class"
    >
  </a>
</template>
