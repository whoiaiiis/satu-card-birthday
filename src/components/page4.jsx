import React, { useState, useEffect } from "react";

export default function Page4({ onNext }) {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowCard(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const hearts = Array.from({ length: 18 });

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-pink-200 via-pink-100 to-pink-300">

      {/* ❤️ Background hearts */}
      {hearts.map((_, i) => (
        <span
          key={i}
          className="absolute text-pink-400 animate-pulseHeart select-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 18 + 14}px`,
            animationDuration: `${1.5 + Math.random()}s`,
            opacity: 0.7,
          }}
        >
          ❤️
        </span>
      ))}

      {/* 🎁 Card hadiah */}
      <div
        className={`
          w-full max-w-xs sm:max-w-sm
          bg-gradient-to-br from-pink-200 via-pink-100 to-pink-300
          p-6 sm:p-8
          rounded-2xl
          text-center
          z-10
          border-4 border-black
          shadow-[6px_6px_0px_black]
          transition-all duration-700
          ${showCard ? "opacity-100 scale-100" : "opacity-0 scale-90"}
        `}
      >
        {/* Image */}
        <img
          src="/boxkadopage4.png"
          alt="Gift"
          className="
            mx-auto mb-5
            w-36 sm:w-44 md:w-48
            animate-bounce-slow
            drop-shadow-md
          "
        />

        {/* Text */}
        <p className="
          text-black
          text-base sm:text-lg
          font-extrabold
          mb-6
          bg-white
          border-2 border-black
          rounded-xl
          p-3
          shadow-[3px_3px_0px_black]
          leading-relaxed
        ">
          Klik kalo mau liat bunga secantik aku hihi
        </p>

        {/* Button */}
        <button
          onClick={onNext}
          className="
            w-full
            bg-gradient-to-br from-pink-500 to-pink-400
            text-white font-extrabold
            py-3
            rounded-full
            border-3 border-black
            shadow-[5px_5px_0px_black]
            transition
            active:scale-95
          "
        >
          LIHAT DENGAN EXCITED
        </button>
      </div>
    </div>
  );
}
