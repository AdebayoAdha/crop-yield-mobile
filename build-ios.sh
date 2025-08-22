#!/bin/bash

echo "Building iOS app for Crop Yield Prediction..."

# Install dependencies
npm install

# Build for iOS simulator
npx eas build -p ios --profile preview --local

echo "iOS build completed!"
echo "To run on simulator: npx expo run:ios"