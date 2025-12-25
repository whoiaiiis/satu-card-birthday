import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PasswordPage() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [showCard, setShowCard] = useState(false);
  const navigate = useNavigate();

  const correctPin = "1627";

  const addNum = (val) => {
    if (pin.length < 6) {
      setPin(pin + val);
      setError("");
    }
  };

  const delNum = () => setPin(pin.slice(0, -1));
  const clearNum = () => setPin("");

  const checkPassword = () => {
    if (pin === correctPin) {
      navigate("/page1");
    } else {
      setError("PIN salah, coba lagi ya sayang 💔");
      setPin("");
    }
  };

  // background love (lebih ringan di mobile)
  const hearts = Array.from({ length: 20 });

  useEffect(() => {
    const timer = setTimeout(() => setShowCard(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-gradient-to-b from-pink-50 to-white">

      {/* ❤️ Love background */}
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

      {/* Card */}
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
        {/* Title */}
        <h2 className="text-lg sm:text-xl font-extrabold mb-4 bg-white border-2 border-black rounded-xl p-3 shadow-[3px_3px_0px_black]">
          HARUS TAU PIN NYA 😡
        </h2>

        {/* PIN display */}
        <input
          type="password"
          value={pin}
          placeholder="••••"
          readOnly
          className="w-3/4 mx-auto mb-4 text-xl sm:text-2xl text-center font-bold bg-white border-2 border-black rounded-lg p-2 shadow-[3px_3px_0px_black]"
        />

        {/* Keypad */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[..."123456789"].map((num) => (
            <KeyButton key={num} onClick={() => addNum(num)}>
              {num}
            </KeyButton>
          ))}
          <KeyButton onClick={delNum}>⌫</KeyButton>
          <KeyButton onClick={() => addNum("0")}>0</KeyButton>
          <KeyButton onClick={clearNum}>✖</KeyButton>
        </div>

        {/* Submit */}
        <button
          onClick={checkPassword}
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
          Silahkan Masuk Massss 🤭
        </button>

        {error && (
          <p className="text-red-500 mt-3 text-sm font-medium">{error}</p>
        )}
      </div>
    </div>
  );
}

function KeyButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        py-3
        bg-gradient-to-br from-pink-300 to-pink-200
        text-black font-extrabold
        rounded-xl
        border-2 border-black
        shadow-[4px_4px_0px_black]
        transition
        active:scale-90
      "
    >
      {children}
    </button>
  );
}
