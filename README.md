# Mora Exams: Landing Website

This repository contains the source code for the Mora Exams landing website.

## Development Guide

### Prerequisites

- Node v20
- npm v10

### Commands

| Command                   | Action                                           |
| ------------------------- | ------------------------------------------------ |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build the site for production (to `./dist/`)     |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### Deployment

Whenever a commit is pushed or a PR is merged to the main branch, the website will be automatically published on [moraexams.org](https://moraexams.org) in a few minutes. The site is hosted on Netlify.

### Project structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Any static assets, like images, are placed inside the `public/` directory.
