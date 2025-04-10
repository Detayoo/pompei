import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
} from "react";
import { Appearance } from "react-native";

import { themes } from "@/constants";

const ThemeContext = createContext<{
  theme: typeof themes.dark;
  toggleTheme: () => void;
  mode: "light" | "dark";
} | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(Appearance.getColorScheme() ?? "light");

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme ?? "light");
    });
    return () => subscription.remove();
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const contextValues = useMemo(() => {
    return { theme: themes[theme], toggleTheme, mode: theme };
  }, [theme]);

  return (
    <ThemeContext.Provider value={contextValues}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
