<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch, nextTick } from "vue";

const props = defineProps<{ src: string; caption?: string }>();
const plotDiv = ref<HTMLElement | null>(null);

const render = async () => {
  const Plotly = (window as any).Plotly;
  if (!Plotly || !plotDiv.value) return;

  try {
    const res = await fetch(props.src);
    const { data, layout, frames } = await res.json();
    
    // Purge any existing plot in this div to prevent overlaps
    Plotly.purge(plotDiv.value);
    
    // Render the plot with frames and layout
    await Plotly.newPlot(plotDiv.value, data, layout);
    
    // Explicitly add frames if they exist
    if (frames) {
      await Plotly.addFrames(plotDiv.value, frames);
    }
  } catch (e) {
    console.error("Plotly render failed:", e);
  }
};

// Use nextTick to ensure Slidev has finished transitioning the slide
onMounted(() => nextTick(render));
onBeforeUnmount(() => plotDiv.value && (window as any).Plotly.purge(plotDiv.value));
</script>

<template>
  <div class="w-full">
    <div ref="plotDiv" class="w-full h-96"></div>
    <p v-if="caption" class="text-sm text-center mt-2">{{ caption }}</p>
  </div>
</template>
