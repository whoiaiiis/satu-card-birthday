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
      <h2 className="text-4xl font-extrabold text-pink-700 mb-12 text-center drop-shadow-[2px_2px_0px_#000]">
        💕 Dashboard Cinta Kita 💕
      </h2>

      {/* Container folder */}
      <div className="grid grid-cols-2 gap-10">
        <FolderCard
          image="/fotoDashboard.png"
          label="Foto"
          onClick={() => navigate("/kenangan")}
          color="from-pink-200 via-pink-100 to-pink-300"
        />
        <FolderCard
          image="/gameDashboard.png"
          label="Games"
          onClick={() => navigate("/games")}
          color="from-purple-200 via-pink-200 to-purple-300"
        />
        <FolderCard
          image="/songDashboard.png"
          label="Playlist"
          onClick={() => navigate("/playlist")}
          color="from-pink-100 via-purple-100 to-pink-200"
        />
        <FolderCard
          image="/aboutYouDashboard.png"
          label="About"
          onClick={() => navigate("/about")}
          color="from-purple-100 via-pink-100 to-purple-200"
        />
      </div>
    </div>
  );
}

function FolderCard({ image, label, onClick, color }) {
  return (
    <div
      className="relative w-44 h-44 cursor-pointer transition-transform duration-300 hover:scale-105"
      onClick={onClick}
    >
      {/* Folder ala Roblox */}
      <div
        className={`w-full h-full bg-gradient-to-br ${color}
                   border-2 border-black rounded-xl 
                   shadow-[4px_4px_0px_black] 
                   flex flex-col items-center justify-center 
                   transition-all duration-300 
                   hover:translate-y-[-6px] hover:shadow-[8px_8px_0px_black]`}
      >
        {/* Isi folder */}
        <img
          src={image}
          alt={label}
          className="w-16 h-16 mb-3 transition-transform duration-300 group-hover:translate-y-1"
        />
        <p className="text-black font-extrabold text-lg">{label}</p>
      </div>
    </div>
  );
}
