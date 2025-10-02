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
    <div className="relative flex justify-center items-center h-screen overflow-hidden bg-gradient-to-b from-pink-50 to-white">
      {/* ❤️ Background hearts (berdetak) */}
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
        {/* Bagian belakang amplop */}
        <div className="absolute inset-0 bg-pink-200 rounded-b-lg shadow-lg"></div>

        {/* Tutup amplop */}
        <div
          className={`absolute top-0 left-0 w-full h-1/2 bg-pink-300 transform origin-top transition-transform duration-1000 ease-in-out ${
            isOpen ? "rotate-x-180" : ""
          }`}
          style={{
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
          }}
        ></div>

        {/* Isi amplop (konten muncul setelah terbuka) */}
        <div
          className={`absolute inset-0 flex flex-col justify-center items-center transition-all duration-700 ${
            showContent
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-75 translate-y-10"
          }`}
        >
          <img
            src="/surprise.png"
            alt="Sayang.."
            className="mx-auto drop-shadow-md mb-4"
            style={{ maxWidth: "180px" }}
          />

          <p className="text-pink-600 text-lg font-medium mb-4">
            Aku sayang kamu heheheh 🎉
          </p>

          <button
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition transform hover:scale-105"
            onClick={onNext}
          >
            next 💌
          </button>
        </div>
      </div>

      {/* Tombol buka amplop */}
      {!isOpen && (
        <button
          className="absolute bottom-12 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-md transition transform hover:scale-105"
          onClick={() => setIsOpen(true)}
        >
          Open Envelope 💖
        </button>
      )}
    </div>
  );
}
