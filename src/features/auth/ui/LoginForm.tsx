import { useState } from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Field, FieldGroup, FieldLabel } from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/utils";

export function LoginForm({
   className,
   ...props
}: React.ComponentProps<"div">) {
   const navigate = useNavigate();
   const { t } = useTranslation("auth");
   const [showPassword, setShowPassword] = useState(false);

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      navigate("/");
   };

   return (
      <div className={cn("flex w-full flex-col gap-6", className)} {...props}>
         <div className="flex flex-col gap-1.5 text-left">
            <h1 className="text-2xl font-semibold tracking-tight">
               {t("title")}
            </h1>
            <p className="text-muted-foreground text-sm">{t("subtitle")}</p>
         </div>

         <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <FieldGroup className="gap-4">
               <Field>
                  <FieldLabel htmlFor="email" className="text-xs font-medium">
                     {t("emailLabel")}
                  </FieldLabel>
                  <div className="relative">
                     <Mail className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                     <Input
                        id="email"
                        type="email"
                        defaultValue="selim.gandymov@arche.dev"
                        placeholder="admin@example.com"
                        className="h-10 pl-9"
                        required
                     />
                  </div>
               </Field>

               <Field>
                  <div className="flex items-center justify-between">
                     <FieldLabel
                        htmlFor="password"
                        className="text-xs font-medium"
                     >
                        {t("passwordLabel")}
                     </FieldLabel>
                     <button
                        type="button"
                        onClick={() => navigate("/")}
                        className="text-muted-foreground hover:text-foreground cursor-pointer text-xs underline-offset-4 hover:underline"
                     >
                        {t("forgotPassword")}
                     </button>
                  </div>
                  <div className="relative">
                     <Lock className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                     <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        defaultValue="password123"
                        className="h-10 pr-9 pl-9"
                        required
                     />
                     <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        aria-label={
                           showPassword ? "Hide password" : "Show password"
                        }
                        className="text-muted-foreground hover:text-foreground absolute top-1/2 right-2.5 -translate-y-1/2 cursor-pointer rounded p-1 transition-colors"
                     >
                        {showPassword ? (
                           <EyeOff className="size-4" />
                        ) : (
                           <Eye className="size-4" />
                        )}
                     </button>
                  </div>
               </Field>
            </FieldGroup>

            <Button type="submit" className="h-10 w-full gap-2 font-medium">
               <span>{t("submitButton")}</span>
               <ArrowRight className="size-4" />
            </Button>
         </form>

         <div className="bg-muted/50 text-muted-foreground rounded-lg border px-3.5 py-2.5 text-xs leading-relaxed">
            {t("demoHint")}
         </div>
      </div>
   );
}
