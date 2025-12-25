import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

export default function About() {
  const navigate = useNavigate();
  const [displayedText, setDisplayedText] = useState("");

  const message = `Happy Birthday, my favorite person!
Selamat ulang tahun yaa sayang
Thank you for being such an amazing part of my life.
Kamu bukan cuma pacar, but also my best friend, my home, and my safe place
Semoga di umur yang baru ini,
all your dreams come true,
semua capekmu terbayar,
dan semua hal baik selalu datang ke kamu
No matter what happens,
aku harap kita bisa keep growing together,
and laughing together,
Once again, happy birthday, my love.
I’m so grateful to have you, today and always`;
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
    }, 35);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fbcfe8, #ddd6fe)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        fontFamily: "Poppins, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={120}
        gravity={0.06}
        colors={["#f472b6", "#a78bfa", "#fbcfe8"]}
      />

      {/* CARD ROBLOX */}
      <div
        style={{
          background: "#fde7f3",
          border: "4px solid black",
          borderRadius: 20,
          padding: 24,
          width: 420,
          maxWidth: "100%",
          boxShadow: "8px 8px 0px black",
          textAlign: "center",
          zIndex: 10,
        }}
      >
        {/* BUTTON BACK ROBLOX */}
        <button
          onClick={() => navigate("/dashboard")}
          style={{
            padding: "10px 18px",
            marginBottom: 16,
            background: "#a78bfa",
            color: "white",
            fontWeight: "900",
            borderRadius: 12,
            border: "4px solid black",
            boxShadow: "4px 4px 0px black",
            cursor: "pointer",
            transition: "0.2s",
          }}
          onMouseDown={(e) => (e.target.style.transform = "translate(2px,2px)")}
          onMouseUp={(e) => (e.target.style.transform = "translate(0,0)")}
        >
          BACK
        </button>


        <h2
          style={{
            fontSize: 24,
            fontWeight: 900,
            color: "#7c3aed",
            marginBottom: 12,
          }}
        >
          I WISH I WISH
        </h2>

        {/* CARD TEKS ROBLOX */}
        <div
          style={{
            background: "#fff",
            padding: 18,
            borderRadius: 16,
            border: "4px solid black",
            boxShadow: "6px 6px 0px black",
            textAlign: "left",
            lineHeight: 1.6,
            whiteSpace: "pre-wrap",
            fontSize: 14,
            minHeight: 140,
          }}
        >
          {displayedText}
        </div>
      </div>
    </div>
  );
}
