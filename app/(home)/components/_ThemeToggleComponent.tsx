"use client";

import Dropdown from "@/app/components/Dropdown";
import MoonIcon from "@/app/components/icons/MoonIcon";
import SunIcon from "@/app/components/icons/SunIcon";
import SystemIcon from "@/app/components/icons/SystemIcon";
import { useEffect, useState } from "react";

const themeMenu = [
  {
    theme: "Light",
    icon: <SunIcon />,
    mode: "light",
  },
  {
    theme: "Dark",
    icon: <MoonIcon />,
    mode: "dark",
  },
  {
    theme: "System",
    icon: <SystemIcon />,
    mode: "system",
  },
];

const ThemeToggle = () => {
  const [selected, setSelected] = useState(themeMenu[2]); // Default to "System"

  // Apply the theme
  const applyTheme = (mode: string) => {
    const html = document.documentElement;

    if (mode === "light") {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else if (mode === "dark") {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      // System theme
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDark) {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
      localStorage.setItem("theme", "system");
    }
  };

  // Change theme handler
  const changeTheme = (item: (typeof themeMenu)[number]) => {
    setSelected(item);
    applyTheme(item.mode);
  };

  // Load theme on initial render
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "system";
    const initialTheme =
      themeMenu.find((item) => item.mode === storedTheme) || themeMenu[2];
    setSelected(initialTheme);
    applyTheme(initialTheme.mode);
  }, []);

  return (
    <Dropdown
      renderToggle={
        <div className="h-7 w-7 p-1 flex items-center justify-center text-xl cursor-pointer hover:bg-gray-100 rounded-md dark:hover:bg-gray-600">
          {selected.icon}
        </div>
      }
      position="bottom-right"
      className="p-0"
    >
      <div className="min-w-max p-2 flex flex-col dark:bg-[#1A1D24] text-gray-600 dark:text-gray-400">
        {themeMenu.map((item, i) => (
          <div
            key={i}
            className={`flex items-center text-sm gap-3 px-3 py-2 hover:bg-slate-200 dark:hover:bg-gray-600 rounded cursor-pointer dark:hover:text-white`}
            onClick={() => changeTheme(item)}
          >
            <div>{item.theme}</div>
          </div>
        ))}
      </div>
    </Dropdown>
  );
};

export default ThemeToggle;
