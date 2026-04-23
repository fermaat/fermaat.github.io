---
title: "Copper — AI-maintained knowledge bases"
description: "An LLM Archivist reads raw sources — notes, PDFs, Obsidian vaults — and compiles a structured markdown wiki. No embeddings, no RAG; just folders, text, and LLM workflows (store / tap / polish)."
tech: ["Python 3.12+", "FastAPI", "LLM workflows", "pdfplumber", "Typer"]
featured: true
github: "https://github.com/fermaat/copper"
image: "/images/projects/copper.png"
order: 3
---

"Copperminds" are folder-based wikis curated by an LLM Archivist. Three workflows drive them: **store** (ingest + structured write), **tap** (query against the compiled wiki), and **polish** (lint + rewrite). Ingest plugins cover plain text, Obsidian vaults, and PDFs with hybrid TOC/LLM/naive chunking. A FastAPI layer exposes everything over HTTP. Inspired by Karpathy's wiki system and Cosmere copperminds.
