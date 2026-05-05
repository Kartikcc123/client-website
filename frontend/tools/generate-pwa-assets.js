/*
  Simple asset generator for PWA icons/splash screens.
  - Requires `sharp` (installed as devDependency)
  - Reads `public/favicon.svg` (or `public/logo.svg`) and outputs PNGs in `public/`
  - Generates: pwa-192.png, pwa-512.png, pwa-512-maskable.png and several splash images
*/

import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const publicDir = path.resolve(process.cwd(), 'public')
const svgCandidates = ['favicon.png', 'favicon.svg', 'logo.svg']
let svgPath = null
for (const name of svgCandidates) {
  const p = path.join(publicDir, name)
  if (fs.existsSync(p)) {
    svgPath = p
    break
  }
}

if (!svgPath) {
  console.error('No source SVG found. Please add public/favicon.svg or public/logo.svg and re-run.')
  process.exit(1)
}

async function generate() {
  try {
    // Base PNGs
    await sharp(svgPath).resize(192, 192).png().toFile(path.join(publicDir, 'pwa-192.png'))
    await sharp(svgPath).resize(512, 512).png().toFile(path.join(publicDir, 'pwa-512.png'))
    // Maskable icon: same but leave padding so masks look ok
    await sharp(svgPath).resize(512, 512).png().toFile(path.join(publicDir, 'pwa-512-maskable.png'))

    // Splash screens - common sizes
    const splashSizes = [
      [640, 1136],
      [750, 1334],
      [1125, 2436],
      [1242, 2688],
      [1536, 2048]
    ]

    for (const [w, h] of splashSizes) {
      const out = path.join(publicDir, `splash-${w}x${h}.png`)
      // create a background and composite the resized SVG centered
      const pngBuffer = await sharp(svgPath).resize(Math.round(w * 0.6)).png().toBuffer()
      const bg = {
        create: {
          width: w,
          height: h,
          channels: 4,
          background: { r: 255, g: 255, b: 255, alpha: 1 }
        }
      }
      await sharp(bg).composite([{ input: pngBuffer, gravity: 'center' }]).png().toFile(out)
    }

    console.log('PWA assets generated in public/: pwa-192.png, pwa-512.png, splash-*')
  } catch (err) {
    console.error('Error generating assets:', err)
    process.exit(1)
  }
}

generate()
