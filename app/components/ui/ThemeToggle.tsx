"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

interface ThemeToggleProps {
  showLabel?: boolean;
}

const ThemeToggle = ({ showLabel = false }: ThemeToggleProps) => {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const isDark = resolvedTheme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";
  const Icon = isDark ? Sun : Moon;

  if (!mounted) {
    return (
      <button
        type="button"
        className={`inline-flex h-10 items-center justify-center rounded-lg border border-gray-400/20 text-gray-600 opacity-0 ${
          showLabel ? "w-full gap-3 px-3 font-medium" : "w-10"
        }`}
        aria-hidden="true"
        tabIndex={-1}
      />
    );
  }

  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`inline-flex h-10 items-center justify-center rounded-lg border border-gray-400/20 text-gray-600 transition-colors hover:border-cyan-400 hover:text-cyan-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 dark:border-gray-600/40 dark:text-gray-300 dark:hover:border-cyan-300 dark:hover:text-cyan-300 ${
        showLabel ? "w-full gap-3 px-3 font-medium" : "w-10"
      }`}
    >
      <Icon size={18} aria-hidden="true" />
      {showLabel && <span>{label}</span>}
    </button>
  );
};

export default ThemeToggle;
