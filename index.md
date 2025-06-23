---
layout: default
title: Fernando Velasco Lozano | AI Scientist
---
# Fernando Velasco Lozano
**AI Scientist & Data Science Team Lead**
<p align="center">
  <a href="https://www.linkedin.com/in/fernandovelascolozano/" target="_blank">LinkedIn</a> • 
  <a href="https://github.com/fermaat" target="_blank">GitHub</a> • 
  <a href="mailto:fermaat.vl@gmail.com">Email</a> •
  <a href="https://medium.com/@fermaat.vl" target="_blank">Medium</a> •
  <a href="https://fermaat.github.io/files/CV.pdf" target="_blank">CV</a>
</p>

---
### About Me

I am an AI Scientist with a decade of experience leading teams and transforming complex business challenges into high-impact AI solutions. My passion lies in managing the full lifecycle of Machine Learning models, from **research and fine-tuning of LLMs/ASR/multi-modal models** to their robust deployment and monitoring.

After leading key projects and driving significant improvements in quality and efficiency at **Electronic Arts**, I am now actively seeking a senior role as a **Data Scientist, ML Engineer, or Researcher**. I am looking for a team where I can apply my technical vision and hands-on experience to build the next generation of AI products.

---
### Featured Projects

* **HomeSync AI**: An an innovative application designed to streamline household management by leveraging advanced AI capabilities, specifically Google's Gemini Pro Vision model. This project aims to digitize grocery receipts, analyze spending habits, and provide smart recommendations for household purchases.
    * **Technologies:** Google Gemini Pro Vision, OCR, Streamlit, Python.
    * [View on GitHub](https://github.com/fermaat/HomeSync_AI)
* **LoRA Fine-tuning**: Implementation of LoRA for model fine-tuning.
    * **Technologies:** PyTorch, Transformers, LLM, Fine-Tuning (LoRA, QLoRA), Model Architecture.
    * [View on GitHub](https://github.com/fermaat/LoRA-fine-tuning#)
* **nanoGPT from scratch**: A replication and educational reimplementation of Karpathy's nanoGPT, following the Zero To Hero lecture series.
    * **Technologies:** Research, PyTorch, Transformers, Training, Model Architecture, Language Models.
    * [View on GitHub](https://github.com/fermaat/nano-gpt-from-scratch)
* **Deep Learning Foundations Course**: Practical materials from a short course personally designed and developed from scratch and taught at [AFI Escuela de Finanzas](https://www.afiglobaleducation.com) in 2020. It combines theory, practice, and guided solutions for building a deep understanding of deep learning fundamentals.
    * **Skills Demonstrated:** Technical Leadership, Complex Topic Communication, Deep Learning (PyTorch, Keras), Teaching.
    * [View on GitHub](https://github.com/fermaat/afi_deep_learning_intro)

* **Translation Agents Lab**: Multi-agent Lab tests for Machine Translation with open-source models
    * [View on GitHub](https://github.com/fermaat/translation-agents-lab)
    * **Technologies:** Agents, open-source LLM, Translation pipelines, RAG, Evaluation frameworks
    * 🚧 Test repo mostly. This is Under Development!

* **AWS_RAG**: A serverless RAG (Retrieval-Augmented Generation) system built on AWS that automatically processes PDF documents and provides intelligent question-answering capabilities.
    * [View on GitHub](https://github.com/fermaat/AWS_RAG)
    * **Technologies:** AWS, PDF, RAG, Lambda, OpenSearch, Bedrock



### Awards & Recognitions  
- **🥉 Bronze Medal**, 2022 [Spanish NLP Hackathon](https://somosnlp.org/blog/hackathon-2022)
  - Innovation: Developed a novel T5-based architecture for gender-neutral Spanish text generation, addressing linguistic bias in generative AI.
  - Technical Approach: Fine-tuned T5 with custom tokenization and contextual alignment to preserve semantic coherence while removing gender markers.
  - Validation: Designed evaluation metrics for gender neutrality and fluency, outperforming baseline models by 22% (human eval).
  - Role: Led end-to-end research, from experimental design to final submission.

---
### My Latest Work & Insights

Here you'll find my **latest projects, case studies, and articles**, where I break down my practical experience in AI. Many are also available on [**my Medium profile**](https://medium.com/@fermaat.vl)!

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
      <p style="margin: 0.2em 0;"><em>{{ post.excerpt | strip_html | truncatewords: 30 }}</em></p>
    </li>
  {% endfor %}
</ul>
