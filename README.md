# 🏂 Tussey Mountain Snowboarding League Website

The **Tussey Mountain Snowboarding League** website is a single-page web application (SPA) built using **Lit Web Components**. The site presents teams, schedules, and league information for a fictional competitive snowboarding league at Tussey Mountain.

This project focuses on **component-based architecture**, **client-side routing**, and **JSON-driven data**, following modern frontend development practices.

---

## Project Overview

- Single-Page Application (SPA)
- Built entirely with Lit Web Components
- Client-side routing using the History API
- Navigation and schedules powered by JSON
- Fully componentized and reusable UI
- Deployed using Vercel

---

## Client-Side Routing

Routing is handled on the client using the browser History API (`pushState`, `popstate`) without page reloads.

### Supported Routes
- `/` — Home
- `/about` — About the League
- `/team1`, `/team2`, `/team3`, `/team4` — Team Pages
- `/contact-info`
- `/get-in-touch`
- `/lost-found`
- `/job-application`

Each route dynamically loads the appropriate web component.

---

## Web Components (10+)

The application is composed of modular and reusable **Lit Web Components**

Each component:
- Is self-contained
- Uses scoped styles
- Reacts to data via Lit properties
- Can be reused across pages

---

## 📁 JSON-Driven Content

### Navigation (`menu.json`)
- Navigation structure stored in JSON
- Dynamically loaded at runtime
- Supports dropdown menus (Teams, Contact)

### Schedule Data (`schedule.json`)
- League → Teams → Games & Practices
- Loaded using `fetch()`
- Passed to child components as properties

This separates **content from presentation**, making the site easy to update and maintain.

---

## Tech Stack

- Lit (Web Components)
- JavaScript (ES Modules)
- Rollup (Build Tool)
- JSON (Navigation & Schedule Data)
- HTML / CSS
- Vercel (Deployment)


# tussey-snowboard
DDD + Lit web component based on OpenWC toolchain. This is intended to provide the following:
- Look good via DDD, HAX design system
- Simple, easy to read code via Lit
- Great workflow via OpenWC tooling + Vercel for sharing demos
- Simplify contribution to the HAX ecosystem
- Publish and distribute via npmjs.com

## Install dependencies
- `npm install` - installs dependencies so you can work

## Commands
- `npm start` - runs your web component for development, reloading on file changes
- `npm run build` - builds your web component and outputs it in your `dist` directory for placement on web servers in a compiled form. Vercel automatically does this on commit to github.
- `npm run release` - this will build your code, update the version, and publish it to npm for others to use

## Working with your web component
- edit `./tussey-snowboard.js`
- edit your 'demo' by modifying `./index.html`
- add dependencies using `npm install --save @whatever/repo` or editing `./package.json` directly
- if you must reference additional non-JS files, ensure you use the `new URL('./my-file.jpg', import.meta.url).href` syntax so that it builds correctly
- if you add additional `.js` files / web components then place them under `/lib/`
- to improve HAX wiring edit file in `/lib/tussey-snowboard.haxProperties.json`
- for i18n / internationalization efforts, see associated language `.json` files in `/locales/` as well as `/lib/` for haxProperties related translation examples.

## Recommended setup
- Load VS code in 1 window to project root
- Browser open
- Right click -> Inspect and open the Console to see error output

## Recommended Integrated Development Environment (IDE)
- [VSCode](https://code.visualstudio.com/Download)

### Plugins

Name: lit-html
Description: Syntax highlighting and IntelliSense for html inside of JavaScript and TypeScript tagged template strings
Publisher: Matt Bierner
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=bierner.lit-html

Name: lit-plugin
Description: Syntax highlighting, type checking and code completion for lit-html
Publisher: Rune Mehlsen
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=runem.lit-plugin

# Credits
A brighter future dreamed and developed by the Penn State [HAXTheWeb](https://hax.psu.edu/) initative.

Never. Stop. innovating.
