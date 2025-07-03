# Portfolio Customization Guide

## Overview
This guide will help you customize the portfolio with your personal information and deploy it.

## Key Files to Modify

### 1. Personal Information (`client/src/components/hero-section.tsx`)

**Lines to change:**
- Line 54: `Alex <span className="text-blue-400">Chen</span>` → Your name
- Line 56: `Data Engineer` → Your job title  
- Line 58-59: Description → Your professional summary
- Line 88: `alex.chen@email.com` → Your email
- Line 92: `+1 (555) 123-4567` → Your phone
- Line 96: `San Francisco, CA` → Your location
- Line 103-125: Social media links → Your LinkedIn, GitHub, etc.

### 2. Navigation and Branding (`client/src/components/navigation.tsx`)

**Lines to change:**
- Line 65: `Alex Chen` → Your name
- Line 66: `Data Engineer` → Your title

### 3. Page Title and SEO (`client/index.html`)

**Lines to change:**
- Line 6: `Alex Chen - Data Engineer Portfolio` → Your name and title
- Line 7: Meta description → Your description

### 4. Experience Section (`client/src/components/experience-section.tsx`)

**Replace the entire `experiences` array (lines 5-27) with your work history:**

```javascript
const experiences = [
  {
    title: "Your Current Job Title",
    company: "Your Company",
    period: "Start Year - Present",
    description: "Your job description and achievements...",
    side: "left"
  },
  // Add more experiences...
];
```

### 5. Projects Section (`client/src/components/projects-section.tsx`)

**Replace the `projects` array (lines 8-49) with your projects:**

```javascript
const projects = [
  {
    id: "your-project-slug",
    title: "Your Project Title",
    description: "Your project description...",
    image: "path/to/your/project/image.jpg",
    technologies: ["Tech1", "Tech2", "Tech3"]
  },
  // Add more projects...
];
```

### 6. Skills Section (`client/src/components/skills-section.tsx`)

**Update your skills (lines 8-47):**

```javascript
const technicalSkills = [
  { name: "Your Skill 1", percentage: 90 },
  { name: "Your Skill 2", percentage: 85 },
  // Add your skills...
];

const certifications = [
  {
    name: "Your Certification",
    issuer: "Issuing Organization", 
    year: "2024",
    icon: IconComponent,
    color: "bg-blue-600"
  },
  // Add your certifications...
];
```

### 7. Education Section (`client/src/components/education-section.tsx`)

**Replace education data (lines 7-47):**

```javascript
const educations = [
  {
    degree: "Your Degree",
    institution: "Your University",
    period: "Start - End Year",
    description: "Your education details...",
    achievements: ["Your GPA", "Your honors"],
    icon: GraduationCap,
    color: "bg-blue-600"
  },
  // Add more education...
];
```

### 8. Contact Information (`client/src/components/contact-section.tsx`)

**Update contact details (lines 70-112):**

```javascript
const contactInfo = [
  {
    icon: Mail,
    label: "Email", 
    value: "your.email@domain.com",
    color: "bg-blue-600"
  },
  // Update phone, location...
];

const socialLinks = [
  {
    icon: SiLinkedin,
    href: "https://linkedin.com/in/yourprofile",
    color: "hover:bg-blue-600"
  },
  // Update your social links...
];
```

### 9. Footer (`client/src/components/footer.tsx`)

**Update footer text (lines 27-28):**
- Line 27: `Alex Chen` → Your name
- Line 28: `Data Engineer` → Your title

### 10. Project Detail Pages (`client/src/pages/project-detail.tsx`)

**Replace the entire `projectsData` object (lines 9-248) with your detailed project information.**

## Adding Your Images

### Option 1: Local Images
1. Create an `assets` folder in `client/src/`
2. Add your images to `client/src/assets/`
3. Import them: `import myImage from "@assets/my-image.jpg"`
4. Use in components: `<img src={myImage} alt="Description" />`

### Option 2: External URLs
- Use direct URLs to your hosted images
- Recommended services: AWS S3, Cloudinary, or GitHub

## Deployment Options

### Option 1: Replit Deployment (Easiest)
1. Click the "Deploy" button in your Replit interface
2. Follow the deployment wizard
3. Your site will be live at `your-repl-name.your-username.replit.app`

### Option 2: Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Deploy automatically on every push

### Option 3: Netlify
1. Push code to GitHub
2. Connect repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist/public`

### Option 4: Manual Build
```bash
# Install dependencies
npm install

# Build the project
npm run build

# The built files will be in dist/public
# Upload these to any static hosting service
```

## Environment Variables (If using database)

If you want to use a real database instead of in-memory storage:

1. Set `DATABASE_URL` environment variable
2. The app will automatically switch to PostgreSQL

## Color Customization

Edit `client/src/index.css` to change the color scheme:
- Lines 16, 39: Primary colors (blue theme)
- Lines 67-68: Hero background gradient
- Lines 72-74: Skill bar colors

## Important Notes

1. **Replace all placeholder content** - The current content is for "Alex Chen"
2. **Test locally first** - Run `npm run dev` to test changes
3. **Update project images** - Replace placeholder project images with your actual work
4. **Customize project details** - Each project page needs your specific information
5. **Check all links** - Ensure all social media and external links work

## File Structure Summary

```
├── client/
│   ├── src/
│   │   ├── components/        # All UI components to customize
│   │   ├── pages/            # Main pages and project details
│   │   ├── assets/           # Your images (create this folder)
│   │   └── index.css         # Colors and styling
│   └── index.html            # Page title and meta tags
├── server/                   # Backend (minimal changes needed)
├── shared/                   # Database schema (minimal changes needed)
└── package.json             # Dependencies
```

## Getting Help

- Check the browser console for errors
- Ensure all imports are correct after making changes
- Test the contact form functionality
- Verify all navigation links work properly

Good luck with your portfolio deployment!