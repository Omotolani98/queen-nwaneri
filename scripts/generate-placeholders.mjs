import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dir = join(__dirname, '..', 'public', 'artworks');
mkdirSync(dir, { recursive: true });

const artworks = [
  { name: 'celestial-drift', w: 1200, h: 1600, colors: ['#d4a574', '#e8c8a0', '#f5e6d3'] },
  { name: 'silent-resonance', w: 1200, h: 1500, colors: ['#2c3e6b', '#c9a84c', '#1a2744'] },
  { name: 'concrete-garden', w: 1200, h: 1200, colors: ['#8b9a6b', '#6b7a5b', '#a3b18a'] },
  { name: 'neon-solitude', w: 1200, h: 1540, colors: ['#e84393', '#6c5ce7', '#0c0c1d'] },
  { name: 'morning-moss', w: 1200, h: 1680, colors: ['#a8d5a2', '#7bc47f', '#d4edda'] },
  { name: 'wild-current', w: 1800, h: 1200, colors: ['#3498db', '#2980b9', '#1abc9c'] },
];

for (const art of artworks) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${art.w}" height="${art.h}" viewBox="0 0 ${art.w} ${art.h}">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${art.colors[0]}"/>
      <stop offset="50%" style="stop-color:${art.colors[1]}"/>
      <stop offset="100%" style="stop-color:${art.colors[2]}"/>
    </linearGradient>
  </defs>
  <rect width="${art.w}" height="${art.h}" fill="url(#g)"/>
  <circle cx="${art.w * 0.3}" cy="${art.h * 0.4}" r="${Math.min(art.w, art.h) * 0.15}" fill="${art.colors[1]}" opacity="0.3"/>
  <circle cx="${art.w * 0.7}" cy="${art.h * 0.6}" r="${Math.min(art.w, art.h) * 0.2}" fill="${art.colors[0]}" opacity="0.25"/>
  <ellipse cx="${art.w * 0.5}" cy="${art.h * 0.8}" rx="${art.w * 0.25}" ry="${art.h * 0.1}" fill="${art.colors[2]}" opacity="0.2"/>
</svg>`;

  writeFileSync(join(dir, `${art.name}.svg`), svg);
  console.log(`Generated ${art.name}.svg`);
}

console.log('Done!');
