import { BrowserRouter } from "react-router";
import { ThemeProvider } from "@/shared/config/theme";
import { ErrorBoundary } from "@/shared/ui/error-boundary";
import { AppRouter } from "./router";
import "@/shared/config/i18n/i18n";
import "./styles/index.css";

export function App() {
   return (
      <ErrorBoundary>
         <ThemeProvider>
            <BrowserRouter>
               <AppRouter />
            </BrowserRouter>
         </ThemeProvider>
      </ErrorBoundary>
   );
}
