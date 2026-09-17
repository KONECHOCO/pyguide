import { readFile, writeFile } from 'node:fs/promises'

const path = 'node_modules/capacitor-unity-ads/ios/Sources/UnityadsPlugin/Unityads.swift'
let source = await readFile(path, 'utf8')
source = source.replace('private var rewardedVideoLoaded = false', 'var rewardedVideoLoaded = false')
source = source.replace('private var interstitialLoaded = false', 'var interstitialLoaded = false')
source = source.replace('if state == .completed {', 'if state == .showCompletionStateCompleted {')
source = source.replace('} errorHandler: { [weak self] error in', '} errorHandler: { [weak self] (error: Error) in')
source = source.replace('UnityAds.show(UIApplication.shared.windows.first?.rootViewController, placementId: placementId, showDelegate: RewardedVideoShowDelegate(callback: callback, parent: self))', 'guard let viewController = UIApplication.shared.windows.first?.rootViewController else { callback(false, nil, "No root view controller") ; return }\n        UnityAds.show(viewController, placementId: placementId, showDelegate: RewardedVideoShowDelegate(callback: callback, parent: self))')
source = source.replace('UnityAds.show(UIApplication.shared.windows.first?.rootViewController, placementId: placementId, showDelegate: InterstitialShowDelegate(callback: callback, parent: self))', 'guard let viewController = UIApplication.shared.windows.first?.rootViewController else { callback(false, "No root view controller") ; return }\n        UnityAds.show(viewController, placementId: placementId, showDelegate: InterstitialShowDelegate(callback: callback, parent: self))')
source = source.replace('return UnityAds.getVersion() ?? "unknown"', 'return UnityAds.getVersion()')
await writeFile(path, source)
console.log('Patched capacitor-unity-ads for current Swift SDK naming and access control.')
