# Nuxt 4 Starter

Very opinionated.

## Version

Nuxt 4.2.2

## Included Modules

- Pinia
- Vue Use Core
- ESLint
- Typescript
- SCSS

## Vercel Basic Auth

This project supports HTTP Basic Auth via Nuxt server middleware (works on Vercel).

Set these environment variables in Vercel:

- `NUXT_BASIC_AUTH_ENABLED=true`
- `NUXT_BASIC_AUTH_USERNAME=<your-username>`
- `NUXT_BASIC_AUTH_PASSWORD=<your-password>`

When `NUXT_BASIC_AUTH_ENABLED` is `true`, all routes require login.
