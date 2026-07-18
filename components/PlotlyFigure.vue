<script setup lang="ts">
import { onMounted, ref, shallowRef, onBeforeUnmount } from "vue";

const props = defineProps<{
  src: string; // Path to your json file
  caption?: string;
}>();

const plotDiv = ref<HTMLElement>();
const figure = shallowRef<any>(null);

const initPlot = async () => {
  if (!plotDiv.value) return;

  try {
    const response = await fetch(props.src);
    const data = await response.json();
    figure.value = data;

    // Use Plotly's global object
    const Plotly = (window as any).Plotly;

    // The magic happens here: passing the full JSON (data, layout, AND frames)
    // to newPlot ensures that sliders and animation frames are linked.
    await Plotly.newPlot(
      plotDiv.value, 
      data.data, 
      data.layout, 
      { 
        responsive: true,
        displayModeBar: true 
      }
    );

    // If your JSON includes animations, register them
    if (data.frames) {
      await Plotly.addFrames(plotDiv.value, data.frames);
    }
  } catch (error) {
    console.error("Plotly render error:", error);
  }
};

onMounted(initPlot);
onBeforeUnmount(() => {
  if (plotDiv.value) (window as any).Plotly.purge(plotDiv.value);
});
</script>

<template>
  <div class="plotly-wrapper">
    <div ref="plotDiv" class="w-full h-96"></div>
    <p v-if="caption" class="text-xs text-center mt-2">{{ caption }}</p>
  </div>
</template>
