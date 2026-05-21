---
title: "Voice Cloning PoC"
title_es: "PoC de Voice Cloning"
description: "2-day research spike comparing voice-cloning routes — Azure Personal Voice, XTTS-v2, F5-TTS, and Qwen3-TTS — on a fixed evaluation grid. Key finding: fidelity-to-speaker and naturalness-in-target-language are in structural tension; automated metrics (WER/UTMOS) are blind to L1 accent transfer."
description_es: "Spike de investigación comparando rutas de voice cloning — Azure Personal Voice, XTTS-v2, F5-TTS y Qwen3-TTS — sobre una rejilla de evaluación fija. Hallazgo clave: fidelidad al hablante y naturalidad en la lengua objetivo son objetivos en tensión estructural; las métricas automáticas (WER/UTMOS) son ciegas a la transferencia de acento L1."
tech: ["Python", "XTTS-v2", "F5-TTS", "Qwen3-TTS", "Whisper", "SpeechBrain", "Azure"]
featured: false
image: "/images/projects/voice-cloning-poc.png"
order: 10
---

Benchmark spike comparing four voice-cloning approaches on a fixed 8-prompt evaluation grid using a real speaker reference.

**Tracks evaluated:** XTTS-v2 (autoregressive), F5-TTS (flow-matching, replaces OpenVoice v2), Qwen3-TTS-Base (LLM-based), and Azure Personal Voice. Each track generated 64 WAVs scored on SECS (speaker similarity), WER (intelligibility), and UTMOS (naturalness).

**Key finding:** Qwen3-TTS produced the highest speaker similarity but transferred the speaker's L1 accent into L2 output — a structural tradeoff invisible to automated metrics. The evaluation pipeline separates the two axes explicitly.
