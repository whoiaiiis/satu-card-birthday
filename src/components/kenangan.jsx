import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Kenangan() {
  const navigate = useNavigate();

  const [photos, setPhotos] = useState([]);
  const [showCollect, setShowCollect] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  const rollRef = useRef(null);

  // SOURCE FOTO (public/)
  const allPhotos = [
    "/poto1.jpeg",
    "/poto2.jpeg",
    "/poto3.jpeg",
    "/poto4.jpeg",
    "/poto5.jpeg",
    "/poto6.jpeg",
  ];

  // PLAY SOUND
  const playSound = (src) => {
    const sound = new Audio(src);
    sound.play().catch(() => {});
  };

  // AMBIL FOTO SATU-SATU
  const handleTakePhoto = () => {
    if (photos.length >= allPhotos.length) return;

    playSound("/sounds/camera.mp3");
    setTimeout(() => playSound("/sounds/paper.mp3"), 400);

    const nextPhoto = allPhotos[photos.length];
    const newPhotos = [...photos, nextPhoto];
    setPhotos(newPhotos);

    if (newPhotos.length === allPhotos.length) {
      setTimeout(() => setShowCollect(true), 1500);
    }
  };

  // AUTO SCROLL FILM
  useEffect(() => {
    if (rollRef.current) {
      rollRef.current.scrollTo({
        top: rollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [photos]);

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-pink-100 overflow-hidden p-6">

      {/* BACK */}
      <button
        onClick={() => navigate("/dashboard")}
        className="
          px-6 py-2 mb-4
          bg-gradient-to-b from-pink-200 to-pink-300
          text-pink-700 font-extrabold
          rounded-xl
          border-4 border-black
          shadow-[4px_4px_0px_black]
          transition-all
          hover:-translate-y-1 hover:shadow-[6px_6px_0px_black]
        "
      >
        Back
      </button>

      {/* JUDUL */}
      <h2 className="text-2xl font-bold text-pink-700 mb-4">
        Ambil foto {photos.length}/6 BABE
      </h2>

      {/* COLLECT */}
      {showCollect && (
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => setShowGallery(true)}
          className="
            mb-4 px-8 py-3
            bg-gradient-to-b from-purple-200 to-pink-200
            text-purple-700 font-extrabold tracking-widest
            rounded-2xl
            border-4 border-black
            shadow-[5px_5px_0px_black]
            transition-all
            hover:-translate-y-1 hover:shadow-[7px_7px_0px_black]
          "
        >
          COLLECT
        </motion.button>
      )}

      {/* KAMERA */}
      <div
        onClick={handleTakePhoto}
        className={`
          relative w-64 flex flex-col items-center
          ${photos.length === allPhotos.length
            ? "opacity-50 cursor-not-allowed"
            : "cursor-pointer hover:-translate-y-1 active:translate-y-1"}
        `}
      >
        <img
          src="/camera.png"
          alt="Kamera"
          className="w-64 drop-shadow-xl"
        />

        <span className="absolute -bottom-10 text-pink-700 text-sm animate-bounce">
          Klik kamera untuk ambil foto
        </span>

        {/* FILM ROLL */}
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
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-44 border-b border-gray-700 flex items-center justify-center"
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

      {/* GALERI – MUNCUL DARI ATAS */}
      <AnimatePresence>
        {showGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center pt-8 bg-black/40"
          >
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              className="bg-black border-4 border-black rounded-xl p-4 max-h-[85vh] overflow-y-auto"
            >
              <h2 className="text-3xl font-bold text-pink-500 text-center mb-4">
                LUCUNYAAAA POTO KITA
              </h2>

              {photos.map((src, i) => (
                <motion.img
                  key={i}
                  src={src}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.15 }}
                  className="w-[180px] mb-3 mx-auto rounded-md"
                />
              ))}

              <button
                onClick={() => setShowGallery(false)}
                className="
                  mt-4 w-full px-6 py-2
                  bg-gradient-to-b from-pink-200 to-pink-300
                  text-pink-700 font-extrabold
                  rounded-xl
                  border-4 border-black
                  shadow-[4px_4px_0px_black]
                  transition-all
                  hover:-translate-y-1 hover:shadow-[6px_6px_0px_black]
                "
              >
                CLOSE
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
