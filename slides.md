---
theme: default
title: Clustering Methodology | PIBM Demo
info: |
   ## Demo Lecture on 
class: text-center
css: unocss
drawings:
  persist: false
transition: slide-up | slide-down
favicon: "/favicon-dark.png"
mdc: true
comark: true
duration: 60 mins
addons:
  - stem
  - window-mockup
  - fancy-arrow
id: 1
toc: false
---

<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" :speed="0.003" :thickness="100" baseColor="#00ffff" />

# Clustering Methods
<span class='text-xs'> *by* </span> <br>
<span class="font-display">Harsh Jinger</span>
## Demo @ PIBM
<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  Let's Begin <carbon:arrow-right />
</div>

---
layout: two-cols-header
id: 2
---

<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" :speed="0.003" :thickness="60" baseColor="#00ffff" />
## 02. The Business Problem

<div class="flex flex-col justify-center items-center min-h-[70vh] px-8">
  
  <!-- The Core Question to Ponder -->
  <h2 class="text-3xl font-semibold text-center text-emerald-400 mb-12">
    "How do we target different customers more efficiently?"
  </h2>

  <!-- Clean, Label-Driven Layout -->
  <div class="grid grid-cols-3 gap-6 w-full">
    
    <div class="bg-gray-800/40 p-5 rounded-lg border border-gray-700/60 flex flex-col justify-between">
      <div>
        <span class="px-2 py-1 text-xs font-mono font-bold bg-emerald-500/20 text-emerald-400 rounded">STRATEGY</span>
        <h3 class="text-lg font-bold mt-3 mb-2 text-gray-100">Micro-Segmentation</h3>
        <p class="text-sm text-gray-400 leading-relaxed">Moving past rigid, manual rules to uncover real behavioral patterns automatically.</p>
      </div>
    </div>

    <div class="bg-gray-800/40 p-5 rounded-lg border border-gray-700/60 flex flex-col justify-between">
      <div>
        <span class="px-2 py-1 text-xs font-mono font-bold bg-blue-500/20 text-blue-400 rounded">RISK</span>
        <h3 class="text-lg font-bold mt-3 mb-2 text-gray-100">Anomaly Detection</h3>
        <p class="text-sm text-gray-400 leading-relaxed">Isolating high-risk fraud clusters that baseline averages completely hide.</p>
      </div>
    </div>

    <div class="bg-gray-800/40 p-5 rounded-lg border border-gray-700/60 flex flex-col justify-between">
      <div>
        <span class="px-2 py-1 text-xs font-mono font-bold bg-purple-500/20 text-purple-400 rounded">MARGIN</span>
        <h3 class="text-lg font-bold mt-3 mb-2 text-gray-100">Product Bundling</h3>
        <p class="text-sm text-gray-400 leading-relaxed">Grouping inventory items based on actual customer co-purchase behaviors.</p>
      </div>
    </div>

  </div>
</div>

---
layout: default
id: 3
---

<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" :speed="0.003" :thickness="60" baseColor="#00ffff" />
## 03. Data Showcase

<!-- Centered and Cleanly Framed Dataset Window -->
<div class="flex flex-col justify-center items-center min-h-[70vh] w-full px-4">
  <div class="w-full border border-gray-700/70 rounded-lg overflow-hidden bg-gray-900/40 shadow-xl">
    <table class="w-full text-left border-collapse">
      <thead class="bg-gray-800 border-b border-gray-700">
        <tr>
          <th class="p-4 font-mono font-bold text-emerald-400">CustomerID</th>
          <th class="p-4 font-mono font-bold text-emerald-400 text-right">Recency (Days)</th>
          <th class="p-4 font-mono font-bold text-emerald-400 text-right">Frequency (Orders)</th>
          <th class="p-4 font-mono font-bold text-emerald-400 text-right">Monetary Value ($)</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-800/60 text-base">
        <tr>
          <td class="p-4 font-mono text-gray-300">#14920</td>
          <td class="p-4 font-mono text-right text-gray-100">3</td>
          <td class="p-4 font-mono text-right text-gray-100">82</td>
          <td class="p-4 font-mono text-right text-gray-100">14,250.00</td>
        </tr>
        <tr class="bg-gray-800/10">
          <td class="p-4 font-mono text-gray-300">#12844</td>
          <td class="p-4 font-mono text-right text-gray-100">12</td>
          <td class="p-4 font-mono text-right text-gray-100">4</td>
          <td class="p-4 font-mono text-right text-gray-100">120.50</td>
        </tr>
        <tr>
          <td class="p-4 font-mono text-gray-300">#17391</td>
          <td class="p-4 font-mono text-right text-gray-100">241</td>
          <td class="p-4 font-mono text-right text-gray-100">1</td>
          <td class="p-4 font-mono text-right text-gray-100">2,100.00</td>
        </tr>
        <tr class="bg-gray-800/10">
          <td class="p-4 font-mono text-gray-300">#15002</td>
          <td class="p-4 font-mono text-right text-gray-100">45</td>
          <td class="p-4 font-mono text-right text-gray-100">18</td>
          <td class="p-4 font-mono text-right text-gray-100">890.00</td>
        </tr>
        <tr>
          <td class="p-4 font-mono text-gray-300">#16211</td>
          <td class="p-4 font-mono text-right text-gray-100">6</td>
          <td class="p-4 font-mono text-right text-gray-100">2</td>
          <td class="p-4 font-mono text-right text-gray-100">45.00</td>
        </tr>
        <tr class="bg-gray-800/10">
          <td class="p-4 font-mono text-gray-300">#19022</td>
          <td class="p-4 font-mono text-right text-gray-100">312</td>
          <td class="p-4 font-mono text-right text-gray-100">1</td>
          <td class="p-4 font-mono text-right text-gray-100">15.00</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

---
layout: center
class: text-center
id: 1
---

<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" :speed="0.003" :thickness="100" baseColor="#00ffff" />

# Thank You
<span class='text-xs'> *Presented by* </span> <br>
<span class="font-display">Harsh Jinger</span>

## Clustering Methods

<div @click="$slidev.nav.next" class="mt-12 py-1 text-xs opacity-40">
  End of Presentation
</div>
