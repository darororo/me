<script setup lang="ts">
import { useHead } from '@unhead/vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { onMounted, useTemplateRef } from 'vue'
import ProfileSection from './components/ProfileSection.vue'
import ProjectSection from './components/ProjectSection.vue'
import WorkSection from './components/WorkSection.vue'

gsap.registerPlugin(ScrollTrigger)

const paracat = useTemplateRef('paracatRef')
const calloutSectionRef = useTemplateRef('stopSectionRef')

useHead({
  title: 'Daro - Portfolio',
})

onMounted(() => {
  gsap.to(paracat.value, {
    scrollTrigger: {
      trigger: paracat.value,
      endTrigger: calloutSectionRef.value,
      start: 'top top',
      end: 'top center',
      pin: true,
    },
  })
})
</script>

<template>
  <div class="relative overflow-hidden">
    <div ref="paracatRef" class="absolute z-20 top-0 right-0 rotate-y-180">
      <img src="/cat-skydive.gif" alt="">
    </div>
    <div>
      <ProfileSection />
    </div>

    <div class="flex flex-col h-max relative mt-10">
      <section id="experiences">
        <div class="flex items-center justify-center">
          <h3 class="text-4xl font-bold mb-8 px-20 bg-green-700 text-white py-4 rounded-lg">
            Experiences
          </h3>
        </div>
        <WorkSection class="px-20" />
      </section>

      <section
        id="projects"
        ref="stopSectionRef"
        class="mt-20 "
      >
        <ProjectSection />
      </section>
    </div>
  </div>
</template>

<style scoped>
  nav ul {
    font-size: 2rem;
  }
  nav li {
    font-size: 1.5rem;
    color: green;
  }
</style>
