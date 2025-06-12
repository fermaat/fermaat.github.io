---
layout: default
title: "CRNNs: You don't always need a Transformer"
date: 2025-06-12
---

![Architecture, as proposed in the paper](https://github.com/fermaat/fermaat.github.io/blob/main/files/images/CRNNs/CRNN1.png?raw=true)

# CRNNs: You don't always need a Transformer

With all the excitement around **Vision-Language Models (VLMs)**  it's easy to forget some of the deep learning classics that have quietly solved hard problems for years.

One of those is the **Convolutional Recurrent Neural Network (CRNN)**. It's not flashy, but it's elegant, modular, and surprisingly effective for tasks like **scene text recognition**, **handwriting transcription**, or even **speech**. Please note the approach I'm refering to was proposed by Shi et al. in their CRNN [paper](https://arxiv.org/abs/1507.05717) (2016), where they combine CNNs with RNNs and CTC for scene text recognition.

---

### 💡 Why CRNNs Still Matter

The magic of CRNNs is in how they turn **images into sequences** — a bridge that still matters, even in the Transformers multi-modal era.

Let’s break it down:

---

### CNN Component

The **convolutional layers** serve as a feature extractor. What’s great is their ability to:
- Extract **hierarchical visual features**
- Maintain **spatial relationships**
- Support interchangeable backbones (e.g., **MobileNet** if you want a faster model)

> Want a lighter model? Swap in MobileNet or ShuffleNet and you're good to go.

### Mapping to Sequence
Once you have the feature maps, the model:
- Transforms them **from a 2D map to a 1D sequence** (usually left-to-right)
- Converts each **column** of the feature map into a **feature vector**

It’s such a simple idea — yet so effective for turning images into something sequence-friendly.
![As the paper says: *Each vector in the extracted feature sequence is associated with a receptive field on the input image, and can be considered as the feature vector of that field*](https://github.com/fermaat/fermaat.github.io/blob/main/files/images/CRNNs/CRNN2.png?raw=true)

### RNN Layer
This is where things get interesting. Each feature vector (from left to right) becomes input to a **Bidirectional RNN**:

- Typically, **BiLSTM** or **BiGRU**
- Processes each timestep with **context from both past and future**
- Helps model **spatial and semantic continuity** in the image

Bidirectionality is crucial here — one direction alone just doesn’t cut it.
![BILSTM, as pictured on the paper](https://github.com/fermaat/fermaat.github.io/blob/main/files/images/CRNNs/CRNN3.png?raw=true)

### Transcription Layer (CTC Loss)
Probably the most elegant piece of the architecture — but also the most mysterious at first — is the **CTC Loss**.

- It maps **many outputs** (from RNN) to **few predictions** (e.g., characters or tokens)
- Avoids the need for pre-aligned labels
- Handles variable-length sequences naturally

> I could write a whole post on **Connectionist Temporal Classification (CTC)** alone — and maybe I will! 😊

### Pseudocode draft

```python
# Pseudocode (PyTorch-like)
# CNN (Feature extractor)
features = cnn_backbone(image)  # shape: (B, C, H, W)
# Let's get into the RNN wolrd Perpendicularity
# Convert feature map to sequence (e.g., collapse H)
features = features.permute(0, 3, 1, 2)  # (B, W, C, H)
sequence = features.flatten(3)           # (B, W, C * H)
sequence = sequence.permute(1, 0, 2)     # (W, B, C*H) → time-first for RNN

# RNN layer
rnn_out, _ = BiLSTM(hidden_size)(sequence)  # (W, B, H)
```

🧠 Why I Still Love This Architecture
CRNNs might not be the hottest topic right now, but their composability and efficiency make them hard to ignore. In many production pipelines — especially those with compute constraints — they remain incredibly useful.

👀 Up Next
In a follow-up post, I’ll explore the CTC Loss, decoding tricks, and how it elegantly solves alignment for sequences.

If you're into neural architectures that just work, hit follow or let me know your thoughts!

---
### 📚 References

1. Shi, B., Bai, X., & Yao, C. (2016). [An End-to-End Trainable Neural Network for Image-based Sequence Recognition and Its Application to Scene Text Recognition](https://arxiv.org/abs/1507.05717). *arXiv preprint arXiv:1507.05717*.