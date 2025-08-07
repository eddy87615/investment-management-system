import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useThemeStore } from "./store/themeStore";

import Header from "./components/Header.tsx";
import Login from "./pages/Login.tsx";
import Footer from "./components/Footer.tsx";
import Dashboard from "./pages/Dashboard.tsx";

function App() {
  const setTheme = useThemeStore((state) => state.setTheme);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = stored ?? (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
  }, [setTheme]);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<Dashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
