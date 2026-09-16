import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = process.cwd()
const iconDir = path.join(root, 'ios', 'App', 'App', 'Assets.xcassets', 'AppIcon.appiconset')
const splashDir = path.join(root, 'ios', 'App', 'App', 'Assets.xcassets', 'Splash.imageset')

const iconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#102033"/>
      <stop offset="1" stop-color="#1d4f73"/>
    </linearGradient>
  </defs>
  <rect width="1024" height="1024" rx="220" fill="url(#bg)"/>
  <path fill="#3776AB" d="M516 154c-132 0-198 66-198 198v99h200v33H245c-72 0-132 47-151 138-22 104-22 168 0 272 19 77 140 77 215 77h101V757c0-85 74-159 165-159h200c116 0 116-69 116-116V352c0-119-53-198-195-198H516z"/>
  <circle cx="409" cy="294" r="54" fill="#f7fbff"/>
  <path fill="#FFD43B" d="M711 53v214c0 88-72 156-162 156H352c-119 0-119 72-119 116v134c0 119 52 198 195 198h178c132 0 198-64 198-198v-99H606v-33h272c72 0 126-44 145-135 24-107 22-175 0-274-20-77-138-79-214-79h-98z"/>
  <circle cx="611" cy="729" r="54" fill="#1a1400"/>
  <text x="512" y="552" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="148" font-weight="800" fill="#f7fbff">Py</text>
</svg>`

const splashSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2732 2732">
  <rect width="2732" height="2732" fill="#0c1826"/>
  <rect x="966" y="966" width="800" height="800" rx="172" fill="#102033"/>
  <text x="1366" y="1398" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="220" font-weight="800" fill="#3776AB">Py</text>
  <text x="1366" y="1605" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="120" font-weight="700" fill="#FFD43B">Guide</text>
</svg>`

await mkdir(iconDir, { recursive: true })
await mkdir(splashDir, { recursive: true })

await sharp(Buffer.from(iconSvg)).resize(1024, 1024).png().toFile(path.join(iconDir, 'AppIcon-512@2x.png'))
await writeFile(path.join(iconDir, 'Contents.json'), JSON.stringify({
  images: [{ idiom: 'universal', platform: 'ios', size: '1024x1024', filename: 'AppIcon-512@2x.png' }],
  info: { version: 1, author: 'xcode' },
}, null, 2))

const splash = await sharp(Buffer.from(splashSvg)).resize(2732, 2732).png().toBuffer()
await Promise.all(['splash-2732x2732.png', 'splash-2732x2732-1.png', 'splash-2732x2732-2.png'].map((file) => writeFile(path.join(splashDir, file), splash)))
