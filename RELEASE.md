# PyGuide Release Notes

## App Store first pass

This repository now contains the iOS wrapper, Codemagic workflow, generated App Store metadata, and screenshot tooling needed for the first App Store build.

### Codemagic

Use workflow `ios-app-store`.

Required Codemagic setup before the first successful signed upload:
- Connect the repository `KONECHOCO/pyguide`.
- In Codemagic Team integrations, add an App Store Connect API key named `codemagic`.
- Ensure the App Store Connect key has App Manager permission.
- Ensure Codemagic can fetch or create an Apple Distribution certificate and an App Store provisioning profile for `com.konechoco.pyguide`.
- Set `VITE_UNITY_IOS_GAME_ID` as an environment variable after creating the iOS app in Unity Monetization.
- Keep `VITE_UNITY_TEST_MODE=true` until Unity placements are approved and verified.

The workflow uploads to App Store Connect but does not automatically submit to TestFlight or App Store review.

### App Store Connect

Create the iOS app record with:
- Name: PyGuide
- Bundle ID: `com.konechoco.pyguide`
- SKU: `pyguide-ios`
- Category: Education

Use `store-assets/app-store-metadata.md` for localized metadata and review notes.

### Screenshots

Generate screenshots with:

```bash
npm run build
npm run preview -- --host 127.0.0.1
npm run screenshots:store
```

Screenshots are written to `store-assets/screenshots`.
