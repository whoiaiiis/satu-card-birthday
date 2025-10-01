import { Routes, Route, useNavigate } from "react-router-dom";
import PasswordPage from "./components/PasswordPage";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Dashboard from "./components/Dashboard";
import Games from "./components/Games";
import Playlist from "./components/Playlist";
import About from "./components/About";
import Kenangan from "./components/Kenangan"; // ✨ halaman foto

export default function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<PasswordPage onNext={() => navigate("/page1")} />} />
      <Route path="/page1" element={<Page1 onNext={() => navigate("/page2")} />} />
      <Route path="/page2" element={<Page2 onNext={() => navigate("/page3")} />} />
      <Route path="/page3" element={<Page3 onNext={() => navigate("/intro")} />} />
      <Route path="/intro" element={<Page4 goDashboard={() => navigate("/dashboard")} />} />
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Menu dari Dashboard */}
      <Route path="/games" element={<Games />} />
      <Route path="/playlist" element={<Playlist />} />
      <Route path="/about" element={<About />} />
      <Route path="/kenangan" element={<Kenangan />} />
    </Routes>
  );
}
