import * as React from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { NavMain } from "@/widgets/sidebar/ui/nav-main";
import {
   Sidebar,
   SidebarContent,
   SidebarHeader,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
   SidebarRail,
} from "@/shared/ui/sidebar";
import { sidebarData } from "@/widgets/sidebar/model/sidebar.data";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
   const { t } = useTranslation("sidebar");

   return (
      <Sidebar collapsible="icon" {...props}>
         <SidebarHeader className="border-sidebar-border flex h-14 justify-center border-b px-2 py-0">
            <SidebarMenu>
               <SidebarMenuItem>
                  <SidebarMenuButton
                     size="lg"
                     asChild
                     className="hover:bg-sidebar-accent/60 transition-colors"
                  >
                     <Link to="/" className="flex items-center gap-3">
                        <div className="bg-primary text-primary-foreground flex size-8 shrink-0 items-center justify-center rounded-lg shadow-xs">
                           <sidebarData.company.logo className="size-4! shrink-0" />
                        </div>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                           <span className="text-foreground truncate font-semibold tracking-tight">
                              {sidebarData.company.name}
                           </span>
                           <span className="text-muted-foreground truncate text-[11px] font-normal">
                              {sidebarData.company.plan}
                           </span>
                        </div>
                     </Link>
                  </SidebarMenuButton>
               </SidebarMenuItem>
            </SidebarMenu>
         </SidebarHeader>
         <SidebarContent className="pt-2">
            <NavMain items={sidebarData.navMain} label={t("platform")} />
         </SidebarContent>
         <SidebarRail />
      </Sidebar>
   );
}
