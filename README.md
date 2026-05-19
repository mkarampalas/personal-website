# Personal Website

A minimal, fast personal portfolio site built with HTML, CSS, and vanilla JavaScript — powered by [Vite](https://vitejs.dev/) for local development and production builds.

## Quick start

```bash
npm install
npm run dev
```

Open the URL shown in your terminal (usually `http://localhost:5173`).

## Customize

Edit `index.html` to update:

- **Name & tagline** — hero section
- **About** — bio and facts (focus, status, social links)
- **Projects** — replace the three project cards with your real work
- **Contact** — change `hello@example.com` to your email

Tweak colors and fonts in `css/style.css` under the `:root` variables at the top.

## Deploy (Cloudflare Pages)

In the Cloudflare project **Settings → Builds**:

| Setting | Value |
|--------|--------|
| Build command | `npm run build` |
| Build output directory | `dist` |
| **Deploy command** | **Leave empty** (do not use `npx wrangler deploy`) |

Cloudflare publishes the `dist` folder automatically after a successful build. A custom deploy command is only needed for Workers, not this static site.

If your project already requires a deploy command, use `npx wrangler deploy` — `wrangler.jsonc` in this repo points Wrangler at the built `dist` assets.

Connect the GitHub repo, then add your custom domain under **Custom domains**.

## Deploy (other hosts)

```bash
npm run build
```

Upload the `dist/` folder to Netlify, Vercel, etc.

## Preview production build

```bash
npm run preview
```
