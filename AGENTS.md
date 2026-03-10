# AGENTS.md

Instructions for AI coding agents working in this repository.

## Project Overview

`security-response-headers-builder` is a static, browser-based tool for generating HTTP security response header configurations. Users toggle headers on/off via a UI and receive a JSON object they can apply to a web server.

No backend. No framework. No test suite.

## Stack

- TypeScript (strict mode, ES2020 target)
- Plain CSS
- Webpack 5 + webpack-dev-server
- Node.js >= 18.11.0

## Setup & Run

```bash
npm install
npm start           # serves at http://localhost:8000
npm run build       # production bundle → dist/
npm run typecheck   # tsc --noEmit across src/ and webpack.config.ts
```

No lint or test scripts.

## Repository Layout

```
src/
  index.html              # all UI markup
  scripts/
    index.ts              # DOM event wiring + JSON generation
    constants.ts          # header definitions and removal list
  styles/
    index.css
tsconfig.json
webpack.config.ts
package.json
```

## Architecture

The app is entirely client-side:

1. `constants.ts` exports `HEADERS_TO_ADD` (map of short ID → `{n: headerName, v: defaultValue}`) and `HEADERS_TO_REMOVE` (array of header names to null out).
2. `index.html` renders one row per header: a checkbox, a label, and a `<select>` (or number input for max-age fields).
3. `index.ts` reads checkbox/select state on every change and calls `generateJSON()`, which writes a JSON string into `#result` and stores it for clipboard copy.

## DOM Conventions

- Checkbox ID: `<shortId>` (e.g. `xfo`, `sts`)
- Select ID: `s_<shortId>` (e.g. `s_xfo`)
- Extra inputs: `cc_max_age`, `sts_max_age`
- Result display: `#result`
- Copy button: `#btnCopy`

## Adding a New Header

1. Add an entry to `HEADERS_TO_ADD` in `src/scripts/constants.ts`:
   ```ts
   myh: { n: 'My-Header-Name', v: 'default-value' },
   ```
2. Add a corresponding row in `src/index.html` following the existing pattern (checkbox + label + select with options).
3. If the header needs special value construction (like `sts` or `cc`), add a `case` block with a `break` in the `switch` inside `generateJSON()` in `src/scripts/index.ts`.

## Important Notes

- `HEADERS_TO_REMOVE` entries get a `null` value in the JSON output, signaling the server to actively remove those headers.
- Headers `ct`, `acao`, and `pp` are defined as TODO comments in `constants.ts` — they need custom text inputs before they can be added to the UI.
- Commented-out headers (deprecated ones) are intentional — do not remove without reviewing the surrounding context.
- There are no automated tests. Verify changes manually in the browser at `http://localhost:8000`.
- Do not introduce external runtime dependencies; this is intentionally zero-dependency on the client side.
