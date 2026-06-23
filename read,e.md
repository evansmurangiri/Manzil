# Manzil — Landing Page (React + Vite)

A single-page React app for Manzil, a Dubai real-estate landing page.

## Project structure

```
manzil-app/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx           # React entry point
    ├── App.jsx            # Root component
    └── ManzilLanding.jsx  # The actual landing page (markup + styles)
```

## Setup

1. Make sure you have **Node.js 18+** installed.
2. Open a terminal in this folder (`manzil-app/`).
3. Install dependencies:

   ```bash
   npm install
   ```

## Run it locally

```bash
npm run dev
```

This starts a local dev server (usually at `http://localhost:5173`). Open that
URL in your browser — you should see the full Manzil landing page with the
dark background, lime accents, founder card, approach section, and project
cards.

Vite has hot-reload built in, so any edit you make to `src/ManzilLanding.jsx`
will show up instantly in the browser without a manual refresh.

## Build for production

```bash
npm run build
```

This outputs a production-ready static build into a `dist/` folder, which you
can deploy anywhere (Vercel, Netlify, your own server, etc.).

To preview that production build locally:

```bash
npm run preview
```

## Where to make changes

- **Copy/text** — edit the JSX directly inside `ManzilLanding.jsx` (e.g. the
  `<h1>`, paragraph text, or the `approachItems` / `projects` arrays near the
  top of the file).
- **Colors/fonts/spacing** — all CSS lives in the `styles` template string at
  the top of `ManzilLanding.jsx`, under CSS variables like `--lime`, `--blue`,
  `--bg-black`.
- **Project images** — swap the `img` URLs inside the `projects` array for
  your real renders once you have them.
