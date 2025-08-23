# Deploy to GitHub for Free APK Build

## Steps:

1. **Create GitHub Repository:**
   - Go to github.com
   - Create new repository: `crop-yield-mobile`

2. **Push Code:**
```bash
git remote add origin https://github.com/YOUR_USERNAME/crop-yield-mobile.git
git branch -M main
git push -u origin main
```

3. **Setup Expo Token:**
   - Go to expo.dev → Account Settings → Access Tokens
   - Create token
   - Add to GitHub: Settings → Secrets → EXPO_TOKEN

4. **Trigger Build:**
   - Push any change to main branch
   - Or go to Actions tab → Run workflow

5. **Download APK:**
   - Go to Actions tab
   - Click completed workflow
   - Download APK from artifacts

## Alternative: Direct EAS Build
```bash
npx eas login
npx eas build -p android --profile preview
```