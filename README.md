# SMA Surface Solutions — React + Tailwind

This is a React (Vite) + Tailwind CSS port of the original Flutter Web app for SMA Surface
Solutions, an Ontario epoxy flooring company.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

The production build is emitted to `dist/`.

## Structure

```
src/
  components/
    Navbar.jsx      — sticky nav, scroll-spy, mobile menu
    Footer.jsx       — brand, links, contact, social
  sections/
    HeroSection.jsx
    AboutSection.jsx
    ServicesSection.jsx
    ProjectsSection.jsx
    ContactSection.jsx
  App.jsx
  main.jsx
  index.css
public/
  assets/
    icons/, images/, projects/  
