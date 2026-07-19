<script setup lang="ts">
import { onMounted, ref, nextTick, onBeforeUnmount } from "vue";

const props = defineProps<{ src: string; caption?: string }>();
const plotDiv = ref<HTMLElement | null>(null);

// Create a reactive flag to check if we are in the browser
const isClient = typeof window !== 'undefined';

const initPlot = async () => {
  // 1. Double check we are in the browser
  if (!isClient || !plotDiv.value) return;

  try {
    // 2. Import dynamically ONLY on the client
    const Plotly = (await import('plotly.js-dist-min')).default;
    
    const res = await fetch(props.src);
    const { data, layout, frames } = await res.json();
    
    await Plotly.newPlot(plotDiv.value, data, layout);
    
    if (frames) {
      await Plotly.addFrames(plotDiv.value, frames);
    }
  } catch (e) {
    console.error("Plotly render failed:", e);
  }
};

onMounted(() => {
  // 3. Ensure this only runs once the component is mounted in the browser
  nextTick(initPlot);
});

onBeforeUnmount(() => {
  if (isClient && plotDiv.value) {
    // We import dynamically again to purge
    import('plotly.js-dist-min').then(P => P.default.purge(plotDiv.value!));
  }
});
</script>

<template>
  <div class="w-full">
    <!-- Use v-if to ensure it doesn't try to render during SSR -->
    <div v-if="isClient" ref="plotDiv" class="w-full h-96"></div>
    <div v-else class="h-96 flex items-center justify-center border">
      Loading Plot...
    </div>
    <p v-if="caption" class="text-sm text-center mt-2">{{ caption }}</p>
  </div>
</template>
