import { motion } from "framer-motion";
import { styles } from "../styles";
import TiltCard from "./TiltCard";
import vpnImage from "../assets/vpn-card.png";

// стили кнопки
const buttonStyles = `
  .btn-gradient {
    position: relative;
    background: linear-gradient(135deg, #ffffff, #ff6b9d);
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    z-index: 1;
    overflow: visible;
    display: inline-block;
    padding: 12px 32px;
    color: black;
    font-weight: bold;
    font-size: 1.125rem;
    text-decoration: none;
  }
  .btn-gradient::before {
    content: '';
    position: absolute;
    top: -6px;
    left: -6px;
    right: -6px;
    bottom: -6px;
    background: linear-gradient(-45deg, #ffffff, #ff6b9d, #ffffff, #ff6b9d);
    background-size: 300% 300%;
    border-radius: 14px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
    filter: blur(12px);
    animation: glowShift 3s ease infinite;
  }
  .btn-gradient:hover {
    transform: scale(1.08);
  }
  .btn-gradient:hover::before {
    opacity: 1;
  }
  @keyframes glowShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  /* анимация точки */
  @keyframes pulseGlow {
    0%, 100% { box-shadow: 0 0 8px rgba(255,255,255,0.4), 0 0 16px rgba(255,255,255,0.2); }
    50% { box-shadow: 0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.4); }
  }
  .pulse-white {
    animation: pulseGlow 3s ease-in-out infinite;
  }
`;

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <style>{buttonStyles}</style>

      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* левая колонка */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-white pulse-white" />
          <div className="w-1 sm:h-80 h-40 bg-white" />
        </div>

        {/* правая колонка */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            EVOLVE VPN
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Свободный интернет. Без ограничений.
          </p>

          <a
            href="https://t.me/EvolveVpnBot"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient mt-6"
          >
            ПОДКЛЮЧИТЬ
          </a>
        </div>
      </div>

      {/* Карточка тильт */}
      <div className="absolute right-[5%] top-[20%] hidden sm:block z-10">
        <TiltCard imageSrc={vpnImage} />
      </div>

      {/* скролл индикатор */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;