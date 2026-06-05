<script setup lang="ts">
  import WorkContent from './components/WorkContent.vue'
  import WorkSection from './components/WorkSection.vue'
  import type { WorkContentProps } from './utils/interfaces.ts'
</script>

<template>
  <div class="mx-20 my-8">
    <h1 class="font-bold text-3xl">Yem Daro</h1>
    <h2>Fullstack Developer</h2>

    <div class="flex h-max relative mt-10">
      <section id="experiences">
        <h3 class="text-2xl font-bold mb-8">Experiences</h3>
        <WorkSection />
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
