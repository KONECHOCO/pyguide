import { Capacitor } from '@capacitor/core'

type UnityAdsPlugin = {
  initialize?: (options: { gameId: string; testMode: boolean }) => Promise<void>
  showInterstitial?: (options?: { placementId?: string }) => Promise<void>
}

const iosGameId = import.meta.env.VITE_UNITY_IOS_GAME_ID as string | undefined
const testMode = (import.meta.env.VITE_UNITY_TEST_MODE ?? 'true') !== 'false'

function unityAdsPlugin(): UnityAdsPlugin | undefined {
  return (window as unknown as { Capacitor?: { Plugins?: { UnityAds?: UnityAdsPlugin } } }).Capacitor?.Plugins?.UnityAds
}

export async function initializeMonetization() {
  if (!Capacitor.isNativePlatform() || !iosGameId) return

  const plugin = unityAdsPlugin()
  if (!plugin?.initialize) return

  try {
    await plugin.initialize({ gameId: iosGameId, testMode })
  } catch (error) {
    console.info('Unity Ads initialization skipped', error)
  }
}

export async function showInterstitialAd(placementId?: string) {
  const plugin = unityAdsPlugin()
  if (!plugin?.showInterstitial) return

  try {
    await plugin.showInterstitial({ placementId })
  } catch (error) {
    console.info('Unity Ads interstitial skipped', error)
  }
}
