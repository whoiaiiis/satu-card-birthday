import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Efek cursor hanya desktop
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-pink-100 overflow-hidden">

      {/* Efek cahaya (desktop only) */}
      <div
        className="hidden md:block pointer-events-none fixed w-40 h-40 rounded-full bg-pink-300 opacity-40 blur-3xl -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
        }}
      />

      {/* Judul */}
      <h2 className="
        text-2xl sm:text-3xl md:text-4xl
        font-extrabold text-pink-700
        mb-10 text-center
        drop-shadow-[2px_2px_0px_#000]
      ">
        Tap Tap Menu
      </h2>

      {/* Grid Menu */}
      <div className="
        grid grid-cols-2
        gap-6 sm:gap-8 md:gap-10
      ">
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
          label="Wish"
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
      onClick={onClick}
      className="
        w-32 h-32
        sm:w-40 sm:h-40
        md:w-44 md:h-44
        cursor-pointer
        transition-transform duration-200
        active:scale-95
      "
    >
      <div
        className={`
          w-full h-full bg-gradient-to-br ${color}
          border-2 border-black rounded-xl
          shadow-[4px_4px_0px_black]
          flex flex-col items-center justify-center
          transition-all duration-200
          hover:-translate-y-2 hover:shadow-[8px_8px_0px_black]
        `}
      >
        <img
          src={image}
          alt={label}
          className="
            w-12 h-12
            sm:w-14 sm:h-14
            md:w-16 md:h-16
            mb-2
          "
        />
        <p className="text-black font-extrabold text-sm sm:text-base md:text-lg">
          {label}
        </p>
      </div>
    </div>
  );
}
