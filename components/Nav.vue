<template>
  <div>
    <nav class="fixed w-full px-6 lg:px-36 2xl:px-48 py-6 backdrop-blur-md z-40 top-0">
      <div class="flex justify-between items-center">
        <div class="text-green font-mono">ME</div>
        <div class="hidden md:flex items-center space-x-8">
          <a
            v-for="(item, index) in navItems"
            :key="item.text"
            :href="item.href"
            class="nav-link group text-lightest-slate hover:text-green transition-colors"
          >
            <span class="font-mono text-green mr-1">0{{ index + 1 }}.</span>
            {{ item.text }}
          </a>
          <a
            href="#"
            class="border border-green text-green px-4 py-2 rounded text-sm hover:bg-green/10 transition-colors"
          >
            Resume
          </a>
        </div>
        <button class="md:hidden" @click="isMenuOpen = !isMenuOpen">
          <Bars3Icon class="h-6 w-6 text-green" />
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <Transition name="fade">
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 w-screen h-screen bg-navy flex items-center justify-center md:hidden"
        style="z-index: 999; min-height: -webkit-fill-available;"
      >
        <div class="flex flex-col items-center space-y-8">
          <a
            v-for="(item, index) in navItems"
            :key="item.text"
            :href="item.href"
            class="text-lightest-slate hover:text-green transition-colors text-lg"
            @click="isMenuOpen = false"
          >
            <span class="font-mono text-green block text-sm mb-1 text-center">
              0{{ index + 1 }}.
            </span>
            {{ item.text }}
          </a>
          <a
            href="#"
            class="border border-green text-green px-6 py-3 rounded text-lg hover:bg-green/10 transition-colors"
            @click="isMenuOpen = false"
          >
            Resume
          </a>
        </div>
        <button 
          class="absolute top-6 right-6" 
          @click="isMenuOpen = false"
          aria-label="Close menu"
        >
          <XMarkIcon class="h-6 w-6 text-green" />
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const isMenuOpen = ref(false);

// Add watcher to toggle body scroll
watch(isMenuOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});

const navItems = [
  { text: "About", href: "#about" },
  { text: "Experience", href: "#experience" },
  { text: "Work", href: "#work" },
  { text: "Contact", href: "#contact" },
];
</script>

<style scoped>
:root {
  height: 100vh;
  height: -webkit-fill-available;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
