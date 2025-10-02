import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PasswordPage() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [showCard, setShowCard] = useState(false); // animasi card
  const navigate = useNavigate();

  const correctPin = "1234";

  const addNum = (val) => {
    if (pin.length < 6) {
      setPin(pin + val);
      setError("");
    }
  };

  const delNum = () => {
    setPin(pin.slice(0, -1));
  };

  const clearNum = () => {
    setPin("");
  };

  const checkPassword = () => {
    if (pin === correctPin) {
      navigate("/page1");
    } else {
      setError("PIN salah, coba lagi ya sayang 💔");
    }
  };

  const hearts = Array.from({ length: 30 });

  useEffect(() => {
    // kasih delay biar card muncul smooth
    const timer = setTimeout(() => setShowCard(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex justify-center items-center h-screen overflow-hidden bg-gradient-to-b from-pink-50 to-white">
      {/* ❤️ Love background berdetak */}
      {hearts.map((_, i) => (
        <span
          key={i}
          className="absolute text-pink-500 select-none animate-pulseHeart"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 24 + 16}px`,
            animationDuration: `${1 + Math.random() * 2}s`,
            animationDelay: `${Math.random() * 2}s`,
            opacity: 0.8,
          }}
        >
          ❤️
        </span>
      ))}

      {/* Card PIN dengan animasi fade-in */}
      <div
        className={`bg-white p-8 rounded-2xl shadow-xl w-80 text-center z-10 transform transition-all duration-700 ${
          showCard ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <h2 className="text-pink-600 text-xl font-semibold mb-4">
          Masukin PIN dulu ya sayang 💖
        </h2>

        <input
          type="password"
          value={pin}
          placeholder="••••••"
          readOnly
          className="text-center text-2xl border-2 border-pink-400 rounded-lg p-2 w-3/4 mb-4 bg-pink-50 outline-none"
        />

        <div className="grid grid-cols-3 gap-3 justify-center mb-4">
          {[..."123456789"].map((num) => (
            <button
              key={num}
              onClick={() => addNum(num)}
              className="bg-pink-200 hover:bg-pink-400 text-pink-800 font-medium py-3 rounded-xl transition transform hover:scale-110"
            >
              {num}
            </button>
          ))}
          <button
            onClick={delNum}
            className="bg-pink-200 hover:bg-pink-400 text-pink-800 font-medium py-3 rounded-xl transition transform hover:scale-110"
          >
            ⌫
          </button>
          <button
            onClick={() => addNum("0")}
            className="bg-pink-200 hover:bg-pink-400 text-pink-800 font-medium py-3 rounded-xl transition transform hover:scale-110"
          >
            0
          </button>
          <button
            onClick={clearNum}
            className="bg-pink-200 hover:bg-pink-400 text-pink-800 font-medium py-3 rounded-xl transition transform hover:scale-110"
          >
            ✖
          </button>
        </div>

        <button
          onClick={checkPassword}
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-md transition transform hover:scale-105"
        >
          Masuk 💕
        </button>

        {error && (
          <p className="text-red-500 mt-3 text-sm font-medium">{error}</p>
        )}
      </div>
    </div>
  );
}
