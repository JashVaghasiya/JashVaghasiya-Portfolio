#!/bin/bash

# Portfolio Deployment Script
# This script helps you build and prepare your portfolio for deployment

echo "🚀 Portfolio Deployment Helper"
echo "================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

echo "✅ Build completed successfully"

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo "❌ Build folder 'dist' not found"
    exit 1
fi

echo "📁 Build files are ready in the 'dist' folder"
echo ""
echo "🎉 Your portfolio is ready for deployment!"
echo ""
echo "Deployment options:"
echo "1. 📌 Replit: Click the 'Deploy' button in your Replit interface"
echo "2. ⚡ Vercel: Connect your GitHub repo to Vercel for automatic deployment"
echo "3. 🌐 Netlify: Upload the 'dist/public' folder to Netlify"
echo "4. 📤 Manual: Upload the contents of 'dist/public' to any web host"
echo ""
echo "📋 Next steps:"
echo "- Customize your personal information using CUSTOMIZATION_GUIDE.md"
echo "- Test your portfolio locally with: npm run dev"
echo "- Deploy using one of the options above"
echo ""
echo "Good luck with your portfolio! 🌟"