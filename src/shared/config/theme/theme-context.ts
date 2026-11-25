import { createContext } from "react";

export type Theme = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

export type ThemeContextValue = {
   theme: Theme;
   resolvedTheme: ResolvedTheme;
   setTheme: (theme: Theme) => void;
   toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);
