# Deployment Guide

This guide covers deploying your Athira SB Digital Marketing Portfolio to various hosting platforms.

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All personal information is updated
- [ ] Demo images replaced with your actual images
- [ ] Contact information and social links are correct
- [ ] Content has been reviewed for accuracy
- [ ] Tested locally with `npm run dev`
- [ ] Production build tested with `npm run build` and `npm run preview`

## 🚀 Deployment Options

### 1. Vercel (Recommended - Easiest)

**Pros:**
- Zero configuration for Vite projects
- Automatic deployments on git push
- Free SSL certificate
- Excellent performance
- Built-in analytics

**Steps:**

1. **Create a Vercel Account**
   - Visit https://vercel.com
   - Sign up with GitHub account

2. **Connect Your Repository**
   - Click "New Project"
   - Import your GitHub repository
   - Select the project

3. **Configure Build Settings** (usually auto-detected)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Root Directory:** `./`

4. **Deploy**
   - Click "Deploy"
   - Vercel automatically builds and deploys
   - Your site is live!

5. **Custom Domain** (Optional)
   - Go to "Settings" > "Domains"
   - Add your custom domain
   - Update DNS records as instructed

### 2. Netlify

**Pros:**
- Simple deployment process
- Good CDN performance
- Form handling included
- Free SSL

**Steps:**

1. **Create a Netlify Account**
   - Visit https://netlify.com
   - Sign up with GitHub

2. **Connect Repository**
   - Click "New site from Git"
   - Select GitHub
   - Authorize and select repository

3. **Build Settings**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

4. **Deploy**
   - Click "Deploy site"
   - Netlify builds and hosts your site

5. **Custom Domain**
   - Go to "Domain settings"
   - Add custom domain
   - Follow DNS configuration

### 3. GitHub Pages

**Pros:**
- Free hosting
- Integrated with GitHub
- Good for portfolios

**Steps:**

1. **Update vite.config.js**
```javascript
export default {
  base: '/your-repo-name/',  // Only if not using custom domain
  // ... other config
}
```

2. **Build the Project**
```bash
npm run build
```

3. **Create gh-pages Branch**
```bash
git checkout --orphan gh-pages
git rm -rf .
echo "dist" > .gitignore
git add .gitignore
git commit -m "Initial commit"
git push -u origin gh-pages
```

4. **Configure GitHub Pages**
   - Go to repository "Settings"
   - Navigate to "Pages"
   - Set source to "Deploy from a branch"
   - Select `gh-pages` branch
   - Click "Save"

5. **Setup Automatic Deployment**
   - Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      
      - run: npm ci
      - run: npm run build
      
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### 4. Traditional Web Hosting (cPanel, FTP, etc.)

**Steps:**

1. **Build the Project**
```bash
npm run build
```

2. **Upload Files**
   - Connect via FTP/SFTP
   - Navigate to public_html directory
   - Upload all files from `dist/` folder

3. **Configure Server** (If needed)
   - Create `.htaccess` file in public_html:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

4. **Verify**
   - Visit your domain
   - Test all links and functionality

### 5. Docker Deployment

**dockerfile:**

```dockerfile
# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
RUN npm install -g serve
WORKDIR /app
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

**Build and Run:**
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

### 6. Firebase Hosting

**Steps:**

1. **Install Firebase CLI**
```bash
npm install -g firebase-tools
```

2. **Initialize Firebase**
```bash
firebase login
firebase init hosting
```

3. **Configure firebase.json**
```json
{
  "hosting": {
    "public": "dist",
    "rewrites": [{
      "source": "**",
      "destination": "/index.html"
    }]
  }
}
```

4. **Build and Deploy**
```bash
npm run build
firebase deploy
```

## 🔧 Environment Variables

If you need environment variables (for APIs, analytics, etc):

1. **Create .env.local file** (not committed to git)
```
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=your-id
```

2. **Use in code**
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

3. **Platform-specific setup:**
   - **Vercel:** Settings > Environment Variables
   - **Netlify:** Settings > Build & Deploy > Environment
   - **GitHub Pages:** Settings > Secrets

## 📊 Post-Deployment

### 1. Verify Functionality
- [ ] Test all navigation links
- [ ] Verify theme switching works
- [ ] Test contact form (if enabled)
- [ ] Check mobile responsiveness
- [ ] Test dark/light mode on all pages

### 2. SEO Optimization
- [ ] Verify meta tags in index.html
- [ ] Submit sitemap to Google Search Console
- [ ] Check Open Graph tags for social sharing
- [ ] Test with Google PageSpeed Insights

### 3. Analytics Setup
```html
<!-- Add to index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### 4. Performance Optimization
- Image optimization (compress before deploying)
- Enable gzip compression
- Setup CDN caching headers
- Monitor Core Web Vitals

### 5. Security Headers
Set these headers in your hosting platform:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`

## 🔄 Continuous Deployment

### GitHub Actions (Automated Deployment)

Create `.github/workflows/build-deploy.yml`:

```yaml
name: Build and Deploy

on:
  push:
    branches: ["main"]
  pull_request:
    branches: ["main"]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x]

    steps:
    - uses: actions/checkout@v3
    
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

## 🆘 Troubleshooting

### Blank Page After Deployment
- Check browser console for errors
- Verify `base` setting in vite.config.js
- Clear browser cache
- Check network tab for 404 errors

### Styles Not Applied
- Verify all CSS files are in dist folder
- Check Tailwind CSS build process
- Verify CSS file paths in HTML

### Images Not Loading
- Check image paths are relative
- Verify images are in dist folder
- Check CDN/server configuration

### Theme Not Persisting
- Check localStorage is enabled
- Verify browser privacy settings
- Test in incognito mode

## 📞 Getting Help

- **Vercel Support:** https://vercel.com/support
- **Netlify Support:** https://support.netlify.com
- **Vite Docs:** https://vitejs.dev
- **React Docs:** https://react.dev
- **Tailwind Docs:** https://tailwindcss.com

---

**Happy Deploying! 🚀**
