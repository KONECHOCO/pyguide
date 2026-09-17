import { Capacitor } from '@capacitor/core'
import { UnityAds } from 'capacitor-unity-ads'

const iosGameId = import.meta.env.VITE_UNITY_IOS_GAME_ID as string | undefined
const testMode = (import.meta.env.VITE_UNITY_TEST_MODE ?? 'true') !== 'false'
const interstitialPlacementId = import.meta.env.VITE_UNITY_INTERSTITIAL_PLACEMENT_ID ?? 'Interstitial_iOS'

export async function initializeMonetization() {
  if (!Capacitor.isNativePlatform() || !iosGameId) return

  try {
    await UnityAds.initialize({ gameId: iosGameId, testMode })
    await UnityAds.loadInterstitial({ placementId: interstitialPlacementId })
  } catch (error) {
    console.info('Unity Ads initialization skipped', error)
  }
}

export async function showInterstitialAd(placementId?: string) {
  try {
    if (placementId) await UnityAds.loadInterstitial({ placementId })
    await UnityAds.showInterstitial()
    await UnityAds.loadInterstitial({ placementId: placementId ?? interstitialPlacementId })
  } catch (error) {
    console.info('Unity Ads interstitial skipped', error)
  }
}
