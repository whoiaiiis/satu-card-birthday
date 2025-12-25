import React, { useState, useEffect } from "react";

export default function Page1({ onNext }) {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowCard(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex justify-center items-center h-screen overflow-hidden bg-gradient-to-br from-pink-200 via-pink-100 to-pink-300">
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
        className={`bg-gradient-to-br from-pink-200 via-pink-100 to-pink-300 p-8 rounded-2xl w-80 text-center z-10 transform transition-all duration-700 border-4 border-black shadow-[6px_6px_0px_black] hover:translate-y-[-6px] hover:shadow-[8px_8px_0px_black] ${
          showCard ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <img
          src="/satuCardPage1.png"
          alt="Hii sayang"
          className="mx-auto mb-6 drop-shadow-md"
          style={{ maxWidth: "200px" }}
        />

        <p className="text-black text-lg font-extrabold mb-6 border-2 border-black bg-white p-3 rounded-xl shadow-[3px_3px_0px_black]">
          Yeayy Berhasil!! (∩˃o˂∩)♡
        </p>

        <button
          className="bg-gradient-to-br from-pink-500 to-pink-400 hover:from-pink-400 hover:to-pink-300 text-white font-extrabold px-6 py-3 rounded-full transition transform hover:translate-y-[-3px] border-3 border-black shadow-[5px_5px_0px_black] hover:shadow-[7px_7px_0px_black]"
          onClick={onNext}
        >
          klik ini &lt;3
        </button>
      </div>
    </div>
  );
}
