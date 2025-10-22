# Pikzo E-Commerce Application

## Overview

Pikzo is a Progressive Web Application (PWA) e-commerce platform built with vanilla JavaScript, HTML, and CSS. The application provides a complete shopping experience including product browsing, cart management, user authentication, and order processing. It uses Vite as a build tool and development server with hot module reloading, and implements PWA capabilities for offline functionality and native app-like experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Single Page Application (SPA) Pattern**
- The application uses a client-side routing approach with dynamic content rendering
- All content is rendered into a single `#app` div element via JavaScript
- Navigation and state changes happen without page reloads for a smooth user experience

**Build System: Vite**
- Vite is used as the development server and build tool
- Provides hot module reloading (HMR) for instant feedback during development
- Optimizes assets and bundles code for production deployment
- Configuration allows toggling HMR on/off based on developer preference

**Design System: Neubrutalism**
- Uses a bold, brutalist design approach with thick borders and heavy shadows
- CSS custom properties (variables) define the design system tokens
- Color palette includes primary (#FF6B35), secondary (#004E89), accent (#F7B801), success (#06D6A0), and danger (#EF476F)
- Consistent use of 4px borders and offset shadows (6px/8px) creates the distinctive neubrutalism aesthetic

**Progressive Web App (PWA)**
- Implements PWA functionality via vite-plugin-pwa
- Auto-updates service workers for seamless version updates
- Provides offline capabilities through workbox caching strategies
- Includes web app manifest with icons, theme colors, and shortcuts
- Supports installation on mobile devices and desktop as a standalone app

### Data Storage

**Client-Side Storage: LocalStorage**
- All application data is stored in the browser's localStorage
- No backend server or database required for basic functionality
- Data persists across browser sessions

**Data Models:**
1. **Products** - Product catalog with properties: id, name, price, category, image, description, rating, reviews, stock, featured status
2. **Cart** - Shopping cart items stored as an array
3. **Orders** - Completed order history
4. **Users** - User accounts with authentication credentials (email, password) and admin status
5. **CurrentUser** - Session state tracking the logged-in user

**Data Management Pattern**
- Centralized DataStore class manages all localStorage operations
- Initializes default data on first run (demo products and users)
- Provides a consistent interface for data access and manipulation
- Demo credentials: Admin (admin@shop.com / admin123) and User (user@shop.com / user123)

### Authentication & Authorization

**Client-Side Authentication**
- Simple email/password authentication stored in localStorage
- No encryption or secure hashing (suitable for demo/prototype only)
- Session management through currentUser localStorage item
- Role-based access with admin flag for privileged operations

**Security Consideration:**
- Current implementation is NOT production-ready for security
- Passwords stored in plain text
- No server-side validation or token management
- Suitable for prototyping and learning, requires complete overhaul for production use

### State Management

**Component-Based State**
- Application state distributed across component instances
- No centralized state management library (Redux, Vuex, etc.)
- Components access DataStore directly for data operations
- Simple and straightforward for small to medium applications

### Routing

**Client-Side Routing**
- Hash-based or history-based routing implemented in JavaScript
- Routes dynamically render different views in the #app container
- No server-side routing framework

## External Dependencies

### Build & Development Tools

**Vite (v5.4.8)**
- Purpose: Development server and build tool
- Provides fast HMR during development
- Handles module bundling and asset optimization
- Configuration in vite.config.js

**vite-plugin-pwa (v1.1.0)**
- Purpose: PWA integration for Vite
- Generates service workers automatically
- Creates web app manifest
- Handles asset caching strategies via Workbox

### Third-Party Services

**Unsplash Images**
- Purpose: Product placeholder images
- Uses Unsplash's URL API for dynamic image loading
- Format: `https://images.unsplash.com/photo-{id}?w=500&h=500&fit=crop`
- No API key required for basic usage

### Browser APIs

**LocalStorage API**
- Primary data persistence mechanism
- Synchronous key-value storage
- 5-10MB storage limit per origin

**Service Worker API**
- Enables offline functionality
- Managed by vite-plugin-pwa and Workbox
- Caches assets for offline access

**Web App Manifest**
- Defines PWA metadata and appearance
- Enables "Add to Home Screen" functionality
- Configured via vite-plugin-pwa plugin

### No Backend Infrastructure

The application currently operates entirely in the browser with no:
- Server-side API
- Database server
- Authentication service
- Payment processing gateway
- Cloud hosting requirements (can be deployed as static files)

This architecture makes deployment simple but limits scalability and security for production e-commerce use cases.
