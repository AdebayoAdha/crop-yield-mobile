# Free APK Build Options

## 1. Expo EAS (Recommended)
- **Free tier**: 30 builds/month
- **Setup**: Create account at expo.dev
- **Command**: `npx eas build -p android --profile preview`

## 2. GitHub Actions (Free)
- Push code to GitHub repository
- GitHub Actions will auto-build APK
- Download from Actions artifacts

## 3. Online Build Services
- **Appetize.io**: Free web-based testing
- **CodeSandbox**: Online development
- **Replit**: Cloud-based building

## 4. Local Free Build
- Install Android Studio (free)
- Use `npx expo run:android`

## Quick Start with EAS
```bash
npm install -g @expo/cli
expo login
eas build -p android --profile preview
```

APK will be available for download after build completes.