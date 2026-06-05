<script setup lang="ts">
import type { WorkContentProps } from '@/utils/interfaces'

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
      },

      {
        title: 'Legal Chatbot',
        items: [
          'Built a ChatGPT-style interface with session-based conversations and local LLM integration through Ollama',
          'Deployed Ollama service for intregating with the prototype.',
        ],
        technologies: ['Vue', 'Ollama', 'Docker'],
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
      },
    ],
  },
]
</script>

<template>
  <div
    class="flex flex-col gap-4"
  >
    <WorkContent
      v-for="(work, i) in works"
      :key="i"
      v-bind="work"
    />
  </div>
</template>
