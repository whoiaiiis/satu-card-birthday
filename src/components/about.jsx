import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

export default function About() {
  const navigate = useNavigate();
  const [displayedText, setDisplayedText] = useState("");

  const message = `Sayang, makasih sudah selalu ada. Kamu adalah hadiah terindah dalam hidupku 💖 
Bersamamu, setiap hari terasa indah seperti cerita yang nggak ada habisnya. 
Aku bersyukur bisa punya kamu, dan aku ingin kita terus menulis kisah ini bareng-bareng selamanya. 💕`;

  // Typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < message.length) {
        setDisplayedText((prev) => prev + message[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fbcfe8, #e9d5ff)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
        fontFamily: "Poppins, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Confetti bunga */}
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={true}
        numberOfPieces={120}
        gravity={0.05}
        colors={["#f9a8d4", "#c084fc", "#fbcfe8", "#e9d5ff"]}
        drawShape={(ctx) => {
          const petals = 5;
          const radius = 6;
          ctx.beginPath();
          for (let i = 0; i < petals; i++) {
            const angle = (i * 2 * Math.PI) / petals;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            ctx.quadraticCurveTo(0, 0, x, y);
          }
          ctx.closePath();
          ctx.fill();
        }}
      />

      {/* Musik Background */}
      <audio autoPlay loop>
        <source
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          type="audio/mpeg"
        />
      </audio>

      <div
        style={{
          background: "#f8e9f4",
          borderRadius: "25px",
          padding: "30px",
          maxWidth: "420px",
          width: "100%",
          boxShadow: "9px 9px 18px #d1bcd0, -9px -9px 18px #ffffff",
          textAlign: "center",
          zIndex: 2,
          animation: "zoomIn 1s ease",
        }}
      >
        {/* Tombol kembali */}
        <button
          onClick={() => navigate("/dashboard")}
          style={{
            padding: "10px 18px",
            border: "none",
            borderRadius: "12px",
            background: "linear-gradient(135deg, #f9a8d4, #c084fc)",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            marginBottom: "20px",
            boxShadow: "4px 4px 10px rgba(0,0,0,0.2)",
            transition: "0.3s",
          }}
        >
          ⬅️ Kembali
        </button>

        {/* Foto */}
        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            margin: "0 auto 20px",
            overflow: "hidden",
            boxShadow: "0 0 20px 5px rgba(236,72,153,0.6)",
            animation: "pulseGlow 2s infinite",
          }}
        >
          <img
            src="https://via.placeholder.com/150" // ganti dengan foto kamu
            alt="Foto Kita"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <h2 style={{ color: "#a855f7", marginBottom: "15px" }}>💌 Tentang Kita</h2>

        {/* Card isi pesan */}
        <div
          style={{
            background: "#f8e9f4",
            padding: "20px",
            borderRadius: "20px",
            textAlign: "left",
            lineHeight: "1.6",
            color: "#444",
            fontSize: "15px",
            boxShadow:
              "inset 6px 6px 12px #d1bcd0, inset -6px -6px 12px #ffffff",
            whiteSpace: "pre-wrap",
            minHeight: "150px",
          }}
        >
          {displayedText}
        </div>
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes zoomIn {
            0% { transform: scale(0.5); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          @keyframes pulseGlow {
            0% { box-shadow: 0 0 20px 5px rgba(236,72,153,0.6); }
            50% { box-shadow: 0 0 35px 10px rgba(192,132,252,0.8); }
            100% { box-shadow: 0 0 20px 5px rgba(236,72,153,0.6); }
          }
        `}
      </style>
    </div>
  );
}
