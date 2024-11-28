<template>
  <div class="min-h-screen">
    <MouseGradient />
    <Nav class="mb-2" />
    <main class="px-6 lg:px-36 2xl:px-48">
      <transition name="fade">
        <Hero />
      </transition>
      <transition name="fade">
        <About />
      </transition>
      <transition name="fade">
        <Experience />
      </transition>
      <transition name="fade">
        <Projects />
      </transition>
      <transition name="fade">
        <Contact />
      </transition>
    </main>
    <SocialSidebar />
    <EmailSidebar />
  </div>
</template>

<script setup></script>
