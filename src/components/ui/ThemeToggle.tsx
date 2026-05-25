"use client";

import { useTheme } from "@/components/providers/ThemeProvider";

export function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      id="tog"
      aria-label="Toggle theme"
      type="button"
      onClick={toggleTheme}
    >
      <div className="tog-icons">
        <span>🌙</span>
        <span>☀️</span>
      </div>
    </button>
  );
}
