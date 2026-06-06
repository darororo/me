<script setup lang="ts">
import type { WorkCardProps } from '@/utils/interfaces'
import { useMediaQuery } from '@/composables/useMediaQuery.ts'

import gsap from 'gsap'
import { computed, onMounted, ref, useTemplateRef } from 'vue'
import GithubButton from './GithubButton.vue'

const props = defineProps<WorkCardProps>()

const card = useTemplateRef('cardRef')
const gallery = useTemplateRef('galleryRef')

const hoveredX = ref('0px')
const hoveredY = ref('0px')

function onMouseMove(e: MouseEvent) {
  const rect = card.value?.getBoundingClientRect()
  if (!rect)
    return
  hoveredX.value = `${e.clientX - rect.left}px`
  hoveredY.value = `${e.clientY - rect.top}px`
}

const isLargeScreen = useMediaQuery('(min-width: 1024px)')
onMounted(() => {
  if (!isLargeScreen) {
    return
  }
  // Card Animation
  gsap.fromTo(
    card.value,
    {
      backgroundColor: 'white',
    },
    {
      backgroundColor: '#e8efff',
      duration: '0.3',
      scrollTrigger: {
        trigger: card.value,
        start: 'top 60%',
        end: 'bottom 60%',
        toggleActions: 'play reverse play reverse',
      },
    },
  )

  // image animation
  gsap.fromTo(
    gallery.value,
    {
      opacity: 0,
      x: 1000,
    },
    {
      opacity: 1,
      x: 100,
      duration: '0.3',
      scrollTrigger: {
        trigger: card.value,
        start: 'top 60%',
        end: 'bottom 60%',
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

const imgSrc = `${baseUrl.value}${props.img?.src}`
</script>

<template>
  <div class="relative">
    <div
      ref="cardRef"
      class="card bg-white min-h-40 w-sm lg:w-2xl p-4 border rounded-lg hover:border-2
      hover:scale-102 transition-[scale] duration-200"
      @mousemove="onMouseMove"
    >
      <div class="p-2">
        <ul class="space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-sm lg:text-xl font-bold">
              {{ props.title }}
            </h3>
            <GithubButton
              v-if="props.repo?.src"
              :src="props.repo?.src"
            />
          </div>
          <div class="pl-4 text-sm lg:text-xl">
            <li v-for="item in props.items" :key="item" class="py-1">
              {{ item }}
            </li>
          </div>
        </ul>
      </div>

      <div class="text-sm lg:text-xl">
        Technologies:
        <span
          v-for="tech in props.technologies"
          :key="tech"
          class="py-0.5 lg:py-1 px-2 bg-green-700 text-white rounded-lg mx-1"
        >
          {{ tech }}
        </span>
      </div>
    </div>
    <div
      ref="galleryRef"
      class="hidden lg:block absolute w-sm  top-0 -right-1/2 "
    >
      <div class=" relative flex flex-col items-cente">
        <img
          v-if="props.img?.src"
          class="absolute rounded-lg "
          :src="imgSrc"
          :alt="props.img?.alt"
          loading="lazy"
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
  .card {
    position: relative;
    /* overflow: hidden; */
  }

  .card::before {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0;
    pointer-events: none;

    transition: opacity 0.15s;
    background: radial-gradient(
      200px circle at v-bind(hoveredX) v-bind(hoveredY),
      rgba(119, 240, 67, 0.12),
      transparent 90%
    );
  }

  .card:hover::before {
    opacity: 1;
  }

  .card li {
    position: relative;
    padding-left: 10px;
  }

  .card li::before {
    position: absolute;
    content: '';
    width: 6px;
    height: 6px;
    left: 0;
    top: 1rem;
    transform: translateY(-50%);
    background: gray;
    border-radius: 50%;
  }
</style>
