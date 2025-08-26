# Tenzies Game (React Edition)

**This the first capstone project from [scrimba](https://scrimba.com/learn-react-c0e) plateform (react basics course) instructor Bob Ziroll**

A fast, minimalist implementation of the classic **Tenzies** dice game, built with **React** and deployed to **Netlify**. Roll the dice, hold the values you want to keep, and race to get all dice showing the same number.

[Live Demo](https://tenzies-game-sc1.netlify.app/)

---

## Rules

1. Click **Roll** to roll all dice.
2. Click any die to **hold** its value (held dice don’t change when rolling).
3. Keep rolling until **all dice show the same number** and are **held** — that’s **Tenzies!**
4. Optionally track **number of rolls** and **elapsed time** for an extra challenge.

---

## Features

- 🎲 **10 dice** with individual hold state
- 🧠 **Win detection** when all held dice share the same value
- 🔁 **Reset / New Game** control
- 📱 **Responsive UI** (mobile-first)
- ♿ **Keyboard-accessible** buttons and ARIA labels
- ⚡ **Production build** and Netlify-ready

---

## Tech Stack

- **React** (Vite or Create React App—use what your repo uses)
- **JavaScript**
- **CSS** (CSS Modules)
- **nanoid** for stable keys
- **Netlify** for hosting

---

## Accessibility

- Focus outlines retained for keyboard users
- Buttons use `aria-pressed` for held dice (if applicable)
- Sufficient color contrast for dice pips and controls
- Semantic HTML where possible
