import { BadgeCheck, Bell, LogOut } from "lucide-react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuGroup,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import type { HeaderUser } from "../model/header.data";

function getInitials(name: string) {
   return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
}

export function NavUser({ user }: { user: HeaderUser }) {
   const { t } = useTranslation("header");
   const navigate = useNavigate();
   const initials = getInitials(user.name);

   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <button
               type="button"
               aria-label={user.name}
               className="focus-visible:ring-ring/50 group relative inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full outline-none transition-transform active:scale-95 focus-visible:ring-2"
            >
               <Avatar className="border-border group-hover:border-foreground/25 size-8 rounded-full border transition-colors">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="bg-muted text-foreground text-[11px] font-semibold tracking-tight">
                     {initials}
                  </AvatarFallback>
               </Avatar>
            </button>
         </DropdownMenuTrigger>
         <DropdownMenuContent
            className="w-56 rounded-xl p-1.5"
            side="bottom"
            align="end"
            sideOffset={8}
         >
            <DropdownMenuLabel className="p-0 font-normal">
               <div className="flex items-center gap-2.5 px-2 py-2 text-left text-sm">
                  <Avatar className="border-border size-8 rounded-full border">
                     <AvatarImage src={user.avatar} alt={user.name} />
                     <AvatarFallback className="bg-muted text-foreground text-xs font-semibold">
                        {initials}
                     </AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left leading-tight">
                     <span className="truncate text-xs font-semibold">
                        {user.name}
                     </span>
                     <span className="text-muted-foreground truncate text-[11px]">
                        {user.email}
                     </span>
                  </div>
               </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="my-1" />
            <DropdownMenuGroup>
               <DropdownMenuItem className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs font-medium">
                  <BadgeCheck className="text-muted-foreground size-3.5" />
                  {t("account")}
               </DropdownMenuItem>
               <DropdownMenuItem className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs font-medium">
                  <Bell className="text-muted-foreground size-3.5" />
                  {t("notifications")}
               </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator className="my-1" />
            <DropdownMenuItem
               onClick={() => navigate("/login")}
               className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs font-medium"
            >
               <LogOut className="text-muted-foreground size-3.5" />
               {t("logOut")}
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   );
}
