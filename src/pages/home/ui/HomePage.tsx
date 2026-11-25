import { useTranslation } from "react-i18next";
import { DashboardOverview } from "@/widgets/dashboard-overview";

export function HomePage() {
   const { t } = useTranslation("dashboard");

   return (
      <div className="flex w-full flex-col gap-6 p-4 md:p-6">
         <div className="space-y-1">
            <h1 className="text-xl font-semibold tracking-tight md:text-2xl">
               {t("title")}
            </h1>
            <p className="text-muted-foreground text-xs md:text-sm">
               {t("subtitle")}
            </p>
         </div>

         <DashboardOverview />
      </div>
   );
}
