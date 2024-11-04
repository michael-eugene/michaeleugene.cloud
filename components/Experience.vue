<template>
  <section id="experience" class="py-24">
    <h2 class="section-heading">
      <span class="text-green font-mono text-xl mr-2">02.</span> Where I've
      Worked
    </h2>
    <div class="flex flex-col md:flex-row gap-12">
      <div class="md:w-32">
        <div
          class="flex md:flex-col border-l-2 md:border-l-0 md:border-l-transparent border-lightest-navy"
        >
          <button
            v-for="(job, index) in jobs"
            :key="job.company"
            @click="activeTab = index"
            :class="[
              'px-5 py-3 font-mono text-sm text-left hover:text-green hover:bg-light-navy transition-all',
              activeTab === index
                ? 'text-green border-l-2 md:border-l-0 md:border-l-green border-green bg-light-navy'
                : '',
            ]"
          >
            {{ job.company }}
          </button>
        </div>
      </div>
      <div class="md:w-2/3">
        <TransitionGroup name="fade" mode="out-in">
          <div
            v-for="(job, index) in jobs"
            :key="job.company"
            v-show="activeTab === index"
          >
            <h3 class="text-xl text-lightest-slate mb-1">
              {{ job.title }}
              <span class="text-green">@ {{ job.company }}</span>
            </h3>
            <p class="font-mono text-sm mb-4">{{ job.period }}</p>
            <div class="mb-4">
              <!-- <img
                v-if="job.image"
                :src="job.image"
                alt="Project Image"
                class="w-full h-auto rounded-md shadow-md"
              /> -->
            </div>
            <ul class="space-y-4">
              <li v-for="point in job.points" :key="point" class="flex">
                <span class="text-green mr-2">▹</span>
                {{ point }}
              </li>
            </ul>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref(0);

const jobs = [
  // {
  //   company: "Republic Digitals",
  //   title: "Founder & CEO",
  //   period: "2023 - Present",
  //   image: "assets/img/michael-v1.png", // Add the path to your image here
  //   points: [
  //     "Lead development of large-scale Vue.js applications with focus on performance and scalability",
  //     "Architected and implemented complex frontend solutions using Vue.js, Nuxt, and Tailwind CSS",
  //     "Mentored junior developers and established best practices for Vue.js development",
  //     "Implemented modern CI/CD pipelines and testing strategies",
  //   ],
  // },
  // {
  //   company: "Eclipse Energy & Consulting",
  //   title: "Senior Vue.js Engineer",
  //   period: "2019 - Present",
  //   image: "path/to/eclipse-energy-image.jpg", // Add the path to your image here
  //   points: [
  //     "Lead development of large-scale Vue.js applications with focus on performance and scalability",
  //     "Architected and implemented complex frontend solutions using Vue.js, Nuxt, and Tailwind CSS",
  //     "Mentored junior developers and established best practices for Vue.js development",
  //     "Implemented modern CI/CD pipelines and testing strategies",
  //   ],
  // },
  {
    company: "Google Developer Student Club",
    title: "Fullstack Developer",
    period: "2016 - 2019",
    image: "path/to/google-dsc-image.jpg", // Add the path to your image here
    points: [
      "Developed and maintained multiple web applications for enterprise clients",
      "Implemented responsive designs and optimized applications for maximum performance",
      "Collaborated with UX teams to create intuitive user interfaces",
      "Integrated REST APIs and implemented real-time features using WebSocket",
    ],
  },
];
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

img {
  max-width: 100%; /* Ensure images are responsive */
  height: auto; /* Maintain aspect ratio */
}
</style>
