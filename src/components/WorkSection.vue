<script setup lang="ts">
import type { WorkContentProps } from '@/utils/interfaces'

import gsap from 'gsap'
import { onMounted } from 'vue'
import WorkContent from './WorkContent.vue'

const works: WorkContentProps[] = [
  {
    position: 'Fullstack Developer Intern',
    place: 'FinTech Center of FSA',
    placeImg: {
      src: '/fintech-center.png',
      alt: 'FinTech Center',
    },
    date: 'Feb 2026 - June 2026',
    cards: [
      {
        title: 'AI Portal',
        items: [
          'Built a dynamic public-facing web portal with VueJs, which includes Landing, Organization, AI Ecosystem and Product pages.',
          'Developed an internal CMS using Laravel and Filament for managing portal content and organizational data',
          'Integrated the CMS with internal SSO service.',
          'Dockerized and Deployed the application to staging environment.',
        ],
        technologies: ['Vue', 'Laravel', 'InertiaJs', 'Docker'],
        img: {
          src: '/ai-portal/landing.png',
          alt: 'AI Portal',
        },
      },

      {
        title: 'Legal Chatbot',
        items: [
          'Built a ChatGPT-style interface with session-based conversations and local LLM integration through Ollama',
          'Deployed Ollama service for intregating with the prototype.',
        ],
        technologies: ['Vue', 'Ollama', 'Docker'],
        img: {
          src: '/chatbot/landing.png',
          alt: 'Chatbot',
        },
      },
    ],
  },

  {
    position: 'Fullstack Developer Intern',
    place: 'Codera Freelance Club',
    placeImg: {
      src: '/codera.jpg',
      alt: 'Codera',
    },
    date: 'Feb 2026 - June 2026',
    cards: [
      {
        title: 'Sala Portal (Comissioned)',
        items: [
          'Developed a mobile application that includes a dynamic classroom schedule screen, user profile screen and helped develop real-time messaging feature.',
          'Managed task allocation, and communicated updates directly with clients',
        ],
        technologies: ['Flutter', 'Dart'],
        img: {
          src: '/sala-portal.png',
          alt: 'Sala Portal',
        },
      },

      {
        title: 'Student Management System (Comissioned)',
        items: [
          'Built migration services and validation tooling to transfer legacy LMS records while reducing migration inconsistencies',
          'Ensured data consistency and created validation tools to reduce migration errors.',
        ],
        technologies: ['Typescript'],
      },

      {
        title: 'Online Shop Assistant',
        items: [
          'Built REST APIs for sending text messages, images, and videos to multiple Telegram group chats',
          'Developed a NestJS backend service to integrate the LLM service and Telegram Bot API using Telegraf to deliver AI-driven customer support.',
          'Implemented prompt injection guard using Meta Guardrail and regex check',
        ],
        technologies: ['NestJS', 'Telegraf', 'Github Actions'],
        repo: {
          src: 'https://github.com/darororo/shoppio-online',
        },
      },
    ],
  },
]

onMounted(() => {
  const splatters: HTMLImageElement[] = gsap.utils.toArray('.splatter')

  splatters.forEach((splatter) => {
    gsap.fromTo((splatter), {
      opacity: 0,
    }, {
      opacity: 1,
      scrollTrigger: {
        trigger: splatter,
        start: 'top center',
      },
    })
  })
})
</script>

<template>
  <div
    class="flex flex-col gap-4 relative"
  >
    <div class="relative">
      <!-- Splatter 1: Right side, top -->
      <img
        src="/splatters/splatter-1.png"
        alt=""
        width="200"
        class="splatter absolute -z-10"
        style="right: -160px; top: 0;"
        loading="lazy"
      >

      <!-- Splatter 2: Left side, shifted down -->
      <img
        src="/splatters/splatter-2.png"
        alt=""
        width="200"
        class="splatter absolute -z-10"
        style="left: -160px; top: 400px;"
        loading="lazy"
      >

      <!-- Splatter 3: Right side, shifted further down -->
      <img
        src="/splatters/splatter-3.png"
        alt=""
        width="200"
        class="splatter absolute -z-10"
        style="right: -160px; top: 800px;"
        loading="lazy"
      >

      <!-- Splatter 4: Left side, shifted even further down -->
      <img
        src="/splatters/splatter-4.png"
        alt=""
        width="200"
        class="splatter absolute -z-10"
        style="left: -160px; top: 1600px;"
        loading="lazy"
      >
    </div>
    <WorkContent
      v-for="(work, i) in works"
      :key="i"
      v-bind="work"
    />
  </div>
</template>
