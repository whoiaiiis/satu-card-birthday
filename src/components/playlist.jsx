import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import lagu1 from "../assets/audio/lagu1.mp3";
import lagu2 from "../assets/audio/lagu2.mp3";
import lagu3 from "../assets/audio/lagu3.mp3";
import lagu4 from "../assets/audio/lagu4.mp3";

export default function Playlist() {
  const navigate = useNavigate();
  const [song, setSong] = useState(null);
  const [progress, setProgress] = useState(0);
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
Sederhana, tapi berarti`,
      src: lagu3,
      preview: 20,
    },
    song4: {
      title: "Who Knows",
      artist: "Daniel Caesar",
      message: "Tentang cinta yang tenang, ragu tapi tulus—kalau bukan kamu, siapa lagi? 💜",
      lyrics: `Who knows how long I've loved you
You know I love you still`,
      src: lagu4,
      preview: 20,
    },
  };

  /* ================= AUDIO ================= */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (song) {
      setProgress(0);
      audio.src = songs[song].src;
      audio.load();
      audio.play().then(() => setIsPlaying(true));

      timerRef.current = setTimeout(() => {
        audio.pause();
        setIsPlaying(false);
      }, songs[song].preview * 1000);
    }

    const onTime = () => {
      if (audio.duration)
        setProgress((audio.currentTime / audio.duration) * 100);
    };

    audio.addEventListener("timeupdate", onTime);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      clearTimeout(timerRef.current);
    };
  }, [song]);

  /* ================= PLAYER ================= */
  if (song) {
    const current = songs[song];
    return (
      <div style={styles.pageCenter}>
        <div style={styles.playerCard}>
          <button onClick={() => setSong(null)} style={styles.backBtn}>⬅</button>

          <div style={styles.cover}>🎵</div>
          <h2 style={styles.title}>{current.title}</h2>
          <p style={styles.artist}>{current.artist}</p>
          <p style={styles.message}>{current.message}</p>

          <div style={styles.progressBar}>
            <div style={{ ...styles.progressFill, width: `${progress}%` }} />
          </div>

          <div style={styles.controls}>
            <NeoButton onClick={() => setSong(prevSong(song, songs))}>⏮</NeoButton>
            <NeoButton big onClick={() => togglePlay(audioRef, isPlaying, setIsPlaying)}>
              {isPlaying ? "⏸" : "▶️"}
            </NeoButton>
            <NeoButton onClick={() => setSong(nextSong(song, songs))}>⏭</NeoButton>
          </div>

          <audio ref={audioRef} />

          <div style={styles.lyricsBox}>
            <pre style={styles.lyrics}>{current.lyrics}</pre>
          </div>
        </div>
      </div>
    );
  }

  /* ================= LIST ================= */
  return (
    <div style={styles.page}>
      <div style={styles.listContainer}>
        <button onClick={() => navigate("/dashboard")} style={styles.navBtn}>
          Back
        </button>

        <h2 style={styles.header}>
          GABISA ngomong panjang, TAPI lagu lagu ini aja yg ngasitau
        </h2>

        {Object.keys(songs).map((key) => (
          <div key={key} style={styles.songCard} onClick={() => setSong(key)}>
            <div style={styles.songCover}>🎶</div>
            <div>
              <h4 style={styles.songTitle}>{songs[key].title}</h4>
              <p style={styles.songArtist}>{songs[key].artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= STYLES ================= */
const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#fbcfe8,#e9d5ff)",
    padding: "12px",
  },

  pageCenter: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg,#fbcfe8,#e9d5ff)",
    padding: "12px",
  },

  listContainer: {
    maxWidth: "360px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },

  navBtn: {
    padding: "10px",
    borderRadius: "10px",
    background: "#f9a8d4",
    border: "3px solid #c084fc",
    fontWeight: "bold",
  },

  header: {
    fontSize: "14px",
    textAlign: "center",
    color: "#7e22ce",
  },

  songCard: {
    display: "flex",
    gap: "12px",
    padding: "14px",
    borderRadius: "14px",
    background: "#fdf2f8",
    border: "3px solid #e9d5ff",
    boxShadow: "4px 4px 0 #d8b4fe",
    cursor: "pointer",
  },

  songCover: {
    width: "48px",
    height: "48px",
    borderRadius: "10px",
    background: "#fbcfe8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  songTitle: { margin: 0, color: "#7e22ce" },
  songArtist: { margin: 0, fontSize: "12px", color: "#ec4899" },

  playerCard: {
    width: "92%",
    maxWidth: "320px",
    padding: "14px",
    background: "#fdf2f8",
    borderRadius: "18px",
    border: "4px solid #e9d5ff",
    boxShadow: "8px 8px 0 #d8b4fe",
    textAlign: "center",
  },

  backBtn: {
    marginBottom: "10px",
  },

  cover: {
    width: "120px",
    height: "120px",
    margin: "0 auto 14px",
    borderRadius: "16px",
    background: "#fbcfe8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  title: { fontSize: "15px", color: "#7e22ce" },
  artist: { fontSize: "12px", color: "#ec4899" },
  message: { fontSize: "11px", marginBottom: "10px" },

  progressBar: {
    height: "10px",
    background: "#fce7f3",
    borderRadius: "6px",
    overflow: "hidden",
    marginBottom: "12px",
  },

  progressFill: {
    height: "100%",
    background: "linear-gradient(90deg,#f9a8d4,#c084fc)",
  },

  controls: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "12px",
  },

  lyricsBox: {
    maxHeight: "120px",
    overflowY: "auto",
    fontSize: "11px",
  },

  lyrics: {
    whiteSpace: "pre-wrap",
  },
};

/* ================= HELPERS ================= */
function nextSong(current, songs) {
  const keys = Object.keys(songs);
  return keys[(keys.indexOf(current) + 1) % keys.length];
}

function prevSong(current, songs) {
  const keys = Object.keys(songs);
  return keys[(keys.indexOf(current) - 1 + keys.length) % keys.length];
}

function togglePlay(audioRef, isPlaying, setIsPlaying) {
  const audio = audioRef.current;
  if (!audio) return;
  if (isPlaying) audio.pause();
  else audio.play();
  setIsPlaying(!isPlaying);
}

function NeoButton({ children, big, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: big ? "52px" : "44px",
        height: big ? "52px" : "44px",
        borderRadius: "12px",
        border: "3px solid #c084fc",
        background: "#fbcfe8",
        fontSize: "18px",
      }}
    >
      {children}
    </button>
  );
}
