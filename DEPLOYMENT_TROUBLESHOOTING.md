# Deployment Troubleshooting Guide

## Issue: Code Showing on Landing Page Instead of Website

This happens when the deployment tries to run in production mode but can't find the built files.

### Quick Fix (Immediate Solution)

1. **Run the build command first:**
   ```bash
   npm run build
   ```
   This creates the production files in `dist/public`

2. **If build takes too long or fails, try step-by-step:**
   ```bash
   # Build frontend only
   npx vite build
   
   # Build backend only  
   npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist
   ```

3. **For immediate testing:**
   ```bash
   npm run dev
   ```
   This runs in development mode which always works.

### Deployment Platforms

#### Replit Deployment
1. Make sure you run `npm run build` before clicking Deploy
2. Or use the automated script: `./deploy.sh`
3. Set environment variable: `NODE_ENV=production`

#### Vercel Deployment  
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist/public`
4. Vercel will handle the rest automatically

#### Netlify Deployment
1. Drag and drop the `dist/public` folder after running build
2. Or connect GitHub repo with:
   - Build command: `npm run build`
   - Publish directory: `dist/public`

#### Manual Deployment
1. Run `npm run build`
2. Upload contents of `dist/public` to your web host
3. The `dist/index.js` file is your server if needed

### Common Issues and Solutions

#### Build Timeout
If `npm run build` takes too long:
```bash
# Try building in parts
npx vite build
npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist
```

#### Missing Dependencies
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Wrong Environment
Make sure your deployment platform sets:
- `NODE_ENV=production` for production builds
- `NODE_ENV=development` for development

#### Port Issues
The app runs on port 5000 by default. Some platforms may require:
- Setting `PORT` environment variable
- Using `0.0.0.0` instead of `localhost`

### Verification Steps

After deployment, check:
1. Can you access the homepage?
2. Do navigation links work?
3. Does the contact form submit?
4. Are images loading properly?

### Environment Variables

For full functionality, you may need:
- `DATABASE_URL` - For contact form database storage
- `NODE_ENV` - Set to "production" for deployment
- `PORT` - If your platform requires a specific port

### Development vs Production

**Development Mode (`npm run dev`)**
- Uses Vite dev server
- Hot reload enabled
- Serves from source files
- Always works locally

**Production Mode (`npm start`)**
- Serves built static files
- Requires `npm run build` first
- Optimized and minified
- What deployment platforms use

### File Structure After Build

```
dist/
├── public/          # Frontend static files (HTML, CSS, JS)
│   ├── index.html
│   ├── assets/
│   └── ...
└── index.js         # Built server file
```

The `dist/public` folder contains your complete static website that can be deployed anywhere.

### Still Having Issues?

1. Check the browser console for JavaScript errors
2. Verify all files exist in `dist/public` after building
3. Test locally with `npm run dev` first
4. Make sure you've customized all placeholder content

### Platform-Specific Notes

**Replit**: Click Deploy after running build, or the platform may try to serve raw code

**Vercel**: Automatically detects the build configuration from package.json

**Netlify**: Drag-drop deployment is simplest for beginners

**AWS/DigitalOcean**: Upload `dist/public` contents to web root

Need more help? Check the main README.md for additional guidance.