# Startup Labs Global - Business Website

## Overview

This is a full-stack web application built for Startup Labs Global, a company that provides startup-focused services including accelerators, workshops, bootcamps, research, and consultancy. The application features a modern, responsive landing page with contact form functionality and professional design.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and building

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Prepared for session handling with connect-pg-simple
- **API Design**: RESTful API endpoints with proper error handling

### UI/UX Design
- **Design System**: shadcn/ui components with custom styling
- **Theme**: Professional blue/accent color scheme with responsive design
- **Typography**: Inter font family for modern appearance
- **Components**: Reusable UI components with consistent styling

## Key Components

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contact Inquiries Table**: Stores contact form submissions with fields for personal info, company details, service interests, and timestamps
- **Validation**: Zod schemas for type-safe data validation

### API Endpoints
- `POST /api/contact` - Submit contact form inquiries
- `GET /api/contact` - Retrieve contact inquiries (admin functionality)

### Core Pages
- **Home Page**: Complete landing page with hero section, services showcase, about section, success stories, and contact form
- **404 Page**: Custom not found page with helpful messaging

### Key Features
- Contact form with comprehensive validation
- Responsive design for all device sizes
- Professional service showcase with imagery
- Success stories and testimonials section
- Smooth scrolling navigation
- Toast notifications for user feedback

## Data Flow

1. **User Interaction**: Users interact with the React frontend
2. **Form Submission**: Contact forms are validated client-side with Zod schemas
3. **API Requests**: Frontend makes HTTP requests to Express backend
4. **Database Operations**: Backend uses Drizzle ORM to interact with PostgreSQL
5. **Response Handling**: Success/error responses are displayed via toast notifications

## External Dependencies

### Frontend Dependencies
- React ecosystem (React, React DOM, React Hook Form)
- UI Components (Radix UI primitives, Lucide React icons)
- Styling (Tailwind CSS, class-variance-authority)
- State Management (TanStack Query)
- Validation (Zod)
- Date Handling (date-fns)

### Backend Dependencies
- Express.js for server framework
- Drizzle ORM with PostgreSQL driver (@neondatabase/serverless)
- Session management (connect-pg-simple)
- Development tools (tsx, esbuild)

### Development Tools
- Vite for frontend development
- TypeScript for type safety
- Replit-specific plugins for development environment
- PostCSS and Autoprefixer for CSS processing

## Deployment Strategy

### Development Environment
- Replit-based development with hot reload
- PostgreSQL database provisioned via Replit
- Environment variables for database configuration
- Port 5000 for local development

### Production Build
- Vite builds optimized frontend assets
- ESBuild bundles backend code
- Static files served from Express
- Database migrations handled via Drizzle Kit

### Database Management
- Drizzle Kit for schema migrations
- Shared schema definitions between frontend and backend
- Environment-based database URL configuration

## Changelog

Changelog:
- June 25, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

June 25, 2025:
- Updated landing page messaging from startup-focused to B2B/partner-focused
- Hero section now targets corporations, governments, and institutions
- Services reframed as program design and delivery offerings
- Testimonials updated to feature organizational partners rather than individual entrepreneurs
- Contact form and all CTAs updated to "Partner With Us" messaging
- SEO metadata updated to reflect B2B positioning