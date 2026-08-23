import React from "react";

const AuroraBackground = () => {
  return (
    <>
      <style>
        {`
          .aurora-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: #000000;
            overflow: hidden;
          }

          @keyframes auroraRay {
            0% {
              transform: translateX(-100%) rotate(0deg);
              opacity: 0.1;
            }
            25% {
              opacity: 0.3;
            }
            50% {
              transform: translateX(100%) rotate(5deg);
              opacity: 0.15;
            }
            75% {
              opacity: 0.3;
            }
            100% {
              transform: translateX(-100%) rotate(0deg);
              opacity: 0.1;
            }
          }

          .aurora-ray {
            position: absolute;
            top: -20%;
            height: 140%;
            width: 20%;
            background: linear-gradient(
              to bottom,
              rgba(255,255,255,0) 0%,
              rgba(255,255,255,0.05) 20%,
              rgba(255,255,255,0.2) 40%,
              rgba(255,255,255,0.05) 80%,
              rgba(255,255,255,0) 100%
            );
            filter: blur(30px);
            transform-origin: center;
            animation: auroraRay 15s infinite alternate ease-in-out;
          }

          .aurora-ray:nth-child(1) {
            left: -10%;
            animation-duration: 18s;
            animation-delay: 0s;
            transform: rotate(-5deg);
          }
          .aurora-ray:nth-child(2) {
            left: 10%;
            animation-duration: 22s;
            animation-delay: 2s;
            transform: rotate(8deg);
            height: 160%;
            width: 15%;
          }
          .aurora-ray:nth-child(3) {
            left: 30%;
            animation-duration: 20s;
            animation-delay: 4s;
            transform: rotate(-12deg);
            height: 130%;
            width: 25%;
          }
          .aurora-ray:nth-child(4) {
            left: 60%;
            animation-duration: 24s;
            animation-delay: 1s;
            transform: rotate(6deg);
            height: 150%;
            width: 18%;
          }
          .aurora-ray:nth-child(5) {
            left: 80%;
            animation-duration: 19s;
            animation-delay: 3s;
            transform: rotate(-3deg);
            height: 140%;
            width: 12%;
          }
        `}
      </style>
      <div className="aurora-bg">
        <div className="aurora-ray"></div>
        <div className="aurora-ray"></div>
        <div className="aurora-ray"></div>
        <div className="aurora-ray"></div>
        <div className="aurora-ray"></div>
      </div>
    </>
  );
};

export default AuroraBackground;