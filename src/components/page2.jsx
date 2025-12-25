import React, { useState, useEffect } from "react";

export default function Page2({ onNext }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setShowContent(true), 900);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

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
            animationDuration: `${1.4 + Math.random()}s`,
            opacity: 0.7,
          }}
        >
          ❤️
        </span>
      ))}

      {/* 📩 Envelope */}
      <div className="
        relative
        w-56 h-44
        sm:w-64 sm:h-48
        md:w-72 md:h-52
      ">

        {/* Back envelope */}
        <div className="
          absolute inset-0
          bg-gradient-to-br from-pink-300 to-pink-200
          rounded-xl
          border-3 border-black
          shadow-[4px_4px_0px_black]
        " />

        {/* Envelope flap */}
        <div
          className={`
            absolute top-0 left-0 w-full h-1/2
            bg-gradient-to-b from-pink-500 to-pink-400
            origin-top
            transition-transform duration-1000 ease-in-out
            border-b-4 border-l-4 border-r-4 border-black
            shadow-[6px_6px_0px_black]
            ${isOpen ? "rotate-x-180" : ""}
          `}
          style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
        />

        {/* ✨ Content */}
        <div
          className={`
            absolute inset-0
            flex flex-col items-center
            px-4 py-5
            transition-all duration-700
            ${showContent
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-75 translate-y-8"}
          `}
        >
          <img
            src="/satuCardPage2.png"
            alt="Sayang.."
            className="
              mb-3
              w-32 sm:w-36 md:w-40
              drop-shadow-md
            "
          />

          <p className="
            text-black
            text-sm sm:text-base
            font-extrabold
            text-center
            bg-white
            border-2 border-black
            rounded-xl
            px-3 py-2
            shadow-[3px_3px_0px_black]
            mb-2
          ">
            Hallo, babe... (灬º‿º灬)♡
          </p>

          <button
            onClick={onNext}
            className="
              mt-auto
              bg-gradient-to-br from-pink-500 to-pink-400
              text-white font-extrabold
              px-6 py-2
              rounded-full
              border-3 border-black
              shadow-[5px_5px_0px_black]
              transition
              active:scale-95
            "
          >
            next 💌
          </button>
        </div>
      </div>

      {/* 🔓 Open button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
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
          Open Envelope
        </button>
      )}
    </div>
  );
}
