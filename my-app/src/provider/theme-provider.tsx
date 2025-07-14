import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  const applyTheme = (resolvedTheme: "light" | "dark") => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(resolvedTheme);
  };

  // Updated function to match your new logic
  const getTimeBasedTheme = (): "light" | "dark" => {
    const hour = new Date().getHours();

    if ((hour >= 6 && hour <= 12) || (hour >= 18 || hour < 6)) {
      return "light"; // 6AM–1PM and 6PM–6AM
    } else {
      return "dark"; // 2PM–5PM
    }
  };

  useEffect(() => {
    if (theme === "system") {
      const currentTheme = getTimeBasedTheme();
      applyTheme(currentTheme);

      const interval = setInterval(() => {
        const updatedTheme = getTimeBasedTheme();
        const root = document.documentElement;
        if (!root.classList.contains(updatedTheme)) {
          applyTheme(updatedTheme);
        }
      }, 60 * 1000); // every minute

      return () => clearInterval(interval);
    } else {
      applyTheme(theme);
    }
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
