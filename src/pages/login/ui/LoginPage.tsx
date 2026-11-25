import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import { LoginForm } from "@/features/auth";
import { AppLogo } from "@/shared/assets/icons";
import { Button } from "@/shared/ui/button";

export function LoginPage() {
   const { t } = useTranslation("auth");

   return (
      <div className="bg-background grid min-h-svh lg:grid-cols-2">
         {/* Left Column: Clean Visual Brand Panel */}
         <div className="border-border relative hidden flex-col justify-between overflow-hidden border-r bg-zinc-950 p-10 text-zinc-50 lg:flex dark:bg-zinc-900/50">
            {/* Soft Ambient Gradient Glow */}
            <div
               className="pointer-events-none absolute inset-0"
               style={{
                  background:
                     "radial-gradient(circle at 15% 20%, rgba(120, 119, 198, 0.18), transparent 45%), radial-gradient(circle at 85% 85%, rgba(56, 189, 248, 0.12), transparent 50%)",
               }}
            />

            {/* Brand Header */}
            <div className="relative z-10 flex items-center">
               <Link to="/" className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-white text-zinc-950 shadow-sm">
                     <AppLogo className="size-5" />
                  </div>
                  <span className="text-base font-semibold tracking-tight text-white">
                     FSD Admin
                  </span>
               </Link>
            </div>

            {/* Minimal Center Visual & Headline */}
            <div className="relative z-10 my-auto max-w-md space-y-4">
               <h2 className="text-3xl leading-tight font-semibold tracking-tight text-white">
                  Modern architecture for scalable React apps.
               </h2>
               <p className="text-sm leading-relaxed text-zinc-400">
                  Clean Feature-Sliced Design starter template built for speed,
                  clarity, and developer experience.
               </p>
            </div>

            {/* Subtle Bottom Accent Line */}
            <div className="relative z-10 flex items-center gap-2 text-xs text-zinc-500">
               <span className="inline-block size-1.5 rounded-full bg-emerald-400" />
               <span>Production Ready Starter</span>
            </div>
         </div>

         {/* Right Column: Login Form */}
         <div className="bg-background flex flex-col justify-between p-6 md:p-10">
            <div className="flex items-center justify-between">
               <Link to="/" className="flex items-center gap-2.5 lg:hidden">
                  <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-lg">
                     <AppLogo className="size-4" />
                  </div>
                  <span className="text-sm font-semibold tracking-tight">
                     FSD Admin
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

            <div className="h-6" aria-hidden="true" />
         </div>
      </div>
   );
}
