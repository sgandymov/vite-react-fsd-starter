import { useCallback, useEffect, useState } from "react";
import { ThemeContext, type ResolvedTheme, type Theme } from "./theme-context";

const STORAGE_KEY = "theme";

function getSystemTheme(): ResolvedTheme {
   return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
}

function getInitialTheme(): Theme {
   const stored = localStorage.getItem(STORAGE_KEY);
   if (stored === "light" || stored === "dark" || stored === "system") {
      return stored;
   }
   return "system";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
   const [theme, setThemeState] = useState<Theme>(getInitialTheme);
   const [systemTheme, setSystemTheme] =
      useState<ResolvedTheme>(getSystemTheme);

   useEffect(() => {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e: MediaQueryListEvent) => {
         setSystemTheme(e.matches ? "dark" : "light");
      };
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
   }, []);

   const resolvedTheme: ResolvedTheme =
      theme === "system" ? systemTheme : theme;

   useEffect(() => {
      const root = document.documentElement;
      root.classList.toggle("dark", resolvedTheme === "dark");
      root.style.colorScheme = resolvedTheme;
      localStorage.setItem(STORAGE_KEY, theme);
   }, [theme, resolvedTheme]);

   const setTheme = useCallback((nextTheme: Theme) => {
      setThemeState(nextTheme);
   }, []);

   const toggleTheme = useCallback(() => {
      setThemeState((prev) => {
         const current = prev === "system" ? getSystemTheme() : prev;
         return current === "light" ? "dark" : "light";
      });
   }, []);

   return (
      <ThemeContext.Provider
         value={{ theme, resolvedTheme, setTheme, toggleTheme }}
      >
         {children}
      </ThemeContext.Provider>
   );
}
