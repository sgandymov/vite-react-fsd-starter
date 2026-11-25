import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/utils";

const badgeVariants = cva(
   "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-[color,box-shadow] overflow-hidden",
   {
      variants: {
         variant: {
            default:
               "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary:
               "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive:
               "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline:
               "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
            success:
               "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
            warning:
               "border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400",
         },
      },
      defaultVariants: {
         variant: "default",
      },
   },
);

function Badge({
   className,
   variant,
   ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
   return (
      <span
         data-slot="badge"
         className={cn(badgeVariants({ variant }), className)}
         {...props}
      />
   );
}

// eslint-disable-next-line react-refresh/only-export-components
export { Badge, badgeVariants };
