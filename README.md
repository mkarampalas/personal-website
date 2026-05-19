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

## Deploy (Cloudflare Workers / Pages — new UI)

In **Settings → Builds**, use exactly:

| Setting | Value |
|--------|--------|
| **Build command** | `npm run build` |
| **Deploy command** | `npx wrangler deploy` |

There is no separate “output directory” field in this UI. The built site is published from **`dist`** via `wrangler.jsonc` → `assets.directory`.

After a green deploy, add your domain under **Custom domains**.

## Deploy (other hosts)

```bash
npm run build
```

Upload the `dist/` folder to Netlify, Vercel, etc.

## Preview production build

```bash
npm run preview
```
