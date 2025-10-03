import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Games() {
  const navigate = useNavigate();
  const [section, setSection] = useState("menu");
  const [quizResult, setQuizResult] = useState("");
  const [calcResult, setCalcResult] = useState("");
  const [yourName, setYourName] = useState("");
  const [myName, setMyName] = useState("");

  const checkQuiz = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const ans1 = form.get("q1");
    const ans2 = form.get("q2");
    const ans3 = form.get("q3");

    if (ans1 === "Ungu" && ans2 === "Sushi" && ans3 === "14 Februari") {
      setQuizResult("🎉 YESS! Semua jawaban benar, kamu Roblox Master ❤️");
    } else {
      setQuizResult("😜 Salah blok nih! Coba lagi yaa~");
    }
  };

  const calcLove = () => {
    if (yourName && myName) {
      setCalcResult(`💖 ${yourName} + ${myName} = 100% Power Couple di Roblox! 🎮`);
    } else {
      setCalcResult("🕹️ Isi dulu namanya biar bisa mulai petualangan 💫");
    }
  };

  // Style tombol ala Roblox kawaii
  const Btn = ({ children, onClick, type = "button" }) => (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.1, x: -3, y: -3 }}
      whileTap={{ scale: 0.95 }}
      style={{
        padding: "12px 18px",
        margin: "6px",
        border: "3px solid black",
        borderRadius: "12px",
        background: "linear-gradient(135deg,#ff66b3,#cc66ff)",
        color: "white",
        fontWeight: "800",
        cursor: "pointer",
        fontSize: "16px",
        boxShadow: "4px 4px 0px #000",
      }}
    >
      {children}
    </motion.button>
  );

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        minHeight: "100vh",
        background: "linear-gradient(135deg,#ffe6f0,#f5ccff)",
        fontFamily: "'Comic Neue', cursive",
      }}
    >
      {/* Tombol kembali */}
      <Btn onClick={() => navigate("/dashboard")}>⬅️ Kembali</Btn>

      <h2
        style={{
          margin: "20px 0",
          fontSize: "34px",
          fontWeight: "900",
          color: "#d63384",
          textShadow: "2px 2px 0px white, 4px 4px 0px #000",
        }}
      >
        🎮 Games Roblox Lucu Buat Kita
      </h2>

      <AnimatePresence mode="wait">
        {section === "menu" && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "18px",
              marginTop: "30px",
            }}
          >
            {[
              { title: "💝 Love Quiz", key: "quiz", color: "#ffb3c6" },
              { title: "💕 Love Calculator", key: "calc", color: "#dab6fc" },
              { title: "🧩 Teka-teki Cinta", key: "riddle", color: "#ffd6a5" },
            ].map((item) => (
              <motion.div
                key={item.key}
                whileHover={{ scale: 1.15, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSection(item.key)}
                style={{
                  padding: "25px",
                  borderRadius: "15px",
                  background: item.color,
                  cursor: "pointer",
                  fontSize: "18px",
                  fontWeight: "800",
                  border: "3px solid black",
                  boxShadow: "5px 5px 0px #000",
                }}
              >
                {item.title}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* QUIZ */}
{section === "quiz" && (
  <motion.form
    key="quiz"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0 }}
    onSubmit={checkQuiz}
    style={{
      background: "#ffe0f7",
      border: "2px solid #ff99cc",
      borderRadius: "12px",
      padding: "25px",
      boxShadow: "4px 4px 0px rgba(0,0,0,0.2)",
      display: "inline-block",
      textAlign: "left",
      position: "relative",
      minWidth: "300px",
    }}
  >
    {/* Tab folder */}
    <div style={{
      width: "70px",
      height: "22px",
      background: "#ff66cc",
      borderTopLeftRadius: "8px",
      borderTopRightRadius: "8px",
      position: "absolute",
      top: "-22px",
      left: "15px",
      border: "2px solid #ff99cc"
    }}/>

    <h3 style={{ textAlign: "center", color: "#cc33ff" }}>💝 Love Quiz</h3>
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

    <div style={{ textAlign: "center", marginTop: "12px" }}>
      <Btn type="submit">✔️ Cek Jawaban</Btn>
      <p>{quizResult}</p>
      <Btn onClick={() => setSection("menu")}>⬅️ Balik</Btn>
    </div>
  </motion.form>
)}

     {/* LOVE CALCULATOR */}
{section === "calc" && (
  <motion.div
    key="calc"
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -60 }}
    style={{
      background: "#f3d1ff",
      border: "2px solid #cc99ff",
      borderRadius: "12px",
      padding: "25px",
      boxShadow: "4px 4px 0px rgba(0,0,0,0.2)",
      display: "inline-block",
      textAlign: "center",
      position: "relative",
      minWidth: "300px",
    }}
  >
    <div style={{
      width: "70px",
      height: "22px",
      background: "#cc66ff",
      borderTopLeftRadius: "8px",
      borderTopRightRadius: "8px",
      position: "absolute",
      top: "-22px",
      left: "15px",
      border: "2px solid #cc99ff"
    }}/>

    <h3 style={{ color: "#9933ff" }}>💕 Love Calculator</h3>
    <input
      value={yourName}
      onChange={(e) => setYourName(e.target.value)}
      placeholder="Nama Kamu"
      style={{ margin: "6px", padding: "8px", borderRadius: "8px" }}
    />
    <span> + </span>
    <input
      value={myName}
      onChange={(e) => setMyName(e.target.value)}
      placeholder="Nama Aku"
      style={{ margin: "6px", padding: "8px", borderRadius: "8px" }}
    />
    <br />
    <Btn onClick={calcLove}>Hitung</Btn>
    <p>{calcResult}</p>
    <Btn onClick={() => setSection("menu")}>⬅️ Balik</Btn>
  </motion.div>
)}


        {/* RIDDLE */}
      {/* RIDDLE */}
{section === "riddle" && (
  <motion.div
    key="riddle"
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -60 }}
    style={{
      background: "#ffd6f3",
      border: "2px solid #ff99cc",
      borderRadius: "12px",
      padding: "25px",
      boxShadow: "4px 4px 0px rgba(0,0,0,0.2)",
      display: "inline-block",
      textAlign: "center",
      position: "relative",
      minWidth: "300px",
    }}
  >
    <div style={{
      width: "70px",
      height: "22px",
      background: "#ff66cc",
      borderTopLeftRadius: "8px",
      borderTopRightRadius: "8px",
      position: "absolute",
      top: "-22px",
      left: "15px",
      border: "2px solid #ff99cc"
    }}/>

    <h3 style={{ color: "#d63384" }}>🧩 Teka-teki Cinta</h3>
    <p>Aku selalu bersamamu, tak pernah jauh, walau tak terlihat. Siapakah aku?</p>
    <p style={{ fontWeight: "700", color: "#ff3399" }}>❤️ Jawabannya: Cinta kamu 😘</p>
    <Btn onClick={() => setSection("menu")}>⬅️ Balik</Btn>
  </motion.div>
)}

      </AnimatePresence>
    </div>
  );
}
