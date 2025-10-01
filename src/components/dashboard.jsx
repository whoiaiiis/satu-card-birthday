import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div id="dashboard" className="page">
      <h2 style={{ textAlign: "center" }}>💕 Dashboard Cinta Kita 💕</h2>
      <div className="container">
        {/* Kenangan Foto */}
        <div className="folder" onClick={() => navigate("/kenangan")}>
          <img src="https://cdn-icons-png.flaticon.com/512/337/337946.png" alt="Foto" />
          <p>Foto</p>
        </div>

        {/* Games */}
        <div className="folder" onClick={() => navigate("/games")}>
          <img src="https://cdn-icons-png.flaticon.com/512/716/716784.png" alt="Games" />
          <p>Games</p>
        </div>

        {/* Playlist */}
        <div className="folder" onClick={() => navigate("/playlist")}>
          <img src="https://cdn-icons-png.flaticon.com/512/727/727245.png" alt="Playlist" />
          <p>Playlist</p>
        </div>

        {/* About */}
        <div className="folder" onClick={() => navigate("/about")}>
          <img src="https://cdn-icons-png.flaticon.com/512/1179/1179069.png" alt="About" />
          <p>About</p>
        </div>
      </div>
    </div>
  );
}
