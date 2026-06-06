<script setup lang="ts">
import { Code, LaptopMinimal } from '@lucide/vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { onMounted, useTemplateRef } from 'vue'

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
              ABA Invoice OCR
            </h2>
            <ul class="text-2xl space-y-2">
              <li class="flex gap-2">
                <span>🤖</span>
                <span>Convert ABA invoice to CSV</span>
              </li>
              <li class="flex gap-2">
                <span>⚡️</span>
                <span>Customizable script to convert images in bulk</span>
              </li>
            </ul>

            <div class="text-xl flex gap-1 items-center py-2">
              <span><LaptopMinimal /></span>
              Technologies:
              <span
                v-for="tech in ['Python', 'Tesseract OCR']"
                :key="tech"
                class="py-1 px-2 bg-green-700 text-white rounded-lg mx-1"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <div class="mt-6 relative flex justify-end">
            <a
              href="https://github.com/darororo/aba-invoice-ocr"
              target="_blank" rel="noopener noreferrer"
              class="bg-gray-500 hover:bg-sky-800 p-4 text-2xl text-white rounded-2xl "
            >
              Github
            </a>

            <img
              src="/cat-shake.gif" width="100" alt=""
              class="absolute top-6 -translate-y-1/2 -translate-x-24"
            >
          </div>
        </div>
      </div>

      <div class="relative">
        <img loading="lazy" src="/aba-scanner.png" alt="aba scanner" class="rounded-2xl">
      </div>
    </div>
  </div>
</template>

<style scoped>
  .slanted {
    background: linear-gradient(135deg, transparent 50%, #3b82f6 50%);
  }
</style>
