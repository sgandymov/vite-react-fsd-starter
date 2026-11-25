import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import { SidebarTrigger } from "@/shared/ui/sidebar";
import { headerUserData } from "../model/header.data";
import { NavUser } from "./nav-user";
import { ChangeLanguage } from "./change-language";
import { ThemeSwitch } from "./theme-switch";

const ROUTE_TITLE_KEYS: Record<string, string> = {
   "/": "routes.dashboard",
   "/login": "routes.login",
};

export function Header() {
   const { t } = useTranslation("header");
   const location = useLocation();
   const pageTitleKey =
      ROUTE_TITLE_KEYS[location.pathname] ?? "routes.dashboard";

   return (
      <header className="bg-background/85 supports-[backdrop-filter]:bg-background/65 sticky top-0 z-20 flex h-14 shrink-0 items-center justify-between border-b px-4 backdrop-blur-md md:px-6">
         <div className="flex items-center gap-3">
            <SidebarTrigger className="text-muted-foreground hover:text-foreground -ml-1.5 size-8" />
            <div className="bg-border h-4 w-px shrink-0" aria-hidden="true" />
            <span className="text-foreground text-sm font-medium tracking-tight">
               {t(pageTitleKey)}
            </span>
         </div>

         <div className="flex items-center gap-2">
            <ChangeLanguage />
            <ThemeSwitch />
            <div
               className="bg-border mx-1 h-4 w-px shrink-0"
               aria-hidden="true"
            />
            <NavUser user={headerUserData} />
         </div>
      </header>
   );
}
