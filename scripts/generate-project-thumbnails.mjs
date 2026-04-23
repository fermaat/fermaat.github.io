// Generate 1200x675 project thumbnails from src/content/projects/*.md.
// Each project gets a deterministic accent color, a bold title, up to 3 tech badges,
// and an "FV" monogram in the bottom-right corner for brand consistency.
//
// Run: `node scripts/generate-project-thumbnails.mjs`
// Output: public/images/projects/<slug>.png

import { readdir, readFile, mkdir } from 'node:fs/promises';
import { join, basename } from 'node:path';
import sharp from 'sharp';

const PROJECTS_DIR = 'src/content/projects';
const OUT_DIR = 'public/images/projects';
const W = 1200;
const H = 675;

// Accent color per slug. Picked to be distinguishable + coherent on dark background.
const ACCENT = {
  'translation-agents-lab': '#7c3aed',
  'core-llm-bridge':        '#06b6d4',
  'copper':                 '#d97706',
  'fashion-clip':           '#e11d48',
  'lora-fine-tuning':       '#8b5cf6',
  'nano-gpt-from-scratch':  '#10b981',
  'aws-rag':                '#f97316',
  'afi-deep-learning':      '#eab308',
  'homesync-ai':            '#14b8a6',
};
const DEFAULT_ACCENT = '#4a9eff';

function parseFrontmatter(md) {
  const m = md.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return {};
  const data = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (!kv) continue;
    const [, k, v] = kv;
    if (v.startsWith('[')) {
      data[k] = v.replace(/^\[|\]$/g, '').split(',').map(s => s.trim().replace(/^["']|["']$/g, ''));
    } else {
      data[k] = v.replace(/^["']|["']$/g, '');
    }
  }
  return data;
}

function xmlEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function wrapTitle(title, maxChars = 22) {
  const words = title.split(/\s+/);
  const lines = [];
  let line = '';
  for (const w of words) {
    if ((line + ' ' + w).trim().length > maxChars && line) {
      lines.push(line);
      line = w;
    } else {
      line = (line + ' ' + w).trim();
    }
  }
  if (line) lines.push(line);
  return lines.slice(0, 2);
}

function buildSvg({ title, tech, accent }) {
  const titleLines = wrapTitle(title);
  const techLabel = (tech || []).slice(0, 3).join('  ·  ');

  const titleY0 = titleLines.length === 1 ? 375 : 335;
  const titleTspan = titleLines
    .map((line, i) => `<tspan x='80' dy='${i === 0 ? 0 : 88}'>${xmlEscape(line)}</tspan>`)
    .join('');

  return `<svg xmlns='http://www.w3.org/2000/svg' width='${W}' height='${H}' viewBox='0 0 ${W} ${H}'>
  <defs>
    <linearGradient id='bg' x1='0' y1='0' x2='1' y2='1'>
      <stop offset='0%' stop-color='#0a0a0b'/>
      <stop offset='100%' stop-color='#17171a'/>
    </linearGradient>
    <radialGradient id='glow' cx='0' cy='1' r='1.2'>
      <stop offset='0%' stop-color='${accent}' stop-opacity='0.22'/>
      <stop offset='60%' stop-color='${accent}' stop-opacity='0'/>
    </radialGradient>
  </defs>
  <rect width='${W}' height='${H}' fill='url(#bg)'/>
  <rect width='${W}' height='${H}' fill='url(#glow)'/>
  <line x1='80' y1='180' x2='80' y2='540' stroke='${accent}' stroke-width='4' opacity='0.85'/>
  <text x='80' y='230' font-family='Inter, system-ui, -apple-system, sans-serif' font-size='32' font-weight='600' fill='${accent}' letter-spacing='4' text-transform='uppercase'>PROJECT</text>
  <text x='80' y='${titleY0}' font-family='Inter, system-ui, -apple-system, sans-serif' font-size='80' font-weight='800' fill='#ffffff' letter-spacing='-3'>${titleTspan}</text>
  <text x='80' y='520' font-family='"JetBrains Mono", "SF Mono", Menlo, ui-monospace, monospace' font-size='28' font-weight='500' fill='#a8a8b0'>${xmlEscape(techLabel)}</text>
  <text x='${W - 80}' y='${H - 60}' text-anchor='end' font-family='Inter, system-ui, -apple-system, sans-serif' font-size='40' font-weight='800' fill='#ffffff' opacity='0.55' letter-spacing='-2'>FV</text>
</svg>`;
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const files = (await readdir(PROJECTS_DIR)).filter(f => f.endsWith('.md'));
  for (const file of files) {
    const slug = basename(file, '.md');
    const md = await readFile(join(PROJECTS_DIR, file), 'utf8');
    const fm = parseFrontmatter(md);
    const accent = ACCENT[slug] ?? DEFAULT_ACCENT;
    const svg = buildSvg({ title: fm.title, tech: fm.tech, accent });
    const out = join(OUT_DIR, `${slug}.png`);
    const info = await sharp(Buffer.from(svg)).png().toFile(out);
    console.log(`${slug.padEnd(30)} ${accent}  ${info.width}x${info.height}  ${Math.round(info.size / 1024)}KB`);
  }
}

main().catch(err => { console.error(err); process.exit(1); });
