import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Playlist() {
  const navigate = useNavigate();
  const [song, setSong] = useState(null);
  const [progress, setProgress] = useState(0); // progress bar %

  const songs = {
    song1: { 
      title: "Perfect", 
      artist: "Ed Sheeran", 
      message: "Kamu itu perfect versi aku 💕",
      lyrics: `I found a love for me
Darling, just dive right in
And follow my lead...`
    },
    song2: { 
      title: "All of Me", 
      artist: "John Legend", 
      message: "Aku cinta semua tentang kamu ❤️",
      lyrics: `Cause all of me
Loves all of you
Love your curves and all your edges...`
    },
    song3: { 
      title: "Thinking Out Loud", 
      artist: "Ed Sheeran", 
      message: "Ngebayangin kita tua bareng 😘",
      lyrics: `When your legs don't work like they used to before
And I can't sweep you off of your feet...`
    },
    song4: { 
      title: "A Thousand Years", 
      artist: "Christina Perri", 
      message: "Aku cinta kamu selamanya 💖",
      lyrics: `I have died every day waiting for you
Darling, don't be afraid
I have loved you...`
    },
  };

  // Progress simulasi
  useEffect(() => {
    if (song) {
      setProgress(0);
      const duration = 30;
      const interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 100 : prev + 100 / duration));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [song]);

  // Halaman detail lagu
  if (song) {
    const current = songs[song];
    return (
      <div style={styles.page}>
        <div style={styles.playerCard}>
          <button onClick={() => setSong(null)} style={styles.backBtn}>⬅</button>

          {/* Cover */}
          <div style={styles.cover}>🎵</div>

          <h2 style={styles.title}>{current.title}</h2>
          <p style={styles.artist}>{current.artist}</p>
          <p style={styles.message}>{current.message}</p>

          {/* Progress */}
          <div style={styles.progressBar}>
            <div style={{...styles.progressFill, width: `${progress}%`}} />
          </div>

          {/* Kontrol */}
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <NeoButton>⏮</NeoButton>
            <NeoButton big>⏯</NeoButton>
            <NeoButton>⏭</NeoButton>
          </div>

          {/* Lirik */}
          <div style={styles.lyricsBox}>
            <h3 style={{color:"#a855f7"}}>Lirik</h3>
            <pre style={styles.lyrics}>{current.lyrics}</pre>
          </div>
        </div>
      </div>
    );
  }

  // Halaman daftar playlist
  return (
    <div style={styles.page}>
      <button onClick={() => navigate("/dashboard")} style={styles.navBtn}>⬅ Kembali</button>
      <h2 style={styles.header}>🎶 Playlist Cinta Kita</h2>

      <div style={styles.songList}>
        {Object.keys(songs).map((key, i) => (
          <div key={i} style={styles.songCard} onClick={() => setSong(key)}>
            <div style={styles.songCover}>🎶</div>
            <div>
              <h4 style={{margin:"0", color:"#7e22ce"}}>{songs[key].title}</h4>
              <p style={{margin:"2px 0", fontSize:"13px", color:"#ec4899"}}>{songs[key].artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 🎨 Styles
const styles = {
  page: {
    minHeight: "100vh",
    background: "#f8e9f4",
    padding: "25px",
    fontFamily: "Poppins, sans-serif",
  },
  navBtn: {
    padding: "12px 20px",
    border: "none",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #f9a8d4, #c084fc)",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    marginBottom: "20px",
    boxShadow: "4px 4px 10px rgba(0,0,0,0.2)",
  },
  header: {
    marginBottom: "25px",
    fontSize: "26px",
    fontWeight: "bold",
    color: "#a855f7",
    textAlign: "center",
  },
  songList: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "15px",
  },
  songCard: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "15px 20px",
    borderRadius: "18px",
    background: "#f8e9f4",
    boxShadow: "6px 6px 12px #d1bcd0, -6px -6px 12px #ffffff",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  songCover: {
    width: "50px",
    height: "50px",
    borderRadius: "12px",
    background: "linear-gradient(145deg,#fbcfe8,#ddd6fe)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "22px",
    color: "#7e22ce",
    boxShadow: "inset 3px 3px 6px #cbb0d4, inset -3px -3px 6px #ffffff",
  },
  playerCard: {
    background: "#f8e9f4",
    borderRadius: "25px",
    padding: "30px",
    width: "350px",
    margin: "auto",
    textAlign: "center",
    boxShadow: "9px 9px 18px #d1bcd0, -9px -9px 18px #ffffff",
  },
  backBtn: {
    background: "none",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
    color: "#a855f7",
    marginBottom: "20px",
  },
  cover: {
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    margin: "0 auto 20px",
    background: "linear-gradient(145deg, #fbcfe8, #ddd6fe)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "40px",
    color: "#7e22ce",
    animation: "spin 10s linear infinite",
  },
  title: { fontSize: "22px", fontWeight: "600", color: "#7e22ce", margin:0 },
  artist: { fontSize: "16px", color: "#ec4899", marginBottom:"10px" },
  message: { fontSize: "14px", color: "#a855f7", marginBottom:"15px" },
  progressBar: {
    height: "12px",
    width: "100%",
    borderRadius: "8px",
    background: "#e9d5ff",
    marginBottom: "20px",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: "8px",
    background: "linear-gradient(90deg,#f9a8d4,#c084fc)",
    transition: "width 1s linear",
  },
lyricsBox: {
  marginTop: "20px",
  padding: "15px",
  borderRadius: "15px",
  background: "#fff",
  boxShadow: "inset 3px 3px 6px #d1bcd0, inset -3px -3px 6px #ffffff",
  textAlign: "left",
}
,
 lyrics: {
  fontSize: "13px",
  color: "#444",
  margin: 0,
  lineHeight: "1.4em",
  whiteSpace: "pre-wrap",   // biar tetap wrap
  wordWrap: "break-word",   // kalau ada kata super panjang
  maxHeight: "120px",       // biar gak kepanjangan keluar card
  overflowY: "auto",        // kasih scroll kalau lirik panjang
}

};

// 🎵 Tombol Neumorphism
function NeoButton({ children, big }) {
  const size = big ? "70px" : "60px";
  return (
    <button
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        border: "none",
        background: "#f8e9f4",
        boxShadow: "6px 6px 12px #d1bcd0, -6px -6px 12px #ffffff",
        fontSize: "22px",
        color: "#a855f7",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}
