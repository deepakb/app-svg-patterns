import { useTheme } from "next-themes";

import { useLoaded } from "./useLoaded";

export default function useAppTheme() {
  const { systemTheme, theme, setTheme } = useTheme();
  const isClientLoaded = useLoaded();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDarkTheme = currentTheme && currentTheme === "dark";
  const isLightTheme = currentTheme && currentTheme === "dark";

  console.log({ systemTheme, theme, setTheme });

  return {
    isDarkTheme: isClientLoaded && isDarkTheme,
    isLightTheme: isClientLoaded && isLightTheme,
    setTheme,
  };
}
