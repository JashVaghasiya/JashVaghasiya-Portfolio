# Jash Vaghasiya Portfolio - Data Engineer

## Overview

This is a modern portfolio website for Jash Vaghasiya, a Data Engineer. The application is built using React with TypeScript, featuring a clean, responsive design showcasing professional experience, projects, skills, certifications, education, and contact functionality. The portfolio is optimized for static deployment on platforms like Netlify and Vercel.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Animations**: Framer Motion for smooth transitions and interactions
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **API Design**: RESTful API with Express routes
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL session store with connect-pg-simple

### Development Architecture
- **Monorepo Structure**: Client, server, and shared code in single repository
- **Module System**: ESM modules throughout
- **Type Safety**: Shared TypeScript schemas using Zod validation
- **Development Server**: Vite middleware integration with Express in development

## Key Components

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contacts Table**: Contact form submissions with full contact details and timestamps
- **Schema Validation**: Zod schemas for runtime validation and TypeScript types

### API Endpoints
- `POST /api/contact` - Submit contact form with validation
- `GET /api/contacts` - Retrieve all contact submissions (admin)

### UI Components
- **Navigation**: Responsive navigation with scroll-based active section highlighting
- **Hero Section**: Animated landing section with call-to-action buttons
- **Experience Section**: Timeline-based work experience display
- **Projects Section**: Grid layout showcasing portfolio projects
- **Skills Section**: Technical skills with progress indicators and certifications
- **Education Section**: Academic background with achievements
- **Contact Section**: Interactive contact form with real-time validation
- **Footer**: Site navigation and copyright information

### Storage System
- **Production**: PostgreSQL with Drizzle ORM
- **Development**: In-memory storage implementation for rapid development
- **Interface**: IStorage interface allowing easy switching between storage backends

## Data Flow

1. **Frontend Form Submission**: Contact form uses React Hook Form with Zod validation
2. **API Request**: TanStack Query manages API calls with error handling
3. **Backend Validation**: Express route validates data using shared Zod schemas
4. **Database Storage**: Drizzle ORM handles database operations
5. **Response Handling**: Success/error states managed through toast notifications

## External Dependencies

### Core Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **UI Library**: Radix UI primitives for accessible components
- **Icons**: Lucide React and React Icons (brand icons)
- **Fonts**: Google Fonts (Inter) for typography
- **Images**: Unsplash for project showcase images

### Development Tools
- **Build**: Vite with React plugin
- **Type Checking**: TypeScript compiler
- **Database Migrations**: Drizzle Kit for schema management
- **Development Enhancements**: Replit-specific plugins for runtime error overlay

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Static Assets**: Frontend assets served from Express in production

### Environment Configuration
- **Database**: `DATABASE_URL` environment variable for PostgreSQL connection
- **Development**: NODE_ENV=development enables Vite middleware
- **Production**: NODE_ENV=production serves static files

### Database Management
- **Schema**: Defined in `shared/schema.ts` using Drizzle
- **Migrations**: Generated in `./migrations` directory
- **Deployment**: `db:push` command for schema deployment

## Changelog

```
Changelog:
- July 03, 2025. Initial setup
- July 03, 2025. Added individual project detail pages with comprehensive project information
- July 04, 2025. Updated entire portfolio with Jash Vaghasiya's personal information
- July 04, 2025. Fixed deployment issues by converting to static-friendly contact form
- July 04, 2025. Added floating technology logos in hero section background
- July 04, 2025. Updated experience section with actual SpicyChat.AI and Dione Apps work history
- July 04, 2025. Enhanced skills section: removed progress bars, added skill names with logos
- July 04, 2025. Created separate certifications section with Microsoft and Databricks certifications
- July 04, 2025. Added Azure, AWS, and GCP cloud provider logos to hero section
- July 04, 2025. Removed Kaggle links throughout the portfolio
- July 04, 2025. Updated education section with actual Lambton College and university details
- July 04, 2025. Centered continuous learning sections and updated copyright to Jash Vaghasiya
- July 04, 2025. Improved contact form reliability with better error handling and fallback options
- July 04, 2025. Completely redesigned skills section: removed Data Engineering category, implemented clean single-column layout with gray pill styling
- July 04, 2025. Updated GitHub profile links throughout portfolio to correct URL (JashVaghasiya-DE)
- July 04, 2025. Fixed project navigation by correcting project ID mismatches between sections and detail pages
- July 04, 2025. Added actual credential verification links for all certifications with expiration dates and credential IDs
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```