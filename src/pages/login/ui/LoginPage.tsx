import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Layers, ShieldCheck, Zap } from "lucide-react";
import { LoginForm } from "@/features/auth";
import { ArcheLogo } from "@/shared/assets/icons";
import { Button } from "@/shared/ui/button";

export function LoginPage() {
   const { t } = useTranslation("auth");

   return (
      <div className="bg-background grid min-h-svh lg:grid-cols-2">
         {/* Left Column: Brand & Architecture Showcase */}
         <div className="relative hidden flex-col justify-between overflow-hidden bg-zinc-950 p-10 text-zinc-50 lg:flex">
            {/* Subtle Radial Gradient */}
            <div
               className="pointer-events-none absolute inset-0 opacity-25"
               style={{
                  backgroundImage:
                     "radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.14), transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.08), transparent 50%)",
               }}
            />

            {/* Brand Header */}
            <div className="relative z-10 flex items-center justify-between">
               <Link to="/" className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-white text-zinc-950 shadow-sm">
                     <ArcheLogo className="size-5" />
                  </div>
                  <div className="grid leading-tight">
                     <span className="text-sm font-semibold tracking-tight">
                        Arche Admin
                     </span>
                     <span className="text-[11px] text-zinc-400">
                        Vite + FSD Starter
                     </span>
                  </div>
               </Link>
            </div>

            {/* Center Feature Highlights */}
            <div className="relative z-10 my-auto max-w-md space-y-6">
               <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-xs font-medium text-zinc-300">
                  <Layers className="size-3.5 text-zinc-400" />
                  <span>Feature-Sliced Design v2.1</span>
               </div>

               <h2 className="text-3xl leading-tight font-semibold tracking-tight text-white">
                  Scalable architecture for modern React applications.
               </h2>

               <p className="text-sm leading-relaxed text-zinc-400">
                  Built with React 19, Vite 8, Tailwind CSS v4, and shadcn/ui.
                  Clean unidirectional layers ready for production teams.
               </p>

               <div className="grid gap-3 pt-2 sm:grid-cols-2">
                  <div className="rounded-xl border border-zinc-800/90 bg-zinc-900/50 p-3.5">
                     <div className="flex items-center gap-2 text-xs font-medium text-zinc-200">
                        <Zap className="size-3.5 text-zinc-400" />
                        <span>Zero Boilerplate</span>
                     </div>
                     <p className="mt-1 text-[11px] leading-relaxed text-zinc-400">
                        Fast Vite bundler setup with lazy route code-splitting.
                     </p>
                  </div>
                  <div className="rounded-xl border border-zinc-800/90 bg-zinc-900/50 p-3.5">
                     <div className="flex items-center gap-2 text-xs font-medium text-zinc-200">
                        <ShieldCheck className="size-3.5 text-zinc-400" />
                        <span>Strict FSD Layers</span>
                     </div>
                     <p className="mt-1 text-[11px] leading-relaxed text-zinc-400">
                        Isolated slices with clean public API barrel exports.
                     </p>
                  </div>
               </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 flex items-center justify-between text-xs text-zinc-500">
               <span>MIT Licensed Open-Source Starter</span>
               <span>React 19 · Tailwind v4</span>
            </div>
         </div>

         {/* Right Column: Login Form */}
         <div className="flex flex-col justify-between p-6 md:p-10">
            <div className="flex items-center justify-between">
               <Link to="/" className="flex items-center gap-2.5 lg:hidden">
                  <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-lg">
                     <ArcheLogo className="size-4" />
                  </div>
                  <span className="text-sm font-semibold tracking-tight">
                     Arche Admin
                  </span>
               </Link>
               <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-muted-foreground hover:text-foreground ml-auto gap-1.5 text-xs"
               >
                  <Link to="/">
                     <ArrowLeft className="size-3.5" />
                     <span>{t("submitButton")}</span>
                  </Link>
               </Button>
            </div>

            <div className="mx-auto my-auto w-full max-w-[360px]">
               <LoginForm />
            </div>

            <div className="text-muted-foreground text-center text-xs">
               Arche Admin Starter · Feature-Sliced Design
            </div>
         </div>
      </div>
   );
}
