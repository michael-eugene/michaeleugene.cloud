<template>
  <div class="fixed bottom-0 right-8 hidden lg:block">
    <div
      class="flex flex-col items-center space-y-6 after:content-[''] after:w-px after:h-24 after:bg-slate"
    >
      <a
        href="mailto:michael.eugene@example.com"
        class="vertical-text font-mono text-slate hover:text-green hover:-translate-y-1 transition-all"
      >
        email@michaeleugene.cloud
      </a>
    </div>
  </div>
</template>

<style scoped>
.vertical-text {
  writing-mode: vertical-rl;
}
</style>
