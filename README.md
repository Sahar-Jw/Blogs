## Blogs Landing Page

A responsive React blog landing page showcasing:
- Hero section with email subscribe form
- Grid of 6 blog post previews with images/authors/dates
- Responsive navigation with mobile menu popup
- Interactive Sign In / Sign Up modals (toggle switch, form inputs, scroll lock)
- Clean footer

Built with modular components, pure React state management (no external state libs).

React/Vite app for blogs site with Hero section, Posts grid, responsive design, and advanced popup auth system (Sign In / Sign Up toggle).

## Features
- Responsive landing page with Hero subscribe form
- Blog posts section with dummy data
- Header/Nav with Sign In button triggering popup
- Dual popup auth: Sign In ↔ Sign Up switch via links
- Popup features: outside/layout click to close, body scroll lock while open
- Modular components with co-located CSS
- Scroll lock/unlock on popup toggle/close (pure useState + DOM)

## Quick Start
```bash
npm install
npm run dev
```
Opens at http://localhost:5173

## Scripts
- `npm run dev` - Start dev server with HMR
- `npm run build` - Build for production (dist/)
- `npm run lint` - Lint with ESLint
- `npm run preview` - Preview production build

## Project Structure
```
.
├── src/
│   ├── App.jsx - Main app, popup states, scroll lock logic
│   ├── main.jsx - Entry point
│   └── components/ - Reusable UI components
│       ├── PopUp/ - Overlay wrapper with close/scroll unlock
│       ├── LinkRouter/ - Auth switch link
│       ├── Header/Nav/ - Top bar with popup trigger
│       ├── Hero/ - Landing hero with subscribe
│       ├── PostsSection/Post/ - Blog posts grid
│       ├── Footer/ - Copyright footer
│       └── Title/MainBtn/Input/ - UI primitives
├── public/assets/img/ - Images
├── package.json - React 19, Vite, ESLint
└── TODO.md - Task progress
```

## Tech Stack
- React 19
- Vite (fast bundler/HMR)
- ESLint (linting)
- CSS modules (scoped styles)

Built by Sahar Jwar Blogs.
