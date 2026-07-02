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
User types → translate() → regex auto-detection → lookup table → output
```

1. `translate()` receives the raw input string
2. A regex (`/^[.-]/`) checks if the string starts with `.` or `-`
3. **If Morse**: splits on spaces, maps each Morse token to its letter via `morseToLetters`
4. **If letters**: uppercases, splits into individual characters, maps each to Morse via `lettersToMorse` (unknown characters become `#`), joins with spaces
5. Result is set to state and rendered in the output pane

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
│   ├── lettersToMorse.js            # Letter → Morse lookup table
│   └── morseToLetters.js            # Morse → Letter lookup table
├── utils/
│   └── translate.js                 # Core translation logic
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

## Nology Context

This project was built to demonstrate:

- React state management (`useState`)
- Controlled form inputs
- Data transformation with lookup tables
- SCSS architecture (partials, mixins, variables, BEM)
- CSS Modules for component-scoped styling
- Responsive design with mobile-first breakpoints
- Web accessibility (screen-reader labels, `:focus-visible`)
- CSS art & generative texture techniques
- Modern CSS (`field-sizing`, `writing-mode`, `conic-gradient`, `dvh`)
