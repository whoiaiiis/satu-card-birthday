import React from "react";

export default function Page4({ onNext }) {
  return (
    <div id="page4" className="page center">
      <img 
        src="gift.png" 
        alt="Gift" 
        className="img-medium" 
        style={{ maxWidth: "280px" }} 
      />
      
      <p className="page-text">
        Dan ada hadiah lagi... klik di bawah untuk lihat Dashboard spesial 💕
      </p>
      
      <button 
        className="btn-main" 
        onClick={onNext} // ✅ sama kayak Page1–3
      >
        Lihat Dashboard 🎁
      </button>
    </div>
  );
}
