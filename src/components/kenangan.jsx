import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Kenangan() {
  const navigate = useNavigate();
  const [selectedImg, setSelectedImg] = useState(null);

  const photos = [
    "foto1.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg",
    "foto5.jpg",
  ];

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

      <h2 style={{ marginBottom: "20px" }}>📸 Kenangan Foto Kita</h2>

      {/* Grid Foto */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
          gap: "12px",
        }}
      >
        {photos.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Kenangan ${i + 1}`}
            onClick={() => setSelectedImg(src)}
            style={{
              width: "100%",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "transform 0.2s ease-in-out",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        ))}
      </div>

      {/* Modal Foto */}
      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div style={{ position: "relative", maxWidth: "80%", maxHeight: "80%" }}>
            <span
              onClick={() => setSelectedImg(null)}
              style={{
                position: "absolute",
                top: "-40px",
                right: 0,
                fontSize: "28px",
                color: "white",
                cursor: "pointer",
              }}
            >
              ❌
            </span>
            <img
              src={selectedImg}
              alt="Preview"
              style={{ width: "100%", height: "auto", borderRadius: "12px" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
