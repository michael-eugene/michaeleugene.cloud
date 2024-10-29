<template>
  <section id="about" class="py-24">
    <h2 class="section-heading">
      <span class="text-green font-mono text-xl mr-2">01.</span> About Me
    </h2>
    <div class="grid md:grid-cols-3 gap-12">
      <div class="md:col-span-3 space-y-4">
        <p>
          Hello! I'm Michael, and I've been shaping the web for over 15 years.
          My journey in web development has been driven by a passion for
          creating beautiful, efficient, and user-friendly applications.
        </p>
        <p>
          Throughout my career, I've specialized in Vue.js and modern frontend
          technologies. I'm particularly enthusiastic about combining Vue.js
          with Tailwind CSS to create stunning, responsive interfaces that
          provide exceptional user experiences.
        </p>
        <p>Here are a few technologies I've been working with recently:</p>
        <ul class="grid grid-cols-2 gap-2 font-mono text-sm">
          <li
            v-for="tech in technologies"
            :key="tech"
            class="flex items-center"
          >
            <span class="text-green mr-2">▹</span> {{ tech }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const technologies = [
  "Vue.js",
  "Nuxt.js",
  "Tailwind CSS",
  "TypeScript",
  "Node.js",
  "Vite",
];
</script>
