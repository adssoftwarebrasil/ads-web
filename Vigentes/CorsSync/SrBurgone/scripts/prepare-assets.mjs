import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const originalDirectory = new URL('../src/assets/client/originals/', import.meta.url);
const outputDirectory = new URL('../src/assets/client/', import.meta.url);
const assets = [
  ['483ae3d3-2933-46b2-8617-d743e05edbd6.jpeg', 'lanche-queijo'],
  ['778E87D9-1113-441B-A3E5-72F4157CD6EE.jpeg', 'saches-acompanhamentos'],
  ['IMG_1689.jpeg', 'bebida-cremosa'],
  ['IMG_0751.jpeg', 'logo-sr-burgone'],
  ['fb2d4d23-76d6-45a0-a5e3-1335f86231f0.jpeg', 'lanche-aberto'],
  ['f2eff019-12dc-40c7-834a-21ceb4aec320.jpeg', 'hamburguer-da-casa'],
  ['d3d62ef0-74d5-4d6f-9869-d8f748499e3b.jpeg', 'hamburguer-duplo'],
  ['f3f028b0-75fa-4e50-8922-a6bd81fa1ee5.jpeg', 'lanche-no-prato'],
  ['3C1A9B2A-C294-4A0B-9AD6-5E3FF869B675.png', 'arte-geleia'],
  ['70AD6653-AB64-45FB-B050-85B06D58532A.png', 'arte-sr-burgone'],
  ['107D6608-BC19-4D7B-B3F5-29B9E56457A4.jpeg', 'espaco-infantil'],
  ['IMG_4202.jpeg', 'ambiente-da-casa'],
];

await mkdir(outputDirectory, { recursive: true });
for (const [filename, name] of assets) {
  const source = fileURLToPath(new URL(filename, originalDirectory));
  const info = await sharp(source)
    .rotate()
    .resize({ width: 1400, height: 1800, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: name.startsWith('arte-') ? 90 : 84 })
    .toFile(fileURLToPath(new URL(`${name}.webp`, outputDirectory)));
  console.log(`${name}.webp: ${info.width} × ${info.height}, ${Math.round(info.size / 1024)} KB`);
}

await sharp(fileURLToPath(new URL('IMG_0751.jpeg', originalDirectory)))
  .resize({ width: 96, height: 96, fit: 'contain' })
  .png()
  .toFile(fileURLToPath(new URL('../public/favicon.png', import.meta.url)));
