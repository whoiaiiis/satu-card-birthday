import React, { useState, useEffect } from "react";

export default function Page2({ onNext }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setShowContent(true), 1200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <div className="relative flex justify-center items-center h-screen overflow-hidden bg-gradient-to-br from-pink-200 via-pink-100 to-pink-300">

      {/* ❤️ Background hearts */}
      {Array.from({ length: 25 }).map((_, i) => (
        <span
          key={i}
          className="absolute text-pink-400 select-none animate-pulseHeart"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 14}px`,
            animationDuration: `${1.2 + Math.random()}s`,
            animationDelay: `${Math.random() * 2}s`,
            opacity: 0.7,
          }}
        >
          ❤️
        </span>
      ))}

      {/* 📩 Amplop */}
      <div className="relative w-64 h-48">

        {/* Back envelope */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-pink-200 rounded-xl border-3 border-black shadow-[4px_4px_0px_black]" />

        {/* Envelope flap */}
        <div
          className={`absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-pink-500 to-pink-400
          transform origin-top transition-transform duration-1000 ease-in-out
          border-b-4 border-l-4 border-r-4 border-black
          shadow-[6px_6px_0px_black]
          ${isOpen ? "rotate-x-180" : ""}`}
          style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
        />

        {/* ✨ Envelope content */}
        <div
          className={`absolute inset-0 flex flex-col items-center px-4 py-5 transition-all duration-700 ${
            showContent
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-75 translate-y-10"
          }`}
        >
          {/* Image */}
          <img
            src="/satuCardPage2.png"
            alt="Sayang.."
            className="mx-auto drop-shadow-md mb-3"
            style={{ maxWidth: "160px" }}
          />

          {/* Text */}
          <p className="text-black text-base font-extrabold border-2 border-black bg-white px-3 py-2 rounded-xl shadow-[3px_3px_0px_black] text-center mb-2">
            Hallo, babe... (灬º‿º灬)♡
          </p>

          {/* ✅ Next button pushed down */}
          <button
            onClick={onNext}
            className="mt-auto bg-gradient-to-br from-pink-500 to-pink-400
            hover:from-pink-400 hover:to-pink-300
            text-white font-extrabold px-6 py-3 rounded-full transition
            border-3 border-black shadow-[5px_5px_0px_black]"
          >
            next 💌
          </button>
        </div>
      </div>

      {/* 🔓 Open envelope button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="absolute bottom-12 bg-gradient-to-br from-pink-500 to-pink-400
          hover:from-pink-400 hover:to-pink-300
          text-white font-extrabold px-6 py-3 rounded-full transition
          border-3 border-black shadow-[5px_5px_0px_black]"
        >
          Open Envelope
        </button>
      )}
    </div>
  );
}
