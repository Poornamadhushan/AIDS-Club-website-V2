# AIDS Club Website (AIDS-Club-website-V2)

A clean, responsive Next.js website for the AI & Data Science Club. Built with the Next.js App Router, TypeScript, and Tailwind CSS.

## Features

- Landing/Hero section
- Events listing
- Team members page
- Contact form
- Dark/light theme support
- Reusable UI components in `components/ui`

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Netlify (netlify.toml present) — can also deploy to Vercel

## Prerequisites

- Node.js 18+ (or the version required by your environment)
- npm, yarn, or pnpm

## Setup

1. Clone the repo

```bash
git clone <repo-url>
cd AIDS-Club-website-V2
```

2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open http://localhost:3000 in your browser.

## Common scripts

- `dev` — Run the Next.js dev server
- `build` — Build the production bundle
- `start` — Run the production server after building
- `lint` — Run linters (if configured)

Adjust the exact script names to match the `package.json` in this repo.

## Deployment

- Deploy to Netlify using the included `netlify.toml`, or deploy to Vercel for minimal configuration.
- For Netlify, set the build command to `npm run build` and publish directory to `.next` (or follow Netlify's Next.js docs).

## Project structure (high level)

- `app/` — Next.js App Router pages and layout
- `components/` — UI components used across the site
- `public/` — Static assets
- `styles/` or `app/globals.css` — Global styles

## Contributing

1. Create an issue to discuss large changes.
2. Open a branch and submit a pull request.

## License

This repository is open-source. Add a license file (for example, MIT) if desired.

---

If you want, I can: add a `LICENSE` file, populate the README with exact `package.json` scripts, or create a short deployment guide for Netlify/Vercel.
