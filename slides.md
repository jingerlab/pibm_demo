---
theme: default
title: Clustering Methodology | PIBM Demo
info: |
   ## Demo Lecture on Clustering Methodology
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
layout: center
class: text-center
id: 2
---

<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" :speed="0.003" :thickness="60" baseColor="#00ffff" />
# <span class="pt-12 block">The Business Problem</span>

<div class="flex flex-col justify-center items-center min-h-[55vh] px-8">

<v-click>
  <div class="bg-gray-800/60 backdrop-blur-md px-12 py-8 rounded-xl border border-gray-700/80 shadow-2xl max-w-2xl text-center">
    <h2 class="text-3xl font-semibold text-emerald-400 leading-relaxed">
      "How do we effectively cluster data about customers, logistics, sales, etc. effectively into categories that make sense to think about?"
    </h2>
  </div>
</v-click>

</div>

---
layout: center
class: text-center
id: 3
---

<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" :speed="0.003" :thickness="60" baseColor="#00ffff" />
# <span class="pt-12 block">Data Showcase</span>
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
layout: center
class: text-center
---

<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" :speed="0.003" :thickness="60" baseColor="#00ffff" />
# <span class="pt-6 block">Machine Learning Approaches: Supervised Learning</span>


```mermaid
graph TD
    %% Define Theme Style
    classDef default fill:#1e1e2e,stroke:#313244,stroke-width:1px,color:#cdd6f4;
    classDef highlight fill:#f38ba8,stroke:#f38ba8,stroke-width:2px,color:#11111b;
    
    A[📊 Raw Data + 🏷️ Labels] --> B(🤖 Model Training)
    C[👨‍🏫 Teacher / Ground Truth] -->|Guides| B
    B --> D[🔮 Predictive Output]
    D --> E([🎯 Evaluation])
    E -->|Error Feedback| B
    
    class C highlight;
```


---
id: 5
layout: center
class: text-center
---

<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" :speed="0.003" :thickness="60" baseColor="#00ffff" />
# <span class="pt-6 block">Machine Learning Approaches: Unsupervised Learning</span>

```mermaid
graph TD
    %% Define Theme Style
    classDef default fill:#1e1e2e,stroke:#313244,stroke-width:1px,color:#cdd6f4;
    classDef discovery fill:#f38ba8,stroke:#a6e3a1,stroke-width:2px,color:#11111b;
    
    X[📊 Raw Data Only] --> Y(🤖 Self-Organization)
    Y --> Z([🧩 Hidden Patterns])
    
    Z --> Z1[🔴 Cluster Alpha]
    Z --> Z2[🟢 Cluster Beta]
    Z --> Z3[⚠️ Outliers/Noise]
    
    class Z discovery;
```

---
layout: center
class: text-center
id: 6
---


<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" :speed="0.003" :thickness="60" baseColor="#00ffff" />
# <span class="pt-10 block">Centroid Based Partitioning: K-Means</span>

<PlotlyFigure
  src="kmeans.json"
  caption=""
  width="100%"
  height="320px"
  :fontSize="12"
/>

---
layout: center
class: text-center
id: 7
---

<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" :speed="0.003" :thickness="60" baseColor="#00ffff" />

# The Mechanics of Centroid Partitioning
How K-Means Translates Distance into Segments

At its mathematical core, K-Means is a optimization problem that groups data by minimizing the variance within each cluster. 

$$J = \sum_{j=1}^{K} \sum_{i=1}^{n} w_{ij} ||x_i - \mu_j||^2$$


> **In plain English:** The algorithm randomly places cluster centers, assigns every customer to their nearest center, recalculates the average center based on those new members, and repeats the process until the customer buckets stop shifting.

---
layout: center
id: 8
class: text-center
---

<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" :speed="0.003" :thickness="60" baseColor="#00ffff" />
# Properties of K-Means

<!-- ROW 1: THE PROS (Green Matrix) -->
<div class="mb-6">
  <div class="text-sm font-bold text-green-400 uppercase tracking-wider mb-2">🟢 Strategic Advantages</div>
  <div class="grid grid-cols-3 gap-4">
    <div class="bg-green-900 bg-opacity-20 border border-green-500 border-opacity-30 rounded-lg p-4 text-center shadow-sm">
      <div class="text-2xl mb-1">🎯</div>
      <div class="font-semibold text-green-200 text-sm">Clear Marketing Buckets</div>
    </div>
    <div class="bg-green-900 bg-opacity-20 border border-green-500 border-opacity-30 rounded-lg p-4 text-center shadow-sm">
      <div class="text-2xl mb-1">⚡</div>
      <div class="font-semibold text-green-200 text-sm">Fast & Cheap Scaling</div>
    </div>
    <div class="bg-green-900 bg-opacity-20 border border-green-500 border-opacity-30 rounded-lg p-4 text-center shadow-sm">
      <div class="text-2xl mb-1">📍</div>
      <div class="font-semibold text-green-200 text-sm">Optimal Center Logistics</div>
    </div>
  </div>
</div>

<!-- ROW 2: THE CONS (Red Matrix) -->
<div>
  <div class="text-sm font-bold text-red-400 uppercase tracking-wider mb-2">🔴 Operational Risks</div>
  <div class="grid grid-cols-3 gap-4">
    <div class="bg-red-900 bg-opacity-20 border border-red-500 border-opacity-30 rounded-lg p-4 text-center shadow-sm">
      <div class="text-2xl mb-1">📦</div>
      <div class="font-semibold text-red-200 text-sm">Forced Customer Boxes</div>
    </div>
    <div class="bg-red-900 bg-opacity-20 border border-red-500 border-opacity-30 rounded-lg p-4 text-center shadow-sm">
      <div class="text-2xl mb-1">🔮</div>
      <div class="font-semibold text-red-200 text-sm">Rigid Spherical Bias</div>
    </div>
    <div class="bg-red-900 bg-opacity-20 border border-red-500 border-opacity-30 rounded-lg p-4 text-center shadow-sm">
      <div class="text-2xl mb-1">🎲</div>
      <div class="font-semibold text-red-200 text-sm">Manual Cluster Guesswork</div>
    </div>
  </div>
</div>


---
layout: center
class: text-center
id: 9
---

<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" :speed="0.003" :thickness="60" baseColor="#00ffff" />
# <span class="pt-10 block">Centroid Based Partitioning: K-Means</span>

<PlotlyFigure
  src="kmeans2.json"
  caption=""
  width="100%"
  height="320px"
  :fontSize="12"
/>


---
layout: center
class: text-center
id: 10
---

<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" :speed="0.003" :thickness="60" baseColor="#00ffff" />
# <span class="pt-10 block">Heirarchy Based Partitioning: Dendrograms</span>

<PlotlyFigure
  src="dendrogram.json"
  caption=""
  width="100%"
  height="320px"
  :fontSize="12"
/>

---
layout: center
class: text-center
id: 11
---

<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" :speed="0.003" :thickness="60" baseColor="#00ffff" />
# The Mechanics of Agglomerative Clustering
How the Tree Computes Proximity

At its mathematical core, hierarchical clustering builds a bottom-up tree by calculating the distance between growing groups of data.

$$d(u, v) = \sqrt{\frac{|v| + |s|}{|v| + |s| + |t|} d(v, s)^2 + \frac{|v| + |t|}{|v| + |s| + |t|} d(v, t)^2 - \frac{|v|}{|v| + |s| + |t|} d(s, t)^2}$$

> **In plain English:** The algorithm starts by treating every customer as their own group. It repeatedly finds the two most similar groups, locks them together, and uses this formula to update the distance between the newly merged group and all others, repeating until everyone is joined into a single tree.

---
layout: center
class: text-center
id: 12
---

<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" :speed="0.003" :thickness="60" baseColor="#00ffff" />
# Properties of Dendrogram Clustering

<!-- ROW 1: THE PROS (Green Matrix) -->
<div class="mb-6">
  <div class="text-sm font-bold text-green-400 uppercase tracking-wider mb-2">🟢 Strategic Advantages</div>
  <div class="grid grid-cols-3 gap-4">
    <div class="bg-green-900 bg-opacity-20 border border-green-500 border-opacity-30 rounded-lg p-4 text-center shadow-sm">
      <div class="text-2xl mb-1">🌳</div>
      <div class="font-semibold text-green-200 text-sm">Visual Hierarchy Tree</div>
    </div>
    <div class="bg-green-900 bg-opacity-20 border border-green-500 border-opacity-30 rounded-lg p-4 text-center shadow-sm">
      <div class="text-2xl mb-1">📐</div>
      <div class="font-semibold text-green-200 text-sm">No Fixed K Guesswork</div>
    </div>
    <div class="bg-green-900 bg-opacity-20 border border-green-500 border-opacity-30 rounded-lg p-4 text-center shadow-sm">
      <div class="text-2xl mb-1">🔗</div>
      <div class="font-semibold text-green-200 text-sm">Flexible Linkage Math</div>
    </div>
  </div>
</div>

<!-- ROW 2: THE CONS (Red Matrix) -->
<div>
  <div class="text-sm font-bold text-red-400 uppercase tracking-wider mb-2">🔴 Operational Risks</div>
  <div class="grid grid-cols-3 gap-4">
    <div class="bg-red-900 bg-opacity-20 border border-red-500 border-opacity-30 rounded-lg p-4 text-center shadow-sm">
      <div class="text-2xl mb-1">🐢</div>
      <div class="font-semibold text-red-200 text-sm">Slow Big Data Scaling</div>
    </div>
    <div class="bg-red-900 bg-opacity-20 border border-red-500 border-opacity-30 rounded-lg p-4 text-center shadow-sm">
      <div class="text-2xl mb-1">🔒</div>
      <div class="font-semibold text-red-200 text-sm">Irreversible Merge Traps</div>
    </div>
    <div class="bg-red-900 bg-opacity-20 border border-red-500 border-opacity-30 rounded-lg p-4 text-center shadow-sm">
      <div class="text-2xl mb-1">📉</div>
      <div class="font-semibold text-red-200 text-sm">Outlier Sensitivity Distortion</div>
    </div>
  </div>
</div>


---
layout: center
class: text-center
id: 13
---

<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" :speed="0.003" :thickness="60" baseColor="#00ffff" />
# <span class="pt-10 block">Probability Based Partitioning: GMM </span>

<PlotlyFigure
  src="gmm.json"
  caption=""
  width="100%"
  height="320px"
  :fontSize="12"
/>

---
layout: center
class: text-center
id: 14
---

<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" :speed="0.003" :thickness="60" baseColor="#00ffff" />

# The Mechanics of Probability-Based Partitioning
How GMM Translates Density into Soft Segments

At its mathematical core, a Gaussian Mixture Model treats the market as a collection of multiple bell curves, calculating the exact probability that a customer belongs to each group.

$$\ln p(X|\pi, \mu, \Sigma) = \sum_{i=1}^{N} \ln \left( \sum_{k=1}^{K} \pi_k \mathcal{N}(x_i | \mu_k, \Sigma_k) \right)$$

> **In plain English:** Instead of forcing customers into hard boundaries, the algorithm assumes every segment has its own center, spread, and orientation. It calculates how likely each customer belongs to every group, giving you a percentage breakdown of their loyalty rather than forcing them into a single box.

---
layout: center
class: text-center
id: 15
---

<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" :speed="0.003" :thickness="60" baseColor="#00ffff" />
# Properties of GMM Clustering

<!-- ROW 1: THE PROS (Green Matrix) -->
<div class="mb-6">
  <div class="text-sm font-bold text-green-400 uppercase tracking-wider mb-2">🟢 Strategic Advantages</div>
  <div class="grid grid-cols-3 gap-4">
    <div class="bg-green-900 bg-opacity-20 border border-green-500 border-opacity-30 rounded-lg p-4 text-center shadow-sm">
      <div class="text-2xl mb-1">🌊</div>
      <div class="font-semibold text-green-200 text-sm">True Soft Boundaries</div>
    </div>
    <div class="bg-green-900 bg-opacity-20 border border-green-500 border-opacity-30 rounded-lg p-4 text-center shadow-sm">
      <div class="text-2xl mb-1">📐</div>
      <div class="font-semibold text-green-200 text-sm">Flexible Elliptic Shapes</div>
    </div>
    <div class="bg-green-900 bg-opacity-20 border border-green-500 border-opacity-30 rounded-lg p-4 text-center shadow-sm">
      <div class="text-2xl mb-1">📊</div>
      <div class="font-semibold text-green-200 text-sm">Clear Certainty Metrics</div>
    </div>
  </div>
</div>

<!-- ROW 2: THE CONS (Red Matrix) -->
<div>
  <div class="text-sm font-bold text-red-400 uppercase tracking-wider mb-2">🔴 Operational Risks</div>
  <div class="grid grid-cols-3 gap-4">
    <div class="bg-red-900 bg-opacity-20 border border-red-500 border-opacity-30 rounded-lg p-4 text-center shadow-sm">
      <div class="text-2xl mb-1">💥</div>
      <div class="font-semibold text-red-200 text-sm">Math Singularity Crashes</div>
    </div>
    <div class="bg-red-900 bg-opacity-20 border border-red-500 border-opacity-30 rounded-lg p-4 text-center shadow-sm">
      <div class="text-2xl mb-1">🐢</div>
      <div class="font-semibold text-red-200 text-sm">Slow Complex Runs</div>
    </div>
    <div class="bg-red-900 bg-opacity-20 border border-red-500 border-opacity-30 rounded-lg p-4 text-center shadow-sm">
      <div class="text-2xl mb-1">🧩</div>
      <div class="font-semibold text-red-200 text-sm">Tricky Overfitting Traps</div>
    </div>
  </div>
</div>


---
layout: center
class: text-center
id: 16
---

<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" :speed="0.003" :thickness="60" baseColor="#00ffff" />
# <span class="pt-10 block">Density Based Partitioning: DBSCAN</span>

<PlotlyFigure
  src="dbscan.json"
  caption=""
  width="100%"
  height="320px"
  :fontSize="12"
/>


---
layout: center
class: text-center
id: 17
---

<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" :speed="0.003" :thickness="60" baseColor="#00ffff" />
# The Mechanics of Density-Based Clustering
How DBSCAN Translates Proximity into Organic Shapes

At its mathematical core, DBSCAN groups data by tracking zones of high point density, identifying clusters as continuous regions where neighbors sit tightly packed together.

$$N_\epsilon(x) = \{y \in X \mid \text{dist}(x, y) \le \epsilon\} \quad \text{subject to} \quad |N_\epsilon(x)| \ge \text{MinPts}$$

> **In plain English:** Instead of looking for centers or drawing clean circles, the algorithm walks point-by-point through your data. If a customer has enough close neighbors within a set distance, it starts a cluster; it then hops to those neighbors to expand the group, organically discovering any irregular shape while leaving isolated anomalies completely unclustered as noise.

---
layout: center
class: text-center
id: 18
---

<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" :speed="0.003" :thickness="60" baseColor="#00ffff" />
# Properties of DBSCAN Clustering

<!-- ROW 1: THE PROS (Green Matrix) -->
<div class="mb-6">
  <div class="text-sm font-bold text-green-400 uppercase tracking-wider mb-2">🟢 Strategic Advantages</div>
  <div class="grid grid-cols-3 gap-4">
    <div class="bg-green-900 bg-opacity-20 border border-green-500 border-opacity-30 rounded-lg p-4 text-center shadow-sm">
      <div class="text-2xl mb-1">🌊</div>
      <div class="font-semibold text-green-200 text-sm">Arbitrary Shape Discovery</div>
    </div>
    <div class="bg-green-900 bg-opacity-20 border border-green-500 border-opacity-30 rounded-lg p-4 text-center shadow-sm">
      <div class="text-2xl mb-1">🚨</div>
      <div class="font-semibold text-green-200 text-sm">Built-in Outlier Filtering</div>
    </div>
    <div class="bg-green-900 bg-opacity-20 border border-green-500 border-opacity-30 rounded-lg p-4 text-center shadow-sm">
      <div class="text-2xl mb-1">🌱</div>
      <div class="font-semibold text-green-200 text-sm">No Prior K Clusters Required</div>
    </div>
  </div>
</div>

<!-- ROW 2: THE CONS (Red Matrix) -->
<div>
  <div class="text-sm font-bold text-red-400 uppercase tracking-wider mb-2">🔴 Operational Risks</div>
  <div class="grid grid-cols-3 gap-4">
    <div class="bg-red-900 bg-opacity-20 border border-red-500 border-opacity-30 rounded-lg p-4 text-center shadow-sm">
      <div class="text-2xl mb-1">🏔️</div>
      <div class="font-semibold text-red-200 text-sm">Fails on Varying Densities</div>
    </div>
    <div class="bg-red-900 bg-opacity-20 border border-red-500 border-opacity-30 rounded-lg p-4 text-center shadow-sm">
      <div class="text-2xl mb-1">🌀</div>
      <div class="font-semibold text-red-200 text-sm">Highly Sensitive Parameters</div>
    </div>
    <div class="bg-red-900 bg-opacity-20 border border-red-500 border-opacity-30 rounded-lg p-4 text-center shadow-sm">
      <div class="text-2xl mb-1">📉</div>
      <div class="font-semibold text-red-200 text-sm">High-Dimensional Scale Trap</div>
    </div>
  </div>
</div>

---
layout: center
id: 19
---

<script setup lang="ts">
import { ref } from 'vue'
const sel = ref<number | null>(null)
</script>

<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" :speed="0.003" :thickness="60" baseColor="#00ffff" />
<div class="max-w-2xl mx-auto">
  <h2 class="text-xl font-bold mb-1">Concept Check 1: Algorithm Selection</h2>
  <p class="text-xs text-gray-400 mb-4">An e-commerce firm's natural customer groups form highly irregular, nested crescent shapes. Which algorithm is best suited to discover these segments?</p>

  <div class="grid grid-cols-2 gap-2 my-3 text-xs">
    <button @click="sel = 1" :class="[sel === 1 ? 'bg-red-900/30 border-red-500 text-red-200' : 'bg-gray-900 border-gray-800 text-gray-400', sel !== null && sel !== 1 ? 'opacity-30' : '']" class="p-2 text-left border rounded cursor-pointer flex justify-between">
      <span>A) K-Means Clustering</span>
      <span v-if="sel === 1">❌</span>
    </button>
    <button @click="sel = 2" :class="[sel === 2 ? 'bg-red-900/30 border-red-500 text-red-200' : 'bg-gray-900 border-gray-800 text-gray-400', sel !== null && sel !== 2 ? 'opacity-30' : '']" class="p-2 text-left border rounded cursor-pointer flex justify-between">
      <span>B) Gaussian Mixture Models (GMM)</span>
      <span v-if="sel === 2">❌</span>
    </button>
    <button @click="sel = 3" :class="[sel === 3 ? 'bg-green-900/30 border-green-500 text-green-200' : 'bg-gray-900 border-gray-800 text-gray-400', sel !== null && sel !== 3 ? 'opacity-30' : '']" class="p-2 text-left border rounded cursor-pointer flex justify-between col-span-2">
      <span>C) DBSCAN</span>
      <span v-if="sel !== null">🎯 Correct</span>
    </button>
  </div>

  <div v-if="sel !== null" :class="sel === 3 ? 'bg-green-900/20 border-green-800/60 text-green-300' : 'bg-red-900/20 border-red-800/60 text-red-300'" class="p-3 border rounded text-xs leading-relaxed">
    <span class="font-bold text-white">{{ sel === 3 ? '🎯 Correct!' : '❌ Review:' }}</span> DBSCAN groups data based on continuous density links rather than rigid shapes, making it perfect for nested crescents. K-Means and GMM assume convex or elliptical shapes.
  </div>
</div>

---
layout: center
id: 20
---

<script setup lang="ts">
import { ref } from 'vue'
const sel = ref<number | null>(null)
</script>

<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" :speed="0.003" :thickness="60" baseColor="#00ffff" />
<div class="max-w-2xl mx-auto">
  <h2 class="text-xl font-bold mb-1">Concept Check 2: Soft vs. Hard Boundaries</h2>
  <p class="text-xs text-gray-400 mb-4">Instead of forcing a user into a single definitive profile, a system must report a fractional percentage breakdown of their loyalty. Which approach applies?</p>

  <div class="grid grid-cols-2 gap-2 my-3 text-xs">
    <button @click="sel = 1" :class="[sel === 1 ? 'bg-red-900/30 border-red-500 text-red-200' : 'bg-gray-900 border-gray-800 text-gray-400', sel !== null && sel !== 1 ? 'opacity-30' : '']" class="p-2 text-left border rounded cursor-pointer flex justify-between">
      <span>A) Agglomerative Hierarchical</span>
      <span v-if="sel === 1">❌</span>
    </button>
    <button @click="sel = 2" :class="[sel === 2 ? 'bg-green-900/30 border-green-500 text-green-200' : 'bg-gray-900 border-gray-800 text-gray-400', sel !== null && sel !== 2 ? 'opacity-30' : '']" class="p-2 text-left border rounded cursor-pointer flex justify-between">
      <span>B) Gaussian Mixture Models (GMM)</span>
      <span v-if="sel !== null">🎯 Correct</span>
    </button>
    <button @click="sel = 3" :class="[sel === 3 ? 'bg-red-900/30 border-red-500 text-red-200' : 'bg-gray-900 border-gray-800 text-gray-400', sel !== null && sel !== 3 ? 'opacity-30' : '']" class="p-2 text-left border rounded cursor-pointer flex justify-between col-span-2">
      <span>C) K-Means Clustering</span>
      <span v-if="sel === 3">❌</span>
    </button>
  </div>

  <div v-if="sel !== null" :class="sel === 2 ? 'bg-green-900/20 border-green-800/60 text-green-300' : 'bg-red-900/20 border-red-800/60 text-red-300'" class="p-3 border rounded text-xs leading-relaxed">
    <span class="font-bold text-white">{{ sel === 2 ? '🎯 Correct!' : '❌ Review:' }}</span> GMM assigns probabilities over all clusters per data point ("soft clustering"). K-Means and Hierarchical impose definitive, binary assignments ("hard clustering").
  </div>
</div>

---
layout: center
id: 21
---

<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" :speed="0.003" :thickness="60" baseColor="#00ffff" />
<script setup lang="ts">
import { ref } from 'vue'
const sel = ref<number | null>(null)
</script>

<div class="max-w-2xl mx-auto">
  <h2 class="text-xl font-bold mb-1">Concept Check 3: Scaling Bottlenecks</h2>
  <p class="text-xs text-gray-400 mb-4">You are processing a massive database containing 15 million records. Which algorithm introduces a severe bottleneck due to an $O(N^2)$ computational complexity profile?</p>

  <div class="grid grid-cols-2 gap-2 my-3 text-xs">
    <button @click="sel = 1" :class="[sel === 1 ? 'bg-green-900/30 border-green-500 text-green-200' : 'bg-gray-900 border-gray-800 text-gray-400', sel !== null && sel !== 1 ? 'opacity-30' : '']" class="p-2 text-left border rounded cursor-pointer flex justify-between col-span-2">
      <span>A) Hierarchical Clustering (Ward's)</span>
      <span v-if="sel !== null">🎯 Correct</span>
    </button>
    <button @click="sel = 2" :class="[sel === 2 ? 'bg-red-900/30 border-red-500 text-red-200' : 'bg-gray-900 border-gray-800 text-gray-400', sel !== null && sel !== 2 ? 'opacity-30' : '']" class="p-2 text-left border rounded cursor-pointer flex justify-between">
      <span>B) K-Means Clustering</span>
      <span v-if="sel === 2">❌</span>
    </button>
    <button @click="sel = 3" :class="[sel === 3 ? 'bg-red-900/30 border-red-500 text-red-200' : 'bg-gray-900 border-gray-800 text-gray-400', sel !== null && sel !== 3 ? 'opacity-30' : '']" class="p-2 text-left border rounded cursor-pointer flex justify-between">
      <span>C) Mini-Batch K-Means</span>
      <span v-if="sel === 3">❌</span>
    </button>
  </div>

  <div v-if="sel !== null" :class="sel === 1 ? 'bg-green-900/20 border-green-800/60 text-green-300' : 'bg-red-900/20 border-red-800/60 text-red-300'" class="p-3 border rounded text-xs leading-relaxed">
    <span class="font-bold text-white">{{ sel === 1 ? '🎯 Correct!' : '❌ Review:' }}</span> Hierarchical clustering requires calculating and holding an explicit $N \times N$ proximity matrix, making large-scale deployment mathematically expensive.
  </div>
</div>

---
layout: center
id: 22
---

<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" :speed="0.003" :thickness="60" baseColor="#00ffff" />
<script setup lang="ts">
import { ref } from 'vue'
const sel = ref<number | null>(null)
</script>

<div class="max-w-2xl mx-auto">
  <h2 class="text-xl font-bold mb-1">Concept Check 4: Outlier Anomalies</h2>
  <p class="text-xs text-gray-400 mb-4">Your customer data contains highly volatile transaction spikes. You need to identify core trends without letting outliers pull or distort the group centers. What is the safest choice?</p>

  <div class="grid grid-cols-2 gap-2 my-3 text-xs">
    <button @click="sel = 1" :class="[sel === 1 ? 'bg-red-900/30 border-red-500 text-red-200' : 'bg-gray-900 border-gray-800 text-gray-400', sel !== null && sel !== 1 ? 'opacity-30' : '']" class="p-2 text-left border rounded cursor-pointer flex justify-between">
      <span>A) K-Means Clustering</span>
      <span v-if="sel === 1">❌</span>
    </button>
    <button @click="sel = 2" :class="[sel === 2 ? 'bg-green-900/30 border-green-500 text-green-200' : 'bg-gray-900 border-gray-800 text-gray-400', sel !== null && sel !== 2 ? 'opacity-30' : '']" class="p-2 text-left border rounded cursor-pointer flex justify-between">
      <span>B) DBSCAN</span>
      <span v-if="sel !== null">🎯 Correct</span>
    </button>
    <button @click="sel = 3" :class="[sel === 3 ? 'bg-red-900/30 border-red-500 text-red-200' : 'bg-gray-900 border-gray-800 text-gray-400', sel !== null && sel !== 3 ? 'opacity-30' : '']" class="p-2 text-left border rounded cursor-pointer flex justify-between col-span-2">
      <span>C) Standard Ward's Hierarchical Tree</span>
      <span v-if="sel === 3">❌</span>
    </button>
  </div>

  <div v-if="sel !== null" :class="sel === 2 ? 'bg-green-900/20 border-green-800/60 text-green-300' : 'bg-red-900/20 border-red-800/60 text-red-300'" class="p-3 border rounded text-xs leading-relaxed">
    <span class="font-bold text-white">{{ sel === 2 ? '🎯 Correct!' : '❌ Review:' }}</span> DBSCAN classifies any data point lacking a minimum number of close neighbors strictly as noise (-1). K-Means and standard trees lack a noise buffer and force outliers into group averages.
  </div>
</div>

---
layout: center
id: 23
---

<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" :speed="0.003" :thickness="60" baseColor="#00ffff" />
<script setup lang="ts">
import { ref } from 'vue'
const sel = ref<number | null>(null)
</script>

<div class="max-w-2xl mx-auto">
  <h2 class="text-xl font-bold mb-1">Concept Check 5: Linkage Optimization</h2>
  <p class="text-xs text-gray-400 mb-4">During hierarchical clustering, you observe stringy, chain-like clusters. Which linkage criterion is causing this error?</p>

  <div class="grid grid-cols-2 gap-2 my-3 text-xs">
    <button @click="sel = 1" :class="[sel === 1 ? 'bg-green-900/30 border-green-500 text-green-200' : 'bg-gray-900 border-gray-800 text-gray-400', sel !== null && sel !== 1 ? 'opacity-30' : '']" class="p-2 text-left border rounded cursor-pointer flex justify-between col-span-2">
      <span>A) Single Linkage (Min Distance)</span>
      <span v-if="sel !== null">🎯 Correct</span>
    </button>
    <button @click="sel = 2" :class="[sel === 2 ? 'bg-red-900/30 border-red-500 text-red-200' : 'bg-gray-900 border-gray-800 text-gray-400', sel !== null && sel !== 2 ? 'opacity-30' : '']" class="p-2 text-left border rounded cursor-pointer flex justify-between">
      <span>B) Complete Linkage (Max Distance)</span>
      <span v-if="sel === 2">❌</span>
    </button>
    <button @click="sel = 3" :class="[sel === 3 ? 'bg-red-900/30 border-red-500 text-red-200' : 'bg-gray-900 border-gray-800 text-gray-400', sel !== null && sel !== 3 ? 'opacity-30' : '']" class="p-2 text-left border rounded cursor-pointer flex justify-between">
      <span>C) Ward's Variance Linkage</span>
      <span v-if="sel === 3">❌</span>
    </button>
  </div>

  <div v-if="sel !== null" :class="sel === 1 ? 'bg-green-900/20 border-green-800/60 text-green-300' : 'bg-red-900/20 border-red-800/60 text-red-300'" class="p-3 border rounded text-xs leading-relaxed">
    <span class="font-bold text-white">{{ sel === 1 ? '🎯 Correct!' : '❌ Review:' }}</span> Single Linkage relies on the minimum distance between points of separate clusters. This generates the "chaining effect," pulling clusters together along loose, single-element paths rather than variance groups.
  </div>
</div>


---
layout: center
class: text-center
id: 24
---

<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" :speed="0.003" :thickness="100" baseColor="#00ffff" />

# Thank You
<span class='text-xs'> *Presented by* </span> <br>
<span class="font-display">Harsh Jinger</span>

## Clustering Methods

<div @click="$slidev.nav.next" class="mt-12 py-1 text-xs opacity-40">
  End of Presentation
</div>
