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
  <svg width="200%" height="114" viewBox="0 0 1440 114" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path ref="pathRef" d="M0 70.5661C91.8637 34.4597 312.208 37.146 556.954 70.5661C802.752 104.13 866.175 3.62297 1085.05 29.2161C1303.93 54.8092 1440 88.9938 1440 88.9938" stroke="#3E7BC4" stroke-width="50" />
  </svg>
</template>
