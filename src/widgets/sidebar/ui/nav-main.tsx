import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router";
import { useTranslation } from "react-i18next";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/shared/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/shared/ui/sidebar";
import type { NavMainItem } from "@/widgets/sidebar/model/sidebar.data";

interface NavMainProps {
  items: NavMainItem[];
  label?: string;
}

export function NavMain({ items, label }: NavMainProps) {
  const { t } = useTranslation("sidebar");
  const location = useLocation();

  const getLabel = (titleKey?: string, fallback?: string) => {
    if (titleKey) {
      const translated = t(titleKey);
      if (translated && translated !== titleKey) {
        return translated;
      }
    }
    return fallback || "";
  };

  const isRouteActive = (url?: string) => {
    if (!url) return false;
    if (url === "/") return location.pathname === "/";
    return location.pathname === url || location.pathname.startsWith(`${url}/`);
  };

  return (
    <SidebarGroup>
      {label && <SidebarGroupLabel>{label}</SidebarGroupLabel>}
      <SidebarMenu>
        {items.map((item) => {
          const itemLabel = getLabel(item.titleKey, item.title);
          const hasChildren = Boolean(item.items && item.items.length > 0);

          if (hasChildren) {
            const isAnyChildActive = item.items?.some((sub) =>
              isRouteActive(sub.url)
            );

            return (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isActive || isAnyChildActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={itemLabel}>
                      {item.icon && <item.icon />}
                      <span>{itemLabel}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent
                    className="
                      overflow-hidden
                      data-[state=closed]:animate-collapsible-up
                      data-[state=open]:animate-collapsible-down
                    "
                  >
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => {
                        const subLabel = getLabel(
                          subItem.titleKey,
                          subItem.title
                        );
                        const isSubActive = isRouteActive(subItem.url);

                        return (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={isSubActive}
                            >
                              <Link to={subItem.url}>
                                <span>{subLabel}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        );
                      })}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            );
          }

          const isActive = isRouteActive(item.url);

          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                tooltip={itemLabel}
                isActive={isActive}
              >
                <Link to={item.url || "#"}>
                  {item.icon && <item.icon />}
                  <span>{itemLabel}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
