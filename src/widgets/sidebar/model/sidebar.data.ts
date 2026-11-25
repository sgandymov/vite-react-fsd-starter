import { KeyRound, LayoutDashboard, type LucideIcon } from "lucide-react";
import { AppLogo } from "@/shared/assets/icons";

export interface SubNavItem {
   titleKey?: string;
   title: string;
   url: string;
}

export interface NavMainItem {
   titleKey?: string;
   title: string;
   url?: string;
   icon?: LucideIcon;
   isActive?: boolean;
   items?: SubNavItem[];
}

export const sidebarData = {
   company: {
      name: "FSD Admin",
      plan: "Vite + React Starter",
      logo: AppLogo,
   },
   navMain: [
      {
         titleKey: "nav.dashboard",
         title: "Dashboard",
         url: "/",
         icon: LayoutDashboard,
      },
      {
         titleKey: "nav.loginDemo",
         title: "Login UI",
         url: "/login",
         icon: KeyRound,
      },
   ] as NavMainItem[],
};
