# RatioFlow Website

Minimal React/Vite landing page for RatioFlow, designed for GitHub Pages and the `ratioflow.in` custom domain.

## Requirements

- Node.js 20+
- npm 10+

## Local development

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages

The repository includes `.github/workflows/deploy.yml`.

1. Push the project to the `main` branch.
2. In GitHub, open **Settings → Pages**.
3. Set the source to **GitHub Actions**.
4. Keep `public/CNAME` containing `ratioflow.in`.
5. Configure the custom domain as `ratioflow.in`.
6. Enable **Enforce HTTPS** once GitHub makes it available.

### DNS

For the apex domain, configure the GoDaddy A records specified in the task:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

For `www`, use:

- CNAME `www` → `ratioflow.github.io`

## Notes

The waitlist CTA is intentionally backend-free and opens an email draft to `hello@ratioflow.in`, keeping the page within the task's no-backend/no-database scope.

The site uses a lightweight React/Vite bundle, responsive CSS, and minimal runtime work to support the requested fast-load target.
