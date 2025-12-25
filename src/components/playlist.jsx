import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import lagu1 from "../assets/audio/lagu1.mp3";
import lagu2 from "../assets/audio/lagu2.mp3";
import lagu3 from "../assets/audio/lagu3.mp3";
import lagu4 from "../assets/audio/lagu4.mp3";


export default function Playlist() {
  const navigate = useNavigate();
  const [song, setSong] = useState(null);
  const [progress, setProgress] = useState(0); // progress bar %
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const timerRef = useRef(null);

  const songs = {
    song1: { 
     title: "Rahasia Hati",
artist: "NIDJI",
message: "Andai matamu melihat aku, mungkin kau tahu rahasiaku 💕",
lyrics: "Andai matamu melihat aku, terungkap semua isi hatiku…",
src: lagu2,
    preview: 20,
    },
    song2: { 
    title: "Just The Way You Are",
artist: "Bruno Mars",
message: "Kamu indah apa adanya, tanpa perlu berubah sedikit pun",
lyrics: `When I see your face
There's not a thing that I would change
'Cause you're amazing
Just the way you are`,
src: lagu1,
    preview: 20,
    },
 song3: { 
  title: "Teruntuk Mia", 
  artist: "Nuh", 
  message: "Sederhana tapi berarti, tentang dua orang yang memilih berjalan bareng 🤍",
  lyrics: `Berdua menunggu di sini
Berharap hujan tak berhenti
Dengan dirimu, ku di sini
Sederhana, tapi berarti

Di antara senyumanmu dan hujan
Aku tak tahu mana yang lebih indah`,
  src: lagu3,
  preview: 20,
},
   song4: { 
  title: "Who Knows", 
  artist: "Daniel Caesar", 
  message: "Tentang cinta yang tenang, ragu tapi tulus—kalau bukan kamu, siapa lagi? 💜",
  lyrics: `Who knows how long I've loved you
You know I love you still
Will I wait a lonely lifetime
If you want me to, I will`,
  src: lagu4,
  preview: 20,
},
  };

  // Audio playback & progress
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (song) {
      setProgress(0);
      const src = songs[song].src || "";
      const preview = songs[song].preview || 30; // seconds
      audio.src = src;
      audio.load();
      audio.play()
        .then(() => {
          setIsPlaying(true);
          if (timerRef.current) clearTimeout(timerRef.current);
          timerRef.current = setTimeout(() => {
            audio.pause();
            setIsPlaying(false);
          }, preview * 1000);
        })
        .catch(() => setIsPlaying(false));
    } else {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
      setProgress(0);
    }

    const onTime = () => {
      if (audio.duration) setProgress((audio.currentTime / audio.duration) * 100);
    };
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnded);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
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
            <NeoButton onClick={() => {
              const keys = Object.keys(songs);
              const idx = keys.indexOf(song);
              if (idx > 0) setSong(keys[idx - 1]);
            }}>⏮</NeoButton>
            <NeoButton big onClick={() => {
              const audio = audioRef.current;
              if (!audio) return;
              if (isPlaying) { audio.pause(); setIsPlaying(false); }
              else { audio.play().then(() => setIsPlaying(true)).catch(() => {}); }
            }}>{isPlaying ? '⏸' : '⏯'}</NeoButton>
            <NeoButton onClick={() => {
              const keys = Object.keys(songs);
              const idx = keys.indexOf(song);
              if (idx < keys.length - 1) setSong(keys[idx + 1]);
            }}>⏭</NeoButton>
          </div>

          {/* hidden audio element */}
          <audio ref={audioRef} />

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
      <button onClick={() => navigate("/dashboard")} style={styles.navBtn}>Back</button>
      <h2 style={styles.header}>GABISA ngomong panjang, TAPI lagu lagu ini aja yg ngasitau</h2>

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
    background: "linear-gradient(135deg,#fbcfe8,#e9d5ff)",
    padding: "25px",
    fontFamily: "'Press Start 2P', Poppins, sans-serif",
  },

  navBtn: {
    padding: "12px 22px",
    borderRadius: "10px",
    background: "#f9a8d4",
    color: "#7e22ce",
    fontWeight: "bold",
    border: "4px solid #c084fc",
    cursor: "pointer",
    boxShadow: "4px 4px 0 #a855f7",
    marginBottom: "20px",
  },

  header: {
    marginBottom: "25px",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#a855f7",
    textAlign: "center",
    textShadow: "2px 2px 0 #fbcfe8",
  },

  songList: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "16px",
  },

  songCard: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "16px",
    borderRadius: "14px",
    background: "#fdf2f8",
    border: "4px solid #e9d5ff",
    boxShadow: "5px 5px 0 #d8b4fe",
    cursor: "pointer",
  },

  songCover: {
    width: "55px",
    height: "55px",
    borderRadius: "10px",
    background: "linear-gradient(135deg,#fbcfe8,#e9d5ff)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    border: "3px solid #c084fc",
    color: "#a855f7",
  },

  playerCard: {
    background: "#fdf2f8",
    borderRadius: "18px",
    padding: "25px",
    width: "360px",
    margin: "auto",
    textAlign: "center",
    border: "5px solid #e9d5ff",
    boxShadow: "8px 8px 0 #d8b4fe",
  },

  backBtn: {
    background: "#f9a8d4",
    border: "4px solid #c084fc",
    borderRadius: "10px",
    fontSize: "14px",
    cursor: "pointer",
    color: "#7e22ce",
    padding: "6px 14px",
    marginBottom: "15px",
    boxShadow: "3px 3px 0 #a855f7",
  },

  cover: {
    width: "150px",
    height: "150px",
    borderRadius: "18px",
    margin: "0 auto 20px",
    background: "linear-gradient(135deg,#fbcfe8,#e9d5ff)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "48px",
    color: "#a855f7",
    border: "5px solid #c084fc",
  },

  title: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#a855f7",
    margin: "10px 0",
  },

  artist: {
    fontSize: "12px",
    color: "#ec4899",
    marginBottom: "8px",
  },

  message: {
    fontSize: "11px",
    color: "#9333ea",
    marginBottom: "15px",
  },

  progressBar: {
    height: "14px",
    width: "100%",
    borderRadius: "6px",
    background: "#fce7f3",
    marginBottom: "20px",
    border: "3px solid #e9d5ff",
  },

  progressFill: {
    height: "100%",
    background: "linear-gradient(90deg,#f9a8d4,#c084fc)",
    transition: "width 1s linear",
  },

  lyricsBox: {
    marginTop: "20px",
    padding: "14px",
    borderRadius: "12px",
    background: "#fdf2f8",
    border: "4px solid #fbcfe8",
    textAlign: "left",
  },

  lyrics: {
    fontSize: "11px",
    color: "#7e22ce",
    margin: 0,
    lineHeight: "1.6em",
    whiteSpace: "pre-wrap",
    maxHeight: "120px",
    overflowY: "auto",
  },
};



// 🎵 Tombol Neumorphism
function NeoButton({ children, big, onClick }) {
  const size = big ? "70px" : "60px";
  return (
    <button
      onClick={onClick}
      style={{
        width: size,
        height: size,
        borderRadius: "14px",
        border: "4px solid #c084fc",
        background: "#fbcfe8",
        fontSize: "22px",
        cursor: "pointer",
        boxShadow: "4px 4px 0 #a855f7",
        color: "#7e22ce",
      }}
    >
      {children}
    </button>
  );
}
