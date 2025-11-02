# Mora Exams: Landing Website

This repository contains the source code for the [Mora Exams website](https://moraexams.org). It's built using [Astro](https://astro.build) framework.

## Development Guide

After cloning the repository, make sure to create the `.env` file from the given `.env.example` file.

### Prerequisites

Below-listed tools are required to run the project locally:

- Bun v1.3.1

### Commands

| Command                   | Action                                           |
| ------------------------- | ------------------------------------------------ |
| `bun install`             | Installs dependencies                            |
| `bun run dev`             | Starts local dev server at `localhost:4321`      |
| `bun run build`           | Build the site for production (to `./dist/`)     |
| `bun run preview`         | Preview your build locally, before deploying     |
| `bun run lint`            | Lints the code                                   |
| `bun run lint-fix`        | Fixes linting issues                             |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun run astro -- --help` | Get help using the Astro CLI                     |


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

### Deployment

Whenever a commit is pushed or a PR is merged to the main branch, the website will be automatically published on [moraexams.org](https://moraexams.org) in a few minutes. The site is hosted on Netlify.

## Help?

If any issues arise, please open an issue in this repository or reach out to the maintainers.
