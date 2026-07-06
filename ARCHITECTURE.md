# Architecture

This is a **static single-page marketing site**. There is no build step and no
backend.

- The entire site is `deploy/index.html` plus `deploy/assets/` (images + fonts).
- Vercel serves the `deploy/` directory as-is (see `vercel.json`:
  `outputDirectory: "deploy"`, `framework: null`, no real build command).
- To edit the site, edit `deploy/index.html` directly. All CSS is inline in that
  file; all images/fonts are local files under `deploy/assets/`.

## Local preview

No dependencies required:

```bash
python3 -m http.server 4599 --directory deploy
# open http://localhost:4599
```

## History: there used to be a React app

Before this static site, the project was a full-stack React + Express + Postgres
app (Vite, Tailwind, Drizzle, Radix UI). That app rendered an **older, different
design** than the current site — it is not the source that produces `deploy/`.
It was removed on **2026-07-06** to keep the repo focused on what is actually
deployed.

Nothing is lost — the complete React/server codebase is preserved in git history.

### Files that were removed
`client/`, `server/`, `api/`, `shared/`, `attached_assets/`,
`partner_success_stories.png`, `vite.config.ts`, `tailwind.config.ts`,
`postcss.config.js`, `components.json`, `tsconfig.json`, `drizzle.config.ts`,
`package-lock.json`, `.replit`, `replit.md`, `.env.example`.

### How to restore the React app

The last commit containing the full React app is:

```
4f40e2a7e211730ab9cea28845967d55367555fc  ("Publish new design as static site")
```

Restore everything from that commit:

```bash
# bring back all removed files exactly as they were
git checkout 4f40e2a7e211730ab9cea28845967d55367555fc -- \
  client server api shared attached_assets partner_success_stories.png \
  vite.config.ts tailwind.config.ts postcss.config.js components.json \
  tsconfig.json drizzle.config.ts package-lock.json .replit replit.md .env.example

# reinstall dependencies (the slimmed package.json must also be restored)
git checkout 4f40e2a7e211730ab9cea28845967d55367555fc -- package.json
npm install
npm run dev
```

### Important if you migrate to React for real

Restoring the old app gives you the **old blue "Partner with Global Innovation
Leaders" design**, not the current site. If the goal is a component-based version
of the *current* design, you must port the markup/styles from
`deploy/index.html` into React components — it is a rewrite, not a checkout.
Only worth doing if you're adding real app features (auth, CMS, dynamic content,
multiple pages). For a static marketing page, staying on `deploy/` is simpler,
smaller, and faster.
