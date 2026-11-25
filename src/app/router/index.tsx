import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import { RootLayout } from "../layouts/RootLayout";
import { AuthLayout } from "../layouts/AuthLayout";
import { Skeleton } from "@/shared/ui/skeleton";

const HomePage = lazy(() =>
   import("@/pages/home").then((m) => ({ default: m.HomePage })),
);
const LoginPage = lazy(() =>
   import("@/pages/login").then((m) => ({ default: m.LoginPage })),
);
const NotFoundPage = lazy(() =>
   import("@/pages/not-found").then((m) => ({ default: m.NotFoundPage })),
);

function PageLoader() {
   return (
      <div className="flex flex-col gap-6 p-6">
         <div className="space-y-2">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-4 w-72" />
         </div>
         <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <Skeleton className="h-28 rounded-xl" />
            <Skeleton className="h-28 rounded-xl" />
            <Skeleton className="h-28 rounded-xl" />
            <Skeleton className="h-28 rounded-xl" />
         </div>
         <Skeleton className="h-80 rounded-xl" />
      </div>
   );
}

export function AppRouter() {
   return (
      <Suspense fallback={<PageLoader />}>
         <Routes>
            <Route element={<RootLayout />}>
               <Route index element={<HomePage />} />
               <Route path="*" element={<NotFoundPage />} />
            </Route>
            <Route element={<AuthLayout />}>
               <Route path="login" element={<LoginPage />} />
            </Route>
         </Routes>
      </Suspense>
   );
}
