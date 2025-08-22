# APK Build Instructions

## Method 1: Using EAS Build (Recommended)

1. Create Expo account at https://expo.dev
2. Login to EAS:
```bash
npx eas login
```
3. Build APK:
```bash
npx eas build -p android --profile preview
```

## Method 2: Local Build

1. Install Android Studio
2. Set ANDROID_HOME environment variable
3. Run:
```bash
npx expo run:android
```

## Method 3: Export for Manual Build

1. Export project:
```bash
npx expo export --platform android
```
2. Use Android Studio to build APK from exported files

## Quick Start

Run the build script:
```bash
./build-apk.sh
```

The APK will be generated and ready for installation on Android devices.