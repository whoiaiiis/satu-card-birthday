import React from "react";

export default function Page2({ onNext }) {
  return (
    <div id="page2" className="page center">
      <img 
        src="surprise.png" 
        alt="Surprise" 
        className="img-medium" 
        style={{ maxWidth: "280px" }} 
      />
      
      <p className="page-text">
        Yay, kamu berhasil buka amplopnya! 🎉
      </p>
      
      <button 
        className="btn-main" 
        onClick={onNext} // ✅ langsung onNext
      >
        next 💌
      </button>
    </div>
  );
}
