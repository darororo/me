<script setup lang="ts">
import { Code, LaptopMinimal } from '@lucide/vue'
</script>

<template>
  <div>
    <div class="flex gap-40 justify-center p-8  rounded-lg">
      <div>
        <div class="p-8 border-2 rounded-lg bg-white relative">
          <h2 class="text-3xl font-bold mb-4">
            Automaton Simulator
          </h2>
          <ul class="text-2xl space-y-2">
            <li class="flex gap-2">
              <span>🎮</span>
              <span>KOF clone for OOP class</span>
            </li>
            <li class="flex gap-2">
              <span>🐄</span>
              <span>Added <b>COW</b> as a boss that made the whole class <b>laughed</b> :D</span>
            </li>
          </ul>

          <div class="text-xl flex gap-1 items-center py-2">
            <span><LaptopMinimal /></span>
            Technologies:
            <span
              v-for="tech in ['Java', 'FXGL']"
              :key="tech"
              class="py-1 px-2 bg-green-700 text-white rounded-lg mx-1"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
      <div class="relative">
        <img loading="lazy" src="/fighty-c/game.png" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>
  .slanted {
    background: linear-gradient(135deg, transparent 50%, #3b82f6 50%);
  }
</style>
