import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Games() {
  const navigate = useNavigate();
  const [section, setSection] = useState("menu");
  const [quizResult, setQuizResult] = useState("");
  const [calcResult, setCalcResult] = useState("");

  // === QUIZ CHECK ===
  const checkQuiz = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const ans1 = form.get("q1");
    const ans2 = form.get("q2");
    const ans3 = form.get("q3");

    if (ans1 === "Ungu" && ans2 === "Sushi" && ans3 === "14 Februari") {
      setQuizResult("💖 Jawaban kamu semua benar! Kamu kenal aku banget 😍");
    } else {
      setQuizResult("😜 Ada yang salah tuh sayang, coba lagi~");
    }
  };

  // === LOVE CALCULATOR ===
  const calcLove = (yourName, myName) => {
    if (yourName && myName) {
      setCalcResult(`❤️ ${yourName} + ${myName} = 100% Forever Love 💕`);
    } else {
      setCalcResult("Isi dulu namanya ya sayang 😘");
    }
  };

  // === Button Style Reusable ===
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
    <div style={{ textAlign: "center", padding: "20px" }}>
      <button
        style={btnStyle}
        onClick={() => navigate("/dashboard")}
      >
        ⬅️ Kembali
      </button>
      <h2 style={{ margin: "20px 0" }}>🎮 Games Seru Buat Kita</h2>

      {/* === MENU === */}
      {section === "menu" && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
            gap: "12px",
          }}
        >
          <div
            style={{
              padding: "16px",
              borderRadius: "10px",
              background: "#ffe6f0",
              cursor: "pointer",
              fontSize: "18px",
            }}
            onClick={() => setSection("quiz")}
          >
            💝 Love Quiz
          </div>
          <div
            style={{
              padding: "16px",
              borderRadius: "10px",
              background: "#ffe6f0",
              cursor: "pointer",
              fontSize: "18px",
            }}
            onClick={() => setSection("calc")}
          >
            💕 Love Calculator
          </div>
          <div
            style={{
              padding: "16px",
              borderRadius: "10px",
              background: "#ffe6f0",
              cursor: "pointer",
              fontSize: "18px",
            }}
            onClick={() => setSection("riddle")}
          >
            🧩 Teka-teki Cinta
          </div>
        </div>
      )}

      {/* === QUIZ === */}
      {section === "quiz" && (
        <form onSubmit={checkQuiz} style={{ marginTop: "20px" }}>
          <h3>💝 Love Quiz</h3>
          <p>1. Warna favorit aku apa?</p>
          <label><input type="radio" name="q1" value="Merah" /> Merah</label><br />
          <label><input type="radio" name="q1" value="Biru" /> Biru</label><br />
          <label><input type="radio" name="q1" value="Ungu" /> Ungu</label><br />

          <p>2. Makanan kesukaan aku?</p>
          <label><input type="radio" name="q2" value="Sushi" /> Sushi</label><br />
          <label><input type="radio" name="q2" value="Bakso" /> Bakso</label><br />
          <label><input type="radio" name="q2" value="Pizza" /> Pizza</label><br />

          <p>3. Tanggal jadian kita kapan?</p>
          <label><input type="radio" name="q3" value="1 Januari" /> 1 Januari</label><br />
          <label><input type="radio" name="q3" value="14 Februari" /> 14 Februari</label><br />
          <label><input type="radio" name="q3" value="25 Desember" /> 25 Desember</label><br />

          <button type="submit" style={btnStyle}>✔️ Cek Jawaban</button>
          <p>{quizResult}</p>
          <button
            type="button"
            style={btnStyle}
            onClick={() => setSection("menu")}
          >
            ⬅️ Balik
          </button>
        </form>
      )}

      {/* === LOVE CALCULATOR === */}
      {section === "calc" && (
        <div style={{ marginTop: "20px" }}>
          <h3>💕 Love Calculator</h3>
          <input id="yourName" placeholder="Nama Kamu" style={{ margin: "6px", padding: "6px" }} />
          <span> + </span>
          <input id="myName" placeholder="Nama Aku" style={{ margin: "6px", padding: "6px" }} />
          <br />
          <button
            style={btnStyle}
            onClick={() =>
              calcLove(
                document.getElementById("yourName").value,
                document.getElementById("myName").value
              )
            }
          >
            Hitung
          </button>
          <p>{calcResult}</p>
          <button style={btnStyle} onClick={() => setSection("menu")}>⬅️ Balik</button>
        </div>
      )}

      {/* === RIDDLE === */}
      {section === "riddle" && (
        <div style={{ marginTop: "20px" }}>
          <h3>🧩 Teka-teki Cinta</h3>
          <p>Aku selalu bersamamu, tak pernah jauh, walau tak terlihat. Siapakah aku?</p>
          <p>❤️ Jawabannya: Cinta kamu 😘</p>
          <button style={btnStyle} onClick={() => setSection("menu")}>⬅️ Balik</button>
        </div>
      )}
    </div>
  );
}
