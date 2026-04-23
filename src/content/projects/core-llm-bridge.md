---
title: "core-llm-bridge"
title_es: "core-llm-bridge"
description: "Provider-agnostic LLM abstraction layer. One interface for Ollama, OpenAI, and Anthropic — sync, async, streaming — with conversation state, tool calling, and typed errors."
description_es: "Capa de abstracción LLM agnóstica del proveedor. Una única interfaz para Ollama, OpenAI y Anthropic — síncrono, asíncrono, streaming — con estado de conversación, tool calling y errores tipados."
tech: ["Python 3.12+", "Pydantic v2", "httpx", "Ollama", "OpenAI", "Anthropic"]
featured: true
github: "https://github.com/fermaat/core-llm-bridge"
image: "/images/projects/core-llm-bridge.png"
order: 2
---

A clean, provider-agnostic bridge over the LLM landscape. Downstream projects talk to a single `BridgeEngine` and swap models or providers without changing application code. Covers sync, async, and streaming for Ollama, OpenAI, and Anthropic, with a typed conversation buffer, a prompt-template manager, and per-provider exception hierarchy. Built as the shared substrate for my own LLM experiments.
