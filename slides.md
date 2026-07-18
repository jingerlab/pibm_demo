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
# <span class="pt-12 block">02. The Business Problem</span>

<div class="flex flex-col justify-center items-center min-h-[55vh] px-8">

<v-click>
  <div class="bg-gray-800/60 backdrop-blur-md px-12 py-8 rounded-xl border border-gray-700/80 shadow-2xl max-w-2xl text-center">
    <h2 class="text-3xl font-semibold text-emerald-400 leading-relaxed">
      "How do we target different customers more efficiently?"
    </h2>
  </div>
</v-click>

</div>

---
layout: default
id: 3
---

<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" :speed="0.003" :thickness="60" baseColor="#00ffff" />
# <span class="pt-12 block">03. Data Showcase</span>
<div class="w-full border border-gray-700/70 rounded-lg overflow-hidden bg-gray-900/40 shadow-xl max-w-4xl mx-auto my-auto">
  <table class="w-full text-left border-collapse">
    <thead class="bg-gray-800 border-b border-gray-700">
      <tr>
        <th class="p-4 font-mono font-bold text-emerald-400">CustomerID</th>
        <th class="p-4 font-mono font-bold text-emerald-400 text-right">Recency (Days)</th>
        <th class="p-4 font-mono font-bold text-emerald-400 text-right">Frequency (Orders)</th>
        <th class="p-4 font-mono font-bold text-emerald-400 text-right">Monetary Value ($)</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-800/60 text-base text-gray-300">
      <tr>
        <td class="p-4 font-mono">#14920</td>
        <td class="p-4 font-mono text-right">3</td>
        <td class="p-4 font-mono text-right">82</td>
        <td class="p-4 font-mono text-right">14,250.00</td>
      </tr>
      <tr class="bg-gray-800/10">
        <td class="p-4 font-mono">#12844</td>
        <td class="p-4 font-mono text-right">12</td>
        <td class="p-4 font-mono text-right">4</td>
        <td class="p-4 font-mono text-right">120.50</td>
      </tr>
      <tr>
        <td class="p-4 font-mono">#17391</td>
        <td class="p-4 font-mono text-right">241</td>
        <td class="p-4 font-mono text-right">1</td>
        <td class="p-4 font-mono text-right">2,100.00</td>
      </tr>
      <tr class="bg-gray-800/10">
        <td class="p-4 font-mono">#15002</td>
        <td class="p-4 font-mono text-right">45</td>
        <td class="p-4 font-mono text-right">18</td>
        <td class="p-4 font-mono text-right">890.00</td>
      </tr>
      <tr>
        <td class="p-4 font-mono">#16211</td>
        <td class="p-4 font-mono text-right">6</td>
        <td class="p-4 font-mono text-right">2</td>
        <td class="p-4 font-mono text-right">45.00</td>
      </tr>
      <tr class="bg-gray-800/10">
        <td class="p-4 font-mono">#19022</td>
        <td class="p-4 font-mono text-right">312</td>
        <td class="p-4 font-mono text-right">1</td>
        <td class="p-4 font-mono text-right">15.00</td>
      </tr>
    </tbody>
  </table>
</div>

---
id: 4
layout: two-cols-header
---

<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" :speed="0.003" :thickness="60" baseColor="#00ffff" />
# <span class="pt-8 block">04. Machine Learning Approaches</span>

::left::
<div class="bg-gray-800/30 p-8 rounded-xl border border-gray-700/50 flex flex-col items-center text-center mx-4">
  <div class="text-6xl mb-6 select-none">🏷️</div>
  <h2 class="text-2xl font-bold text-blue-400 mb-4">Supervised</h2>
  <div class="font-mono text-sm bg-gray-900/60 text-gray-400 p-3 rounded border border-gray-800 w-full mb-6">
    Inputs &rarr; <span class="text-blue-400 font-bold">Known Labels</span>
  </div>
  <p class="text-gray-300 text-sm leading-relaxed">
    The model learns a mapping function to predict predefined outcomes based on historical training targets.
  </p>
</div>

::right::
<div class="bg-gray-800/30 p-8 rounded-xl border border-gray-700/50 flex flex-col items-center text-center mx-4">
  <div class="text-6xl mb-6 select-none">🔍</div>
  <h2 class="text-2xl font-bold text-emerald-400 mb-4">Unsupervised</h2>
  <div class="font-mono text-sm bg-gray-900/60 text-gray-400 p-3 rounded border border-gray-800 w-full mb-6">
    Inputs &rarr; <span class="text-emerald-400 font-bold">Hidden Structures</span>
  </div>
  <p class="text-gray-300 text-sm leading-relaxed">
    The model acts as an exploratory lens, mapping unlabeled feature spaces to discover natural clusters organically.
  </p>
</div>

---
layout: default
id: 5
---

# <span class="pt-12 block">05. Centroid-Based Partitioning: K-Means</span>
  <PlotlyFigure
    src="/charts/kmeans.json"
    caption="Figure 1: K-Means Convergence Path"
    width="100%"
    height="360px"
    :fontSize="12"
  />


---
layout: default
id: 6
---

# <span class="pt-12 block">06. K-Means: Structural Properties</span>

<div class="flex flex-col justify-center items-center min-h-[55vh] px-8">
  <div class="grid grid-cols-3 gap-6 w-full max-w-5xl text-center">

    <div class="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50 flex flex-col items-center">
      <div class="text-4xl mb-4 select-none">📐</div>
      <h3 class="text-lg font-bold text-emerald-400 mb-2">Geometric Assumptions</h3>
      <p class="text-gray-400 text-xs leading-relaxed">
        Inherently assumes clusters are spherical, isotropic, and share similar variances. Struggles immensely with irregular, elongated geometries.
      </p>
    </div>

    <div class="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50 flex flex-col items-center">
      <div class="text-4xl mb-4 select-none">⚡</div>
      <h3 class="text-lg font-bold text-emerald-400 mb-2">Computational Speed</h3>
      <p class="text-gray-400 text-xs leading-relaxed">
        Highly scalable with linear time complexity. Excellent deployment candidate for large-scale corporate data streams.
      </p>
    </div>

    <div class="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50 flex flex-col items-center">
      <div class="text-4xl mb-4 select-none">⚠️</div>
      <h3 class="text-lg font-bold text-emerald-400 mb-2">Critical Pitfalls</h3>
      <p class="text-gray-400 text-xs leading-relaxed">
        Extremely sensitive to outlier distortions and random seed initialization states. Requires defining the hyperparameter K explicitly beforehand.
      </p>
    </div>

  </div>
</div>

---
layout: default
name: kmeans-interactive
---

# <span class="pt-12 block">05. Centroid-Based Partitioning: K-Means</span>

<div class="grid grid-cols-2 gap-8 items-center min-h-[55vh] mt-4">

  <!-- Left Side: Core Narrative -->
  <div class="space-y-4 px-4">
    <h3 class="text-xl font-semibold text-emerald-400">The Convergence Process</h3>
    <p class="text-gray-300 text-sm leading-relaxed">
      K-Means begins with a completely blind guess before optimization takes place. 
    </p>
    
    <ul class="space-y-2 text-sm text-gray-400 list-disc pl-4">
      <li><strong>Phase 1:</strong> Data points are completely unassigned (monochrome), and centroids are placed at random.</li>
      <li><strong>Phase 2+:</strong> Expectations-Maximization loops color-code the boundaries and shift the centers to stable means.</li>
    </ul>
    
    <div class="mt-4 p-3 bg-gray-800/40 rounded border border-gray-700/50 text-xs text-gray-400 italic">
      👉 Use the interactive timeline slider under the graph to walk the panel through the real-time mathematical optimization steps.
    </div>
  </div>

  <!-- Right Side: The Standalone Plotly Element -->
  <PlotlyFigure
    src="/charts/kmeans.json"
    caption="Figure 1: Interactive K-Means Migration Path"
    width="100%"
    height="380px"
    :fontSize="12"
  />

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
