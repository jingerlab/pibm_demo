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
# <span class="pt-6 block">Machine Learning Approaches</span>

## Supervised Learning 

```mermaid
graph TD
    %% Define Theme Style
    classDef default fill:#1e1e2e,stroke:#313244,stroke-width:1px,color:#cdd6f4;
    classDef highlight fill:#f38ba8,stroke:#f38ba8,stroke-width:2px,color:#11111b;
    
    A[📊 Raw Data + 🏷️ Labels] --> B(🤖 Model Training)
    C[👨‍🏫 Teacher / Ground Truth] -->|Guides| B
    B --> D[🔮 Predictive Output]
    D --> E{🎯 Evaluation}
    E -->|Error Feedback| B
    
    class C highlight;
```


---
id: 5
layout: center
class: text-center
---

<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" :speed="0.003" :thickness="60" baseColor="#00ffff" />
# <span class="pt-6 block">Machine Learning Approaches</span>

## Unsupervised Learning
```mermaid
graph TD
    %% Define Theme Style
    classDef default fill:#1e1e2e,stroke:#313244,stroke-width:1px,color:#cdd6f4;
    classDef discovery fill:#a6e3a1,stroke:#a6e3a1,stroke-width:2px,color:#11111b;
    
    X[📊 Raw Data Only] --> Y(🤖 Self-Organization)
    Y --> Z{🧩 Hidden Patterns}
    
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

# <span class="pt-12 block">Centroid-Based Partitioning: K-Means</span>

<PlotlyFigure
  src="kmeans.json"
  caption="Figure 1: Clustering into k Groups"
  width="90%"
  height="320px"
  :fontSize="12"
/>

---
layout: default
name: kmeans-properties
---

# 06. K-Means: Algorithmic Properties & Constraints

### 🧠 Core Mathematical Underpinnings
* **Distance Dependency:** Relies heavily on Euclidean distance metrics; features with larger absolute scales will disproportionately dominate cluster assignments.
* **Objective Function:** Iteratively minimizes the Within-Cluster Sum of Squares (WCSS) or inertia, finding local rather than global minima.
* **Time Complexity:** Highly efficient linear scale of $\mathcal{O}(n \cdot k \cdot i)$ where $n$ is data points, $k$ is clusters, and $i$ is iterations.

### ⚠️ Structural Limitations & Assumptions
* **Spherical Bias:** Natively assumes clusters are isotropic (spherical, convex, and of similar sizes). It completely fails on complex topologies like concentric circles or interlocking rings.
* **Initialization Sensitivity:** Poor initial random placement can lead to suboptimal local optima layouts (mitigated in production via `K-Means++`).
* **Outlier Vulnerability:** A single extreme data point dramatically skews the mean calculation, distorting the final centroid location.

### 💼 MBA Strategic Takeaway
* **Best Suited For:** Massive, structured transaction databases where computational speed is prioritized over geometric flexibility.
* **Classic Use Case:** Rapid RFM (Recency, Frequency, Monetary) value bucketing for automated, high-velocity digital marketing engines.

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
