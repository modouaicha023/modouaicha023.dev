"use client";

import { useTheme } from "next-themes";
import "@theme-toggles/react/css/Horizon.css";
import { Horizon } from "@theme-toggles/react";
import { useState, useEffect } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isToggled, setToggle] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      setToggle(theme === "dark");
    }
  }, [theme, isMounted]);

  if (!isMounted) return null;
  console.log(theme);

  return (
    <Horizon
      duration={750}
      toggled={isToggled}
      toggle={setToggle}
      onToggle={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
      className="text-2xl"
      forceMotion
      {...({} as React.ComponentProps<typeof Horizon>)}
    />
  );
}
