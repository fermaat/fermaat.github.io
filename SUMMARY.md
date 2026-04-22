# fermaat.github.io — SUMMARY

## Purpose
Personal portfolio and technical blog for Fernando Velasco Lozano (Senior Applied Data Scientist & AI Tech Lead). Deployed to GitHub Pages at `https://fermaat.github.io`. Hosts landing page, featured projects grid, project detail pages, awards, current research lines, and technical deep-dive articles.

## Stack
- **Framework:** Astro 4
- **Styling:** TailwindCSS + daisyUI (themes: `lofi` light, `black` dark, toggle with localStorage + prefers-color-scheme)
- **Typography:** Inter Variable (sans), JetBrains Mono Variable (mono)
- **Image optimization:** Sharp (Astro `<Image>` component → WebP)
- **Package manager:** pnpm 10
- **Deploy:** GitHub Actions → GitHub Pages (`withastro/action@v3`)

## Architecture
```
.
├── .github/workflows/
│   └── deploy.yml                    # GH Actions: build + deploy on push to main
├── astro.config.mjs                  # site: https://fermaat.github.io, MDX + sitemap + tailwind
├── tailwind.config.cjs                # fontFamily overrides + daisyui themes
├── tsconfig.json
├── package.json                       # pnpm + onlyBuiltDependencies (sharp, esbuild)
├── public/                            # Served verbatim at site root
│   ├── favicon.svg                    # "FV" monogram
│   ├── og-default.png                 # 1200×630 social preview
│   ├── robots.txt
│   ├── files/CV.pdf                   # Canonical CV (stable URL /files/CV.pdf)
│   └── images/posts/<Post>/*.png      # Post hero + inline images
├── src/
│   ├── config.ts                      # SITE_TITLE, SITE_DESCRIPTION, GENERATE_SLUG_FROM_TITLE
│   ├── styles/global.css              # Font imports + base styling
│   ├── layouts/
│   │   ├── BaseLayout.astro           # <html>, theme init, header/sidebar/footer
│   │   └── PostLayout.astro           # Wraps blog entries with prose styling
│   ├── components/
│   │   ├── BaseHead.astro             # <head> meta, og/twitter tags, og-default fallback
│   │   ├── Header.astro               # Mobile top bar
│   │   ├── SideBar.astro              # Desktop sidebar: avatar + name + menu + toggle + socials
│   │   ├── SideBarMenu.astro          # Home / Projects / Writing / CV / Contact
│   │   ├── SideBarFooter.astro        # GitHub / LinkedIn / Medium / Email / RSS icons
│   │   ├── ThemeToggle.astro          # Dark/light toggle (daisyui swap)
│   │   ├── Card.astro                 # Grid card (img optional → fallback gradient+initials)
│   │   ├── HorizontalCard.astro       # Row card for posts (img optional same way)
│   │   ├── Footer.astro
│   │   └── cv/                        # Astrofy CV subcomponents (unused, left for reference)
│   ├── content/
│   │   ├── config.ts                  # Zod schemas: blog, projects
│   │   ├── blog/*.md                  # 6 posts — filename = URL slug
│   │   └── projects/*.md              # 7 projects — featured flag + order
│   ├── pages/
│   │   ├── index.astro                # Home: hero + featured projects + latest posts + research + awards
│   │   ├── projects.astro             # Full projects grid (sorted by order)
│   │   ├── projects/[slug].astro      # Project detail (tech, github, demo, content)
│   │   ├── blog/[slug].astro          # Post detail (delegates to PostLayout)
│   │   ├── blog/[...page].astro       # Paginated blog index
│   │   ├── blog/tag/[tag].astro       # Tag filter
│   │   ├── rss.xml.js                 # RSS feed
│   │   └── 404.astro
│   └── lib/createSlug.ts              # Slug helper; toggled by GENERATE_SLUG_FROM_TITLE
└── SUMMARY.md · README.md · CLAUDE.md
```

## Content conventions

### Canonical URLs
- **CV:** `/files/CV.pdf` — stable, always overwritten in-place on updates.
- **Blog post:** `/blog/<filename-slug>/` (not derived from title; controlled by `GENERATE_SLUG_FROM_TITLE=false` in `src/config.ts`).
- **Project:** `/projects/<filename-slug>/`.

### Content schemas (`src/content/config.ts`)
- **`blog`** — `title`, `description`, `pubDate`, `updatedDate?`, `heroImage?`, `badge?`, `tags?[]`.
- **`projects`** — `title`, `description`, `tech[]`, `featured` (default false), `github?`, `demo?`, `image?`, `order` (default 99), `publishedDate?`.

### Adding content
- **New post:** create `src/content/blog/<slug>.md` with blog frontmatter. Images go to `public/images/posts/<Folder>/` and are referenced as `/images/posts/<Folder>/<file>`.
- **New project:** create `src/content/projects/<slug>.md` with projects frontmatter. Set `featured: true` and a low `order` to surface on the home.

## Deployment
- Push to `main` → `.github/workflows/deploy.yml` runs (withastro/action@v3 + actions/deploy-pages@v4).
- **GitHub Pages source must be set to "GitHub Actions"** in repo Settings → Pages (not branch-based).
- Build validation: `pnpm build` locally. Lighthouse targets: Performance ≥95, A11y/BP/SEO = 100.

## Status
- Migrated from Jekyll (cayman theme) to Astro (Astrofy template, heavily customized) on 2026-04-22.
- ES landing page temporarily removed — re-added later via Astro i18n if needed.

## Consumers / upstream
- Standalone. No dependencies on other repos in the personal ecosystem.
- Linked from LinkedIn, GitHub profile, Medium, and the CV itself.
