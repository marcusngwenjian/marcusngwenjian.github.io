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

## GitHub Pages Configuration

Ensure Build Source is set to `GitHub Actions`.

![Build Source](../assets/images/GitHub_BuildSource.jpg)

## Deployment Environments

Reference: https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment

![Deployment Environment](../assets/images/GitHub_DeploymentEnvironment.png)
