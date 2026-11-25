# Vite + React 19 + FSD Admin Starter

A production-ready Admin Panel starter template built with Vite 8, React 19, TypeScript, Tailwind CSS v4, shadcn/ui, and Feature-Sliced Design (FSD) architecture.

[![Live Demo](https://img.shields.io/badge/demo-vite--react--fsd--starter.vercel.app-000000?style=flat-square&logo=vercel&logoColor=white)](https://vite-react-fsd-starter.vercel.app/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![React](https://img.shields.io/badge/React-19.3-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![FSD](https://img.shields.io/badge/Architecture-FSD_v2.1-2563EB?style=flat-square)](https://feature-sliced.design/)
[![License: MIT](https://img.shields.io/badge/License-MIT-22C55E?style=flat-square)](LICENSE)

## Overview

This repository provides a clean, unopinionated foundation for building scalable React admin dashboards. It enforces strict Feature-Sliced Design boundaries without bundling unnecessary backend or data-fetching boilerplate.

### Features

- **Feature-Sliced Design (FSD v2.1)**: Clear separation of concerns (`app` -> `pages` -> `widgets` -> `features` -> `entities` -> `shared`) enforced automatically via ESLint rules.
- **Modern Core Stack**: React 19, TypeScript 6, Vite 8, and React Router v8 with route-level `React.lazy` code-splitting.
- **UI System**: Tailwind CSS v4, shadcn/ui, Radix UI primitives, and Lucide icons.
- **Theme Engine**: `Light`, `Dark`, and `System` modes with a synchronous `<head>` script in `index.html` to prevent flash of unstyled content (FOUC).
- **Internationalization (i18n)**: Pre-configured `react-i18next` with English (`en`), Russian (`ru`), and Turkmen (`tk`) locales.
- **Error Handling**: Global React `ErrorBoundary` fallback view and a custom `404 Not Found` route.
- **Code Quality & Git Hooks**: ESLint 10 and Lefthook `pre-commit` hooks running lint and TypeScript checks (`tsc -b`) on staged files.

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
git clone https://github.com/sgandymov/vite-react-fsd-starter.git
cd vite-react-fsd-starter
npm install
npm run dev
```

### Scripts

| Command             | Description                                          |
| :------------------ | :--------------------------------------------------- |
| `npm run dev`       | Start the local Vite development server              |
| `npm run build`     | Run TypeScript typechecking and build for production |
| `npm run typecheck` | Run TypeScript compiler check (`tsc -b`)             |
| `npm run lint`      | Run ESLint across all TypeScript files               |
| `npm run preview`   | Preview the production build locally                 |

## Architecture

Modules in Feature-Sliced Design can only import from layers strictly below them:

```text
app  ->  pages  ->  widgets  ->  features  ->  entities  ->  shared
```

These boundaries are configured in [`eslint.config.js`](./eslint.config.js) via `no-restricted-imports`. Importing an upper layer into a lower layer produces an immediate lint error.

### Directory Structure

```text
src/
├── app/                        # App initialization, providers, layouts, router, global CSS
│   ├── layouts/                # RootLayout (Sidebar + Header) and AuthLayout
│   ├── router/                 # Route definitions with React.lazy + Suspense
│   ├── styles/                 # Tailwind CSS v4 and design tokens
│   └── index.tsx               # Root App component wrapped in ErrorBoundary & ThemeProvider
│
├── pages/                      # Route-level screens
│   ├── home/                   # Dashboard page (/)
│   ├── login/                  # Split-screen login UI page (/login)
│   └── not-found/              # 404 fallback page (*)
│
├── widgets/                    # Self-contained composite UI blocks
│   ├── header/                 # Top navigation bar (ui/ + model/header.data.ts)
│   ├── sidebar/                # Collapsible sidebar (ui/ + model/sidebar.data.ts)
│   └── dashboard-overview/     # FSD architecture reference grid widget
│
├── features/                   # User interactions and business actions
│   └── auth/                   # LoginForm UI component
│
├── entities/                   # Business domain models and entity UI slices
│
└── shared/                     # Reusable infrastructure and UI kit
    ├── assets/icons/           # App logo and custom SVG icons
    ├── config/                 # ThemeProvider (light/dark/system) and i18n setup
    ├── lib/                    # Hooks (useIsMobile) and class utilities (cn)
    └── ui/                     # shadcn/ui primitives and ErrorBoundary
```

## Author

**Selim Gandymov** — [@sgandymov](https://github.com/sgandymov)

## License

MIT
