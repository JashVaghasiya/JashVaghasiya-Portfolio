import { build } from 'vite';
import path from 'path';
import fs from 'fs';

// Build the client for static deployment
const buildStatic = async () => {
  console.log('Building static portfolio for deployment...');
  
  try {
    // Build the frontend
    await build({
      root: path.resolve(process.cwd(), 'client'),
      build: {
        outDir: path.resolve(process.cwd(), 'dist-static'),
        emptyOutDir: true,
      },
      resolve: {
        alias: {
          "@": path.resolve(process.cwd(), "client", "src"),
          "@shared": path.resolve(process.cwd(), "shared"),
          "@assets": path.resolve(process.cwd(), "attached_assets"),
        },
      },
    });

    // Create a simple redirects file for Netlify
    const netlifyRedirects = `
# Redirect all routes to index.html for SPA routing
/*    /index.html   200
`;
    
    fs.writeFileSync(path.resolve(process.cwd(), 'dist-static', '_redirects'), netlifyRedirects);
    
    // Create vercel.json for Vercel deployment
    const vercelConfig = {
      "rewrites": [
        {
          "source": "/(.*)",
          "destination": "/index.html"
        }
      ]
    };
    
    fs.writeFileSync(path.resolve(process.cwd(), 'dist-static', 'vercel.json'), JSON.stringify(vercelConfig, null, 2));
    
    console.log('✅ Static build completed successfully!');
    console.log('📁 Files are ready in ./dist-static folder');
    console.log('');
    console.log('Deployment options:');
    console.log('🔹 Netlify: Upload the dist-static folder');
    console.log('🔹 Vercel: Deploy from GitHub with root directory set to dist-static');
    console.log('🔹 Manual: Upload contents of dist-static to any web host');
    
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
};

buildStatic();