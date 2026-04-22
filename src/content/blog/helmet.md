---
title: "HELMET: A Fresh Look at Context-Length Evaluation in LLMs"
description: "A benchmark system for evaluating LLMs across long contexts — summarization, long-doc QA, RAG, re-ranking, and generation with citations — beyond synthetic needle-in-a-haystack tests."
pubDate: "2025-06-23"
heroImage: "/images/posts/HELMET/HELMET-logo.png"
tags: ["llms", "long-context", "evaluation"]
---

<p align="center">
    <img src="/images/posts/HELMET/HELMET-logo.png" alt="Helmet logo, from their github" width="60">
</p>

# HELMET: A Fresh Look at Context-Length Evaluation in LLMs

Following up on my previous posts, I'm still on a mission to better understand how LLMs perform (and fail) when dealing with **different context lengths**. That’s why I dived into this paper: [HELMET: Holistic Evaluation of Language Models on Extended Text](https://buff.ly/3Qp4hNd), by Howard Yen, Tianyu Gao, Minmin Hou, Ke Ding, Daniel Fleischer, Peter Izsak, Moshe Wasserblat, and  Danqi Chen. You can take a look at the code on the following [link](https://github.com/princeton-nlp/HELMET) as well.

The authors propose a very interesting benchmark system called **HELMET**.

---

## 🧪 What's HELMET about?

HELMET sets up a benchmark that includes both classic and newer tasks. Think:

- Summarization
- Long document QA
- RAG
- Passage re-ranking
- Generation with citations (this one's getting more attention lately)

<p align="center">
    <img src="/images/posts/HELMET/HELMET_features.png" alt="HELMET feature summary, from the paper">
</p>

But what really caught my eye is their the smart way on which they use models-as-a-judge in the loop.

---

## 🤖 Metrics meet Judges

HELMET introduces a twist: **augmenting traditional metrics with a model-in-the-loop judge**. Instead of relying solely on fixed metrics like ROUGE — which, let’s be honest, often reward surface-level word overlap — they add a judge model to assess whether an answer actually makes sense.

This brings evaluations closer to how humans would reason. ROUGE might tell you that an answer looks similar to a reference, but it won’t tell you whether it’s actually **right** or **useful**. HELMET’s approach aims to bridge that gap.

Of course, there’s a tradeoff. Having a model act as judge introduces **non-determinism** — so by definition, this isn’t a pure metric anymore. That’s a flaw. But if the judge is a powerful model (e.g. GPT-4o) and the tasks aren’t too ambiguous, that non-determinism can be reduced. Still worth keeping in mind.

<p align="center">
    <img src="/images/posts/HELMET/HELMET-correlation.png" alt="Spearman rank correlation between categories at L=128K. from the paper" width="300">
</p>

---

## 📉 What about results?

One fun example: **Claude 3.5 Sonnet**. It tends to include too much helpful preamble or explanation along with its answers. While that’s nice from a user experience perspective, it gets **penalized in ROUGE-based evaluations** like NarrativeQA F1. But! When evaluated using a model-as-a-judge, its performance looks much better.

<p align="center">
    <img src="/images/posts/HELMET/HELMET-fig6.png" alt="Figure 6 from the paper, take a deep look about evaluation and performance degradation">
</p>

So, **context matters — but so does how you evaluate it**.

Figures 6 and 7 in the paper show clear trends of performance degradation as context length increases. But we’re not at the point where we can extract a clear "rule-of-thumb" for that.

That said, there *is* a visible difference between open-source and closed-source models. Open-source models tend to degrade faster with longer contexts. If I had to guess:

- **Closed-source models** become shaky beyond **32k–64k** tokens.
- **Open-source models** start degrading around **8k–16k**.

<p align="center">
    <img src="/images/posts/HELMET/HELMET-fig7.png" alt="Figure 7 from the paper">
</p>

(Just a note — the paper was published back in **October**, so the included models were from before that.)

---

## 🧠 Final thoughts

HELMET isn't perfect, but it’s a really welcome step toward more realistic evaluation frameworks. Especially in the era of LLMs handling massive contexts, we need smarter ways to measure *how well* they understand and reason over them.

And as always — context is everything, but **how we measure understanding** might matter even more.

