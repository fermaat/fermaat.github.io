---
title: "Titans: Neural Long-Term Memory for Enhanced Sequence Modeling"
description: "A paper that proposes test-time learnable long-term memory for LLMs, with a 'Surprise' metric that decides what in the context is worth remembering."
pubDate: "2025-06-20"
heroImage: "/images/posts/Titans/Titans0.png"
tags: ["llms", "long-context", "architecture"]
---

<p align="center">
    <img src="/images/posts/Titans/Titans0.png" alt="Awesome T, as pictured in the paper" width="60">
</p>


There’s been a lot of noise lately about scaling, trillion-parameter models, and ultra-long context lengths. But while most attention went to the usual suspects, one paper from the past few months really stood out to me — and maybe didn’t get the buzz it deserved:

📄 **Titans: Neural Long-Term Memory for Enhanced Sequence Modeling**  
🔗 [Link to paper](https://buff.ly/3WPXG1Q), Ali Behrouz, Peilin Zhong, and Vahab Mirrokni.

I think it’s a pretty interesting one. It basically brings an innovation to how models manage memory and context — something that’s getting more and more relevant these days.

---

### 🤯 Memory and Test Time

We already have LLMs that handle *massive* contexts (Gemini's around 2M tokens, if I'm not wrong). That’s cool, but let’s be honest — **longer doesn’t always mean better**. Sometimes, longer contexts just mean less attention to detail.

**Titans propose some kind of long-term memory** (yeah, LSTMs, I love seeing you again!) that **learns at test time**.

Let me repeat that: **at test time!**

The model dynamically identifies parts of the context and flags them as relevant or not — so it knows what to remember. It does this through a clever metric the authors defined: **“Surprise”** — which basically measures how much a piece of context changes over time. The more it surprises the model, the more attention it gets. 

<p align="center">
    <img src="/images/posts/Titans/Titans4.png" alt="Surprise! as defined in the paper" width="300">
</p>


---

### 🧠 Different Memory strategies

The authors propose three different approaches for using this memory module:

- **MAC**: Memory as context (add it to the input)
- **MAG**: Memory as a gate (like an LSTM-ish twist!)
- **MAL**: Memory as a layer (plug it in the architecture)

I personally liked **MAG** a lot — it gave me LSTM flashbacks in a good way. Instead of the usual gating, they use **sliding window attention** moving through time with memory outputs, which makes it much more adaptive. Feels like a neat evolution of the old tricks.

<p align="center">
    <img src="/images/posts/Titans/Titans2.png" alt="MAG architecture, as defined in the paper">
</p>

---

### 📊 The results? Titans-level.

The results are quite impressive, but my favorite part was the **“needle in a haystack”** test — you know, hiding info in a long context and seeing if the model can find it to answer questions.

Guess who was on top?  
**Of course, the Titans.**

---

### 🚀 Why I’m excited

This paper brought back some memories (pun intended) of earlier architectures but added a modern spin that I found super refreshing. I’m really looking forward to experimenting with this one and seeing what kind of impact it can have in real-world tasks where remembering matters.

Maybe it’s time memory made a real comeback.

