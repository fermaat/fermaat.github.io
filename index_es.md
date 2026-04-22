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
### Sobre mí

Soy Senior AI Scientist y Tech Lead con más de una década de experiencia tendiendo puentes entre la matemática teórica y las soluciones de IA en producción. Mi especialidad es diseñar y liderar el desarrollo de sistemas complejos, desde **arquitecturas neuro-simbólicas** y **orquestación de LLMs** hasta pipelines de alta precisión de **ASR y Computer Vision**.

Actualmente lidero squads de IA especializados en transformar requisitos de negocio ambiguos en PoCs de alto impacto y productos escalables. Este portfolio funciona como mi **laboratorio personal de IA**: un espacio para explorar el estado del arte, compartir análisis en profundidad del funcionamiento interno de los modelos y experimentar con las tecnologías que están dando forma al futuro de la inteligencia.

---
### Proyectos destacados y laboratorio experimental

* **Translation Agents Lab**: Framework multi-agente experimental para traducción automática usando LLMs open-source. Explora la toma de decisiones colaborativa entre modelos para superar los benchmarks tradicionales de traducción.
    * **Tecnologías:** AI Agents, LLMs open-source, RAG, frameworks de evaluación.
    * [Ver en GitHub](https://github.com/fermaat/translation-agents-lab)
* **FashionCLIP**: Pipeline de deep learning para fine-tuning de modelos multi-modales de visión sobre datasets personalizados. Implementación de Triplet Loss y métricas propias para búsqueda semántica.
    * **Tecnologías:** PyTorch, Transformers multi-modales, Fine-Tuning, arquitectura de modelos.
    * [Ver en GitHub](https://github.com/fermaat/FashionCLIP#)
* **LoRA Fine-tuning**: Implementación práctica y análisis de Low-Rank Adaptation para el ajuste eficiente de LLMs.
    * **Tecnologías:** PyTorch, Transformers, PEFT (LoRA, QLoRA), arquitectura de modelos.
    * [Ver en GitHub](https://github.com/fermaat/LoRA-fine-tuning#)
* **nanoGPT desde cero**: Reimplementación didáctica de modelos de lenguaje autoregresivos para dominar los fundamentos de las arquitecturas Transformer modernas.
    * **Tecnologías:** PyTorch a nivel de investigación, entrenamiento de Transformers, modelado del lenguaje.
    * [Ver en GitHub](https://github.com/fermaat/nano-gpt-from-scratch)
* **Curso de Fundamentos de Deep Learning**: Currículo completo diseñado e impartido en **AFI Escuela de Finanzas**. Incluye teoría avanzada e implementaciones prácticas de Vision Transformers, detección de objetos y modelos generativos.
    * **Habilidades:** Liderazgo técnico, mentoría, comunicación de temas complejos.
    * [Ver en GitHub](https://github.com/fermaat/afi_deep_learning_intro)
* **AWS_RAG**: Sistema RAG serverless para procesamiento inteligente de documentos y Q&A a escala.
    * **Tecnologías:** AWS (Lambda, OpenSearch, Bedrock), bases de datos vectoriales, RAG.
    * [Ver en GitHub](https://github.com/fermaat/AWS_RAG)
* **HomeSync AI**: Aplicación de gestión del hogar con IA que aprovecha LLMs multi-modales para digitalización de documentos y analítica inteligente.
    * **Tecnologías:** Google Gemini Pro Vision, OCR, Streamlit, Python.
    * [Ver en GitHub](https://github.com/fermaat/HomeSync_AI)

---
### Líneas de investigación actuales

Aunque buena parte de mi trabajo reciente es propietario, estoy explorando e implementando activamente las siguientes fronteras de la Inteligencia Artificial:

* **IA Neuro-simbólica:** Desarrollo de arquitecturas híbridas que combinan el razonamiento y la trazabilidad de la IA simbólica (grafos de conocimiento y lógica basada en reglas) con la capacidad perceptiva de las redes neuronales (LLMs). El objetivo es resolver los problemas de "caja negra" y alucinaciones en insights empresariales sobre datos.
* **LLM-as-Judge y frameworks de evaluación:** Diseño de métricas robustas y automatizadas para evaluar la coherencia y profundidad de los modelos, yendo más allá de los benchmarks simples para garantizar una personalización de alta calidad en producción.
* **Orquestación agéntica:** Diseño de sistemas donde múltiples agentes LLM especializados colaboran para resolver tareas complejas y multi-paso, optimizando tanto la precisión como la eficiencia computacional.

---


### Premios y reconocimientos
- **Medalla de Bronce**, [Hackathon NLP en español 2022](https://somosnlp.org/blog/hackathon-2022)
  - **Innovación:** Arquitectura novedosa basada en T5 para generación de texto en español con lenguaje inclusivo.
  - **Impacto técnico:** Fine-tuning de T5 con tokenización personalizada, superando a los modelos base en un 22% en evaluación humana.
  - **Rol:** Lead técnico e investigador principal.

---
### Artículos y análisis en profundidad

Creo que el verdadero dominio de una materia llega cuando entiendes el "porqué" detrás del "cómo". Estos son mis últimos artículos técnicos, donde desgranar conceptos complejos de IA en conocimiento accionable. También puedes encontrarme en [**Medium**](https://medium.com/@fermaat.vl).

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ site.baseurl }}{{ post.url }}"><strong>{{ post.title }}</strong></a>
      <p style="margin: 0.2em 0; color: #555;"><em>{{ post.excerpt | strip_html | truncatewords: 25 }}</em></p>
    </li>
  {% endfor %}
</ul>
