# Morse Code Translator

A real-time bidirectional Morse code translator built as part of the [Nology](https://nology.io/) curriculum. Type letters or Morse code — the app auto-detects which you're using and translates on every keystroke.

## Demo

## Tech Stack

| Layer      | Technology                                                          |
| ---------- | ------------------------------------------------------------------- |
| Framework  | React 19                                                            |
| Build tool | Vite                                                                |
| Styling    | SCSS (Sass), CSS Modules, BEM                                       |
| Fonts      | Space Mono (body), Work Sans (footer)                               |
| Design     | CSS conic gradients, SVG `feTurbulence` noise, zero external assets |

## Features

- **Bidirectional translation** — type plain English and get Morse code, or type dots and dashes and get letters back
- **Auto-detection** — if your input starts with `.` or `-`, it's treated as Morse; everything else is treated as letters (uppercased automatically)
- **Real-time** — translates on every keystroke via `onChange`, no submit button needed
- **Minimalist UI** — split conic gradient background across two hemispheres, animated film grain texture, autofocused textarea with just a blinking cursor
- **Responsive layout** — footer switches from vertical (mobile) to horizontal centered (768px+), textarea scales up at larger breakpoints
- **Accessible** — screen-reader-only label, `:focus-visible` for keyboard navigation

## How It Works

```
User types → translate() → trim + regex auto-detection → pure function → lookup table → output
```

1. `translate()` receives the raw input string and trims leading/trailing whitespace
2. A regex (`/^[.-]/`) checks if the string starts with `.` or `-`
3. **If Morse**: delegates to `morseToAlphanumFn()`, which splits on spaces and maps each Morse token to its letter/number/symbol via the `morseToAlphanum` lookup table. Unknown Morse codes become `#`.
4. **If letters**: delegates to `alphanumToMorseFn()`, which uppercases the string, splits into individual characters, and maps each to its Morse equivalent via the `alphanumToMorse` lookup table. Unsupported characters become `#`.
5. Result is set to state and rendered in the output pane

The two translation functions (`alphanumToMorseFn`, `morseToAlphanumFn`) are **pure functions** — no side effects, no state, just input → output. `translate()` is the thin impure shell that wires them to React state.

## Project Structure

```
src/
├── App.jsx                          # Main component (state, textarea, output)
├── App.scss                         # Layout, split background, noise animation
├── index.scss                       # Global styles (normalize + body font)
├── main.jsx                         # React entry point
├── components/
│   └── Footer/                      # Footer Folder: directory name predates refactor
│       ├── Footer.jsx               # Footer component (GitHub link, title)
│       └── Footer.module.scss       # Footer styles (CSS Modules)
├── data/
│   ├── alphanumToMorse.js           # A-Z, 0-9, punctuation → Morse lookup (40+ entries)
│   └── morseToAlphanum.js           # Morse → A-Z, 0-9, punctuation lookup (reverse)
├── utils/
│   ├── translate.js                 # Thin impure shell — trims, detects direction, delegates
│   ├── alphanumToMorseFn.js         # Pure: English string → Morse string
│   ├── alphanumToMorseFn.test.js    # Unit tests (10 cases)
│   ├── morseToAlphanumFn.js         # Pure: Morse string → English string
│   └── morseToAlphanumFn.test.js    # Unit tests (8 cases)
└── scss/
    ├── _normalize.scss              # modern-normalize v3
    ├── mixins/
    │   ├── _layout.scss             # Flex & grid helpers
    │   ├── _media.scss              # Responsive breakpoints (sm/md/lg/xl)
    │   └── _theme.scss              # Dark mode mixin (unused, future-proofing)
    └── variables/
        ├── _colors.scss             # Color tokens
        └── _variables.scss          # CSS custom properties (design tokens)
```

## Running Locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Design Decisions

- **No submit button** — translation happens on every keystroke. The textarea autofocuses on load so the cursor is already blinking.
- **CSS-only split background** — the dual conic gradient is built with `::before` and `::after` pseudo-elements on the container, each covering half the viewport. No image assets.
- **Animated film grain** — an SVG `feTurbulence` filter encoded as a data URI, layered over the entire viewport with `pointer-events: none`. A `@keyframes` animation shifts `background-position` in 10 random-looking steps using `steps(1)` for an authentic film-grain jitter.
- **`field-sizing: content`** — the textarea auto-grows vertically as you type, no resize handle or JavaScript height calculation needed.
- **CSS Modules for components** — Footer uses a `.module.scss` file for locally-scoped class names, preventing style leaks. App-level styles use regular SCSS with BEM naming.
- **Vertical footer on mobile** — uses `writing-mode: vertical-rl` + `rotate(180deg)` so the footer reads upward along the right edge of the screen. At 768px+ it switches to a horizontal centered footer with a radial gradient background.

## Testing

Jest with Babel (zero-config setup, Alex's approach). Test files co-located with source:

```bash
npm test              # run once
npm run test:watch    # re-run on file changes
```

**Setup:** `jest` + `babel-jest` + `@babel/core` + `@babel/preset-env`. A `babel.config.cjs` at root bridges ESM `import`/`export` to CommonJS for Jest. No `jest.config.*` file needed — zero config beyond the `"test"` script in `package.json`.

**What's tested:** The two pure translation functions (`alphanumToMorseFn`, `morseToAlphanumFn`) — letters, numbers, symbols, case insensitivity, spaces, empty strings, invalid characters, and invalid Morse.

**A testing win (Jul 5, 2026):** Writing the empty-string test for `morseToAlphanumFn` revealed a bug the mental model missed — `"".split(" ")` produces `[""]`, which mapped to `undefined` and hit the `?? "#"` fallback, so `""` returned `"#"` instead of `""`. Fixed with a guard clause: `if (str.length === 0) return ""`. This is exactly why you test — the code did something you didn't expect, and now it does what you thought it did.

## Nology Context

This project was built to demonstrate:

- React state management (`useState`)
- Controlled form inputs
- Data transformation with lookup tables
- **Unit testing with Jest** — pure function extraction, test co-location, Babel bridge setup
- **Separation of concerns** — pure translation logic extracted from React wiring for testability
- SCSS architecture (partials, mixins, variables, BEM)
- CSS Modules for component-scoped styling
- Responsive design with mobile-first breakpoints
- Web accessibility (screen-reader labels, `:focus-visible`)
- CSS art & generative texture techniques
- Modern CSS (`field-sizing`, `writing-mode`, `conic-gradient`, `dvh`)
