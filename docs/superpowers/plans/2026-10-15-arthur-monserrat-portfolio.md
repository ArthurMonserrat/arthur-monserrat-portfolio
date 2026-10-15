# Arthur Monserrat Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a responsive, honest and original React portfolio for the DIAW LAB01.

**Architecture:** One Vite React page composes focused sections from static data arrays. CSS owns the responsive editorial visual system. The contact form validates locally and invokes EmailJS only when all required public environment variables exist.

**Tech Stack:** React, Vite, JavaScript, CSS, Vitest, Testing Library, @emailjs/browser.

**Spec:** `docs/superpowers/specs/2026-10-15-arthur-monserrat-portfolio-design.md`

## Global Constraints

- Use React + Vite + JavaScript and CSS puro; do not add Router, TypeScript, UI libraries, database or custom API.
- Use only verified content, URLs and project visuals; never invent personal information or claims.
- Keep project chronology ascending and preserve keyboard accessibility, labels, contrast and visible focus.
- EmailJS variables must use `VITE_` names and no credentials are committed.

## Review Focus

- Empty or malformed contact values must show field-specific errors and must not attempt EmailJS delivery.
- Missing EmailJS variables must state that sending is not configured rather than falsely report success.
- Language toggle must update visible copy and its pressed state.
- Navigation must target every section on narrow and wide viewports.
- Project ordering must remain oldest-first regardless of presentation changes.

---

### Task 1: S01 - Foundation, shell and documentation

**Files:** `package.json`, `src/main.jsx`, `src/App.jsx`, `src/styles.css`, `src/components/*`, `README.md`, `docs/wireframes/README.md`.

- [ ] Scaffold Vite React and install runtime/test dependencies.
- [ ] Write a failing render/navigation test, then implement the semantic page shell and anchor menu.
- [ ] Implement the dark editorial CSS system, responsive header and numbered section framing.
- [ ] Add S01 README describing the planned stack, initial structure and Figma-wireframe evidence status.
- [ ] Run tests and production build; commit `feat(s01): scaffold portfolio layout`.

### Task 2: S02 - Content, timelines and contact behavior

**Files:** `src/data/portfolio.js`, `src/components/About.jsx`, `src/components/Timeline.jsx`, `src/components/Contact.jsx`, tests.

- [ ] Write failing tests for PT/EN toggle, chronological project rendering and invalid contact input.
- [ ] Add verified-content data models, bilingual About component, project/experience timelines and contact-link configuration.
- [ ] Implement contact validation and the configured/unconfigured EmailJS state with accessible feedback.
- [ ] Add responsive CSS for timeline/cards and test desktop/mobile behavior manually.
- [ ] Update README with S02 functionality and commit `feat(s02): add portfolio content and contact form`.

### Task 3: S03 - Evidence, polish and release preparation

**Files:** `public/images/projects/`, `docs/screenshots/`, `.env.example`, `README.md`, `vite.config.js` if needed.

- [ ] Write tests for EmailJS configuration guards and accessible status feedback.
- [ ] Add documented locations for real project and portfolio screenshots; do not add fictitious images.
- [ ] Add `.env.example`, final README sections, deployment instructions and verification log.
- [ ] Run tests, `npm run build`, browser checks at desktop/mobile widths and inspect console.
- [ ] Commit `docs(s03): finalize portfolio delivery`; create GitHub remote and Vercel deployment when authenticated.

## Self-Review

All specification requirements map to one of the three Sprint tasks. The plan keeps infrastructure to a static Vercel frontend plus EmailJS, preserves factual-content limits, and makes real captures/deployment conditional on the required external access.
