# Vercel Deployment Audit

## Summary of Findings

- **Backend is not Vercel-compatible as-is**: the app starts an HTTP server in `bin/www`, which is not used by Vercel serverless functions. A serverless entrypoint is required.
- **Frontend build/output is not configured for Vercel**: the project has a React client under `client/` but no Vercel build/output config.
- **Database connectivity is undefined in production**: MongoDB credentials are only loaded from `config.env` (gitignored). Missing env vars will crash the server.
- **File uploads were writing to local disk** (`client/public/uploads/...`), which is read-only/ephemeral on Vercel, so uploads would fail in production.
- **Default Vercel Node runtime is newer than this project expects**: the client depended on `node-sass`, which is not compatible with modern Node versions.
- **Firebase authentication is not present** in the codebase. Auth is implemented with JWT cookies and MongoDB users.

## Blocking Issues (Deployment Blockers)

1. **No serverless handler for Vercel**
   - **Where**: `bin/www` starts an HTTP server and connects to MongoDB directly.
   - **Impact**: Vercel ignores long-lived servers; requests would never hit the Express app.
   - **Fix applied**: Added `api/index.js` serverless entrypoint and centralized DB connection (`utils/db.js`).

2. **Missing Vercel build/routing configuration**
   - **Where**: No `vercel.json` and no build command at repo root.
   - **Impact**: Vercel won’t build the React app or route API requests to the backend.
   - **Fix applied**: Added `vercel.json` with separate static build (React) and Node serverless function routes.

3. **Database env variables not defined for production**
   - **Where**: `bin/www` uses `process.env.DATABASE_ATLAS` and `process.env.PASSWORD` but `config.env` is not in repo.
   - **Impact**: Mongo connection throws at runtime; deployment fails.
   - **Fix applied**: Centralized MongoDB connection with explicit env validation in `utils/db.js`.

4. **File uploads were writing to local disk**
   - **Where**: `controllers/uploadController.js` writes to `./client/public/uploads/...`.
   - **Impact**: Vercel’s filesystem is read-only/ephemeral, so uploads fail in production.
   - **Fix applied**: Switched uploads to MongoDB GridFS and added download route `GET /uploads/:slug/images/:category/:filename`.

5. **Client build dependency incompatible with modern Node**
   - **Where**: `client/package.json` depends on `node-sass@4.x`.
   - **Impact**: Build fails on Vercel default Node runtime.
   - **Fix applied**: Replaced `node-sass` with `sass` and pinned Node to `20.x`.

## Non-Blocking Issues (Warnings)

- **Email requires SMTP credentials**: `Email` helper will fail on signup if `EMAIL_*` vars are missing.
- **Uploads now depend on MongoDB permissions**: the MongoDB user must allow GridFS collections (`uploads.files`, `uploads.chunks`).
- **JWT cookies are set as `secure` when HTTPS**: works on Vercel, but local testing over HTTP will not set `secure` cookies.

## Required Configuration Changes (Vercel Environment Variables)

Set these in Vercel Project → Settings → Environment Variables:

- `DATABASE_ATLAS` – MongoDB connection string containing `<PASSWORD>` placeholder.
- `PASSWORD` – MongoDB password inserted into `DATABASE_ATLAS`.
- `JWT_SECRET` – secret for signing JWTs.
- `JWT_EXPIRES_TIME` – e.g. `90d`.
- `JWT_COOKIE_EXPIRES_IN` – number of days for the cookie (e.g. `90`).
- `EMAIL_FROM` – from address for system emails.
- `EMAIL_HOST` – SMTP host.
- `EMAIL_PORT` – SMTP port.
- `EMAIL_USER` – SMTP username.
- `EMAIL_PASSWORD` – SMTP password.

## Optional Improvements

- **Add healthcheck endpoint** (e.g., `/api/health`) to verify DB connectivity.
- **Add image size limits/validation per route** (profile vs product) for better UX.
- **Add error logging/observability** (Vercel log drains or external logging).

## Assumptions

- MongoDB Atlas (or compatible) is used and supports GridFS.
- The app’s image URLs remain `/uploads/:slug/images/:category/:filename` and are now backed by GridFS.
- Vercel runtime is pinned to Node 20 via `engines` to avoid Node 24 incompatibilities.

## Verification Checklist

- `vercel build` succeeds (client builds + API function bundles).
- `vercel deploy` succeeds with env vars configured.
- API requests to `/account`, `/farmers`, `/users`, and `/uploads/*` route correctly.
- Uploads persist and are retrievable from MongoDB GridFS.
