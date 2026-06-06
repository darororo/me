<script setup lang="ts">
import { Code, LaptopMinimal } from '@lucide/vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { onMounted, useTemplateRef } from 'vue'
import GithubButton from './GithubButton.vue'

const container = useTemplateRef('containerRef')
const cow = useTemplateRef('cowRef')
const flame = useTemplateRef('flameRef')
const blast = useTemplateRef('blastRef')

onMounted(() => {
  const tl = gsap.timeline({ repeat: -1 })

  tl.fromTo(blast.value, { opacity: 0 }, { opacity: 1, x: 400, duration: 0.5 },
  )
    .to(blast.value, { opacity: 0, duration: 0.3 }) // fade out blast
    .fromTo(flame.value, { opacity: 0 }, { opacity: 1 },
    )
})
</script>

<template>
  <div
    ref="containerRef"
  >
    <div class="flex gap-40 justify-center p-8  rounded-lg">
      <div class="relative">
        <div>
          <div class="p-8 border-2 rounded-lg bg-white relative">
            <h2 class="text-3xl font-bold mb-4">
              Fighty-C
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

          <div class="mt-6 relative flex justify-end">
            <GithubButton
              src="https://github.com/darororo/FXGL-Fighting-Game"
            />

            <img
              src="/cat-shake.gif" width="100" alt=""
              class="absolute top-6 -translate-y-1/2 -translate-x-24"
            >
          </div>
          <div class="relative">
            <div ref="cowRef" class="absolute w-sm -bottom-4">
              <img
                loading="lazy"
                class=" absolute  "
                src="/fighty-c/boss.png"
                alt="Boss"
              >
              <img
                ref="flameRef"
                loading="lazy"
                class=".flame absolute translate-x-full left-12 -top-5"
                src="/fighty-c/flame.gif"
                alt="Flame"
              >

              <img
                ref="blastRef"
                loading="lazy"
                class=".flame absolute translate-x-full left-20 top-0 w-16"
                src="/fighty-c/blast.png"
                alt="Flame"
              >
            </div>
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
