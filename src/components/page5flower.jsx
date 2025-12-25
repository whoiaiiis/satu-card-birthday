import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PhotoContainer() {
  const navigate = useNavigate();
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-200 via-purple-300 to-pink-300 overflow-hidden">

      {/* Efek cahaya cursor */}
      <div
        className="pointer-events-none fixed w-48 h-48 rounded-full bg-pink-300 opacity-40 blur-3xl -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
        }}
      />

      {/* Judul */}
      <h2 className="text-5xl font-extrabold text-white mb-16 text-center drop-shadow-[2px_2px_0px_#000]">
        LOH, Gada Bunga, Adanya Aku
      </h2>

      {/* Container Foto */}
      <div
        className="group relative w-72 h-72 cursor-pointer transition-transform duration-300 hover:scale-105"
        onClick={() => navigate("/somepage")}
      >
        <div
          className="w-full h-full bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300
          border-4 border-black rounded-full shadow-[4px_4px_0px_black]
          flex items-center justify-center transition-all duration-300
          hover:-translate-y-2 hover:shadow-[8px_8px_0px_black]"
        >
          <img
            src="/potoakuyh.jpeg"
            alt="Foto Wadah"
            className="w-60 h-60 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Tombol bawah */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
      
      <button
  onClick={() => navigate("/dashboard")}
  className="
    px-8 py-4
  bg-gradient-to-b from-pink-300 to-pink-400
    text-white font-extrabold text-lg
    rounded-xl
    border-4 border-black
    shadow-[4px_4px_0px_black]
    transition-all duration-200
    hover:-translate-y-1 hover:shadow-[6px_6px_0px_black]
    active:translate-y-1 active:shadow-[2px_2px_0px_black]
  "
>
  Bunga pun kalah cantiknya sama aku HIHI
</button>



      </div>
    </div>
  );
}
