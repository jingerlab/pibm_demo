<!-- components/MathFrame.vue -->
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  speed: { type: Number, default: 0.003 },       
  thickness: { type: Number, default: 120 },     
  particleCount: { type: Number, default: 4000 }, 
  baseColor: { type: String, default: '#6366f1' }   
})

const canvasRef = ref(null)
const containerRef = ref(null)
let animationId = null

// --- Minimalist Simplex/Perlin Noise Generator ---
const noise = (() => {
  const p = new Uint8Array(256), grad = [[1,1],[1,-1],[-1,1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]];
  for(let i=0; i<256; i++) p[i] = Math.random()*256;
  const lerp = (a, b, t) => a + t * (b - a), fade = t => t * t * t * (t * (t * 6 - 15) + 10);
  const dot = (g, x, y) => g[0]*x + g[1]*y;
  return (x, y) => {
    let xi = Math.floor(x) & 255, yi = Math.floor(y) & 255, xf = x - Math.floor(x), yf = y - Math.floor(y);
    const g = [grad[p[(xi+p[yi])&255]&7], grad[p[(xi+p[(yi+1)&255])&255]&7], grad[p[(xi+1+p[yi])&255]&7], grad[p[(xi+1+p[(yi+1)&255])&255]&7]];
    return lerp(lerp(dot(g[0], xf, yf), dot(g[2], xf-1, yf), fade(xf)), lerp(dot(g[1], xf, yf-1), dot(g[3], xf-1, yf-1), fade(xf)), fade(yf));
  };
})();

onMounted(() => {
  const canvas = canvasRef.value, ctx = canvas.getContext('2d'), container = containerRef.value;
  let particles = [];
  
  const resize = () => {
    const w = container.clientWidth || 980, h = container.clientHeight || 552;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr; canvas.height = h * dpr;
    canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
    ctx.scale(dpr, dpr);
    initParticles(w, h);
  };

  const initParticles = (w, h) => {
    particles = [];
    for (let i = 0; i < props.particleCount; i++) {
      let x, y, borderSafe = 0.3;
      if(Math.random() < 0.5) {
          x = Math.random() * w;
          y = Math.random() < 0.5 ? Math.random() * (h * borderSafe) : h - Math.random() * (h * borderSafe);
      } else {
          x = Math.random() < 0.5 ? Math.random() * (w * borderSafe) : w - Math.random() * (w * borderSafe);
          y = Math.random() * h;
      }
      particles.push({ x: x, y: y, age: Math.random() * 200, offset: Math.random() * 100 });
    }
  };

  resize();
  window.addEventListener('resize', resize);
  let time = 0;

  const draw = () => {
    const w = container.clientWidth, h = container.clientHeight;
    
    ctx.fillStyle = 'rgba(0, 0, 0, 0.08)'; 
    ctx.fillRect(0, 0, w, h);
    
    const spreadZone = props.thickness;
    const noiseScale = 0.01;

    for (const p of particles) {
      const n = noise((p.x + p.offset) * noiseScale, (p.y + p.offset) * noiseScale + time);
      const angle = n * Math.PI * 4;
      const speed = (n + 1) * 0.8;
      
      p.x += Math.cos(angle) * speed;
      p.y += Math.sin(angle) * speed;
      p.age += 1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, 0.7, 0, Math.PI * 2);
      
      const lifePct = Math.min(1, p.age / 10);
      const dist = Math.min(p.x, w - p.x, p.y, h - p.y);
      const borderFade = Math.max(0, Math.min(1, (dist / spreadZone))); 
      
      ctx.fillStyle = `${props.baseColor}${Math.floor((1 - borderFade) * 180).toString(16).padStart(2, '0')}`;
      ctx.fill();

      if (p.age > 300 || dist < 2 || dist > spreadZone) {
        let rx, ry, borderSafe = 0.3;
        if(Math.random() < 0.5) {
            rx = Math.random() * w;
            ry = Math.random() < 0.5 ? Math.random() * (h * borderSafe) : h - Math.random() * (h * borderSafe);
        } else {
            rx = Math.random() < 0.5 ? Math.random() * (w * borderSafe) : w - Math.random() * (w * borderSafe);
            ry = Math.random() * h;
        }
        p.x = rx; p.y = ry; p.age = 0;
      }
    }

    time += props.speed;
    animationId = requestAnimationFrame(draw);
  };

  draw();

  onUnmounted(() => {
    cancelAnimationFrame(animationId)
    window.removeEventListener('resize', resize)
  })
})
</script>

<template>
  <!-- Tailwind's z-[-1] sends this container straight to the back layer -->
  <div ref="containerRef" class="absolute inset-0 w-full h-full pointer-events-none z-[-1]">
    <canvas ref="canvasRef" class="block w-full h-full select-none" style="mix-blend-mode: screen;" />
  </div>
</template>
