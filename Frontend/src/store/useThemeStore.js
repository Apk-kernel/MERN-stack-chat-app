import { create } from "zustand";

const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("chat-theme") || "luxury";  // default theme here
  }
  return "retro";
};

export const useThemeStore = create((set) => ({
  theme: getInitialTheme(),
  setTheme: (theme) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("chat-theme", theme);
    }
    set({ theme });
  },
}));
