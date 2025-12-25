import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PhotoContainer() {
  const navigate = useNavigate();
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Efek cursor hanya aktif di desktop
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-r from-pink-200 via-purple-300 to-pink-300 overflow-hidden">

      {/* Efek cahaya cursor (desktop only) */}
      <div
        className="hidden md:block pointer-events-none fixed w-48 h-48 rounded-full bg-pink-300 opacity-40 blur-3xl -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
        }}
      />

      {/* Judul */}
      <h2 className="
        text-3xl sm:text-4xl md:text-5xl
        font-extrabold text-white
        text-center
        drop-shadow-[2px_2px_0px_#000]
        mb-10
      ">
        LOH, Gada Bunga, <br /> Adanya Aku
      </h2>

      {/* Foto */}
      <div
        className="group relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 cursor-pointer transition-transform duration-300 hover:scale-105"
        onClick={() => navigate("/somepage")}
      >
        <div
          className="
            w-full h-full
            bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300
            border-4 border-black
            rounded-full
            shadow-[4px_4px_0px_black]
            flex items-center justify-center
            transition-all duration-300
            hover:-translate-y-2 hover:shadow-[8px_8px_0px_black]
          "
        >
          <img
            src="/potoakuyh.jpeg"
            alt="Foto"
            className="
              w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60
              rounded-full object-cover
            "
          />
        </div>
      </div>

      {/* Tombol */}
      <div className="mt-12 mb-6">
        <button
          onClick={() => navigate("/dashboard")}
          className="
            px-6 py-3 sm:px-8 sm:py-4
            bg-gradient-to-b from-pink-300 to-pink-400
            text-white font-extrabold
            text-sm sm:text-base md:text-lg
            rounded-xl
            border-4 border-black
            shadow-[4px_4px_0px_black]
            transition-all duration-200
            hover:-translate-y-1 hover:shadow-[6px_6px_0px_black]
            active:translate-y-1 active:shadow-[2px_2px_0px_black]
            text-center
          "
        >
          Bunga pun kalah <br className="sm:hidden" />
          cantiknya sama aku HIHI
        </button>
      </div>

    </div>
  );
}
