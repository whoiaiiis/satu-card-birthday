import React from "react";

export default function Page3({ onNext }) {
  return (
    <div id="page3" className="page center">
      <img 
        src="flowers.png" 
        alt="Flowers" 
        className="img-medium" 
        style={{ maxWidth: "280px" }} 
      />
      
      <p className="page-text">
        Aku bawain bunga virtual buat kamu 🌸
      </p>
      
      <button 
        className="btn-main" 
        onClick={onNext} // ✅ konsisten dengan Page1 & Page2
      >
        next 🌹
      </button>
    </div>
  );
}
