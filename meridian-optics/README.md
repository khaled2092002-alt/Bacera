# Meridian Optics

Next.js 14 (App Router) storefront for an eyewear brand. Drizzle ORM + Postgres,
Stripe Checkout, a cart persisted in `localStorage`, and a bilingual
Arabic/English UI with full RTL support.

## Design system

- **Palette** — ink `#14171A`, bone `#EDE7DA`, paper `#F6F3EC`, lens-blue `#3E5C76`,
  brass `#B08D57`, fog `#8A8F98`, signal `#B23A2F`.
- **Type** — Fraunces (display) / Inter (body) / JetBrains Mono (specs/prices)
  in English; Markazi Text / IBM Plex Sans Arabic in Arabic (swapped
  automatically via `html[lang="ar"]` in `app/globals.css`).
- **Signature elements** — the "PD ruler" tick-mark divider (`.pd-ruler` in
  `app/globals.css`) and the acuity-chart hero (`.acuity-line`), both nodding to
  an optician's counter rather than generic e-commerce chrome.

## Bilingual (AR/EN)

- Toggle in the header switches the whole UI and flips `dir="rtl"`/`ltr"`
  automatically. The choice is stored in a cookie so page loads render in
  the right language and direction from the server, no flash of the wrong one.
- UI strings live in `src/i18n/dictionary.ts`. Product/category content has
  parallel Arabic columns in the database (`nameAr`, `descriptionAr`,
  `frameShapeAr`, `frameMaterialAr` — see `src/db/schema.ts` and
  `src/lib/localize.ts`), already filled in for the seed catalog.
- Product photography is still placeholder: `public/products/*.svg` are
  original line-art mockups in the brand palette (not real product photos —
  see Notes below).

## Local setup

```bash
npm install
cp .env.example .env      # fill in your real values
npm run db:push           # create tables from src/db/schema.ts
npm run db:seed           # load the sample catalog
npm run dev
```

Open http://localhost:3000.

## Project layout

```
app/                  routes (home, category, product, cart, checkout, api)
src/db/                schema.ts, index.ts (client), queries.ts, seed.ts
src/context/            cart-context.tsx
src/lib/                format-price.ts, stripe.ts, stripe-client.ts
src/components/         Header.tsx, Footer.tsx, ProductCard.tsx
```

## Pushing this project to GitHub

Do this from your own machine's terminal (not from inside this chat) —
that's the only place your GitHub credentials should ever live.

1. **Revoke any token you've pasted into a chat, then create a new one.**
   GitHub → Settings → Developer settings → Personal access tokens → Generate
   new token (fine-grained, `repo` scope is enough).

2. **Create an empty repo on GitHub** (no README/license, so there's no
   conflict), e.g. `meridian-optics`.

3. **From the project folder:**

   ```bash
   git init
   git add .
   git commit -m "Initial commit: Meridian Optics storefront"
   git branch -M main
   git remote add origin https://github.com/<your-username>/meridian-optics.git
   git push -u origin main
   ```

   When Git asks for a password over HTTPS, paste your **new** personal
   access token (not your GitHub password).

4. **To avoid retyping the token every time**, either:
   - use the GitHub CLI: `gh auth login`, then `git push` works without prompts, or
   - use an SSH remote instead of HTTPS (`git remote set-url origin git@github.com:<user>/meridian-optics.git`) with an SSH key added to your GitHub account.

5. **Never commit `.env`** — it's already in `.gitignore`. Set
   `DATABASE_URL`, `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`,
   and `NEXT_PUBLIC_SITE_URL` as environment variables on whatever host you
   deploy to (Vercel, Railway, etc.) instead.

## Notes

- Product images are placeholder line-art mockups (`public/products/*.svg`),
  not real photos. Swap `imageUrl` in `src/db/seed.ts` for real product
  photography before launch — any local file in `/public` or remote URL
  works (remote hosts need adding to `images.remotePatterns` in
  `next.config.js`, same as the existing `picsum.photos` entry).
- The checkout API route creates a Stripe Checkout Session; you'll still need
  a webhook handler (`checkout.session.completed`) to mark orders paid if you
  add an `orders` table.
- Prices in the seed data and the checkout route are hard-coded to USD. If
  you're selling in EGP, update `currency` in `src/db/schema.ts`/`seed.ts` and
  the `currency: "usd"` in `app/api/checkout/route.ts`.
