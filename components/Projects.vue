<template>
  <section id="work" class="py-24">
    <h2 class="section-heading">
      <span class="text-green font-mono text-xl mr-2">03.</span> Some Things
      I've Built
    </h2>
    <div class="space-y-24">
      <div v-for="project in projects" :key="project.title" class="relative">
        <div class="relative md:grid md:grid-cols-12 gap-4 items-center">
          <!-- <div class="relative md:col-span-7 md:order-last">
            <a :href="project.link" target="_blank" rel="noopener noreferrer">
              <div class="relative rounded overflow-hidden bg-light-navy p-6">
                <h4 class="text-xl font-semibold text-lightest-slate mb-4">
                  {{ project.title }}
                </h4>
                <p class="text-light-slate">{{ project.description }}</p>
              </div>
            </a>
          </div> -->
          <div class="relative md:col-span-6 md:col-start-1 md:row-start-1">
            <p class="font-mono text-green mb-2">Featured</p>
            <h3 class="text-2xl font-semibold text-lightest-slate mb-4">
              <a
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-green"
              >
                {{ project.title }}
              </a>
            </h3>
            <div class="bg-light-navy p-6 rounded-lg mb-4">
              <p>{{ project.description }}</p>
            </div>
            <ul class="flex flex-wrap gap-4 font-mono text-sm">
              <li v-for="tech in project.tech" :key="tech">{{ tech }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: "Mormah Studios",
    description:
      "A modern design portolio solution built with Vue.js and Tailwind CSS, featuring mouse gradient effects, advanced filtering, and responsive design.",
    tech: ["Vue.js", "Tailwind CSS", "TypeScript", "Nuxt", "Firebase"],
    link: "https://mormahstudios.netlify.app",
  },
  {
    title: "Eclipse Energy & Consulting",
    description:
      "Modern e-commerce solution with Vue.js, featuring dynamic product filtering, cart management, and seamless checkout process.",
    tech: ["Vue.js", "Nuxt.js", "Tailwind CSS", "Stripe API"],
    link: "https://eclipseenergy.netlify.app",
  },
];
</script>
