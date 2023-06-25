import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/context";
import { FaMoon, FaSun } from "react-icons/fa";

function SideBar() {
  const { themeMode, setThemeMode } = useGlobalContext();

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
  }, [setThemeMode]);

  useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeMode]);
  return (
    <div className="dark:bg-slate-950 flex h-20 flex-row justify-between px-3 py-2">
      <h2 className="dark:text-purple-400 ">
        <span className="inline-block align-middle">Device Service</span>
      </h2>
      <button
        className="dark:text-purple-400"
        onClick={() => setThemeMode(themeMode === "dark" ? "light" : "dark")}
      >
        {themeMode === "dark" ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
}

export default SideBar;
