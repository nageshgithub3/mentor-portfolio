import { NavLink } from "react-router-dom";

export default function Navbar({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "neon" : "dark");
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Content", path: "/content" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className="fixed top-0 w-full z-50 backdrop-blur-xl
        bg-gray-900/80
        neon:bg-gradient-to-r neon:from-indigo-500/80 neon:via-purple-500/80 neon:to-pink-500/80
        border-b border-white/10 transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-xl font-extrabold text-white tracking-wide">
          Mentor
          <span className="text-indigo-400 neon:text-yellow-300">Hub</span>
        </h1>

        {/* NAV LINKS */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative px-5 py-2 text-sm font-semibold rounded-full
                 transition-all duration-300
                 ${
                   isActive
                     ? "bg-indigo-600 neon:bg-yellow-400 text-white neon:text-black shadow-[0_0_20px_rgba(255,255,0,0.9)]"
                     : "text-white hover:scale-110 hover:shadow-[0_0_15px_rgba(99,102,241,0.8)] neon:hover:shadow-[0_0_20px_rgba(255,255,0,0.9)]"
                 }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </ul>

        {/* RIGHT CONTROLS */}
        <div className="flex items-center gap-4">

          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="relative w-14 h-8 rounded-full
              bg-gray-700 neon:bg-yellow-400
              flex items-center px-1 transition-all duration-500"
          >
            <span
              className={`w-6 h-6 rounded-full bg-white shadow-md
                transform transition-all duration-500
                ${theme === "neon" ? "translate-x-6" : ""}`}
            />
          </button>

          {/* CTA */}
          <a
            href="https://topmate.io/madhu_neelapalla"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-block px-6 py-2 rounded-full
              bg-indigo-600 neon:bg-yellow-400
              text-white neon:text-black
              font-bold text-sm
              hover:scale-125 hover:shadow-[0_0_30px_rgba(255,255,0,0.9)]
              transition-all duration-300"
          >
            Book 1:1
          </a>
        </div>

      </div>
    </nav>
  );
}
