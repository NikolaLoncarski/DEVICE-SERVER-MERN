import LoginPage from "./pages/Authentication/LogIn";
import SignUp from "./pages/Authentication/SignUp";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useGlobalContext } from "./context/context";
import HomePage from "./pages/Home/HomePage";

import { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Devices from "./pages/widgets/Devices.jsx/Devices";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomePage />}>
      <Route
        path="index"
        element={useGlobalContext.auth === null ? <LoginPage /> : <HomePage />}
      />
      <Route path="home" element={<HomePage />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="devices" element={<Devices />} />
    </Route>
  )
);

function App() {
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
    <>
      <div className="flex flex-col h-screen">
        <nav className="dark:bg-slate-950 flex h-20 flex-row justify-between px-3 py-2">
          <h2 className="dark:text-purple-400 ">
            <span className="inline-block align-middle">Device Service</span>
          </h2>
          <button
            className="dark:text-purple-400"
            onClick={() =>
              setThemeMode(themeMode === "dark" ? "light" : "dark")
            }
          >
            {themeMode === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
