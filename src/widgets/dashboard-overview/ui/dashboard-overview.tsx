import { useTranslation } from "react-i18next";
import { FolderGit2, Layers } from "lucide-react";
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";

const FSD_LAYERS = [
   {
      index: "01",
      layer: "app",
      path: "src/app",
      descKey: "architecture.layers.app",
   },
   {
      index: "02",
      layer: "pages",
      path: "src/pages",
      descKey: "architecture.layers.pages",
   },
   {
      index: "03",
      layer: "widgets",
      path: "src/widgets",
      descKey: "architecture.layers.widgets",
   },
   {
      index: "04",
      layer: "features",
      path: "src/features",
      descKey: "architecture.layers.features",
   },
   {
      index: "05",
      layer: "entities",
      path: "src/entities",
      descKey: "architecture.layers.entities",
   },
   {
      index: "06",
      layer: "shared",
      path: "src/shared",
      descKey: "architecture.layers.shared",
   },
];

export function DashboardOverview() {
   const { t } = useTranslation("dashboard");

   return (
      <Card className="py-5">
         <CardHeader className="px-5 pb-2">
            <div className="flex items-center justify-between">
               <div className="space-y-1">
                  <div className="flex items-center gap-2">
                     <CardTitle className="text-base font-semibold tracking-tight">
                        {t("architecture.title")}
                     </CardTitle>
                     <Badge
                        variant="secondary"
                        className="gap-1 rounded-md px-2 py-0.5 text-[11px] font-medium"
                     >
                        <Layers className="size-3" />
                        FSD v2.1
                     </Badge>
                  </div>
                  <CardDescription className="text-xs">
                     {t("architecture.subtitle")}
                  </CardDescription>
               </div>
            </div>
         </CardHeader>
         <CardContent className="grid gap-3 px-5 sm:grid-cols-2 lg:grid-cols-3">
            {FSD_LAYERS.map((item) => (
               <div
                  key={item.layer}
                  className="group/layer bg-muted/25 hover:bg-muted/50 hover:border-foreground/15 flex flex-col justify-between gap-3 rounded-xl border p-4 transition-all duration-150"
               >
                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <div className="bg-background text-foreground flex size-7 items-center justify-center rounded-lg border shadow-2xs">
                           <FolderGit2 className="size-3.5" />
                        </div>
                        <span className="font-mono text-xs font-semibold tracking-tight">
                           {item.path}
                        </span>
                     </div>
                     <span className="text-muted-foreground/60 font-mono text-[11px] font-medium">
                        {item.index}
                     </span>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                     {t(item.descKey)}
                  </p>
               </div>
            ))}
         </CardContent>
      </Card>
   );
}
