<script setup lang="ts">
import gsap from 'gsap'
import { onMounted, useTemplateRef } from 'vue'

const path = useTemplateRef('pathRef')
onMounted(() => {
  gsap.fromTo(
    path.value,
    {
      drawSVG: '0%',
    },
    {
      drawSVG: '100%',
      duration: 3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: path.value,
        start: '-100px center',
      },
    },
  )
})
</script>

<template>
  <svg width="200%" height="113" viewBox="0 0 1440 113" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path ref="pathRef" d="M0 64.8715C91.8637 29.3585 311.88 43.0788 556.954 73.417C775.478 100.469 851.303 13.7375 1085.05 32.7465C1318.8 51.7555 1440 82.9964 1440 82.9964" stroke="#5396E8" stroke-width="60" />
  </svg>
</template>
