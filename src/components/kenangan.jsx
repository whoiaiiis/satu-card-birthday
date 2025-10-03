import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Kenangan() {
  const navigate = useNavigate();
  const [photos, setPhotos] = useState([]);
  const [showCollect, setShowCollect] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  const rollRef = useRef(null);

  const allPhotos = [
    "/foto1.jpg",
    "/foto2.jpg",
    "/foto3.jpg",
    "/foto4.jpg",
    "/foto5.jpg",
    "/foto6.jpg",
  ];

  // Suara
  const playSound = (src) => {
    const sound = new Audio(src);
    sound.play().catch(() => {});
  };

  const handleTakePhoto = () => {
    if (photos.length < allPhotos.length) {
      playSound("/sounds/camera.mp3");
      setTimeout(() => playSound("/sounds/paper.mp3"), 400);

      const newPhotos = [...photos, allPhotos[photos.length]];
      setPhotos(newPhotos);

      if (newPhotos.length === allPhotos.length) {
        setTimeout(() => setShowCollect(true), 2000);
      }
    }
  };

  // Auto-scroll film roll
  useEffect(() => {
    if (rollRef.current) {
      rollRef.current.scrollTo({
        top: rollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [photos]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 relative overflow-hidden p-6">
      {/* Tombol kembali */}
      <button
        onClick={() => navigate("/dashboard")}
        className="px-4 py-2 mb-6 rounded-lg bg-pink-500 text-white hover:bg-pink-600 transition z-20"
      >
        ⬅️ Kembali
      </button>

      <h2 className="text-2xl font-bold text-pink-700 mb-6 z-20">
        📸 Kenangan Foto Kita
      </h2>

      {/* Tombol collect dipindah ke atas kamera */}
      {showCollect && (
        <motion.button
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => setShowGallery(true)}
          className="mb-4 px-6 py-2 rounded-lg bg-black text-pink-400 font-bold shadow-lg hover:bg-gray-900 transition z-30"
        >
          COLLECT
        </motion.button>
      )}

      {/* Kamera */}
      <div
        onClick={handleTakePhoto}
        className="relative w-64 flex flex-col items-center justify-start cursor-pointer active:scale-95 transition z-10"
      >
        <img
          src="/camera.png"
          alt="Kamera Lucu"
          className="w-64 h-auto drop-shadow-xl"
        />

        {/* Teks petunjuk */}
        <span className="absolute -bottom-10 text-pink-700 text-sm animate-bounce">
          Klik kamera untuk ambil foto
        </span>

        {/* Film roll hanya muncul jika popup belum dibuka */}
        {!showGallery && (
          <div
            ref={rollRef}
            className="absolute top-[95%] w-[220px] h-[420px] overflow-y-auto scrollbar-hide"
          >
            <div className="bg-black border-4 border-black rounded-sm shadow-lg flex flex-col items-center">
              <AnimatePresence>
                {photos.map((src, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    className="relative w-full h-44 border-b border-gray-700 flex items-center justify-center bg-black"
                  >
                    <img
                      src={src}
                      alt={`Kenangan ${index + 1}`}
                      className="w-[160px] h-full object-cover"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>

      {/* Popup Gallery tanpa overlay hitam */}
      <AnimatePresence>
        {showGallery && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
          >
            <div className="relative pointer-events-auto">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center space-y-4"
              >
                <h2 className="text-3xl font-bold text-pink-600 mb-4 text-center drop-shadow-lg">
                  ✨ Galeri Kenangan ✨
                </h2>

                {/* Polaroid panjang seperti roll */}
                <div className="bg-black border-4 border-black rounded-sm shadow-2xl flex flex-col items-center p-4 max-h-[80vh] overflow-y-auto">
                  {photos.map((src, i) => (
                    <motion.div
                      key={i}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: i * 0.2 }}
                      className="relative w-[220px] h-44 border-b border-gray-700 flex items-center justify-center bg-black mb-2"
                    >
                      <img
                        src={src}
                        alt={`Galeri ${i + 1}`}
                        className="w-[160px] h-full object-cover"
                      />

                      {/* Dot kiri */}
                      {[2, 10, 20, 36].map((pos, idx) => (
                        <div
                          key={`left-${i}-${idx}`}
                          style={{ top: pos }}
                          className="absolute left-1 w-2 h-2 bg-white rounded-full"
                        />
                      ))}

                      {/* Dot kanan */}
                      {[2, 10, 20, 36].map((pos, idx) => (
                        <div
                          key={`right-${i}-${idx}`}
                          style={{ top: pos }}
                          className="absolute right-1 w-2 h-2 bg-white rounded-full"
                        />
                      ))}
                    </motion.div>
                  ))}
                </div>

                {/* Tombol Tutup */}
                <button
                  onClick={() => setShowGallery(false)}
                  className="mt-4 px-6 py-2 rounded-lg bg-pink-500 text-white font-bold hover:bg-pink-600 transition"
                >
                  ❌ Tutup
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
