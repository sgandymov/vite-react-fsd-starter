# ⚡ Vite + React 19 + FSD Admin Panel Starter

A clean, production-ready **Admin Panel Starter Template** built with **Vite 8**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **shadcn/ui**, and strict **Feature-Sliced Design (FSD)** architecture.

Built as a lightweight, zero-bloat foundation for teams and developers who want a scalable admin dashboard structure without coupled backend/auth boilerplate.

---

## ✨ Highlights

- 🧠 **Strict Feature-Sliced Design (FSD)** — Clear separation of concerns (`app` → `pages` → `widgets` → `features` → `entities` → `shared`) with public API barrel exports (`index.ts`).
- ⚛️ **React 19 + Vite 8 + TypeScript** — Fast HMR, route-level lazy code splitting, and strict type checking.
- 🎨 **Tailwind CSS v4 + shadcn/ui + Radix UI** — Only the essential, actively used UI primitives included (`Sidebar`, `Card`, `Badge`, `DropdownMenu`, `Sheet`, `Tooltip`, `Collapsible`).
- 🌓 **Theme Engine (`Light` / `Dark` / `System`)** — Persisted theme context with automatic OS color-scheme synchronization and animated header switcher.
- 🌐 **Multi-Language (i18n)** — Pre-configured `react-i18next` with English (`EN`), Russian (`RU`), and Turkmen (`TK`) locales and a compact header selector.
- 🧩 **Minimal & Focused Starter Pages**:
   - **Dashboard (`/`)** — Full-width workspace layout with an interactive FSD layer architecture reference grid.
   - **Login UI (`/login`)** — Modern 2-column split enterprise authentication screen ready to wire up to any auth provider.
   - **404 Not Found (`*`)** — Graceful fallback route.

---

## 🚀 Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/Selimmyrat/vite-react-fsd-starter.git
cd vite-react-fsd-starter

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

### Available Scripts

| Command           | Description                                                 |
| :---------------- | :---------------------------------------------------------- |
| `npm run dev`     | Start local Vite dev server with HMR                        |
| `npm run build`   | Run TypeScript check (`tsc -b`) and build production bundle |
| `npm run lint`    | Run ESLint across all `.ts` and `.tsx` files                |
| `npm run preview` | Preview the production build locally                        |

---

## 🏛️ Feature-Sliced Design (FSD) Structure

In Feature-Sliced Design, modules on a layer can **only import from layers strictly below them**:

`app` → `pages` → `widgets` → `features` → `entities` → `shared`

```text
src/
├── app/                        # Layer 1: App initialization, providers, layouts, router, global CSS
│   ├── layouts/                # RootLayout (Sidebar + Header) & AuthLayout
│   ├── router/                 # Route definitions with React.lazy Suspense
│   ├── styles/                 # Tailwind v4 & CSS variables
│   └── index.tsx               # Root App component
│
├── pages/                      # Layer 2: Route-level pages
│   ├── home/                   # Dashboard overview page (/)
│   ├── login/                  # Split-screen login UI page (/login)
│   └── not-found/              # 404 fallback page (*)
│
├── widgets/                    # Layer 3: Self-contained composite UI blocks
│   ├── header/                 # Sticky top bar (ui + model/header.data.ts)
│   ├── sidebar/                # Collapsible navigation sidebar (ui + model/sidebar.data.ts)
│   └── dashboard-overview/     # FSD architecture reference grid widget
│
├── features/                   # Layer 4: User interactions & business actions
│   └── auth/                   # LoginForm UI component with password visibility toggle
│
├── entities/                   # Layer 5: Business domain models & entity UI (ready for your domain slices)
│
└── shared/                     # Layer 6: Reusable infrastructure & UI kit
    ├── assets/                 # Brand logos & SVG icons
    ├── config/                 # ThemeProvider (light/dark/system) & i18n setup (en, ru, tk)
    ├── lib/                    # Hooks (useIsMobile) & class utilities (cn)
    └── ui/                     # Essential shadcn/ui primitives
```

---

## 📄 License

Released under the [MIT License](LICENSE). If you find this starter useful, please consider giving it a ⭐ on GitHub!
