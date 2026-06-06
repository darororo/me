<script setup lang="ts">
import type { WorkContentProps } from '@/utils/interfaces.ts'
import { BriefcaseBusiness, Building2, Calendar } from '@lucide/vue'


import gsap from 'gsap'
import { computed, onMounted, useTemplateRef } from 'vue'
import WorkCard from './WorkCard.vue'
import { useMediaQuery } from '@/composables/useMediaQuery.ts'

const props = defineProps<WorkContentProps>()
const line = useTemplateRef('lineRef')
const img = useTemplateRef('imageRef')
const isLargeScreen = useMediaQuery('(min-width: 1024px)')

onMounted(() => {
  // Line Animation
  if (!isLargeScreen) {
    return
  }
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
const baseUrl = computed(() => {
  const url = import.meta.env.BASE_URL
  if (url === '/') {
    return ''
  }

  return url
})

const placeImgUrl = `${baseUrl.value}${props?.placeImg?.src}`
</script>

<template>
  <div class="">
    <div
      class="flex flex-row items-center justify-center lg:justify-start
     lg:items-start lg:flex-row gap-24 lg:gap-2"
    >
      <div class="">
        <h2 class="font-bold text-lg lg:text-xl flex gap-1 items-center text-nowrap">
          <span><BriefcaseBusiness /></span> {{ props.position }}
        </h2>
        <p class="flex gap-1 items-center">
          <span><Building2 /></span> {{ props.place }}
        </p>
        <p class="flex gap-1 items-center">
          <span><Calendar /></span> {{ props.date }}
        </p>
      </div>
      <div class="">
        <img
          :src="`${baseUrl}${props.placeImg?.src}`"
          :alt="props.placeImg?.alt"
          class=" lg:hidden rounded-full w-24"
        >
      </div>
    </div>
    <div class="flex justify-center lg:justify-start gap-20 mt-4">
      <div class="hidden lg:flex relative  flex-col items-center justify-start">
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

      <div class="flex flex-col gap-4 justify-center items-center">
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
