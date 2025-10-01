import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const btnStyle = {
    padding: "10px 16px",
    margin: "6px",
    border: "none",
    borderRadius: "8px",
    background: "#ff4d6d",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <button style={btnStyle} onClick={() => navigate("/dashboard")}>
        ⬅️ Kembali
      </button>

      <h2 style={{ margin: "20px 0" }}>💌 About Us</h2>

      <div
        style={{
          background: "#ffe6f0",
          padding: "20px",
          borderRadius: "12px",
          maxWidth: "400px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <p style={{ fontSize: "18px", lineHeight: "1.5", color: "#333" }}>
          Sayang, makasih sudah selalu ada.  
          Kamu adalah hadiah terindah buatku 💖
        </p>
      </div>
    </div>
  );
}
