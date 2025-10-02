import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
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
    <div className="relative h-screen flex flex-col items-center justify-center bg-pink-100 overflow-hidden">
      {/* Efek cahaya cursor */}
      <div
        className="pointer-events-none fixed w-40 h-40 rounded-full bg-pink-300 opacity-40 blur-3xl transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
      ></div>

      {/* Judul */}
      <h2 className="text-3xl font-bold text-pink-700 mb-12 text-center">
        💕 Dashboard Cinta Kita 💕
      </h2>

      {/* Container folder */}
      <div className="grid grid-cols-2 gap-10">
        {/* Kenangan Foto */}
        <div
          className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md cursor-pointer hover:scale-105 hover:shadow-lg transition"
          onClick={() => navigate("/kenangan")}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
            alt="Foto"
            className="w-16 h-16 mb-2"
          />
          <p className="text-pink-700 font-medium">Foto</p>
        </div>

        {/* Games */}
        <div
          className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md cursor-pointer hover:scale-105 hover:shadow-lg transition"
          onClick={() => navigate("/games")}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/716/716784.png"
            alt="Games"
            className="w-16 h-16 mb-2"
          />
          <p className="text-pink-700 font-medium">Games</p>
        </div>

        {/* Playlist */}
        <div
          className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md cursor-pointer hover:scale-105 hover:shadow-lg transition"
          onClick={() => navigate("/playlist")}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/727/727245.png"
            alt="Playlist"
            className="w-16 h-16 mb-2"
          />
          <p className="text-pink-700 font-medium">Playlist</p>
        </div>

        {/* About */}
        <div
          className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md cursor-pointer hover:scale-105 hover:shadow-lg transition"
          onClick={() => navigate("/about")}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1179/1179069.png"
            alt="About"
            className="w-16 h-16 mb-2"
          />
          <p className="text-pink-700 font-medium">About</p>
        </div>
      </div>
    </div>
  );
}
