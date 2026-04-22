# fermaat.github.io

Personal portfolio and technical blog — **[fermaat.github.io](https://fermaat.github.io)**.

Built with [Astro](https://astro.build), TailwindCSS + daisyUI, deployed automatically to GitHub Pages.

## Quickstart

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # production build → dist/
pnpm preview    # serve the built site locally
```

Requires Node 20+ and pnpm 10 (via `corepack enable pnpm`).

## Adding content

**New blog post:**
```
src/content/blog/<slug>.md
```
Frontmatter: `title`, `description`, `pubDate`, `heroImage?`, `tags?`. Post images under `public/images/posts/<Folder>/`.

**New project:**
```
src/content/projects/<slug>.md
```
Frontmatter: `title`, `description`, `tech[]`, `featured`, `github?`, `demo?`, `order`. Setting `featured: true` + a low `order` surfaces it on the home.

See [SUMMARY.md](SUMMARY.md) for full architecture and [CLAUDE.md](CLAUDE.md) for editorial conventions.

## Deploy

Push to `main` → GitHub Actions builds and deploys. Workflow in [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

The canonical CV lives at [`/files/CV.pdf`](https://fermaat.github.io/files/CV.pdf). Overwrite `public/files/CV.pdf` to update it — the URL stays stable.
