import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PasswordPage() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const correctPin = "1234"; // 👉 ubah sesuai PIN yang kamu mau

  // tambah angka ke input
  const addNum = (val) => {
    if (pin.length < 6) {
      setPin(pin + val);
      setError("");
    }
  };

  // hapus satu angka
  const delNum = () => {
    setPin(pin.slice(0, -1));
  };

  // hapus semua angka
  const clearNum = () => {
    setPin("");
  };

  // cek password
  const checkPassword = () => {
    if (pin === correctPin) {
      navigate("/page1"); // 👉 kalau benar, pindah ke Page1
    } else {
      setError("PIN salah, coba lagi ya sayang 💔");
    }
  };

  return (
    <div id="passwordPage" className="page center" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2>Masukin PIN dulu ya sayang 💖</h2>
      <input 
        type="password" 
        value={pin} 
        placeholder="••••••" 
        readOnly 
        style={{ textAlign: "center", fontSize: "20px", marginBottom: "12px" }}
      />

      {/* Keypad */}
      <div
        className="keypad"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,64px)",
          gap: "8px",
          marginTop: "12px",
        }}
      >
        {[..."123456789"].map((num) => (
          <button key={num} className="num-btn" onClick={() => addNum(num)}>
            {num}
          </button>
        ))}
        <button className="num-btn" onClick={delNum}>⌫</button>
        <button className="num-btn" onClick={() => addNum("0")}>0</button>
        <button className="num-btn" onClick={clearNum}>✖</button>
      </div>

      {/* Tombol masuk */}
      <button className="btn-main" style={{ marginTop: "16px" }} onClick={checkPassword}>
        Masuk 💕
      </button>

      {error && <p id="errorMsg" style={{ color: "#d9534f", marginTop: "8px" }}>{error}</p>}
    </div>
  );
}
