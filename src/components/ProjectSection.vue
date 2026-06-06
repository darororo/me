<script setup lang="ts">
import gsap from 'gsap'
import { onMounted, useTemplateRef } from 'vue'
import ProjectAbaScanner from './ProjectAbaScanner.vue'
import ProjectAutomata from './ProjectAutomata.vue'
import ProjectFightyC from './ProjectFightyC.vue'
import Wave1 from './svgs/Wave1.vue'
import Wave2 from './svgs/Wave2.vue'

const container = useTemplateRef('containerRef')
const aba = useTemplateRef('abaRef')
const automata = useTemplateRef('automataRef')
const game = useTemplateRef('gameRef')

onMounted(() => {
  // Aba Scanner Background
  gsap.fromTo(
    aba.value,
    {
      backgroundColor: '#f46d43',
      clipPath: 'inset(0 0 0 100%)', // hidden — left edge flush with right
    },
    {
      clipPath: 'inset(0 0 0 0%)', // fully revealed
      duration: 0.8,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: container.value,
        start: 'top 80%',
      },
    },
  )
  // Automata background
  gsap.fromTo(
    automata.value,
    {
      backgroundColor: '#fee08b',
      clipPath: 'inset(0 100% 0 0)', // hidden — right edge flush with left
    },
    {
      clipPath: 'inset(0 0% 0 0)', // fully revealed
      duration: 0.8,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: automata.value,
        start: 'top center',
      },
    },
  )

  // Fighty C Background
  gsap.fromTo(
    game.value,
    {
      backgroundColor: '#abdda4',
      clipPath: 'inset(0 0 0 100%)', // hidden — left edge flush with right
    },
    {
      clipPath: 'inset(0 0 0 0%)', // fully revealed
      duration: 0.8,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: game.value,
        start: 'top 80%',
      },
    },
  )
})
</script>

<template>
  <div ref="containerRef" class="relative">
    <div class="flex items-center justify-center relative">
      <Wave1 class="absolute top-0 -left-10 -z-10" />
      <Wave2 class="absolute top-10  -left-10 -z-5" />
      <h3 class="text-4xl font-bold mb-8 px-20 py-4 bg-lime-500 text-white rounded-lg">
        Fun Projects
      </h3>

      <img
        src="/lightning.gif" alt=""
        class="absolute translate-x-full -translate-y-16"
      >
    </div>
    <div>
      <div
        ref="abaRef"
        class="absolute w-full h-220 -z-10"
      />
      <ProjectAbaScanner />
    </div>
    <div>
      <div ref="automataRef" class="absolute w-full h-220 -z-10" />
      <ProjectAutomata />
    </div>
    <div>
      <div ref="gameRef" class="absolute w-full h-220 " />
      <ProjectFightyC class="" />
    </div>
  </div>
</template>
