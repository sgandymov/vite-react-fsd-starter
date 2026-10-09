import {
  Component,
  LayoutDashboard,
  Table,
  type LucideIcon,
} from "lucide-react";
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
    name: "Arche UI",
    plan: "Built with FSD",
    logo: ArcheLogo,
  },
  user: {
    name: "Admin",
    email: "admin@example.com",
    avatar: "/avatars/admin.jpg",
  },
  navMain: [
    {
      titleKey: "nav.dashboard",
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
    },
    {
      titleKey: "nav.tables",
      title: "Tables",
      url: "/tables",
      icon: Table,
    },
    {
      titleKey: "nav.uiElements",
      title: "UI Elements",
      icon: Component,
      isActive: false,
      items: [
        {
          titleKey: "nav.buttons",
          title: "Buttons",
          url: "/ui/buttons",
        },
        {
          titleKey: "nav.forms",
          title: "Forms",
          url: "/ui/forms",
        },
        {
          titleKey: "nav.cards",
          title: "Cards",
          url: "/ui/cards",
        },
        {
          titleKey: "nav.modals",
          title: "Modals",
          url: "/ui/modals",
        },
      ],
    },
  ] as NavMainItem[],
};
