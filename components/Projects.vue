<template>
  <section id="work" class="py-24">
    <h2 class="section-heading">
      <span class="text-green font-mono text-xl mr-2">03.</span> Some Things
      I've Built
    </h2>
    <div class="space-y-24">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="project in projects" :key="project.title" class="relative">
          <a :href="project.link" target="_blank" rel="noopener noreferrer">
            <h3 class="text-2xl font-semibold text-lightest-slate mb-4">
              {{ project.title }}
            </h3>
            <div class="bg-light-navy rounded-lg mb-4 hover:shadow-lg">
              <img class="rounded-t-lg" :src="project.src" alt="rotam" />
              <p class="p-6 text-center">{{ project.description }}</p>
            </div>
            <ul class="flex flex-wrap gap-4 font-mono text-sm justify-center">
              <li v-for="tech in project.tech" :key="tech">{{ tech }}</li>
            </ul>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: "Rent.ng",
    description:
      "Simple and easy to use rental platform for renting out your properties.",
    tech: ["Vue.js", "Tailwind CSS", "TypeScript", "Nuxt", "Supabase"],
    link: "https://rentng.netlify.app",
    src: "https://res.cloudinary.com/df9i87ac8/image/upload/v1732826326/Screenshot_2024-11-28_153240_mra4vw.png",
  },
  {
    title: "Mormah Studios",
    description:
      "A modern design portolio solution built with Vue.js and Tailwind CSS, featuring mouse gradient effects, advanced filtering, and responsive design.",
    tech: ["Vue.js", "Tailwind CSS", "TypeScript", "Nuxt", "Supabase"],
    link: "https://mormahstudios.netlify.app",
    src: "https://i.ibb.co/QDzYH36/rotam.png",
  },
  {
    title: "Eclipse Energy & Consulting",
    description:
      "Developed with a responsive, mobile-first design, ensuring seamless user experience across all devices. Prioritizing both functionality and user experience.",
    tech: ["Vue.js", "Nuxt.js", "Tailwind CSS"],
    link: "https://eclipseenergy.netlify.app",
    src: "https://i.ibb.co/P5dc36K/eclipse.png",
  },
];
</script>
