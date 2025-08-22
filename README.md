# Crop Yield Prediction Mobile App

React Native mobile application for AI-powered crop yield prediction.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install additional required packages:
```bash
npm install @react-native-picker/picker
```

3. Start the development server:
```bash
npm start
```

## Features

- Weather data generation
- Crop yield prediction (Rice/Maize)
- Professional mobile UI
- Real-time predictions
- Farming recommendations

## Backend Integration

Update the BASE_URL in `src/services/ApiService.js` to point to your Flask server.

## Build

- iOS: `expo build:ios`
- Android: `expo build:android`