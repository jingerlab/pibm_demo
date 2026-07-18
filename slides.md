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
layout: two-cols-title
id: 2
---

<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" :speed="0.003" :thickness="100" baseColor="#00ffff" />
# 02. The Business Problem
## Why Do We Need Unsupervised Clustering?

::left::

### The Core Executive Challenge
Modern enterprises are drowning in high-dimensional data, yet starving for actionable insights. Standard analytical frameworks rely on rigid, pre-defined rules that miss hidden behavioral dynamics.

> **The Strategic Shift:** Moving from *Intuition-Driven* heuristics ("Let's target users aged 25–35") to *Data-Driven* micro-segmentation discovered directly via mathematical feature topology.

<div class="mt-6 border-l-4 border-emerald-500 pl-4">
  <span class="text-sm font-bold text-gray-400 uppercase tracking-wider block">Core Value Proposition</span>
  <span class="text-lg font-semibold text-emerald-400">Transforming raw transactional noise into hyper-targeted operational strategies.</span>
</div>

::right::

### 3 Core Strategic Pillars

*   <span class="text-emerald-400 font-bold">1. Hyper-Personalized Customer Segmentation</span>
    *   **Problem:** One-size-fits-all marketing yields low conversion rates and burns ad spend.
    *   **Solution:** Clustering multidimensional customer behaviors (e.g., RFM metrics) to unlock micro-personas for tailored loyalty and win-back campaigns.

*   <span class="text-emerald-400 font-bold">2. Risk Management & Fraud Detection</span>
    *   **Problem:** Fraudulent financial patterns change faster than rule-based systems can be updated.
    *   **Solution:** Isolating anomalies and irregular behavioral clusters natively using density-based algorithms to flag high-risk transactions instantly.

*   <span class="text-emerald-400 font-bold">3. Product Recommendations & Cross-Selling</span>
    *   **Problem:** Low average order value (AOV) due to static inventory layouts.
    *   **Solution:** Grouping products based on co-purchase histories to dynamically bundle items, optimizing both margins and supply chain allocation.


---
layout: default
id: 3
---

# 03. Data Showcase & Preprocessing Blueprint
## Raw E-Commerce Transactional Metrics (RFM Baseline Dataset)

<div class="grid grid-cols-3 gap-4 mb-4">
  <div class="bg-gray-800/50 p-3 rounded border border-gray-700">
    <span class="text-xs text-gray-400 block uppercase font-mono">Dataset Scale</span>
    <span class="text-xl font-bold text-emerald-400 font-mono">100,000+ Rows</span>
  </div>
  <div class="bg-gray-800/50 p-3 rounded border border-gray-700">
    <span class="text-xs text-gray-400 block uppercase font-mono">Target Dimensions</span>
    <span class="text-xl font-bold text-emerald-400 font-mono">3 Continuous Core Features</span>
  </div>
  <div class="bg-gray-800/50 p-3 rounded border border-gray-700">
    <span class="text-xs text-gray-400 block uppercase font-mono">Preprocessing Goal</span>
    <span class="text-xl font-bold text-emerald-400 font-mono">Z-Score Normalization</span>
  </div>
</div>

<!-- Scrollable Table Container -->
<div class="overflow-y-auto max-h-68 border border-gray-700 rounded shadow-inner custom-scrollbar">
  <table class="w-full text-left text-sm border-collapse">
    <thead class="bg-gray-800 sticky top-0 border-b border-gray-700">
      <tr>
        <th class="p-3 font-mono font-bold text-emerald-400">CustomerID</th>
        <th class="p-3 font-mono font-bold text-emerald-400 text-right">Recency (Days)</th>
        <th class="p-3 font-mono font-bold text-emerald-400 text-right">Frequency (Orders)</th>
        <th class="p-3 font-mono font-bold text-emerald-400 text-right">Monetary Value ($)</th>
        <th class="p-3 font-bold text-blue-400">Core Persona Intuition</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-800 bg-gray-900/40">
      <tr>
        <td class="p-3 font-mono text-gray-400">#14920</td>
        <td class="p-3 font-mono text-right text-emerald-400">3</td>
        <td class="p-3 font-mono text-right text-emerald-400">82</td>
        <td class="p-3 font-mono text-right text-emerald-400">14,250.00</td>
        <td class="p-3 text-xs text-gray-300">High-value, highly active corporate client.</td>
      </tr>
      <tr class="bg-gray-800/20">
        <td class="p-3 font-mono text-gray-400">#12844</td>
        <td class="p-3 font-mono text-right text-emerald-400">12</td>
        <td class="p-3 font-mono text-right text-emerald-400">4</td>
        <td class="p-3 font-mono text-right text-emerald-400">120.50</td>
        <td class="p-3 text-xs text-gray-300">Frequent low-tier buyer, highly responsive to sales.</td>
      </tr>
      <tr>
        <td class="p-3 font-mono text-gray-400">#17391</td>
        <td class="p-3 font-mono text-right text-emerald-400">241</td>
        <td class="p-3 font-mono text-right text-emerald-400">1</td>
        <td class="p-3 font-mono text-right text-emerald-400">2,100.00</td>
        <td class="p-3 text-xs text-gray-300">Lapsed wholesale buyer. High risk of complete churn.</td>
      </tr>
      <tr class="bg-gray-800/20">
        <td class="p-3 font-mono text-gray-400">#15002</td>
        <td class="p-3 font-mono text-right text-emerald-400">45</td>
        <td class="p-3 font-mono text-right text-emerald-400">18</td>
        <td class="p-3 font-mono text-right text-emerald-400">890.00</td>
        <td class="p-3 text-xs text-gray-300">Standard consistent active consumer retail footprint.</td>
      </tr>
      <tr>
        <td class="p-3 font-mono text-gray-400">#16211</td>
        <td class="p-3 font-mono text-right text-emerald-400">6</td>
        <td class="p-3 font-mono text-right text-emerald-400">2</td>
        <td class="p-3 font-mono text-right text-emerald-400">45.00</td>
        <td class="p-3 text-xs text-gray-300">New acquisition. Needs tracking for secondary purchase.</td>
      </tr>
      <tr class="bg-gray-800/20">
        <td class="p-3 font-mono text-gray-400">#19022</td>
        <td class="p-3 font-mono text-right text-emerald-400">312</td>
        <td class="p-3 font-mono text-right text-emerald-400">1</td>
        <td class="p-3 font-mono text-right text-emerald-400">15.00</td>
        <td class="p-3 text-xs text-gray-300">One-time bargain browser. Low priority cohort.</td>
      </tr>
    </tbody>
  </table>
</div>

<span class="text-xs text-gray-500 mt-2 block italic">
  *Note for the Expert Panel: Notice the extreme unit variance. Without logarithmic scaling or standard Z-scoring, the distance metrics will completely collapse under the magnitude of the Monetary dimension.*
</span>

<style>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(31, 41, 55, 0.5);
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(16, 185, 129, 0.4);
  border-radius: 3px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(16, 185, 129, 0.7);
}
</style>



---
layout: center
class: text-center
id: 2
---

<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" :speed="0.003" :thickness="100" baseColor="#00ffff" />

# Thank You
<span class='text-xs'> *Presented by* </span> <br>
<span class="font-display">Harsh Jinger</span>

## Clustering Methods

<div @click="$slidev.nav.next" class="mt-12 py-1 text-xs opacity-40">
  End of Presentation
</div>
