import { readFile, writeFile } from 'node:fs/promises'

const path = 'node_modules/capacitor-unity-ads/ios/Sources/UnityadsPlugin/Unityads.swift'
let source = await readFile(path, 'utf8')
source = source.replace('private var rewardedVideoLoaded = false', 'var rewardedVideoLoaded = false')
source = source.replace('private var interstitialLoaded = false', 'var interstitialLoaded = false')
source = source.replace('if state == .completed {', 'if state == .showCompletionStateCompleted {')
await writeFile(path, source)
console.log('Patched capacitor-unity-ads for current Swift SDK naming and access control.')
