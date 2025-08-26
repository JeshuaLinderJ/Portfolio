# Cloudflare Pages Deployment Guide

## Overview
This guide provides step-by-step instructions for deploying your Next.js portfolio to Cloudflare Pages (not Cloudflare Workers).

## Prerequisites
- GitHub repository with your Next.js portfolio
- Cloudflare account
- Repository configured for static export (completed)

## Configuration Files Added
- ✅ `next.config.ts` - Configured for static export
- ✅ `public/_headers` - Cloudflare Pages headers configuration
- ✅ `public/_redirects` - Routing and redirect rules

## Cloudflare Pages Dashboard Setup

### Step 1: Create New Pages Project
1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Pages** in the left sidebar
3. Click **Create a project**
4. Select **Connect to Git**

### Step 2: Connect Repository
1. Choose **GitHub** as your Git provider
2. Authorize Cloudflare to access your repositories
3. Select your portfolio repository: `JeshuaLinderJ/Portfolio`
4. Click **Begin setup**

### Step 3: Configure Build Settings
**IMPORTANT**: Use these exact settings to avoid Wrangler/Workers deployment:

```
Project name: [your-portfolio-name]
Production branch: main
Build command: npm run build
Build output directory: out
Root directory: (leave empty)
```

**Environment Variables** (if needed):
```
NODE_VERSION: 18
```

### Step 4: Deploy
1. Click **Save and Deploy**
2. Wait for the build to complete (should take 2-3 minutes)
3. Your site will be available at: `https://[project-name].pages.dev`

## Build Process Verification
The correct build process should:
1. ✅ Run `npm install` to install dependencies
2. ✅ Run `npm run build` (NOT `npx wrangler deploy`)
3. ✅ Generate static files in `out/` directory
4. ✅ Deploy static files to Cloudflare Pages CDN

## Troubleshooting

### Issue: "Wrangler deploy" command being used
**Solution**: Ensure you're creating a **Pages** project, not a **Workers** project
- Go to Cloudflare Dashboard → **Pages** (not Workers & Pages)
- Use build output directory: `out`
- Do NOT add any `wrangler.toml` file

### Issue: Build fails with "output: export" error
**Solution**: Ensure Next.js version compatibility
- Next.js 13.3+ supports `output: 'export'`
- Current version: 15.1.6 ✅

### Issue: Assets not loading
**Solution**: Check build output directory
- Verify `out/` directory contains `index.html`
- Verify `out/_next/static/` contains CSS/JS files
- Check `public/_headers` file is copied to `out/_headers`

## Custom Domain Setup (Optional)
1. In Cloudflare Pages dashboard, go to your project
2. Navigate to **Custom domains** tab
3. Click **Set up a custom domain**
4. Enter your domain name
5. Follow DNS configuration instructions

## Performance Optimizations
The deployment includes:
- ✅ Static file caching (31536000 seconds for immutable assets)
- ✅ Security headers (X-Frame-Options, CSP, etc.)
- ✅ Optimized Next.js bundle splitting
- ✅ Image optimization disabled for static export
- ✅ Proper routing with `_redirects` file

## Expected Results
After successful deployment:
- ✅ Portfolio accessible at Cloudflare Pages URL
- ✅ All sections working (Hero, Skills, Experience, etc.)
- ✅ Resume download functional (`/resume.pdf`)
- ✅ Contact form mailto links working
- ✅ Responsive design on all devices
- ✅ Fast loading times with CDN caching

## Monitoring and Updates
- **Automatic deployments**: Enabled for `main` branch
- **Build logs**: Available in Cloudflare Pages dashboard
- **Analytics**: Available in Cloudflare dashboard
- **Updates**: Push to `main` branch triggers automatic rebuild

## Support
If you encounter issues:
1. Check build logs in Cloudflare Pages dashboard
2. Verify `out/` directory is generated locally with `npm run build`
3. Ensure you're using **Pages** not **Workers** in Cloudflare dashboard
