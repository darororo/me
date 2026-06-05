<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import ProjectSection from './components/ProjectSection.vue'
import WorkSection from './components/WorkSection.vue'

gsap.registerPlugin(ScrollTrigger)
</script>

<template>
  <div class="my-8">
    <div class="my-40">
      <h1 class="font-bold text-4xl">
        Yem Daro
      </h1>
      <h2 class="text-3xl">
        Fullstack Developer
      </h2>
    </div>

    <div class="flex flex-col h-max relative mt-10">
      <section id="experiences">
        <h3 class="text-4xl font-bold mb-8 px-20">
          Experiences
        </h3>
        <WorkSection class="px-20" />
      </section>

      <section
        id="projects"
        class="my-20 "
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
