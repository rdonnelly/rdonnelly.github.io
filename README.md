# rdonnelly.github.io

Personal website and blog built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Development

### Prerequisites

- Node.js 18 or higher
- npm

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

The site will be available at `http://localhost:4321/`

### Build for production

```bash
npm run build
```

The built site will be in the `dist/` directory.

### Preview production build

```bash
npm run preview
```

## Project Structure

```
/
├── public/          # Static assets (images, favicon, etc.)
├── src/
│   ├── components/  # Reusable Astro components
│   ├── content/     # Content collections (blog posts)
│   ├── layouts/     # Page layouts
│   └── pages/       # Site pages and routes
├── astro.config.mjs # Astro configuration
└── tailwind.config.mjs # Tailwind CSS configuration
```

## Deployment

This site is deployed to GitHub Pages. Push to the main branch to trigger a deployment.
