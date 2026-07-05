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
    icons/, images/, projects/   — copied from the Flutter assets folder
```

## Notes on the port

- Flutter's `MediaQuery` breakpoints (768px / 1024px) became Tailwind's `md:` / `lg:` breakpoints.
- `flutter_svg` icons are rendered as plain `<img>` tags (the source SVGs already have their
  colors baked in).
- The contact form still uses a `mailto:` link, matching the original behavior — no backend.
- The services carousel is a small hand-rolled auto-playing slider instead of
  `carousel_slider`; there is no external image gallery library.
- `url_launcher` calls became plain `<a>` / `window.location.href` calls (`tel:`, `mailto:`,
  `https://wa.me/...`, social links).
