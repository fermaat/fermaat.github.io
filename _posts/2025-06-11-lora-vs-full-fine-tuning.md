---
layout: default
title: "LoRA vs Full Fine-Tuning: A Beautiful Illusion of Equivalence"
date: 2025-06-11
---
![LoRA vs Full Fine-Tuning: Visualizing Intruder Dimensions](https://github.com/fermaat/fermaat.github.io/blob/main/files/images/Lora/Lora1.png?raw=true)

# LoRA vs Full Fine-Tuning: A Beautiful Illusion of Equivalence?

Some ideas in machine learning just click the moment you encounter them. For me, **LoRA (Low-Rank Adaptation)** was one of those ideas. Elegant, efficient, and surprisingly powerful, it’s now a familiar tool in the fine-tuning toolkit for many working with large pre-trained models.

Recently, I came across a paper that adds a fascinating twist to the LoRA narrative:
**“LoRA vs Full Fine-Tuning: An Illusion of Equivalence”** [paper link](https://arxiv.org/pdf/2410.21228).

The authors take a critical look at how LoRA fine-tuning actually differs from full fine-tuning, and the result is a beautifully detailed study that dives into the deeper mechanics of what’s going on inside these models. It also gives language to a phenomenon that, intuitively, I already suspected: **LoRA tends to forget part of the pre-training knowledge.**

This isn't too surprising if you consider how LoRA works. By introducing a low-rank update (i.e., fewer parameters), it naturally has lower representational complexity. That means it can adapt more quickly to new domains or tasks, but at the cost of potentially discarding or "overwriting" some of the original pre-trained knowledge. That trade-off is actually part of what makes LoRA powerful: it specializes fast and efficiently. But it also raises questions.

## Enter: Intruder Dimensions
One of the most fascinating parts of the paper is how the authors formalize this forgetting through a concept they call intruder dimensions. Here’s the idea:

Imagine we decompose the model weights using **Singular Value Decomposition (SVD)**—once for the pre-trained model, and once after applying LoRA. If we compare the resulting singular vectors, the intruder dimensions are those with **high singular values** in the LoRA version that are **orthogonal to the singular vectors from pre-training**. In simple terms, these are new directions in the weight space that LoRA has introduced—directions that were not emphasized in the original model.

This is a compelling lens through which to view forgetting. These "intruding" directions aren’t just slight adjustments to existing knowledge; they represent a **shift** in what the model considers important.

![Lora slightly modifies singular vectors, from the paper](https://github.com/fermaat/fermaat.github.io/blob/main/files/images/Lora/Lora2.png?raw=true)

## Pseudo Loss and the U-Shape Curve
Another highlight is the paper’s introduction of **pseudo loss**, which (informally) measures how much of the pre-training knowledge has been lost. I found this particularly elegant. One of the plots shows a curious **U-shape curve** when varying the LoRA rank. It made me wonder: Is there an optimal rank value that balances specialization with memory retention?

![U-shape curve on MLI](https://github.com/fermaat/fermaat.github.io/blob/main/files/images/Lora/Lora3.png?raw=true)

It certainly seems like it.

## A Matrix Product Suspect
Coming back to intruder dimensions, I couldn’t help but speculate a bit. The paper shows that different hyperparameters have a direct impact on the emergence of these dimensions. If I had to pick a main suspect, it would be the **matrix product** at the heart of LoRA.

It reminds me of early issues with **exploding gradients in RNNs**, where certain architectural choices had unexpectedly large effects. LoRA, being a low-rank perturbation, might have a similar sensitivity. Even subtle changes to rank, learning rate, or initialization can probably influence how much of the original representation space is preserved—or overwritten.

## Wrapping Up

LoRA’s beauty lies in its simplicity, but papers like this remind us that simple doesn't mean shallow. There's a rich interplay between adaptation, memory, and geometry happening under the hood.

If you're using LoRA in your work—or just curious about what happens when we fine-tune large models with small updates—I highly recommend reading the full paper. It’s a great reminder that in deep learning, **what we don’t tune might matter just as much as what we do.**