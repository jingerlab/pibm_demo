<script setup lang="ts">
import { onMounted, ref, nextTick, onBeforeUnmount } from "vue";

const props = defineProps<{ src: string; caption?: string }>();
const plotContainer = ref<HTMLElement | null>(null);
const plotDiv = ref<HTMLElement | null>(null);
const isFullscreen = ref(false);

const isClient = typeof window !== 'undefined';

const initPlot = async () => {
  if (!isClient || !plotDiv.value) return;

  try {
    const Plotly = (await import('plotly.js-dist-min')).default;
    
    const res = await fetch(props.src);
    const { data, layout, frames } = await res.json();
    
    const responsiveLayout = {
      ...layout,
      autosize: true
    };
    
    await Plotly.newPlot(plotDiv.value, data, responsiveLayout, { responsive: true, displaylogo: false });
    
    if (frames) {
      await Plotly.addFrames(plotDiv.value, frames);
    }
  } catch (e) {
    console.error("Plotly render failed:", e);
  }
};

const forcePlotlyResize = async () => {
  if (!plotDiv.value) return;
  const Plotly = (await import('plotly.js-dist-min')).default;
  
  // A two-step layout refresh guarantees that both grid markers and markers re-align perfectly
  Plotly.Plots.resize(plotDiv.value);
  Plotly.relayout(plotDiv.value, { autosize: true });
};

const toggleFullscreen = async () => {
  if (!isClient || !plotContainer.value) return;

  try {
    if (!document.fullscreenElement) {
      await plotContainer.value.requestFullscreen();
      isFullscreen.value = true;
    } else {
      await document.exitFullscreen();
      isFullscreen.value = false;
    }
    
    // Wait for DOM layout engine to settle, then fire a deep refresh
    setTimeout(forcePlotlyResize, 200);

  } catch (err) {
    console.error("Error shifting fullscreen mode:", err);
  }
};

const handleFullscreenChange = () => {
  if (!isClient) return;
  isFullscreen.value = !!document.fullscreenElement;
  setTimeout(forcePlotlyResize, 200);
};

onMounted(() => {
  nextTick(initPlot);
  if (isClient) {
    document.addEventListener("fullscreenchange", handleFullscreenChange);
  }
});

onBeforeUnmount(() => {
  if (isClient) {
    document.removeEventListener("fullscreenchange", handleFullscreenChange);
    if (plotDiv.value) {
      import('plotly.js-dist-min').then(P => P.default.purge(plotDiv.value!));
    }
  }
});
</script>

<template>
  <div 
    v-if="isClient" 
    ref="plotContainer" 
    class="relative w-full flex flex-col bg-[#111] p-4 rounded border border-white/10"
    :class="isFullscreen ? 'h-screen justify-between' : 'h-auto'"
  >
    
    <!-- Action Control Bar -->
    <div class="flex justify-end mb-2 z-50">
      <button 
        @click="toggleFullscreen" 
        class="px-3 py-1 text-xs font-mono rounded bg-white/5 border border-white/10 hover:bg-white/10 text-[#00E5FF] transition-all flex items-center gap-1 cursor-pointer"
      >
        <span v-if="isFullscreen">✕ Exit Fullscreen</span>
        <span v-else>⛶ Fullscreen Focus</span>
      </button>
    </div>

    <!-- Plot Canvas Surface Container (Enforced structural sizing) -->
    <div class="relative w-full flex-grow flex items-center justify-center">
      <div 
        ref="plotDiv" 
        class="w-full"
        :style="isFullscreen ? 'height: calc(100vh - 100px);' : 'height: 280px;'"
      ></div>
    </div>
    
    <p v-if="caption" class="text-sm text-center mt-2 text-white/60 z-10">{{ caption }}</p>
  </div>
  
  <div v-else class="h-[450px] flex items-center justify-center border border-white/10 bg-[#111] text-white/40">
    Loading Interactive Canvas...
  </div>
</template>
