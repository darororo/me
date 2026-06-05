<script setup lang="ts">
  import type { WorkContentProps } from '@/utils/interfaces.ts'

  import WorkCard from './WorkCard.vue'
  const props = defineProps<WorkContentProps>()
</script>
<template>
  <div class="">
    <div>
      <h2 class="font-bold text-xl">{{ props.position }}</h2>
      <p>{{ props.place }}</p>
      <p>{{ props.date }}</p>
    </div>
    <div class="flex gap-20 mt-4">
      <div class="relative flex flex-col items-center justify-start">
        <img
          loading="lazy"
          :src="props.placeImg?.src"
          :alt="props.placeImg?.alt"
          width="80"
          class="rounded-full"
        />
        <div
          class="absolute w-1 line-gradient rounded-sm top-20 bottom-0 left-1/2 -translate-x-1/2"
        ></div>
      </div>

      <div class="flex flex-col gap-4">
        <WorkCard
          v-for="card in props.cards"
          v-bind="card"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .line-gradient {
    background-image: linear-gradient(
      to top,
      rgba(255, 0, 0, 0),
      rgb(225, 115, 12)
    );
  }
</style>
