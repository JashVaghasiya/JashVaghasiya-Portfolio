# Data Engineer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Node.js. Features dynamic navigation, project showcases, and a working contact form.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Visit `http://localhost:5000` to see your portfolio.

### 3. Customize Your Content
Follow the detailed guide in `CUSTOMIZATION_GUIDE.md` to add your personal information.

### 4. Deploy
Use the deployment script:
```bash
./deploy.sh
```

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Main pages and routing
│   │   └── lib/           # Utilities and helpers
├── server/                # Backend Express.js server
├── shared/                # Shared types and schemas
├── CUSTOMIZATION_GUIDE.md # Detailed customization instructions
└── deploy.sh             # Deployment helper script
```

## ✨ Features

- **Responsive Design**: Works perfectly on desktop and mobile
- **Dynamic Navigation**: Smooth scrolling with active section highlighting
- **Project Showcases**: Individual pages for each project with detailed information
- **Contact Form**: Working contact form with backend integration
- **Modern Animations**: Smooth transitions using Framer Motion
- **SEO Optimized**: Meta tags and proper semantic structure

## 🛠 Technology Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- Radix UI components
- Wouter for routing
- TanStack Query for data fetching

### Backend
- Node.js with Express
- TypeScript
- PostgreSQL (optional, falls back to in-memory storage)
- Drizzle ORM

## 📝 Customization

1. **Personal Information**: Update all components in `client/src/components/`
2. **Projects**: Modify `client/src/pages/project-detail.tsx` and `client/src/components/projects-section.tsx`
3. **Styling**: Edit `client/src/index.css` for colors and themes
4. **Images**: Add your images to `client/src/assets/` (create this folder)

See `CUSTOMIZATION_GUIDE.md` for detailed instructions.

## 🚀 Deployment Options

### Replit (Easiest)
Click the "Deploy" button in your Replit interface.

### Vercel (Recommended)
1. Push to GitHub
2. Connect repo to Vercel
3. Deploy automatically

### Netlify
1. Run `npm run build`
2. Upload `dist/public` folder to Netlify

### Manual
1. Run `npm run build`
2. Upload `dist/public` contents to any web host

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run db:generate` - Generate database migrations
- `npm run db:push` - Push schema to database

## 📧 Contact Form

The contact form is fully functional and stores submissions. In development, it uses in-memory storage. For production, set a `DATABASE_URL` environment variable to use PostgreSQL.

## 🎨 Customizing Colors

Edit the CSS variables in `client/src/index.css`:

```css
:root {
  --primary: hsl(207, 90%, 54%);        /* Blue theme */
  --background: hsl(0, 0%, 100%);       /* White background */
  /* Add your custom colors */
}
```

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔗 Links and Social Media

Update your social media links in:
- `client/src/components/hero-section.tsx`
- `client/src/components/contact-section.tsx`

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Support

If you encounter any issues:
1. Check the browser console for errors
2. Ensure all dependencies are installed (`npm install`)
3. Verify Node.js version (18+ recommended)
4. Check that all personal information is properly updated

---

**Happy coding! 🚀**