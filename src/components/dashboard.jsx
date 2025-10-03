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
        <FolderCard
          image="/fotoDashboard.png"
          label="Foto"
          onClick={() => navigate("/kenangan")}
        />
        <FolderCard
          image="/gameDashboard.png"
          label="Games"
          onClick={() => navigate("/games")}
        />
        <FolderCard
          image="/songDashboard.png"
          label="Playlist"
          onClick={() => navigate("/playlist")}
        />
        <FolderCard
          image="/aboutYouDashboard.png"
          label="About"
          onClick={() => navigate("/about")}
        />
      </div>
    </div>
  );
}

function FolderCard({ image, label, onClick }) {
  return (
    <div
      className="relative w-44 h-44 cursor-pointer transition-transform duration-300 hover:scale-105"
      onClick={onClick}
    >
      {/* Bentuk folder */}
      <div
        className="w-full h-full bg-gradient-to-br from-pink-200 to-pink-100 shadow-md flex flex-col items-center justify-center relative rounded-lg overflow-hidden group"
        style={{
          clipPath:
            "polygon(0 25%, 20% 25%, 25% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      >
        {/* Tab folder */}
        <div
          className="absolute top-0 left-0 w-1/3 h-6 bg-pink-300 rounded-t-md shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md"
          style={{
            clipPath: "polygon(0 100%, 0 0, 100% 0, 90% 100%)",
          }}
        ></div>

        {/* Isi folder */}
        <img
          src={image}
          alt={label}
          className="w-16 h-16 mb-2 z-10 transition-transform duration-300 group-hover:translate-y-1"
        />
        <p className="text-pink-700 font-semibold z-10 transition-colors duration-300 group-hover:text-pink-900">
          {label}
        </p>
      </div>
    </div>
  );
}
