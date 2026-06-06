<script setup lang="ts">
import type { WorkContentProps } from '@/utils/interfaces.ts'
import { BriefcaseBusiness, Building2, Calendar } from '@lucide/vue'

import gsap from 'gsap'

import { onMounted, useTemplateRef } from 'vue'
import WorkCard from './WorkCard.vue'

const props = defineProps<WorkContentProps>()
const line = useTemplateRef('lineRef')
const img = useTemplateRef('imageRef')

onMounted(() => {
  // Line Animation
  gsap.fromTo(
    line.value,
    {
      scaleY: 0,
      duration: 0.8,
      ease: 'power2.out',
      transformOrigin: 'bottom center',
    },
    {
      scaleY: 1,
      transformOrigin: 'top center',
      scrollTrigger: {
        trigger: img.value,
        start: 'top 50%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    },
  )
})
const baseUrl = import.meta.env.BASE_URL
const placeImgUrl = `${baseUrl}${props?.placeImg?.src}`
</script>

<template>
  <div class="">
    <div class="flex flex-col gap-2">
      <h2 class="font-bold text-xl flex gap-1 items-center">
        <span><BriefcaseBusiness /></span> {{ props.position }}
      </h2>
      <p class="flex gap-1 items-center">
        <span><Building2 /></span> {{ props.place }}
      </p>
      <p class="flex gap-1 items-center">
        <span><Calendar /></span> {{ props.date }}
      </p>
    </div>
    <div class="flex gap-20 mt-4">
      <div class="relative flex flex-col items-center justify-start">
        <img
          ref="imageRef"
          loading="lazy"
          :src="placeImgUrl"
          :alt="props.placeImg?.alt"
          width="80"
          class="rounded-full"
        >
        <div
          ref="lineRef"
          class="absolute w-1 line-gradient rounded-sm top-20 bottom-0 left-1/2 -translate-x-1/2"
        />
      </div>

      <div class="flex flex-col gap-4">
        <WorkCard
          v-for="(card, i) in props.cards"
          :key="i"
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
