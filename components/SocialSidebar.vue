<template>
  <div class="fixed bottom-0 left-8 hidden lg:block">
    <div
      class="flex flex-col items-center space-y-6 after:content-[''] after:w-px after:h-24 after:bg-slate"
    >
      <a
        v-for="social in socials"
        :key="social.name"
        :href="social.url"
        target="_blank"
        rel="noopener noreferrer"
        class="text-slate hover:text-green hover:-translate-y-1 transition-all"
      >
        <component :is="social.icon" class="h-5 w-5" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { CodeBracketIcon } from "@heroicons/vue/24/outline";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/michael-eugene",
    icon: CodeBracketIcon,
  },
];
</script>
