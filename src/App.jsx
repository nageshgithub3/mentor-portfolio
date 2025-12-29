import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Content from "./pages/Content";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor"

export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  // 🔥 APPLY THEME TO <html>
  useEffect(() => {
    document.documentElement.classList.remove("dark", "neon");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen
      bg-gray-950
      neon:bg-gradient-to-br neon:from-indigo-900 neon:via-purple-900 neon:to-pink-900
      transition-colors duration-500"
    >
      <Navbar theme={theme} setTheme={setTheme} />

      {/* PUSH CONTENT BELOW FIXED NAVBAR */}
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/content" element={<Content />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
        <Cursor/>
      </div>
    </div>
  );
}
