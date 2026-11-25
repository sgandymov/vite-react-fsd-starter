import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Compass } from "lucide-react";
import { Button } from "@/shared/ui/button";

export function NotFoundPage() {
   const { t } = useTranslation("common");

   return (
      <div className="flex min-h-[75vh] flex-col items-center justify-center gap-4 p-6 text-center">
         <div className="bg-muted text-muted-foreground flex size-14 items-center justify-center rounded-2xl">
            <Compass className="size-7" />
         </div>
         <div className="space-y-1.5">
            <p className="text-muted-foreground font-mono text-xs font-semibold uppercase tracking-widest">
               Error 404
            </p>
            <h1 className="text-2xl font-bold tracking-tight">
               {t("notFound")}
            </h1>
            <p className="text-muted-foreground max-w-sm text-sm">
               {t("notFoundDesc")}
            </p>
         </div>
         <Button asChild size="sm" className="mt-2">
            <Link to="/">
               <ArrowLeft className="size-4" />
               {t("backToDashboard")}
            </Link>
         </Button>
      </div>
   );
}
