import { SidebarInset, SidebarProvider } from "@/shared/ui/sidebar";
import { TooltipProvider } from "@/shared/ui/tooltip";
import { AppSidebar } from "@/widgets/sidebar";
import { Outlet } from "react-router";
import { Header } from "@/widgets/header";

export function RootLayout() {
  return (
    <SidebarProvider>
      <TooltipProvider>
        <AppSidebar />
        <SidebarInset>
          <Header />
          <main>
            <Outlet />
          </main>
        </SidebarInset>
      </TooltipProvider>
    </SidebarProvider>
  );
}
