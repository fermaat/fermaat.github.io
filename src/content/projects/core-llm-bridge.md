---
title: "core-llm-bridge"
description: "Provider-agnostic LLM abstraction layer. One interface for Ollama, OpenAI, and Anthropic — sync, async, streaming — with conversation state, tool calling, and typed errors."
tech: ["Python 3.12+", "Pydantic v2", "httpx", "Ollama", "OpenAI", "Anthropic"]
featured: true
github: "https://github.com/fermaat/core-llm-bridge"
image: "/images/projects/core-llm-bridge.png"
order: 2
---

A clean, provider-agnostic bridge over the LLM landscape. Downstream projects talk to a single `BridgeEngine` and swap models or providers without changing application code. Covers sync, async, and streaming for Ollama, OpenAI, and Anthropic, with a typed conversation buffer, a prompt-template manager, and per-provider exception hierarchy. Built as the shared substrate for my own LLM experiments.
