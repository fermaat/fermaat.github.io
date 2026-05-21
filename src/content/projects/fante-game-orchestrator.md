---
title: "Fante — RPG Game Orchestrator"
title_es: "Fante — Orquestador de RPG"
description: "Game-loop orchestrator for a voice-and-text RPG built for a 2-year-old. Coordinates LLM narration, game rules (via MCP), and player input through a ports-and-adapters architecture designed to grow with the player."
description_es: "Orquestador de bucle de juego para un RPG de voz y texto construido para un niño de 2 años. Coordina narración LLM, reglas de juego (vía MCP) e input del jugador mediante una arquitectura de puertos y adaptadores diseñada para crecer con el jugador."
tech: ["Python 3.12+", "MCP", "core-llm-bridge", "Pydantic v2", "Ports & Adapters"]
featured: true
order: 1
---

An RPG engine where an LLM acts as the narrator and a separate MCP server enforces the rules. The architecture is deliberately generic — `GameManager` depends only on ports (`NarratorPort`, `InputPort`, `OutputPort`, `ProfileStore`) — so the game layer is swappable without touching the orchestration logic.

The rule system (`mcp-game-rules`) is Cosmere-flavoured: six attributes, `1d20 + attribute + skill` vs DC, optional plot dice, and data-driven `DicePolicy` per rule pack. Difficulty and rule complexity are layered so the game can grow as the player does. Performance is evaluated by an LLM-as-judge tuned for a 2-year-old — rewarding engagement over description quality.
