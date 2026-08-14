# Meridian Optics

Next.js 14 (App Router) storefront for an eyewear brand. Drizzle ORM + Postgres,
Stripe Checkout, and a cart persisted in `localStorage`.

## Design system

- **Palette** — ink `#14171A`, bone `#EDE7DA`, paper `#F6F3EC`, lens-blue `#3E5C76`,
  brass `#B08D57`, fog `#8A8F98`, signal `#B23A2F`.
- **Type** — Fraunces (display), Inter (body), JetBrains Mono (specs/prices).
- **Signature elements** — the "PD ruler" tick-mark divider (`.pd-ruler` in
  `app/globals.css`) and the acuity-chart hero (`.acuity-line`), both nodding to
  an optician's counter rather than generic e-commerce chrome.

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

- Seed images use `picsum.photos` placeholders — swap `imageUrl` in
  `src/db/seed.ts` for real product photography before launch.
- The checkout API route creates a Stripe Checkout Session; you'll still need
  a webhook handler (`checkout.session.completed`) to mark orders paid if you
  add an `orders` table.
