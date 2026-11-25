import { useEffect } from "react";
import { Check, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/ui/button";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";

interface LanguageOption {
   code: "en" | "ru" | "tk";
   codeLabel: string;
   name: string;
   nativeName: string;
}

const LANGUAGES: LanguageOption[] = [
   {
      code: "en",
      codeLabel: "EN",
      name: "English",
      nativeName: "English",
   },
   {
      code: "ru",
      codeLabel: "RU",
      name: "Russian",
      nativeName: "Русский",
   },
   {
      code: "tk",
      codeLabel: "TK",
      name: "Turkmen",
      nativeName: "Türkmençe",
   },
];

export function ChangeLanguage() {
   const { i18n, t } = useTranslation("header");

   const currentCode = (i18n.resolvedLanguage || i18n.language || "en").slice(
      0,
      2,
   );
   const currentLanguage =
      LANGUAGES.find((lng) => lng.code === currentCode) ?? LANGUAGES[0];

   useEffect(() => {
      document.documentElement.lang = currentLanguage.code;
   }, [currentLanguage.code]);

   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button
               variant="ghost"
               size="sm"
               className="text-muted-foreground cursor-pointer hover:text-foreground data-[state=open]:bg-muted data-[state=open]:text-foreground h-8 gap-1.5 rounded-lg px-2.5"
               aria-label={t("language.label")}
            >
               <Globe className="size-3.5" />
               <span className="text-xs font-medium tracking-wide">
                  {currentLanguage.codeLabel}
               </span>
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent
            align="end"
            sideOffset={8}
            className="w-44 rounded-xl p-1.5"
         >
            <DropdownMenuLabel className="text-muted-foreground px-2 py-1 text-[11px] font-medium tracking-wider uppercase">
               {t("language.label")}
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="my-1" />
            {LANGUAGES.map((lang) => {
               const isSelected = currentLanguage.code === lang.code;

               return (
                  <DropdownMenuItem
                     key={lang.code}
                     onClick={() => void i18n.changeLanguage(lang.code)}
                     className="flex cursor-pointer items-center justify-between gap-2 rounded-lg px-2 py-1.5 text-xs font-medium"
                  >
                     <div className="flex items-center gap-2">
                        <span className="bg-muted text-muted-foreground inline-flex w-6 items-center justify-center rounded px-1 py-0.5 font-mono text-[10px] font-semibold">
                           {lang.codeLabel}
                        </span>
                        <span>{lang.nativeName}</span>
                     </div>
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
