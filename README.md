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

## Deploy

Build static files:

```bash
npm run build
```

Upload the `dist/` folder to any static host:

- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

For GitHub Pages, set the site source to the `dist` folder or use an action that runs `npm run build` and publishes `dist`.

## Preview production build

```bash
npm run preview
```
