---
layout: default
title: Fernando Velasco Lozano | AI Scientist & Tech Lead
---
# Fernando Velasco Lozano
**Senior Applied Data Scientist & AI Tech Lead**
<p align="center">
  <a href="https://www.linkedin.com/in/fernandovelascolozano/" target="_blank">LinkedIn</a> • 
  <a href="https://github.com/fermaat" target="_blank">GitHub</a> • 
  <a href="mailto:fermaat.vl@gmail.com">Email</a> •
  <a href="https://medium.com/@fermaat.vl" target="_blank">Medium</a> •
  <a href="https://fermaat.github.io/files/CV.pdf" target="_blank">CV</a>
</p>

---
### About Me

[cite_start]I am a Senior AI Scientist and Tech Lead with over a decade of experience bridging the gap between theoretical mathematics and production-grade AI solutions[cite: 55, 58, 59]. [cite_start]My expertise lies in designing and leading the development of complex systems, from **Neuro-symbolic architectures** and **LLM orchestration** to high-precision **ASR and Computer Vision** pipelines[cite: 59, 64, 65].

[cite_start]Currently, I lead specialized AI squads in transforming ambiguous business requirements into high-impact PoCs and scalable products[cite: 70, 71, 74]. This portfolio serves as my **personal AI Lab**: a space where I explore the state-of-the-art, share deep-dives into model internals, and experiment with the technologies that are shaping the future of intelligence.

---
### Featured Projects & Experimental Lab

* [cite_start]**Translation Agents Lab**: Experimental multi-agent framework for Machine Translation using open-source LLMs[cite: 64]. Exploring collaborative decision-making between models to surpass traditional translation benchmarks.
    * [cite_start]**Technologies:** AI Agents, Open-source LLMs, RAG, Evaluation Frameworks[cite: 49].
    * [View on GitHub](https://github.com/fermaat/translation-agents-lab)
* [cite_start]**FashionCLIP**: Deep learning pipeline for fine-tuning multi-modal vision models on custom datasets[cite: 91]. [cite_start]Implementation of Triplet Loss and custom metric definitions for semantic search[cite: 91].
    * [cite_start]**Technologies:** PyTorch, Multi-modal Transformers, Fine-Tuning, Model Architecture[cite: 51, 66].
    * [View on GitHub](https://github.com/fermaat/FashionCLIP#)
* [cite_start]**LoRA Fine-tuning**: Hands-on implementation and analysis of Low-Rank Adaptation for efficient LLM steering[cite: 51, 77].
    * [cite_start]**Technologies:** PyTorch, Transformers, PEFT (LoRA, QLoRA), Model Architecture[cite: 51, 66].
    * [View on GitHub](https://github.com/fermaat/LoRA-fine-tuning#)
* [cite_start]**nanoGPT from scratch**: Educational reimplementation of autoregressive language models to master the fundamentals of modern Transformer architectures[cite: 49, 51].
    * **Technologies:** Research-grade PyTorch, Transformer Training, Language Modeling.
    * [View on GitHub](https://github.com/fermaat/nano-gpt-from-scratch)
* [cite_start]**Deep Learning Foundations Course**: Comprehensive curriculum designed and taught at **AFI Escuela de Finanzas**[cite: 92, 93]. [cite_start]Includes advanced theory and practical implementations of Vision Transformers, Object Detection, and Generative Models.
    * [cite_start]**Skills:** Technical Leadership, Mentorship, Complex Topic Communication[cite: 60, 63, 94].
    * [View on GitHub](https://github.com/fermaat/afi_deep_learning_intro)
* [cite_start]**AWS_RAG**: Serverless RAG system built for intelligent document processing and question-answering at scale[cite: 49, 52].
    * **Technologies:** AWS (Lambda, OpenSearch, Bedrock), Vector Databases, RAG[cite: 52].
    * [View on GitHub](https://github.com/fermaat/AWS_RAG)
* **HomeSync AI**: AI-powered household management application leveraging multi-modal LLMs for document digitization and smart analytics[cite: 49, 64].
    * **Technologies:** Google Gemini Pro Vision, OCR, Streamlit, Python.
    * [View on GitHub](https://github.com/fermaat/HomeSync_AI)

---
### Current Research Pursuits

While much of my recent work is proprietary, I am actively exploring and implementing the following frontiers in Artificial Intelligence:

* **Neuro-symbolic AI:** Developing hybrid architectures that combine the reasoning and traceability of Symbolic AI (knowledge graphs and rule-based logic) with the perceptual power of Neural Networks (LLMs). [cite_start]This focus aims to solve the "black box" and hallucination problems in enterprise data insights. [cite: 7, 72]
* [cite_start]**LLM-as-Judge & Evaluation Frameworks:** Engineering robust, automated metrics to evaluate model coherence and depth, moving beyond simple benchmarks to ensure high-quality personalization in production. [cite: 15, 78]
* **Agentic Orchestration:** Designing systems where multiple specialized LLM agents collaborate to solve complex, multi-step tasks, optimizing for both accuracy and computational efficiency. [cite: 16, 79]
---


### Awards & Recognitions  
- [cite_start]**🥉 Bronze Medal**, 2022 [Spanish NLP Hackathon](https://somosnlp.org/blog/hackathon-2022) [cite: 87]
  - **Innovation:** Developed a novel T5-based architecture for gender-neutral Spanish text generation[cite: 87].
  - **Technical Impact:** Fine-tuned T5 with custom tokenization, outperforming baseline models by 22% in human evaluation[cite: 87].
  - **Role:** Technical Lead and Lead Researcher[cite: 87].

---
### Thought Leadership & Deep Dives

I believe that true mastery comes from understanding the "why" behind the "how". Here are my latest technical articles and insights, where I break down complex AI concepts into actionable knowledge. You can also find me on [**Medium**](https://medium.com/@fermaat.vl).

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ site.baseurl }}{{ post.url }}"><strong>{{ post.title }}</strong></a>
      <p style="margin: 0.2em 0; color: #555;"><em>{{ post.excerpt | strip_html | truncatewords: 25 }}</em></p>
    </li>
  {% endfor %}
</ul>