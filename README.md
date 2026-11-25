<div align="center">

# ⚡ Vite + React 19 + FSD Admin Starter

**Production-ready Admin Panel Starter Template built with Vite 8, React 19, TypeScript, Tailwind CSS v4, shadcn/ui, and strict Feature-Sliced Design (FSD) architecture.**

[![Live Demo](https://img.shields.io/badge/demo-vite--react--fsd--starter.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vite-react-fsd-starter.vercel.app/)

[![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript_6-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=flat-square&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![FSD](https://img.shields.io/badge/Architecture-Feature--Sliced_Design-2563EB?style=flat-square)](https://feature-sliced.design/)
[![License: MIT](https://img.shields.io/badge/License-MIT-22C55E?style=flat-square)](LICENSE)

</div>

---

## ✨ Key Features

- 🏛️ **Strict Feature-Sliced Design (FSD v2.1)** — Unidirectional layer hierarchy (`app` → `pages` → `widgets` → `features` → `entities` → `shared`) enforced automatically via **ESLint boundary rules**.
- ⚡ **Vite 8 + React 19 + TypeScript** — Instant HMR, route-level `React.lazy` code-splitting, and strict type checking.
- 🎨 **Tailwind CSS v4 + shadcn/ui + Radix UI** — Clean, accessible UI primitives (`Sidebar`, `Card`, `Badge`, `DropdownMenu`, `Sheet`, `Tooltip`, `Collapsible`) with zero unused dead files.
- 🌓 **Zero-Flash Theme Engine (`Light` / `Dark` / `System`)** — Synchronous `<head>` script prevents FOUC on page load, paired with live OS `prefers-color-scheme` synchronization.
- 🌐 **Multi-Language Support (i18n)** — Pre-configured `react-i18next` with English (`EN`), Russian (`RU`), and Turkmen (`TK`) locales and automatic `<html lang>` syncing.
- 🧯 **Resilient Error Handling** — Global React `ErrorBoundary` fallback UI and a dedicated `404 Not Found` screen.
- 🥊 **Automated Git Hooks (Lefthook)** — Parallel `pre-commit` hooks running ESLint on staged files and full TypeScript project verification (`tsc -b`).
- 🔌 **Zero Backend Coupling** — Free of opinionated fetch wrappers or auth token interceptors so you can plug in any data layer (TanStack Query, tRPC, Supabase, GraphQL, or REST) in seconds.

---

## 🚀 Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/Selimmyrat/vite-react-fsd-starter.git
cd vite-react-fsd-starter

# 2. Install dependencies (automatically installs Lefthook git hooks)
npm install

# 3. Start the development server
npm run dev
```

### 📜 Available Scripts

| Command             | Description                                                                      |
| :------------------ | :------------------------------------------------------------------------------- |
| `npm run dev`       | Start local Vite development server with HMR                                     |
| `npm run build`     | Run TypeScript check (`tsc -b`) and build production bundle                      |
| `npm run typecheck` | Run TypeScript compiler check (`tsc -b`) without emitting files                  |
| `npm run lint`      | Run ESLint (including FSD layer boundary checks) across all `.ts` / `.tsx` files |
| `npm run preview`   | Preview the production build locally                                             |

---

## 🏛️ Feature-Sliced Design (FSD) Architecture

In Feature-Sliced Design, modules on a layer can **only import from layers strictly below them**:

```text
app  ───►  pages  ───►  widgets  ───►  features  ───►  entities  ───►  shared
```

> **Note:** These boundaries are enforced at build & editor time in [`eslint.config.js`](./eslint.config.js) using `no-restricted-imports`. Importing an upper layer into a lower layer triggers an immediate ESLint error.

### 📁 Project Directory Tree

```text
src/
├── app/                        # Layer 1: App initialization, providers, layouts, router, global CSS
│   ├── layouts/                # RootLayout (Sidebar + Header) & AuthLayout
│   ├── router/                 # Route definitions with React.lazy + Suspense skeleton
│   ├── styles/                 # Tailwind CSS v4 & OKLCH design tokens
│   └── index.tsx               # Root App component wrapped in ErrorBoundary & ThemeProvider
│
├── pages/                      # Layer 2: Route-level screens
│   ├── home/                   # Full-width Dashboard page (/)
│   ├── login/                  # 2-column split enterprise Login UI page (/login)
│   └── not-found/              # 404 fallback page (*)
│
├── widgets/                    # Layer 3: Self-contained composite UI blocks
│   ├── header/                 # Sticky top bar (ui/ + model/header.data.ts)
│   ├── sidebar/                # Collapsible navigation sidebar (ui/ + model/sidebar.data.ts)
│   └── dashboard-overview/     # FSD architecture reference grid widget
│
├── features/                   # Layer 4: User interactions & business actions
│   └── auth/                   # LoginForm UI component with password visibility toggle
│
├── entities/                   # Layer 5: Business domain models & entity UI (ready for your domain slices)
│
└── shared/                     # Layer 6: Reusable infrastructure & UI kit
    ├── assets/icons/           # Brand logos & custom SVG icons
    ├── config/                 # ThemeProvider (light/dark/system) & i18n setup (en, ru, tk)
    ├── lib/                    # Hooks (useIsMobile) & class utilities (cn)
    └── ui/                     # Essential shadcn/ui primitives + ErrorBoundary
```

---

## 🛠️ Tech Stack

| Category         | Technology                                                                                                                                                   |
| :--------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Core**         | [React 19](https://react.dev/), [TypeScript 6](https://www.typescriptlang.org/), [Vite 8](https://vite.dev/)                                                 |
| **Routing**      | [React Router v8](https://reactrouter.com/) (Lazy code-splitting)                                                                                            |
| **Styling & UI** | [Tailwind CSS v4](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/), [Lucide Icons](https://lucide.dev/) |
| **Localization** | [i18next](https://www.i18next.com/), [react-i18next](https://react.i18next.com/) (`en`, `ru`, `tk`)                                                          |
| **Code Quality** | [ESLint 10](https://eslint.org/) (FSD boundaries), [Lefthook](https://lefthook.dev/) (`pre-commit` hooks)                                                    |

---

## 👤 Author

**Selim Gandymov**

- GitHub: [@Selimmyrat](https://github.com/sgandymov)

---

## 📄 License

Released under the **MIT License**. If this starter helps your workflow, please consider giving it a ⭐ on GitHub!
