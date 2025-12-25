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
      const timer = setTimeout(() => setShowBouquet(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [openBook]);

  useEffect(() => {
    if (showBouquet) {
      const interval = setInterval(() => {
        setMsgIndex((prev) => (prev + 1) % messages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [showBouquet]);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-pink-200 via-pink-100 to-pink-300">

      {/* 🌸 Background bunga jatuh */}
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="absolute select-none animate-fall"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * -100}%`,
            fontSize: `${Math.random() * 18 + 14}px`,
            animationDuration: `${3 + Math.random() * 3}s`,
            animationDelay: `${Math.random() * 3}s`,
            opacity: 0.7,
          }}
        >
          🌸
        </span>
      ))}

      {/* 📖 Buku */}
      {!showBouquet && (
        <div
          className="relative w-40 h-56 sm:w-48 sm:h-64 cursor-pointer perspective"
          onClick={() => setOpenBook(true)}
        >
          <div
            className={`relative w-full h-full transition-transform duration-1000 transform-style-preserve ${
              openBook ? "-rotate-y-180" : "rotate-y-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-pink-300 rounded-lg flex items-center justify-center font-extrabold text-black backface-hidden border-3 border-black shadow-[4px_4px_0px_black]">
              📖 Open me
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-pink-100 rounded-lg flex items-center justify-center font-extrabold text-black backface-hidden transform rotate-y-180 border-3 border-black shadow-[4px_4px_0px_black]">
              💌 Surprise!
            </div>
          </div>
        </div>
      )}

      {/* 🌹 Bouquet + text */}
      {showBouquet && (
        <div className="absolute flex flex-col items-center max-w-xs w-full">

          <img
            src="/bouquet.png"
            alt="Bouquet"
            className="
              w-40 sm:w-52 md:w-64
              mb-4
              animate-fadeInScale
            "
          />

          {/* 💬 Bubble teks */}
          <div className="
            bg-gradient-to-br from-pink-300 to-pink-200
            text-black
            px-4 py-3
            rounded-2xl
            text-center
            text-sm sm:text-base
            font-extrabold
            border-2 border-black
            shadow-[3px_3px_0px_black]
            leading-relaxed
            max-w-xs
            animate-fadeInOut
          ">
            {messages[msgIndex]}
          </div>
        </div>
      )}

      {/* Next button */}
      {showBouquet && (
        <button
          onClick={onNext}
          className="
            absolute bottom-6 sm:bottom-10
            bg-gradient-to-br from-pink-500 to-pink-400
            text-white font-extrabold
            px-6 py-3
            rounded-full
            border-3 border-black
            shadow-[5px_5px_0px_black]
            transition
            active:scale-95
          "
        >
          Next 🌹
        </button>
      )}
    </div>
  );
}
