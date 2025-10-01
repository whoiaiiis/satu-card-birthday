import React from "react";

export default function Page1({ onNext }) {
  return (
    <div id="page1" className="page center">
      <img 
        src="envelope.png" 
        alt="Amplop" 
        className="img-medium" 
        style={{ maxWidth: "260px" }} 
      />
      
      <p className="page-text">
        knock knock .. open me up! (∩˃o˂∩)♡
      </p>
      
      <button 
        className="btn-main" 
        onClick={onNext} // ✅ cukup panggil tanpa angka
      >
        open it &lt;3
      </button>
    </div>
  );
}
