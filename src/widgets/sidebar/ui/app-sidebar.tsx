import * as React from "react";
import { Link } from "react-router";
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
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/" className="flex items-center gap-3">
                <div className="flex size-8 shrink-0 items-center justify-center text-foreground">
                  <sidebarData.company.logo className="size-7! shrink-0" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold tracking-tight text-foreground">
                    {sidebarData.company.name}
                  </span>
                  <span className="truncate text-xs text-muted-foreground font-normal">
                    {sidebarData.company.plan}
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarData.navMain} label="Platform" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
