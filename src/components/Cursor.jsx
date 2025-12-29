import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const addActive = () => setActive(true);
    const removeActive = () => setActive(false);

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", addActive);
      el.addEventListener("mouseleave", removeActive);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", addActive);
        el.removeEventListener("mouseleave", removeActive);
      });
    };
  }, []);

  return (
    <>
      {/* DOT */}
      <div
        className="fixed z-[9999] w-2 h-2 rounded-full bg-indigo-400
                   pointer-events-none transition-transform duration-150"
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* RING */}
      <div
        className={`fixed z-[9998] w-8 h-8 rounded-full border
                    pointer-events-none transition-all duration-200
                    ${active ? "scale-150 border-pink-400" : "scale-100 border-indigo-400"}`}
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}
