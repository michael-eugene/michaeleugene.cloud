<template>
  <section id="about" class="py-24">
    <h2 class="section-heading">
      <span class="text-green font-mono text-xl mr-2">01.</span> About Me
    </h2>
    <div class="grid md:grid-cols-3 gap-12">
      <div class="md:col-span-3 space-y-4">
        <p>
          I love crafting dynamic, user-friendly applications. Let’s connect and
          build something amazing together!
        </p>
        <p>
          Throughout my career, I've specialized in Vue.js and modern frontend
          technologies. Lately, I've immersed myself in Test-Driven Development,
          and I’m excited to share my insights on how it enhances code quality
          and reliability. As an active member of the Google Developer Student
          Club at UNILAG, I thrive on collaboration and staying at the forefront
          of industry trends.
        </p>
        <p>Technologies I Use:</p>
        <ul class="grid md:grid-cols-2 gap-2 font-mono text-sm">
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
  "Vue.js: To create dynamic and responsive interfaces.",
  "Nuxt.js: This is also helpful because it speeds up server-side rendering.",
  "Tailwind CSS: This allows for beautiful designs that are highly customizable.",
  "TypeScript: Allows for the development of robust and maintainable code.",
  "Node.js & Vite: Provides solutions for backend and speeds up the build process.",
];
</script>
