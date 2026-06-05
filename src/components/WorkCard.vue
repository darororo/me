<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'

  import type { WorkCardProps } from '@/utils/interfaces'

  const props = defineProps<WorkCardProps>()

  const card = useTemplateRef('cardRef')

  const hoveredX = ref('0px')
  const hoveredY = ref('0px')

  function onMouseMove(e) {
    const rect = card.value?.getBoundingClientRect()
    if (!rect) return
    hoveredX.value = `${e.clientX - rect.left}px`
    hoveredY.value = `${e.clientY - rect.top}px`
  }
</script>
<template>
  <div
    ref="cardRef"
    @mousemove="onMouseMove"
    class="card bg-white min-h-40 w-2xl p-4 border rounded-lg hover:border-2 hover:scale-102 transition-[scale] duration-200"
  >
    <div class="p-2">
      <ul class="">
        <h3 class="text-lg font-bold">{{ props.title }}</h3>
        <div class="pl-4">
          <li v-for="item in props.items">{{ item }}</li>
        </div>
      </ul>
    </div>

    <div>
      Technologies:
      <span
        class="p-1 bg-green-700 text-white rounded-lg mx-1"
        v-for="tech in props.technologies"
      >
        {{ tech }}
      </span>
    </div>
  </div>
</template>

<style scoped>
  .card {
    position: relative;
    overflow: hidden;
  }

  .card::before {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0;
    pointer-events: none;

    transition: opacity 0.15s;
    background: radial-gradient(
      200px circle at v-bind(hoveredX) v-bind(hoveredY),
      rgba(119, 240, 67, 0.12),
      transparent 90%
    );
  }

  .card:hover::before {
    opacity: 1;
  }

  .card li {
    position: relative;
    padding-left: 10px;
  }

  .card li::before {
    position: absolute;
    content: '';
    width: 6px;
    height: 6px;
    left: 0;
    top: 0.75rem;
    transform: translateY(-50%);
    background: gray;
    border-radius: 50%;
  }
</style>
