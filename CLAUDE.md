# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

MERN-stack social network for developers ("DevConnector"-style app). Express + MongoDB (Mongoose) API backend in the repo root, with a Create React App frontend in `client/`.

## Commands

Run from repo root unless noted.

- `npm install` — install server dependencies; also run `npm install` inside `client/` for frontend deps.
- `npm run server` — run the API server only, with nodemon (auto-restart).
- `npm run client` — run the CRA dev server only (`npm start --prefix client`).
- `npm run dev` — run server and client concurrently (typical local dev workflow).
- `npm start` — run the server with plain node (production-style, no reload).
- `npm run build --prefix client` — production build of the frontend.
- `npm test --prefix client` — run CRA's Jest test runner for the client (no server-side test suite exists).

There is no lint script configured; the client relies on CRA's built-in `eslintConfig: "react-app"` at build/dev time.

### Required local config

Before running the server, create `config/default.json` (gitignored) with:
```json
{
  "mongoURI": "<your mongodb connection string>",
  "jwtSecret": "<any secret string>",
  "githubToken": "<github personal access token, used by profile github route>"
}
```
`config/production.json` exists for production overrides (reads `process.env.mongoURI` etc.). The `config` npm package resolves these based on `NODE_ENV`.

## Architecture

### Backend (repo root)

- `server.js` — Express app entry point. Connects to MongoDB via `config/db.js`, mounts four API routers under `/api/*`, and (in production) serves the built React app as static files with a catch-all route.
- `routes/api/` — one router file per resource: `users.js` (registration), `auth.js` (login + get current user), `profile.js` (profile CRUD, experience/education sub-documents, GitHub repos lookup), `posts.js` (posts, likes, comments). Validation is done inline per-route with `express-validator`.
- `models/` — three Mongoose schemas: `User`, `Profile` (references `User`, embeds `experience`/`education`/`social` sub-documents), `Post` (references `User`, embeds `likes` and `comments`).
- `middleware/auth.js` — JWT auth middleware. Reads the `x-auth-token` header, verifies with `config.get("jwtSecret")`, and attaches the decoded payload to `req.user`. Protected routes pass this as a second arg: `router.get("/", auth, ...)`.
- Auth pattern: JWTs are issued on register/login (`routes/api/users.js`, `routes/api/auth.js`) and carry `{ user: { id } }`, matching what `middleware/auth.js` expects on `req.user`.

### Frontend (`client/`)

- Standard CRA layout under `client/src/`. State is managed with Redux (`store.js`, `redux-thunk` for async actions).
- `actions/` (auth, profile, post, alert) dispatch to `reducers/` (`auth`, `profile`, `post`, `alert`, combined in `reducers/index.js`).
- `actions/types.js` centralizes Redux action type constants.
- `utils/setAuthToken.js` attaches/removes the `x-auth-token` header on the shared `axios` instance based on presence of a JWT in `localStorage` — call this after login/logout/token load.
- `components/` is organized by feature: `auth/`, `dashboard/`, `profile/` (view) vs `profile-forms/` (create/edit), `profiles/` (browse list), `post/` (single post + comments) vs `posts/` (list/create), `layout/` (navbars, alerts, landing, spinner, 404), `routing/` (`PrivateRoute` gate + `Routes` route table).
- Dev requests to the API are proxied to `http://localhost:5000` via the `proxy` field in `client/package.json` — no need to hardcode API base URLs in dev.
- Styling uses `materialize-css`.

## Key conventions

- Mongoose model variable names are lowercase strings (`"user"`, `"profile"`, `"post"`); cross-model `ref`s must match these exact strings (note `Post.js` refs `"users"` for `user`/`likes`/`comments` fields — inconsistent with the actual `"user"` model name, so don't assume `.populate()` works there without checking).
- API error responses generally follow `{ errors: [{ msg: "..." }] }` (from `express-validator`) or `{ msg: "..." }` for ad-hoc errors; keep new routes consistent with this shape since the client reads these fields directly.
