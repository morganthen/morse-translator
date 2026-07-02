# Morse Code Translator

A real-time bidirectional Morse code translator built as part of the [Nology](https://nology.io/) curriculum. Type letters or Morse code — the app detects which you're using and translates on the fly.

## Demo

## Tech Stack

| Layer      | Technology                                              |
| ---------- | ------------------------------------------------------- |
| Framework  | React 19                                                |
| Build tool | Vite                                                    |
| Styling    | SCSS (Sass) with BEM                                    |
| Font       | Space Mono (Google Fonts)                               |
| Design     | CSS conic gradients, SVG noise texture, zero-dependency |

## Features

- **Bidirectional translation** — type plain English and get Morse code, or type dots and dashes and get letters back
- **Auto-detection** — if your input starts with `.` or `-`, it's treated as Morse; everything else is treated as letters
- **Real-time** — translates on every keystroke, no submit button needed
- **Minimalist UI** — conic gradient background split across two hemispheres, animated film grain texture, and just a blinking cursor
- **Responsive** — fluid layout with breakpoints for larger screens

## How It Works

```
User types → translate() → regex auto-detection → lookup table → output
```

1. `translate()` receives the raw input string
2. A regex checks if the string starts with `.` or `-`
3. If Morse: splits on spaces, maps each code to its letter via `morseToLetters`
4. If letters: uppercases, splits into characters, maps each to Morse via `lettersToMorse`
5. Result is set to state and rendered in the output pane

## Project Structure

```
src/
├── App.jsx              # Main component
├── App.scss             # Layout & component styles
├── index.scss           # Global styles (normalize, typography)
├── main.jsx             # React entry point
├── components/
│   └── Header.jsx       # Header component
├── data/
│   ├── lettersToMorse.js # Letter → Morse lookup
│   └── morseToLetters.js # Morse → Letter lookup
├── utils/
│   └── translate.js     # Core translation logic
└── scss/
    ├── _normalize.scss
    ├── mixins/
    │   ├── _layout.scss
    │   ├── _media.scss
    │   └── _theme.scss
    └── variables/
        ├── _colors.scss
        └── _variables.scss
```

## Running Locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Design Decisions

- **No submit button** — translation happens on every keystroke for immediacy. No extra interaction required.
- **CSS-only background** — the split conic gradient is built with `::before` and `::after` pseudo-elements on the container. No image assets.
- **Animated noise** — an SVG `feTurbulence` filter encoded as a data URI, shifted with `@keyframes` to create a subtle film-grain effect without any JavaScript.
- **`field-sizing: content`** — the textarea auto-grows as you type, no resize handle needed.

## Nology Context

This project was built to demonstrate:

- React state management (`useState`)
- Controlled form inputs
- Data transformation with lookup tables
- SCSS architecture (partials, mixins, variables, BEM)
- Responsive design principles
- Web accessibility fundamentals
- CSS art & generative texture techniques
