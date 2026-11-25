import { KeyRound, LayoutDashboard, type LucideIcon } from "lucide-react";
import { ArcheLogo } from "@/shared/assets/icons";

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
      name: "Arche Admin",
      plan: "Vite + FSD Starter",
      logo: ArcheLogo,
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
