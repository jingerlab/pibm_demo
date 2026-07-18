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
layout: two-cols
class: text-center
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
