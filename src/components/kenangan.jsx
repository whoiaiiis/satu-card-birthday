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
    "/poto1.jpeg",
    "/poto2.jpeg",
    "/poto3.jpeg",
    "/poto4.jpeg",
    "/poto5.jpeg",
    "/poto6.jpeg",
  ];

  const playSound = (src) => {
    const sound = new Audio(src);
    sound.play().catch(() => {});
  };

  const handleTakePhoto = () => {
    if (photos.length >= allPhotos.length) return;

    playSound("/sounds/camera.mp3");
    setTimeout(() => playSound("/sounds/paper.mp3"), 400);

    const nextPhoto = allPhotos[photos.length];
    const newPhotos = [...photos, nextPhoto];
    setPhotos(newPhotos);

    if (newPhotos.length === allPhotos.length) {
      setTimeout(() => setShowCollect(true), 1200);
    }
  };

  useEffect(() => {
    if (rollRef.current) {
      rollRef.current.scrollTo({
        top: rollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [photos]);

  return (
    <div className="relative flex flex-col items-center min-h-[100svh] bg-pink-100 overflow-hidden px-4 py-6">

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
          active:scale-95
        "
      >
        Back
      </button>

      {/* JUDUL */}
      <h2 className="text-lg sm:text-2xl font-bold text-pink-700 mb-4 text-center">
        Ambil foto {photos.length}/6 BABE
      </h2>

      {/* COLLECT */}
      {showCollect && (
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => setShowGallery(true)}
          className="
            mb-4 px-6 py-3
            bg-gradient-to-b from-purple-200 to-pink-200
            text-purple-700 font-extrabold tracking-widest
            rounded-2xl
            border-4 border-black
            shadow-[5px_5px_0px_black]
            active:scale-95
          "
        >
          COLLECT
        </motion.button>
      )}

      {/* KAMERA */}
      <div
        onClick={handleTakePhoto}
        className={`
          relative flex flex-col items-center
          ${photos.length === allPhotos.length
            ? "opacity-50 cursor-not-allowed"
            : "cursor-pointer active:scale-95"}
        `}
      >
        <img
          src="/camera.png"
          alt="Kamera"
          className="w-40 sm:w-56 md:w-64 drop-shadow-xl"
        />

        <span className="mt-2 text-pink-700 text-xs sm:text-sm animate-bounce text-center">
          Klik kamera untuk ambil foto
        </span>

        {/* FILM ROLL */}
        {!showGallery && (
          <div
            ref={rollRef}
            className="
              mt-4
              w-[180px] sm:w-[220px]
              h-[260px] sm:h-[420px]
              overflow-y-auto scrollbar-hide
            "
          >
            <div className="bg-black border-4 border-black rounded-sm shadow-lg flex flex-col items-center">
              <AnimatePresence>
                {photos.map((src, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-32 sm:h-44 border-b border-gray-700 flex items-center justify-center"
                  >
                    <img
                      src={src}
                      alt={`Kenangan ${index + 1}`}
                      className="w-[120px] sm:w-[160px] h-full object-cover"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>

      {/* GALERI */}
      <AnimatePresence>
        {showGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center pt-6 bg-black/50"
          >
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              className="
                bg-black
                border-4 border-black
                rounded-xl
                p-4
                max-h-[85svh]
                overflow-y-auto
                w-[90%]
                max-w-sm
              "
            >
              <h2 className="text-xl sm:text-3xl font-bold text-pink-500 text-center mb-4">
                LUCUNYAAAA POTO KITA
              </h2>

              {photos.map((src, i) => (
                <motion.img
                  key={i}
                  src={src}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.12 }}
                  className="w-full mb-3 rounded-md"
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
                  active:scale-95
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
