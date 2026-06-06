<script setup lang="ts">
import { LaptopMinimal } from '@lucide/vue'
import GithubButton from './GithubButton.vue'
</script>

<template>
  <div>
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
            <GithubButton
              src="https://github.com/darororo/aba-invoice-ocr"
            />

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
