import { Routes, Route, useNavigate } from "react-router-dom";
import PasswordPage from "./components/PasswordPage";
import Page1 from "./components/page1";

import Page3 from "./components/Page3";
import Page4 from "./components/page4";
import Page5Flower from "./components/page5flower";
import Dashboard from "./components/dashboard";
import Games from "./components/games";
import Playlist from "./components/playlist";
import About from "./components/about";
import Kenangan from "./components/Kenangan";
import { useRef, useEffect } from "react";
import Page2 from "./components/page2";

export default function App() {
  const navigate = useNavigate();
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // 🔊 volume lebih halus
    }
  }, []);

  return (
    <>
      {/* 🎵 Musik global, tetap jalan meski pindah halaman */}
      <audio ref={audioRef} autoPlay loop>
        <source src="/musik.mp3" type="audio/mpeg" />
        Browser kamu tidak mendukung audio.
      </audio>

      <Routes>
        <Route path="/" element={<PasswordPage />} />
        <Route
          path="/page1"
          element={<Page1 onNext={() => navigate("/page2")} />}
        />
        <Route
          path="/page2"
          element={<Page2 onNext={() => navigate("/page3")} />}
        />
        <Route
          path="/page3"
          element={<Page3 onNext={() => navigate("/page4")} />}
        />
        <Route
          path="/page4"
          element={<Page4 onNext={() => navigate("/page5flower")} />}
        />
        <Route 
          path="/page5flower" 
          element={<Page5Flower onNext={() => navigate("/dashboard")} />} 
        />

        <Route path="/dashboard" element={<Dashboard />} />

        {/* Menu dari Dashboard */}
        <Route path="/games" element={<Games />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/kenangan" element={<Kenangan />} />
      </Routes>
    </>
  );
}
