import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Playlist() {
  const navigate = useNavigate();
  const [song, setSong] = useState(null);

  const songs = {
    song1: { title: "Perfect - Ed Sheeran", message: "Kamu itu perfect versi aku 💕" },
    song2: { title: "All of Me - John Legend", message: "Aku cinta semua tentang kamu ❤️" },
    song3: { title: "Thinking Out Loud - Ed Sheeran", message: "Ngebayangin kita tua bareng 😘" },
    song4: { title: "A Thousand Years - Christina Perri", message: "Aku cinta kamu selamanya 💖" },
  };

  if (song) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <button
          onClick={() => setSong(null)}
          style={{
            padding: "8px 14px",
            marginBottom: "20px",
            border: "none",
            borderRadius: "6px",
            background: "#ff4d6d",
            color: "white",
            cursor: "pointer",
          }}
        >
          ⬅️ Balik
        </button>
        <h3>{songs[song].title}</h3>
        <p style={{ marginTop: "10px", fontSize: "18px" }}>{songs[song].message}</p>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <button
        onClick={() => navigate("/dashboard")}
        style={{
          padding: "8px 14px",
          marginBottom: "20px",
          border: "none",
          borderRadius: "6px",
          background: "#ff4d6d",
          color: "white",
          cursor: "pointer",
        }}
      >
        ⬅️ Kembali
      </button>
      <h2 style={{ marginBottom: "20px" }}>🎶 Playlist Cinta Kita</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
          gap: "12px",
        }}
      >
        <div
          style={{
            padding: "16px",
            borderRadius: "8px",
            background: "#ffe6f0",
            cursor: "pointer",
            transition: "transform 0.2s ease-in-out",
          }}
          onClick={() => setSong("song1")}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          🎵 Perfect
        </div>

        <div
          style={{
            padding: "16px",
            borderRadius: "8px",
            background: "#ffe6f0",
            cursor: "pointer",
            transition: "transform 0.2s ease-in-out",
          }}
          onClick={() => setSong("song2")}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          💕 All of Me
        </div>

        <div
          style={{
            padding: "16px",
            borderRadius: "8px",
            background: "#ffe6f0",
            cursor: "pointer",
            transition: "transform 0.2s ease-in-out",
          }}
          onClick={() => setSong("song3")}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          🌟 Thinking Out Loud
        </div>

        <div
          style={{
            padding: "16px",
            borderRadius: "8px",
            background: "#ffe6f0",
            cursor: "pointer",
            transition: "transform 0.2s ease-in-out",
          }}
          onClick={() => setSong("song4")}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          ❤️ A Thousand Years
        </div>
      </div>
    </div>
  );
}
