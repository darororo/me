<script setup lang="ts">
import { Code, LaptopMinimal } from '@lucide/vue'
</script>

<template>
  <div>
    <div
      class="flex flex-col lg:flex-row lg:gap-40 justify-center p-8  rounded-lg
    items-center lg:items-start"
    >
      <div class="hidden lg:block relative">
        <img loading="lazy" src="/automata/web.png" width="600" alt="" class="rounded-2xl">
      </div>

      <div class="">
        <div class="p-8 border-2 rounded-lg bg-white relative">
          <h2 class="text-xl lg:text-3xl font-bold mb-4">
            Automaton Simulator
          </h2>
          <ul class="text-md lg:text-2xl space-y-2">
            <li class="flex gap-2">
              <span>🕸️</span>
              <span>Web UI to create your Automata</span>
            </li>
            <li class="flex gap-2">
              <span>🤔</span>
              <span>Determine if your Automata is Deterministic or Non-Deterministic</span>
            </li>
            <li class="flex gap-2">
              <span>✏️</span>
              <span>Test words against your automata</span>
            </li>
          </ul>

          <div class="text-md lg:text-xl flex gap-1 items-center py-2">
            <span><LaptopMinimal /></span>
            Technologies:
            <span
              v-for="tech in ['Javascript']"
              :key="tech"
              class="py-1 px-2 bg-green-700 text-white rounded-lg mx-1"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <div class="mt-6 relative flex justify-end lg:justify-start">
          <a
            href="https://darororo.github.io/fortnite-automaton/"
            target="_blank" rel="noopener noreferrer"
            class="bg-sky-600 hover:bg-sky-800 p-4 text-xl text-white rounded-xl
            hidden lg:inline"
          >
            Demo
          </a>

          <img
            src="/cat-shake.gif" width="100" alt=""
            class="absolute -translate-y-1/2 -translate-x-24 lg:translate-x-24"
          >
          <!-- Mobile -->
          <a
            href="https://darororo.github.io/fortnite-automaton/"
            target="_blank" rel="noopener noreferrer"
            class="bg-sky-600 hover:bg-sky-800 py-2 px-4 lg:p-4 text-md lg:text-xl text-white rounded-xl
            lg:hidden"
          >
            Demo
          </a>
        </div>
        <!-- Mobile -->
        <div class="lg:hidden relative">
          <img loading="lazy" src="/automata/web.png" width="600" alt="" class="rounded-2xl">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .slanted {
    background: linear-gradient(135deg, transparent 50%, #3b82f6 50%);
  }
</style>
