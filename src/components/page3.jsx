import React, { useState, useEffect } from "react";

export default function Page3({ onNext }) {
  const [openBook, setOpenBook] = useState(false);
  const [showBouquet, setShowBouquet] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);

  const messages = [
    "Bunga virtual dulu ya sayang 🌸",
    "Aku cinta kamu ❤️",
    "Selalu di hati kamu 💖",
    "Forever with you 💕",
  ];

  useEffect(() => {
    if (openBook) {
      const timer = setTimeout(() => setShowBouquet(true), 1200);
      return () => clearTimeout(timer);
    }
  }, [openBook]);

  useEffect(() => {
    if (showBouquet) {
      const interval = setInterval(() => {
        setMsgIndex((prev) => (prev + 1) % messages.length);
      }, 4000); // ganti pesan tiap 4 detik
      return () => clearInterval(interval);
    }
  }, [showBouquet]);

  return (
    <div className="relative flex justify-center items-center h-screen overflow-hidden bg-gradient-to-b from-pink-50 to-white">
      {/* 🌸 Background bunga jatuh */}
      {Array.from({ length: 25 }).map((_, i) => (
        <span
          key={i}
          className="absolute select-none animate-fall"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * -100}%`,
            fontSize: `${Math.random() * 20 + 16}px`,
            animationDuration: `${3 + Math.random() * 4}s`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        >
          🌸
        </span>
      ))}

      {/* 📖 Buku */}
      <div
        className="relative w-48 h-64 perspective cursor-pointer"
        onClick={() => setOpenBook(true)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-1000 transform-style-preserve ${
            openBook ? "-rotate-y-180" : "rotate-y-0"
          }`}
        >
          {/* Halaman depan */}
          <div className="absolute inset-0 bg-pink-300 rounded-lg flex items-center justify-center font-bold text-pink-800 backface-hidden shadow-lg">
            📖 Open me
          </div>

          {/* Halaman dalam */}
          <div className="absolute inset-0 bg-pink-100 rounded-lg flex items-center justify-center font-bold text-pink-600 backface-hidden shadow-lg transform rotate-y-180">
            💌 Surprise!
          </div>
        </div>
      </div>

      {/* 🌹 Bouquet muncul */}
      {showBouquet && (
        <div className="absolute flex flex-col items-center">
          <img
            src="/bouquet.png"
            alt="Bouquet"
            className="w-64 opacity-0 animate-fadeInScale"
          />

          {/* 💬 Bubble pesan */}
          <div className="mt-6 relative">
            <div className="bg-pink-200 text-pink-800 px-4 py-2 rounded-2xl shadow-md animate-fadeInOut text-center text-sm font-medium">
              {messages[msgIndex]}
            </div>
          </div>
        </div>
      )}

      {/* Tombol next muncul setelah bouquet */}
      {showBouquet && (
        <button
          className="absolute bottom-12 bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition transform hover:scale-105"
          onClick={onNext}
        >
          next 🌹
        </button>
      )}
    </div>
  );
}
