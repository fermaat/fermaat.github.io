// i18n string tables. English is the source of truth; Spanish mirrors the keys.
// Used across UI components (Sidebar, Card badges, CTAs, etc.).

export type Locale = "en" | "es";

export const defaultLocale: Locale = "en";

export const strings = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      blog: "Writing",
      cv: "CV",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      role: "Senior Applied Data Scientist & AI Tech Lead",
      lead_html: `Over a decade turning mathematical ideas into production-grade AI systems &mdash; <b>neuro-symbolic architectures</b>, <b>LLM orchestration</b>, <b>ASR</b>, and <b>Computer Vision</b> pipelines. I lead AI squads through ambiguous problems. This is where I write up the model internals and research I can share publicly.`,
      cta_projects: "See projects",
      cta_cv: "Download CV",
      cta_contact: "Get in touch",
    },
    sections: {
      featured_projects: "Featured projects",
      latest_writing: "Latest writing",
      research: "Current research pursuits",
      research_intro: "Much of my recent work is proprietary, but these are the frontiers I'm actively exploring:",
      research_items: [
        {
          title: "Neuro-symbolic AI",
          body: "hybrid architectures combining the reasoning and traceability of symbolic AI (knowledge graphs, rule-based logic) with the perceptual power of neural networks. Focused on solving the “black box” and hallucination problems in enterprise data insights.",
        },
        {
          title: "LLM-as-Judge & evaluation frameworks",
          body: "robust, automated metrics for model coherence and depth, moving beyond simple benchmarks to guarantee high-quality personalization in production.",
        },
        {
          title: "Agentic orchestration",
          body: "designing systems where specialized LLM agents collaborate on complex, multi-step tasks, optimizing for both accuracy and computational efficiency.",
        },
      ],
      awards: "Awards & recognitions",
      awards_title: "Bronze Medal",
      awards_venue: "Spanish NLP Hackathon 2022",
      awards_body: "Technical Lead and Lead Researcher. Novel T5-based architecture for gender-neutral Spanish text generation, outperforming baselines by 22% in human evaluation.",
      see_all_projects: "See all projects →",
      see_all_posts: "See all posts →",
    },
    projects_page: {
      title: "Projects",
      intro: "A selection of experimental labs, production systems, and educational work. Links open the project detail page; the GitHub repo is inside.",
    },
    project_detail: {
      back: "← Back to projects",
      featured_badge: "FEATURED",
      view_github: "View on GitHub",
      live_demo: "Live demo",
    },
    toggle: {
      theme_aria: "Toggle theme",
      locale_aria: "Switch language",
      locale_label: "ES",
    },
    footer: {
      built_with: "Built with",
      template: "template",
      source: "source",
    },
  },

  es: {
    nav: {
      home: "Inicio",
      projects: "Proyectos",
      blog: "Artículos",
      cv: "CV",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      role: "Senior Applied Data Scientist & AI Tech Lead",
      lead_html: `Más de una década convirtiendo ideas matemáticas en sistemas de IA a nivel producción &mdash; <b>arquitecturas neuro-simbólicas</b>, <b>orquestación de LLMs</b>, <b>ASR</b> y pipelines de <b>Computer Vision</b>. Lidero equipos de IA sobre problemas ambiguos. Este es el sitio donde documento el funcionamiento interno de los modelos y la investigación que puedo compartir públicamente.`,
      cta_projects: "Ver proyectos",
      cta_cv: "Descargar CV",
      cta_contact: "Escríbeme",
    },
    sections: {
      featured_projects: "Proyectos destacados",
      latest_writing: "Últimos artículos",
      research: "Líneas de investigación actuales",
      research_intro: "Parte de mi trabajo reciente es propietario, pero estas son las fronteras que estoy explorando activamente:",
      research_items: [
        {
          title: "IA neuro-simbólica",
          body: "arquitecturas híbridas que combinan el razonamiento y la trazabilidad de la IA simbólica (grafos de conocimiento, lógica basada en reglas) con la capacidad perceptiva de las redes neuronales. Enfoque en resolver los problemas de “caja negra” y alucinaciones en analítica empresarial.",
        },
        {
          title: "LLM-as-Judge y frameworks de evaluación",
          body: "métricas robustas y automatizadas para coherencia y profundidad del modelo, más allá de los benchmarks simples, para garantizar personalización de calidad en producción.",
        },
        {
          title: "Orquestación agéntica",
          body: "diseño de sistemas donde agentes LLM especializados colaboran en tareas complejas multi-paso, optimizando precisión y eficiencia computacional.",
        },
      ],
      awards: "Reconocimientos",
      awards_title: "Medalla de Bronce",
      awards_venue: "Hackathon NLP en español 2022",
      awards_body: "Lead técnico e investigador principal. Arquitectura novedosa basada en T5 para generación de texto en español con lenguaje inclusivo, superando a los modelos base en un 22% en evaluación humana.",
      see_all_projects: "Ver todos los proyectos →",
      see_all_posts: "Ver todos los artículos →",
    },
    projects_page: {
      title: "Proyectos",
      intro: "Una selección de laboratorios experimentales, sistemas en producción y trabajo educativo. Los enlaces abren la página de detalle; el repositorio de GitHub está dentro.",
    },
    project_detail: {
      back: "← Volver a proyectos",
      featured_badge: "DESTACADO",
      view_github: "Ver en GitHub",
      live_demo: "Demo",
    },
    toggle: {
      theme_aria: "Cambiar tema",
      locale_aria: "Cambiar idioma",
      locale_label: "EN",
    },
    footer: {
      built_with: "Hecho con",
      template: "plantilla",
      source: "fuente",
    },
  },
} as const;

export type Strings = typeof strings["en"];

export function t(locale: Locale): Strings {
  return strings[locale] ?? strings[defaultLocale];
}
