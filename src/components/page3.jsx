import React, { useState, useEffect } from "react";

export default function Page3({ onNext }) {
  const [openBook, setOpenBook] = useState(false);
  const [showBouquet, setShowBouquet] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);

  const messages = [
    "You're the reason I smile at my phone for no reason 😄📱",
  "I might not be a photographer, but I can totally picture us together 📸❤️",
     "Selalu ada buat kamu, walaupun lagi sibuk main game 😎💖",
  "Kamu selalu di hati, bahkan pas lagi afk 😜💕",
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
    <div className="relative flex justify-center items-center h-screen overflow-hidden bg-gradient-to-br from-pink-200 via-pink-100 to-pink-300">
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
          <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-pink-300 rounded-lg flex items-center justify-center font-extrabold text-black backface-hidden shadow-lg border-3 border-black shadow-[4px_4px_0px_black]">
            📖 Open me
          </div>

          {/* Halaman dalam */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-pink-100 rounded-lg flex items-center justify-center font-extrabold text-black backface-hidden shadow-lg transform rotate-y-180 border-3 border-black shadow-[4px_4px_0px_black]">
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
            <div className="bg-gradient-to-br from-pink-300 to-pink-200 text-black px-4 py-2 rounded-2xl shadow-md animate-fadeInOut text-center text-sm font-extrabold border-2 border-black shadow-[3px_3px_0px_black]">
              {messages[msgIndex]}
            </div>
          </div>
        </div>
      )}

      {/* Tombol next muncul setelah bouquet */}
      {showBouquet && (
        <button
          className="absolute bottom-12 bg-gradient-to-br from-pink-500 to-pink-400 hover:from-pink-400 hover:to-pink-300 text-white font-extrabold px-6 py-3 rounded-full transition transform hover:translate-y-[-3px] border-3 border-black shadow-[5px_5px_0px_black] hover:shadow-[7px_7px_0px_black]"
          onClick={onNext}
        >
          Next 🌹
        </button>
      )}
    </div>
  );
}
