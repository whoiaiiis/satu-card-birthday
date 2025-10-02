import React, { useState, useEffect } from "react";

export default function Page1({ onNext }) {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowCard(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex justify-center items-center h-screen overflow-hidden bg-gradient-to-b from-pink-50 to-white">
      {/* Background hearts */}
      {Array.from({ length: 20 }).map((_, i) => (
        <span
          key={i}
          className="absolute text-pink-400 select-none animate-pulseHeart"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 14}px`,
            animationDuration: `${1 + Math.random() * 2}s`,
            animationDelay: `${Math.random() * 2}s`,
            opacity: 0.7,
          }}
        >
          ❤️
        </span>
      ))}

      {/* Card amplop */}
      <div
        className={`bg-white p-8 rounded-2xl shadow-xl w-80 text-center z-10 transform transition-all duration-700 ${
          showCard ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <img
          src="envelope.png"
          alt="Hii sayang"
          className="mx-auto mb-6 drop-shadow-md"
          style={{ maxWidth: "200px" }}
        />

        <p className="text-pink-600 text-lg font-medium mb-6">
          yeayy Berhasil!! (∩˃o˂∩)♡
        </p>

        <button
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition transform hover:scale-105"
          onClick={onNext}
        >
          klik ini &lt;3
        </button>
      </div>
    </div>
  );
}
