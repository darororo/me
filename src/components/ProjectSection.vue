<script setup lang="ts">
import gsap from 'gsap'
import { onMounted, useTemplateRef } from 'vue'
import ProjectAutomata from './ProjectAutomata.vue'
import ProjectFightyC from './ProjectFightyC.vue'

const container = useTemplateRef('containerRef')
const automata = useTemplateRef('automataRef')
const game = useTemplateRef('gameRef')
onMounted(() => {
  // Automata background
  gsap.fromTo(
    automata.value,
    {
      backgroundColor: 'oklch(72.3% 0.219 149.579)',
      clipPath: 'inset(0 100% 0 0)', // hidden — right edge flush with left
    },
    {
      clipPath: 'inset(0 0% 0 0)', // fully revealed
      duration: 0.8,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: container.value,
        start: 'top center',
      },
    },
  )

  // Fighty C Background
  gsap.fromTo(
    game.value,
    {
      backgroundColor: 'oklch(83.7% 0.128 66.29)',
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
  <div ref="containerRef" class="">
    <div>
      <h3 class="text-4xl font-bold mb-8 px-20">
        Fun Projects
      </h3>
    </div>
    <div>
      <div ref="automataRef" class="absolute w-full h-160 " />
      <ProjectAutomata />
    </div>
    <div>
      <div ref="gameRef" class="absolute w-full h-160 " />
      <ProjectFightyC class="" />
    </div>
  </div>
</template>
