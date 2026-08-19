# Migrate react-router-dom v5 → v6

## What changed

Upgraded `client` from `react-router-dom@^5.0.0` to `^6.30.6` and migrated every usage of the old v5 API. 11 files touched.

### Package
- `client/package.json` — `react-router-dom` bumped to `^6.30.6`.

### Routing structure
- `client/src/App.js` — `Switch` → `Routes`, `component={X}` → `element={<X />}`. The nested route component (previously imported as `Routes`) was renamed to `AppRoutes` on import to avoid clashing with the `Routes` export from `react-router-dom`. Top-level routes now: `path="/"` → `Landing`, `path="/*"` → `AppRoutes`.
- `client/src/components/routing/Routes.js` — same `Switch`→`Routes`/`element` treatment. `PrivateRoute` is no longer a route type; each protected path is a normal `<Route element={<PrivateRoute><X /></PrivateRoute>} />`.
- `client/src/components/routing/PrivateRoute.js` — rewritten from a `<Route render={...}>` wrapper to a children-based guard component: returns `<Navigate to="/login" />` (v5's `Redirect` was removed in v6) or renders `children`.

### Redirect → Navigate
- `components/auth/Register.js`, `components/auth/Login.js`, `components/layout/Landing.js` — `Redirect` renamed to `Navigate` (same usage pattern, `<Navigate to="/dashboard" />`).

### match.params → useParams
- `components/profile/Profile.js`, `components/post/Post.js` — v6 no longer injects `match`/`history`/`location` as props through `component={}`. Replaced `match.params.id` with `const { id } = useParams();`.

### withRouter → useNavigate
- `components/profile-forms/EditProfile.js`, `CreateProfile.js`, `AddExperience.js`, `AddEducation.js` — v6 dropped `withRouter` entirely. Replaced with `const navigate = useNavigate();` inside each component; removed the `withRouter(...)` wrapper from the default export (just `connect(...)（Component)` now).
- `client/src/actions/profile.js` — `createProfile`, `addExperience`, `addEducation` thunks previously took a `history` object and called `history.push("/dashboard")`. Since v6's `navigate` is a function (not a history object with `.push`), the thunks now take a `navigate` param and call `navigate("/dashboard")` directly.

## Verification
- Grepped for leftover v5 APIs (`withRouter`, `<Redirect`, `<Switch`, `match.params`, bare `history`) — none remain.
- `npm run build` (with `NODE_OPTIONS=--openssl-legacy-provider`, required for this old CRA/webpack4 toolchain on modern Node — unrelated to this migration) compiles successfully.
- Remaining build warnings (duplicate `name="company"`/`name="website"` JSX props, a `react-hooks/exhaustive-deps` warning in `EditProfile.js`) are pre-existing, not introduced by this change.

## Not yet done
- Did not manually click through the app in a browser. Worth verifying by hand: login/register redirect-if-authenticated, `/profile/:id` and `/posts/:id` deep links, and that `PrivateRoute` correctly bounces unauthenticated users to `/login` for each guarded path (`/dashboard`, `/create-profile`, `/edit-profile`, `/add-experience`, `/add-education`, `/posts`, `/posts/:id`).

## Follow-up ideas (not done, discussed separately)
- Redux Toolkit migration to cut reducer/action boilerplate (raised in the broader refactor discussion, not part of this router migration).
- Code-splitting routes with `React.lazy`/`Suspense`, easier to do now that routing is on v6.
