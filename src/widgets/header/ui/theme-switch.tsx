import { Check, Laptop, Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme, type Theme } from "@/shared/config/theme";
import { Button } from "@/shared/ui/button";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";

const THEME_OPTIONS: {
   value: Theme;
   labelKey: string;
   icon: typeof Sun;
}[] = [
   { value: "light", labelKey: "theme.light", icon: Sun },
   { value: "dark", labelKey: "theme.dark", icon: Moon },
   { value: "system", labelKey: "theme.system", icon: Laptop },
];

export function ThemeSwitch() {
   const { theme, setTheme } = useTheme();
   const { t } = useTranslation("header");

   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button
               variant="ghost"
               size="icon-sm"
               className="text-muted-foreground cursor-pointer hover:text-foreground data-[state=open]:bg-muted data-[state=open]:text-foreground relative size-8 rounded-lg"
               aria-label={t("theme.label")}
            >
               <Sun className="size-4 scale-100 rotate-0 transition-transform duration-200 dark:scale-0 dark:-rotate-90" />
               <Moon className="absolute size-4 scale-0 rotate-90 transition-transform duration-200 dark:scale-100 dark:rotate-0" />
               <span className="sr-only">{t("theme.label")}</span>
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent
            align="end"
            sideOffset={8}
            className="w-40 rounded-xl p-1.5"
         >
            <DropdownMenuLabel className="text-muted-foreground px-2 py-1 text-[11px] font-medium tracking-wider uppercase">
               {t("theme.label")}
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="my-1" />
            {THEME_OPTIONS.map((option) => {
               const Icon = option.icon;
               const isSelected = theme === option.value;

               return (
                  <DropdownMenuItem
                     key={option.value}
                     onClick={() => setTheme(option.value)}
                     className="flex cursor-pointer items-center justify-between gap-2 rounded-lg px-2.5 py-1.5 text-xs font-medium"
                  >
                     <span className="flex items-center gap-2">
                        <Icon className="text-muted-foreground size-3.5" />
                        <span>{t(option.labelKey)}</span>
                     </span>
                     {isSelected && (
                        <Check className="text-foreground size-3.5" />
                     )}
                  </DropdownMenuItem>
               );
            })}
         </DropdownMenuContent>
      </DropdownMenu>
   );
}
