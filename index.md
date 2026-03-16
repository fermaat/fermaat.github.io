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

I am a Senior AI Scientist and Tech Lead with over a decade of experience bridging the gap between theoretical mathematics and production-grade AI solutions. My expertise lies in designing and leading the development of complex systems, from **Neuro-symbolic architectures** and **LLM orchestration** to high-precision **ASR and Computer Vision** pipelines.

Currently, I lead specialized AI squads in transforming ambiguous business requirements into high-impact PoCs and scalable products. This portfolio serves as my **personal AI Lab**: a space where I explore the state-of-the-art, share deep-dives into model internals, and experiment with the technologies that are shaping the future of intelligence.

---
### Featured Projects & Experimental Lab

* **Translation Agents Lab**: Experimental multi-agent framework for Machine Translation using open-source LLMs. Exploring collaborative decision-making between models to surpass traditional translation benchmarks.
    * **Technologies:** AI Agents, Open-source LLMs, RAG, Evaluation Frameworks.
    * [View on GitHub](https://github.com/fermaat/translation-agents-lab)
* **FashionCLIP**: Deep learning pipeline for fine-tuning multi-modal vision models on custom datasets. Implementation of Triplet Loss and custom metric definitions for semantic search.
    * **Technologies:** PyTorch, Multi-modal Transformers, Fine-Tuning, Model Architecture.
    * [View on GitHub](https://github.com/fermaat/FashionCLIP#)
* **LoRA Fine-tuning**: Hands-on implementation and analysis of Low-Rank Adaptation for efficient LLM steering.
    * **Technologies:** PyTorch, Transformers, PEFT (LoRA, QLoRA), Model Architecture.
    * [View on GitHub](https://github.com/fermaat/LoRA-fine-tuning#)
* **nanoGPT from scratch**: Educational reimplementation of autoregressive language models to master the fundamentals of modern Transformer architectures.
    * **Technologies:** Research-grade PyTorch, Transformer Training, Language Modeling.
    * [View on GitHub](https://github.com/fermaat/nano-gpt-from-scratch)
* **Deep Learning Foundations Course**: Comprehensive curriculum designed and taught at **AFI Escuela de Finanzas**. Includes advanced theory and practical implementations of Vision Transformers, Object Detection, and Generative Models.
    * **Skills:** Technical Leadership, Mentorship, Complex Topic Communication.
    * [View on GitHub](https://github.com/fermaat/afi_deep_learning_intro)
* **AWS_RAG**: Serverless RAG system built for intelligent document processing and question-answering at scale.
    * **Technologies:** AWS (Lambda, OpenSearch, Bedrock), Vector Databases, RAG.
    * [View on GitHub](https://github.com/fermaat/AWS_RAG)
* **HomeSync AI**: AI-powered household management application leveraging multi-modal LLMs for document digitization and smart analytics.
    * **Technologies:** Google Gemini Pro Vision, OCR, Streamlit, Python.
    * [View on GitHub](https://github.com/fermaat/HomeSync_AI)

---
### Current Research Pursuits

While much of my recent work is proprietary, I am actively exploring and implementing the following frontiers in Artificial Intelligence:

* **Neuro-symbolic AI:** Developing hybrid architectures that combine the reasoning and traceability of Symbolic AI (knowledge graphs and rule-based logic) with the perceptual power of Neural Networks (LLMs). This focus aims to solve the "black box" and hallucination problems in enterprise data insights.
* **LLM-as-Judge & Evaluation Frameworks:** Engineering robust, automated metrics to evaluate model coherence and depth, moving beyond simple benchmarks to ensure high-quality personalization in production. 
* **Agentic Orchestration:** Designing systems where multiple specialized LLM agents collaborate to solve complex, multi-step tasks, optimizing for both accuracy and computational efficiency.
---


### Awards & Recognitions  
- **Bronze Medal**, 2022 [Spanish NLP Hackathon](https://somosnlp.org/blog/hackathon-2022)
  - **Innovation:** Developed a novel T5-based architecture for gender-neutral Spanish text generation.
  - **Technical Impact:** Fine-tuned T5 with custom tokenization, outperforming baseline models by 22% in human evaluation.
  - **Role:** Technical Lead and Lead Researcher.

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