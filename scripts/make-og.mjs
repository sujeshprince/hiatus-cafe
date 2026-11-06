import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const source = path.join(root, "public/images/hero/hero-main.jpg");
const outputDir = path.join(root, "public/images");
const output = path.join(outputDir, "og-image.jpg");

const overlay = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="shade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#1a100b" stop-opacity="0.96"/>
      <stop offset="48%" stop-color="#1a100b" stop-opacity="0.78"/>
      <stop offset="100%" stop-color="#1a100b" stop-opacity="0.34"/>
    </linearGradient>
    <linearGradient id="bottom" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1a100b" stop-opacity="0"/>
      <stop offset="100%" stop-color="#1a100b" stop-opacity="0.86"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#shade)"/>
  <rect y="380" width="1200" height="250" fill="url(#bottom)"/>
  <circle cx="1090" cy="105" r="230" fill="#b98052" opacity="0.13"/>

  <g fill="#f4ede3" font-family="Arial, Helvetica, sans-serif">
    <text x="78" y="88" font-size="13" font-weight="600" letter-spacing="6" fill="#d9b18a">DAUDPUR · GORAKHPUR</text>
    <line x1="78" y1="112" x2="196" y2="112" stroke="#d9b18a" stroke-width="1" opacity="0.6"/>
  </g>

  <g font-family="Georgia, 'Times New Roman', serif" fill="#f4ede3">
    <text x="72" y="250" font-size="104" letter-spacing="-4">A Little</text>
    <text x="72" y="362" font-size="112" font-style="italic" letter-spacing="-5" fill="#c08a5c">Pause</text>
    <text x="78" y="446" font-size="52" letter-spacing="-1.5">in a Busy World.</text>
  </g>

  <g font-family="Arial, Helvetica, sans-serif" fill="#f4ede3">
    <text x="78" y="520" font-size="17" opacity="0.72">Coffee, conversations, comfort and everything in between.</text>
    <text x="78" y="580" font-size="12" font-weight="600" letter-spacing="4" fill="#d9b18a">HIATUS CAFE · GORAKHPUR</text>
  </g>

  <g transform="translate(1032, 426)" fill="none" stroke="#f4ede3">
    <circle cx="0" cy="0" r="52" stroke-width="1.4" opacity="0.45"/>
    <path d="M-9 -17v34M9 -17v34" stroke="#c08a5c" stroke-width="3" stroke-linecap="round"/>
  </g>
</svg>`);

await mkdir(outputDir, { recursive: true });

await sharp(source)
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .modulate({ brightness: 0.75, saturation: 0.85 })
  .composite([{ input: overlay, top: 0, left: 0 }])
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(output);

console.log(`Created ${output}`);
