#!/bin/bash

# Build APK using Expo CLI (alternative method)
echo "Building APK for Crop Yield Prediction App..."

# Install dependencies
npm install

# Create standalone APK build
npx expo export --platform android

echo "APK build process completed!"
echo "To create APK:"
echo "1. Install Android Studio"
echo "2. Run: npx expo run:android"
echo "3. Or use: npx react-native run-android"