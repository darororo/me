<script setup lang="ts">
import { Code, LaptopMinimal } from '@lucide/vue'
</script>

<template>
  <div>
    <div class="flex gap-40 justify-center p-8  rounded-lg">
      <div class="relative">
        <img loading="lazy" src="/automata/web.png" width="600" alt="" class="rounded-2xl">
      </div>

      <div class="">
        <div class="p-8 border-2 rounded-lg bg-white relative">
          <h2 class="text-3xl font-bold mb-4">
            Automaton Simulator
          </h2>
          <ul class="text-2xl space-y-2">
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

          <div class="text-xl flex gap-1 items-center py-2">
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

        <div class="mt-6 relative">
          <a
            href="https://darororo.github.io/fortnite-automaton/"
            target="_blank" rel="noopener noreferrer"
            class="bg-sky-600 hover:bg-sky-800 p-4 text-xl text-white rounded-xl "
          >
            Demo
          </a>

          <img
            src="/cat-shake.gif" width="100" alt=""
            class="absolute -translate-y-1/2 translate-x-24"
          >
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
