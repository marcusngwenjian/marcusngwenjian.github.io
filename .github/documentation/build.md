# Build

## Local

```bash
npm run build
```

# Create a Static Export
Reference: https://nextjs.org/docs/app/guides/static-exports
```
const nextConfig = {
  output: 'export',
  ...
}
 
module.exports = nextConfig
```

## GitHub Actions

Workflow Reference: https://github.com/nextjs/deploy-github-pages/blob/main/.github/workflows/deploy.yml