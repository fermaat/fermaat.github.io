# fermaat.github.io — SUMMARY

## Purpose
Personal portfolio and technical blog for Fernando Velasco Lozano (Senior Applied Data Scientist & AI Tech Lead). Deployed automatically to GitHub Pages at `https://fermaat.github.io`. Hosts the landing page (EN/ES), featured projects, current research lines, awards, and a Jekyll-powered blog with deep-dive articles on AI/ML topics.

## Architecture
```
.
├── _config.yml              # Jekyll config — uses cayman theme
├── index.md                 # Landing page (English, canonical)
├── index_es.md              # Landing page (Spanish, kept in sync with EN)
├── _posts/                  # Blog posts (Jekyll convention: YYYY-MM-DD-title.md)
│   ├── 2025-06-11-lora-vs-full-fine-tuning.md
│   ├── 2025-06-13-CRNNs: You-dont-always-need-a-transformer.md
│   ├── 2025-06-16-CTC-loss.md
│   ├── 2025-06-20-titans.md
│   ├── 2025-06-23-helmet.md
│   └── 2025-06-27-AU-Net.md
├── files/                   # Static assets served under /files/
│   ├── CV.pdf               # Canonical CV — always overwritten on update
│   └── images/              # Per-post image folders (AUNet, CRNNs, CTC, HELMET, Lora, Titans)
├── .github/workflows/
│   └── jekyll-gh-pages.yml  # GitHub Actions workflow for GH Pages build & deploy
├── .gitignore
├── README.md                # Minimal placeholder
└── SUMMARY.md               # This file
```

## Content conventions
- **Canonical CV:** `files/CV.pdf` — Fernando overwrites this file on each CV update, so links should always point here.
- **Landing pages:** `index.md` is the source of truth. `index_es.md` is a translated mirror; keep both in sync when content changes.
- **Blog posts:** filename format `YYYY-MM-DD-title.md`, front matter with `layout`, `title`, optional `excerpt`. Post images live under `files/images/<PostName>/`.

## Deployment
- GitHub Pages builds on push to `main` via `.github/workflows/jekyll-gh-pages.yml`.
- Theme: `jekyll-theme-cayman` (set in `_config.yml`).

## Status
- Active: landing page (EN/ES) and 6 blog posts (June 2025).
- No `Gemfile` — relies on GH Pages default Jekyll environment.

## Consumers / upstream
- Standalone. No dependencies on other repos in the personal ecosystem.
- Linked from LinkedIn, GitHub profile, Medium, and the CV itself.
