import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { chromium } from 'playwright'

const root = process.cwd()
const outDir = path.join(root, 'store-assets', 'screenshots')
const url = process.env.PYGUIDE_SCREENSHOT_URL ?? 'http://127.0.0.1:4173'

const shots = [
  { name: '01-home-it-iphone-6-7.png', width: 430, height: 932, dpr: 3, hash: '#/' },
  { name: '02-search-en-iphone-6-7.png', width: 430, height: 932, dpr: 3, hash: '#/', lang: 'en', query: 'list' },
  { name: '03-command-es-iphone-6-7.png', width: 430, height: 932, dpr: 3, hash: '#/cmd/print', lang: 'es' },
  { name: '04-category-fr-iphone-6-7.png', width: 430, height: 932, dpr: 3, hash: '#/cat/basics', lang: 'fr' },
  { name: '05-home-it-ipad-13.png', width: 1024, height: 1366, dpr: 2, hash: '#/' },
]

await mkdir(outDir, { recursive: true })

const browser = await chromium.launch()
for (const shot of shots) {
  const page = await browser.newPage({ viewport: { width: shot.width, height: shot.height }, deviceScaleFactor: shot.dpr, isMobile: shot.dpr === 3 })
  await page.goto(`${url}/${shot.hash}`, { waitUntil: 'networkidle' })
  if (shot.lang) {
    await page.locator(`.langs button:text-is("${shot.lang.toUpperCase()}")`).click()
  }
  if (shot.query) {
    await page.locator('input[type="search"]').fill(shot.query)
  }
  await page.screenshot({ path: path.join(outDir, shot.name), fullPage: false })
  await page.close()
}

await browser.close()
