# iOS App Build Instructions

## Prerequisites
- macOS with Xcode installed
- Apple Developer Account (for device deployment)

## Build Methods

### 1. EAS Build (Cloud)
```bash
npx eas login
npx eas build -p ios --profile preview
```

### 2. Local Build
```bash
./build-ios.sh
```

### 3. Development Build
```bash
npx expo run:ios
```

## Simulator Testing
```bash
npx expo run:ios --simulator
```

## Device Installation
1. Build with production profile
2. Upload to TestFlight or App Store
3. Or use development build with registered device UDID

The iOS app provides native performance for crop yield predictions on iPhone and iPad.