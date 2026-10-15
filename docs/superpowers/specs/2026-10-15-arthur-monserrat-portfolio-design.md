# Arthur Monserrat Portfolio - Design Specification

## Goal

Create a public, responsive personal portfolio for Arthur Monserrat Souza, a Software Engineering student. The site presents verified projects, academic or technical experiences, and clear contact options for the DIAW LAB01 assessment.

## Scope

- React + Vite + JavaScript, CSS puro, uma página e navegação por âncoras.
- Sections: hero, Sobre Mim, Projetos, Experiências, Contato e rodapé.
- PT/EN toggle in the About section.
- Projects and experiences sourced from local data arrays. Project order is ascending chronological order.
- EmailJS contact form with required-field validation, submission state, and explicit unavailable/configuration status until actual credentials are supplied and tested.
- Mobile-first, semantic HTML, keyboard focus, appropriate contrast, labels and descriptive alt text.

## Visual Direction

An original editorial technical style: deep navy background, off-white content, lime accents, numbered section labels, vertical timeline and restrained animation. The hierarchy and reading rhythm take inspiration from the referenced portfolios, especially Luca Azalim, without reproducing their layout, copy, assets or source code.

## Information Integrity

Do not fabricate project links, dates, images, employment, achievements or contact details. Academic work and technical events are identified truthfully. The project receives only real repository URLs and real screenshots/GIFs. Missing personal information appears as an explicit configuration/content placeholder only where it does not impersonate fact.

## Architecture

The static React front end is deployed to Vercel. The browser uses EmailJS directly for contact delivery after public configuration variables (`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`) are supplied. There is no custom API, authentication layer or database.

## Delivery and Evidence

S01 establishes the Vite app, page shell, navigation, base visual system, Figma wireframes and an initial README. S02 adds bilingual content, data-driven timelines, validation and responsiveness. S03 adds validated real visual evidence, final accessibility/build checks, Vercel deployment and a final README. Each sprint is represented by a meaningful Git commit.

## Unknowns Requiring Arthur

- Professional contact URLs and email/WhatsApp.
- Public project repository URLs, descriptions, dates, technology lists and real captures.
- Personal education/interests/objectives wording not already present in public project material.
- EmailJS identifiers and permission to run a real delivery test.
- GitHub and Vercel authentication, if command-line/account access is unavailable.
