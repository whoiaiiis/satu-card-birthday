import React, { useEffect, useState } from "react";

export default function TypewriterCard({ text, onFinish }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        if (onFinish) onFinish(); // callback kalau mau ada aksi setelah selesai ngetik
      }
    }, 80); // kecepatan ketik (ms per huruf)

    return () => clearInterval(interval);
  }, [text, onFinish]);

  return (
    <div className="page center" style={{ padding: "12px" }}>
      <div className="card" style={{ textAlign: "center" }}>
        <div className="border-glow"></div>
        <div className="typewriter-container">
          <span className="typewriter">{displayed}</span>
        </div>
      </div>
    </div>
  );
}
