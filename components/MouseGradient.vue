<template>
  <div
    ref="blob"
    class="fixed bg-gradient-to-r from-green/30 to-purple-500/30 aspect-square h-72 w-72 rounded-full blur-3xl opacity-70 pointer-events-none transition-all duration-500 ease-in-out"
    :style="{
      left: position.x + 'px',
      top: position.y + 'px',
      transform: 'translate(-50%, -50%)',
    }"
  ></div>
</template>

<script setup>
const blob = ref(null);
const position = reactive({ x: 0, y: 0 });

onMounted(() => {
  window.addEventListener("mousemove", (e) => {
    position.x = e.clientX;
    position.y = e.clientY;
  });
});
</script>
