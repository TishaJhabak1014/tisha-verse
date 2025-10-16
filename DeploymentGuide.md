# 🚀 Complete Step-by-Step Deployment Guide

## ✅ Prerequisites Check

Make sure you have:
- ✓ React app created with `create-react-app`
- ✓ `public/assets/` folder with all the images
- ✓ Updated `App.js` code from the artifact (with `process.env.PUBLIC_URL`)

---

## 📝 Step 1: Update `package.json`

Open `package.json` and add/modify these lines:

```json
{
  "name": "tisha-portfolio-react",
  "version": "0.1.0",
  "homepage": "https://tishajhabak1014.github.io/tisha-verse",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  ...rest of the file
}
```

**Important:** Make sure `homepage` matches: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`

---

## 📦 Step 2: Install gh-pages

```bash
npm install --save-dev gh-pages
```

---

## 📂 Step 3: Verify The File Structure

The project should look like this:

```
tisha-portfolio-react/
├── public/
│   ├── assets/
│   │   ├── hue-hunt.png
│   │   ├── canvascraft.png
│   │   ├── capp.png
│   │   ├── revibe.png
│   │   ├── project-2.png
│   │   ├── project-3.png
│   │   ├── doodlew.png
│   │   ├── lexicallasso.png
│   │   ├── linkedin.png
│   │   ├── github.png
│   │   ├── email.png
│   │   ├── arrow.png
│   │   ├── favicon.ico
│   │   └── 5Tisha_Au[25].pdf
│   └── index.html
├── src/
│   ├── App.js (updated code from artifact)
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

---

## ✏️ Step 4: Update `src/index.css`

Replace **ALL** content in `src/index.css` with:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}
```

---

## 🗑️ Step 5: Delete `src/App.css`

```bash
# On Windows
del src\App.css

# On Mac/Linux
rm src/App.css
```

Or manually delete it from the file explorer.

---

## 📄 Step 6: Update `src/index.js`

Make sure it looks like this (NO import of App.css):

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

## 🌐 Step 7: Update `public/index.html`

Replace **ALL** content with:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/assets/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Tisha's Portfolio" />
    <title>Tisha's @ Dev</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { margin: 0; padding: 0; }
      #root { margin: 0; padding: 0; }
    </style>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

---

## ✅ Step 8: Update `src/App.js`

Copy the **complete code from the artifact above** into the `src/App.js` file. This has all the correct `process.env.PUBLIC_URL` paths.

---

## 🧪 Step 9: Test Locally

```bash
npm start
```

Open `http://localhost:3000` and verify:
- ✓ Background is dark ivory (#f1e4d9)
- ✓ All images load
- ✓ Navigation works
- ✓ Buttons work
- ✓ Terminal animation works

If something doesn't work, **stop here and fix it** before deploying.

---

## 🎯 Step 10: Initialize Git (if not done)

```bash
git init
git add .
git commit -m "Initial commit - Portfolio ready for deployment"
```

---

## 📤 Step 11: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `tisha-verse`
3. **Don't** check "Initialize with README"
4. Click "Create repository"

---

## 🔗 Step 12: Connect to GitHub

```bash
git remote add origin https://github.com/TishaJhabak1014/tisha-verse.git
git branch -M main
git push -u origin main
```

---

## 🚀 Step 13: Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
- Build the app
- Create a `gh-pages` branch
- Push the build to `gh-pages`
- Deploy automatically

**Wait for output:**
```
Published
```

---

## ⚙️ Step 14: Enable GitHub Pages (One-time only)

1. Go to: `https://github.com/TishaJhabak1014/tisha-verse/settings/pages`
2. Under "Source": Should already show `gh-pages` branch and `/ (root)` folder
3. If not, select it and click "Save"

---

## 🎉 Step 15: Visit The Site!

The site will be live at:
```
https://tishajhabak1014.github.io/tisha-verse/
```

**⏰ Wait 2-3 minutes** for GitHub Pages to finish building.

---

## 🔄 Future Updates

Whenever you make changes:

```bash
# 1. Save the changes to source code (optional but recommended)
git add .
git commit -m "Description of changes"
git push origin main

# 2. Deploy updated site (required)
npm run deploy
```

---

## 🐛 Troubleshooting

### Problem: White screen
**Solution:** 
- Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Check browser console (F12) for errors
- Verify `homepage` in `package.json` matches the GitHub URL exactly

### Problem: Images not loading
**Solution:**
- Check files are in `public/assets/` folder
- Verify `process.env.PUBLIC_URL` is used in all image paths
- Run `npm run build` and check `build/assets/` folder exists

### Problem: 404 Error
**Solution:**
- Verify repository name matches `homepage` in `package.json`
- Check GitHub Pages is enabled on `gh-pages` branch
- Wait 2-3 minutes and try again

---

## ✅ Final Checklist

Before deploying, verify:
- [ ] `homepage` in `package.json` is correct
- [ ] All assets are in `public/assets/` folder
- [ ] `App.js` uses `process.env.PUBLIC_URL` for all assets
- [ ] `src/App.css` is deleted
- [ ] `index.css` has minimal reset styles
- [ ] `gh-pages` package is installed
- [ ] Site works locally with `npm start`

---

That's it! The portfolio will be live on GitHub Pages! 🎊