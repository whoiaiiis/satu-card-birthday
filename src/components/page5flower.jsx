import React, { useEffect, useState } from 'react';

export default function Page5Flower() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <>
      <style>{`
        *,
        *::after,
        *::before {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        :root {
          --dark-color: #000;
        }

       .title {
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translateX(-50%);
  width: 85%;
  font-size: 24px;              /* lebih kecil, modern */
  line-height: 1.5;
  font-weight: 500;
  text-align: center;

  /* warna gradasi */
  background: linear-gradient(90deg, #ec4899, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  text-shadow: 0px 0px 10px rgba(236, 72, 153, 0.2); /* glow halus */
}

.typing {
  font-family: "Poppins", sans-serif;
  font-size: 22px;
  line-height: 1.6;
  font-weight: 500;
  text-align: center;

  /* warna gradasi */
  background: linear-gradient(90deg, #ec4899, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* animasi ketik */
  width: 0;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid #ec4899;
  animation: typing 4s steps(40, end) forwards,
             blink 0.8s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink {
  50% { border-color: transparent }
}


        .night {
          position: fixed;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          width: 100%;
          height: 100%;
          filter: blur(0.1vmin);

          background: radial-gradient(circle at top, #ffe6f7 0%, #fbc2eb 40%, #a18cd1 100%);
          }

                .flower {
            bottom: 5vmin;   
          }

        .flower {
          position: absolute;
          bottom: 10vmin;
          transform-origin: bottom center;
          z-index: 10;
          --fl-speed: 0.8s;
        }

        .flower--1 {
          animation: moving-flower-1 4s linear infinite;
        }

        .flower--1 .flower__line {
          height: 70vmin;
          animation-delay: 0.3s;
        }

        .flower--1 .flower__line__leaf--1 {
          animation: blooming-leaf-right var(--fl-speed) 1.6s backwards;
        }

        .flower--1 .flower__line__leaf--2 {
          animation: blooming-leaf-right var(--fl-speed) 1.4s backwards;
        }

        .flower--1 .flower__line__leaf--3 {
          animation: blooming-leaf-left var(--fl-speed) 1.2s backwards;
        }

        .flower--1 .flower__line__leaf--4 {
          animation: blooming-leaf-left var(--fl-speed) 1s backwards;
        }

        .flower--1 .flower__line__leaf--5 {
          animation: blooming-leaf-right var(--fl-speed) 1.8s backwards;
        }

        .flower--1 .flower__line__leaf--6 {
          animation: blooming-leaf-left var(--fl-speed) 2s backwards;
        }

        .flower--2 {
          left: 50%;
          transform: rotate(20deg);
          animation: moving-flower-2 4s linear infinite;
        }

        .flower--2 .flower__line {
          height: 60vmin;
          animation-delay: 0.6s;
        }

        .flower--2 .flower__line__leaf--1 {
          animation: blooming-leaf-right var(--fl-speed) 1.9s backwards;
        }

        .flower--2 .flower__line__leaf--2 {
          animation: blooming-leaf-right var(--fl-speed) 1.7s backwards;
        }

        .flower--2 .flower__line__leaf--3 {
          animation: blooming-leaf-left var(--fl-speed) 1.5s backwards;
        }

        .flower--2 .flower__line__leaf--4 {
          animation: blooming-leaf-left var(--fl-speed) 1.3s backwards;
        }

        .flower--3 {
          left: 50%;
          transform: rotate(-15deg);
          animation: moving-flower-3 4s linear infinite;
        }

        .flower--3 .flower__line {
          animation-delay: 0.9s;
        }

        .flower--3 .flower__line__leaf--1 {
          animation: blooming-leaf-right var(--fl-speed) 2.5s backwards;
        }

        .flower--3 .flower__line__leaf--2 {
          animation: blooming-leaf-right var(--fl-speed) 2.3s backwards;
        }

        .flower--3 .flower__line__leaf--3 {
          animation: blooming-leaf-left var(--fl-speed) 2.1s backwards;
        }

        .flower--3 .flower__line__leaf--4 {
          animation: blooming-leaf-left var(--fl-speed) 1.9s backwards;
        }

        .flower__leafs {
          position: relative;
          animation: blooming-flower 2s backwards;
        }

        .flower__leafs--1 {
          animation-delay: 1.1s;
        }

        .flower__leafs--2 {
          animation-delay: 1.4s;
        }

        .flower__leafs--3 {
          animation-delay: 1.7s;
        }

        .flower__leafs::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          transform: translate(-50%, -100%);
          width: 8vmin;
          height: 8vmin;
          background-color: #fff;
          filter: blur(10vmin);
        }

        .flower__leaf {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 8vmin;
          height: 11vmin;
          border-radius: 51% 49% 47% 53%/44% 45% 55% 69%;
          background-color: #a7ffee;
          background-image: linear-gradient(to top, #fff, #fff);
          transform-origin: bottom center;
          opacity: 0.9;
          box-shadow: inset 0 0 2vmin rgba(255, 255, 255, 0.5);
        }

        .flower__leaf--1 {
          transform: translate(-10%, 1%) rotateY(40deg) rotateX(-50deg);
        }

        .flower__leaf--2 {
          transform: translate(-50%, -4%) rotateX(40deg);
        }

        .flower__leaf--3 {
          transform: translate(-90%, 0%) rotateY(45deg) rotateX(50deg);
        }

        .flower__leaf--4 {
          width: 8vmin;
          height: 8vmin;
          transform-origin: bottom left;
          border-radius: 4vmin 10vmin 4vmin 4vmin;
          transform: translate(0%, 18%) rotateX(70deg) rotate(-43deg);
          background-image: linear-gradient(to top, rgba(255, 255, 255, 0.4), #fff);
          z-index: 1;
          opacity: 0.8;
        }

        .flower__white-circle {
          position: absolute;
          left: -3.5vmin;
          top: -3vmin;
          width: 9vmin;
          height: 4vmin;
          border-radius: 50%;
          background-color: #fff;
        }

        .flower__white-circle::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 45%;
          transform: translate(-50%, -50%);
          width: 60%;
          height: 60%;
          border-radius: inherit;
          background-image: repeating-linear-gradient(135deg, rgba(0, 0, 0, 0.03) 0px, rgba(0, 0, 0, 0.03) 1px, transparent 1px, transparent 12px), repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.03) 0px, rgba(0, 0, 0, 0.03) 1px, transparent 1px, transparent 12px), repeating-linear-gradient(67.5deg, rgba(0, 0, 0, 0.03) 0px, rgba(0, 0, 0, 0.03) 1px, transparent 1px, transparent 12px), repeating-linear-gradient(135deg, rgba(0, 0, 0, 0.03) 0px, rgba(0, 0, 0, 0.03) 1px, transparent 1px, transparent 12px), linear-gradient(90deg, rgb(255, 235, 18), rgb(255, 206, 0));
        }

        .flower__line {
          height: 55vmin;
          width: 1.5vmin;
          background-image: linear-gradient(to left, rgba(0, 0, 0, 0.2), transparent, rgba(255, 255, 255, 0.2)), linear-gradient(to top, transparent 10%, #fff, #fff);
          box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.5);
          animation: grow-flower-tree 4s backwards;
        }

        .flower__line__leaf {
          --w: 7vmin;
          --h: calc(var(--w) + 2vmin);
          position: absolute;
          top: 20%;
          left: 90%;
          width: var(--w);
          height: var(--h);
          border-top-right-radius: var(--h);
          border-bottom-left-radius: var(--h);
          background-image: linear-gradient(to top, rgba(255, 255, 255, 0.4), #fff);
        }

        .flower__line__leaf--1 {
          transform: rotate(70deg) rotateY(30deg);
        }

        .flower__line__leaf--2 {
          top: 45%;
          transform: rotate(70deg) rotateY(30deg);
        }

        .flower__line__leaf--3,
        .flower__line__leaf--4,
        .flower__line__leaf--6 {
          border-top-right-radius: 0;
          border-bottom-left-radius: 0;
          border-top-left-radius: var(--h);
          border-bottom-right-radius: var(--h);
          left: -460%;
          top: 12%;
          transform: rotate(-70deg) rotateY(30deg);
        }

        .flower__line__leaf--4 {
          top: 40%;
        }

        .flower__line__leaf--5 {
          top: 0;
          transform-origin: left;
          transform: rotate(70deg) rotateY(30deg) scale(0.6);
        }

        .flower__line__leaf--6 {
          top: -2%;
          left: -450%;
          transform-origin: right;
          transform: rotate(-70deg) rotateY(30deg) scale(0.6);
        }

        .flower__light {
          position: absolute;
          bottom: 0vmin;
          width: 1vmin;
          height: 1vmin;
          background-color: rgb(255, 251, 0);
          border-radius: 50%;
          filter: blur(0.2vmin);
          animation: light-ans 4s linear infinite backwards;
        }

        .flower__light:nth-child(odd) {
          background-color: #fff;
        }

        .flower__light--1 {
          left: -2vmin;
          animation-delay: 1s;
        }

        .flower__light--2 {
          left: 3vmin;
          animation-delay: 0.5s;
        }

        .flower__light--3 {
          left: -6vmin;
          animation-delay: 0.3s;
        }

        .flower__light--4 {
          left: 6vmin;
          animation-delay: 0.9s;
        }

        .flower__light--5 {
          left: -1vmin;
          animation-delay: 1.5s;
        }

        .flower__light--6 {
          left: -4vmin;
          animation-delay: 3s;
        }

        .flower__light--7 {
          left: 3vmin;
          animation-delay: 2s;
        }

        .flower__light--8 {
          left: -6vmin;
          animation-delay: 3.5s;
        }

        .grass {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 20vmin;
        }

        .grass__leaf {
          --w: 2vmin;
          --h: 15vmin;
          position: absolute;
          bottom: 0;
          width: var(--w);
          height: var(--h);
          background-image: linear-gradient(to top, transparent, #1aaa15);
          transform-origin: bottom center;
          animation: moving-grass 2s linear infinite;
        }

        .grass__leaf--1 {
          left: 5%;
          --h: 12vmin;
          animation-delay: 0s;
        }

        .grass__leaf--2 {
          left: 15%;
          --h: 18vmin;
          animation-delay: 0.3s;
        }

        .grass__leaf--3 {
          left: 35%;
          --h: 14vmin;
          animation-delay: 0.6s;
        }

        .grass__leaf--4 {
          left: 60%;
          --h: 16vmin;
          animation-delay: 0.9s;
        }

        .grass__leaf--5 {
          left: 80%;
          --h: 13vmin;
          animation-delay: 1.2s;
        }

        .grass__leaf--6 {
          left: 90%;
          --h: 17vmin;
          animation-delay: 1.5s;
        }

        @keyframes light-ans {
          0% {
            opacity: 0;
            transform: translateY(0vmin);
          }
          25% {
            opacity: 1;
            transform: translateY(-5vmin) translateX(-2vmin);
          }
          50% {
            opacity: 1;
            transform: translateY(-15vmin) translateX(2vmin);
            filter: blur(0.2vmin);
          }
          75% {
            transform: translateY(-20vmin) translateX(-2vmin);
            filter: blur(0.2vmin);
          }
          100% {
            transform: translateY(-30vmin);
            opacity: 0;
            filter: blur(1vmin);
          }
        }

        @keyframes moving-flower-1 {
          0%, 100% {
            transform: rotate(2deg);
          }
          50% {
            transform: rotate(-2deg);
          }
        }

        @keyframes moving-flower-2 {
          0%, 100% {
            transform: rotate(18deg);
          }
          50% {
            transform: rotate(14deg);
          }
        }

        @keyframes moving-flower-3 {
          0%, 100% {
            transform: rotate(-18deg);
          }
          50% {
            transform: rotate(-20deg) rotateY(-10deg);
          }
        }

        @keyframes blooming-leaf-right {
          0% {
            transform-origin: left;
            transform: rotate(70deg) rotateY(30deg) scale(0);
          }
        }

        @keyframes blooming-leaf-left {
          0% {
            transform-origin: right;
            transform: rotate(-70deg) rotateY(30deg) scale(0);
          }
        }

        @keyframes grow-flower-tree {
          0% {
            height: 0;
            border-radius: 1vmin;
          }
        }

        @keyframes blooming-flower {
          0% {
            transform: scale(0);
          }
        }

        @keyframes moving-grass {
          0%, 100% {
            transform: rotate(-2deg);
          }
          50% {
            transform: rotate(2deg);
          }
        }

        .not-loaded * {
          animation-play-state: paused !important;
        }
      `}</style>

      <div className={`relative w-full h-screen flex flex-col items-center justify-center ${!loaded ? 'not-loaded' : ''}`}>
        <div className="night"></div>
        
       <div className="absolute top-16 left-1/2 -translate-x-1/2 w-4/5">
  <p className="typing">
    Kalau bunga butuh matahari untuk mekar, aku cuma butuh kamu untuk bahagia 🌸💖
  </p>
</div>

        <div className="flowers">
          {/* Flower 1 */}
          <div className="flower flower--1">
            <div className="flower__leafs flower__leafs--1">
              <div className="flower__leaf flower__leaf--1"></div>
              <div className="flower__leaf flower__leaf--2"></div>
              <div className="flower__leaf flower__leaf--3"></div>
              <div className="flower__leaf flower__leaf--4"></div>
              <div className="flower__white-circle"></div>
              <div className="flower__light flower__light--1"></div>
              <div className="flower__light flower__light--2"></div>
              <div className="flower__light flower__light--3"></div>
              <div className="flower__light flower__light--4"></div>
              <div className="flower__light flower__light--5"></div>
              <div className="flower__light flower__light--6"></div>
              <div className="flower__light flower__light--7"></div>
              <div className="flower__light flower__light--8"></div>
            </div>
            <div className="flower__line">
              <div className="flower__line__leaf flower__line__leaf--1"></div>
              <div className="flower__line__leaf flower__line__leaf--2"></div>
              <div className="flower__line__leaf flower__line__leaf--3"></div>
              <div className="flower__line__leaf flower__line__leaf--4"></div>
              <div className="flower__line__leaf flower__line__leaf--5"></div>
              <div className="flower__line__leaf flower__line__leaf--6"></div>
            </div>
          </div>

          {/* Flower 2 */}
          <div className="flower flower--2">
            <div className="flower__leafs flower__leafs--2">
              <div className="flower__leaf flower__leaf--1"></div>
              <div className="flower__leaf flower__leaf--2"></div>
              <div className="flower__leaf flower__leaf--3"></div>
              <div className="flower__leaf flower__leaf--4"></div>
              <div className="flower__white-circle"></div>
              <div className="flower__light flower__light--1"></div>
              <div className="flower__light flower__light--2"></div>
              <div className="flower__light flower__light--3"></div>
              <div className="flower__light flower__light--4"></div>
              <div className="flower__light flower__light--5"></div>
              <div className="flower__light flower__light--6"></div>
              <div className="flower__light flower__light--7"></div>
              <div className="flower__light flower__light--8"></div>
            </div>
            <div className="flower__line">
              <div className="flower__line__leaf flower__line__leaf--1"></div>
              <div className="flower__line__leaf flower__line__leaf--2"></div>
              <div className="flower__line__leaf flower__line__leaf--3"></div>
              <div className="flower__line__leaf flower__line__leaf--4"></div>
            </div>
          </div>

          {/* Flower 3 */}
          <div className="flower flower--3">
            <div className="flower__leafs flower__leafs--3">
              <div className="flower__leaf flower__leaf--1"></div>
              <div className="flower__leaf flower__leaf--2"></div>
              <div className="flower__leaf flower__leaf--3"></div>
              <div className="flower__leaf flower__leaf--4"></div>
              <div className="flower__white-circle"></div>
              <div className="flower__light flower__light--1"></div>
              <div className="flower__light flower__light--2"></div>
              <div className="flower__light flower__light--3"></div>
              <div className="flower__light flower__light--4"></div>
              <div className="flower__light flower__light--5"></div>
              <div className="flower__light flower__light--6"></div>
              <div className="flower__light flower__light--7"></div>
              <div className="flower__light flower__light--8"></div>
            </div>
            <div className="flower__line">
              <div className="flower__line__leaf flower__line__leaf--1"></div>
              <div className="flower__line__leaf flower__line__leaf--2"></div>
              <div className="flower__line__leaf flower__line__leaf--3"></div>
              <div className="flower__line__leaf flower__line__leaf--4"></div>
            </div>
          </div>
        </div>

        <div className="grass">
          <div className="grass__leaf grass__leaf--1"></div>
          <div className="grass__leaf grass__leaf--2"></div>
          <div className="grass__leaf grass__leaf--3"></div>
          <div className="grass__leaf grass__leaf--4"></div>
          <div className="grass__leaf grass__leaf--5"></div>
          <div className="grass__leaf grass__leaf--6"></div>
        </div>
      </div>
    </>
  );
}