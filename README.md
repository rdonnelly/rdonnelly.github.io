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

### Custom Domain Configuration

The site is configured to use the custom domain `rdonnelly.com`. For the custom domain to work properly, the following steps must be completed:

#### 1. CNAME File (✅ Already configured)
- The `public/CNAME` file contains the domain name
- This file is automatically copied to the `dist/` directory during build
- The GitHub Actions workflow deploys this file to GitHub Pages

#### 2. GitHub Pages Settings (⚠️ Must be configured manually)
To enable the custom domain in GitHub:
1. Go to repository **Settings** → **Pages**
2. Under **Custom domain**, enter: `rdonnelly.com`
3. Click **Save**
4. Enable **Enforce HTTPS** once DNS propagation is complete

#### 3. DNS Configuration (⚠️ Must be configured at domain registrar)
At your domain registrar (e.g., Namecheap, GoDaddy, Cloudflare), configure the following DNS records:

**For apex domain (rdonnelly.com):**
- Add **A records** pointing to GitHub Pages IP addresses:
  ```
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
  ```

**For www subdomain (optional but recommended):**
- Add a **CNAME record**:
  - Name: `www`
  - Target: `rdonnelly.github.io.` (note the trailing dot)

**Note:** DNS changes can take up to 24-48 hours to propagate globally, though they often complete within a few minutes to hours.
