import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PasswordPage() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [showCard, setShowCard] = useState(false); // animasi card
  const navigate = useNavigate();

  const correctPin = "1627";

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
        className={`bg-gradient-to-br from-pink-200 via-pink-100 to-pink-300 p-8 rounded-2xl w-80 text-center z-10 transform transition-all duration-700 border-4 border-black shadow-[6px_6px_0px_black] ${
          showCard ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <h2 className="text-black text-2xl font-extrabold mb-4 border-2 border-black bg-white p-3 rounded-xl shadow-[3px_3px_0px_black]">
  HARUS TAU PIN NYA 😡
</h2>

        <input
          type="password"
          value={pin}
          placeholder="••••••"
          readOnly
          className="text-center text-2xl border-3 border-black rounded-lg p-2 w-3/4 mb-4 bg-white outline-none font-bold shadow-[3px_3px_0px_black]"
        />

        <div className="grid grid-cols-3 gap-3 justify-center mb-4">
          {[..."123456789"].map((num) => (
            <button
              key={num}
              onClick={() => addNum(num)}
              className="bg-gradient-to-br from-pink-300 to-pink-200 hover:from-pink-200 hover:to-pink-100 text-black font-extrabold py-3 rounded-xl transition transform hover:translate-y-[-3px] border-3 border-black shadow-[4px_4px_0px_black] hover:shadow-[6px_6px_0px_black]"
            >
              {num}
            </button>
          ))}
          <button
            onClick={delNum}
            className="bg-gradient-to-br from-pink-300 to-pink-200 hover:from-pink-200 hover:to-pink-100 text-black font-extrabold py-3 rounded-xl transition transform hover:translate-y-[-3px] border-3 border-black shadow-[4px_4px_0px_black] hover:shadow-[6px_6px_0px_black]"
          >
            ⌫
          </button>
          <button
            onClick={() => addNum("0")}
            className="bg-gradient-to-br from-pink-300 to-pink-200 hover:from-pink-200 hover:to-pink-100 text-black font-extrabold py-3 rounded-xl transition transform hover:translate-y-[-3px] border-3 border-black shadow-[4px_4px_0px_black] hover:shadow-[6px_6px_0px_black]"
          >
            0
          </button>
          <button
            onClick={clearNum}
            className="bg-gradient-to-br from-pink-300 to-pink-200 hover:from-pink-200 hover:to-pink-100 text-black font-extrabold py-3 rounded-xl transition transform hover:translate-y-[-3px] border-3 border-black shadow-[4px_4px_0px_black] hover:shadow-[6px_6px_0px_black]"
          >
            ✖
          </button>
        </div>

        <button
          onClick={checkPassword}
          className="bg-gradient-to-br from-pink-500 to-pink-400 hover:from-pink-400 hover:to-pink-300 text-white px-6 py-3 rounded-full font-extrabold transition transform hover:translate-y-[-3px] border-3 border-black shadow-[5px_5px_0px_black] hover:shadow-[7px_7px_0px_black]"
        >
          Silahkan Masuk Massss 🤭
        </button>

        {error && (
          <p className="text-red-500 mt-3 text-sm font-medium">{error}</p>
        )}
      </div>
    </div>
  );
}
