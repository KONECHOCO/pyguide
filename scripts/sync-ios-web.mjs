import { cp, mkdir, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const dist = path.join(root, 'dist')
const iosApp = path.join(root, 'ios', 'App', 'App')
const publicDir = path.join(iosApp, 'public')

await rm(publicDir, { recursive: true, force: true })
await mkdir(publicDir, { recursive: true })
await cp(dist, publicDir, { recursive: true })

await writeFile(path.join(iosApp, 'capacitor.config.json'), JSON.stringify({
  appId: 'com.konechoco.pyguide',
  appName: 'PyGuide',
  webDir: 'dist',
  ios: {
    contentInset: 'automatic',
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: true,
      backgroundColor: '#0c1826',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#102033',
    },
  },
}, null, 2))
