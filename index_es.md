---
layout: default
title: Fernando Velasco Lozano | AI Scientist
---
# Fernando Velasco Lozano
**AI Scientist & Data Science Team Lead**
<p align="center">
  <a href="https://www.linkedin.com/in/fernandovelascolozano/" target="_blank">LinkedIn</a> • 
  <a href="https://github.com/fermaat" target="_blank">GitHub</a> • 
  <a href="mailto:fermat.vl@gmail.com">Email</a> •
  <a href="https://medium.com/@fermaat.vl" target="_blank">Medium</a> •
  <a href="https://github.com/fermaat/fermaat.github.io/blob/main/files/CV_Fernando_Velasco_0525.pdf" target="_blank">CV</a>
</p>

---
### Sobre mí

Soy un Data Science Team Lead con una década de experiencia transformando desafíos de negocio en soluciones de IA de alto impacto. Mi especialidad es gestionar el ciclo de vida completo de modelos de Machine Learning, desde la investigación y el fine-tuning de LLMs/ASR hasta su despliegue y monitorización.

He liderado equipos y proyectos clave, logrando mejoras significativas en calidad y eficiencia para grandes compañías como Electronic Arts. Busco un rol senior como Data Scientist, ML Engineer o Researcher donde pueda aplicar mi visión técnica y experiencia práctica para resolver problemas complejos.

---
### Proyectos Destacados

* **HomeSync AI**: Un proyecto de IA para la gestión del hogar.
    * [Ver en GitHub](https://github.com/fermaat/HomeSync_AI)
* **LoRA Fine-tuning**: Implementación de LoRA para fine-tuning de modelos.
    * [Ver en GitHub](https://github.com/fermaat/LoRA-fine-tuning#)

---
### Mis Últimos Trabajos y Reflexiones

Aquí encontrarás mis **últimos proyectos, estudios de caso y artículos**, donde desgloso mi experiencia práctica y conocimientos en IA y Machine Learning. ¡Muchos de ellos también están disponibles en [**mi perfil de Medium**](https://medium.com/@fermaat.vl)!

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> - <small>{{ post.date | date: "%d-%m-%Y" }}</small>
    </li>
  {% endfor %}
</ul>
