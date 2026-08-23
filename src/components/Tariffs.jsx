import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Импорты логотипов
import lightLogo from "../assets/logo-light.png";
import familyLogo from "../assets/logo-family.png";
import businessLogo from "../assets/logo-business.png";

// Кастомные стили для карточек
const cardStyles = `
  .card-border {
    background: linear-gradient(135deg, #000000, #ffffff);
    border-radius: 20px;
    padding: 1px;
  }
  .card-bg {
    background: linear-gradient(135deg, #000000 0%, #000000 40%, #2a2a2a 100%);
    border-radius: 20px;
    padding: 2rem 1.5rem;
    min-height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .price-glow {
    color: #00ff88;
    font-weight: bold;
    font-size: 22px;
    text-align: center;
    transition: text-shadow 0.3s ease;
  }
  .price-glow:hover {
    text-shadow: 0 0 12px #00ff88, 0 0 24px #00ff88;
  }
`;

// Массив с тарифами
const tariffs = [
  {
    title: "Лайт",
    description: "Идеальный для одного пользователя. Подключайте до 3 устройств одновременно. Надёжное соединение для серфинга и общения.",
    price: "170 ₽/месяц",
    icon: lightLogo,
  },
  {
    title: "Семейный",
    description: "Для всей семьи или команды. До 10 устройств в одной подписке. Высокая скорость и стабильность для всех членов.",
    price: "400 ₽/месяц",
    icon: familyLogo,
  },
  {
    title: "Бизнес",
    description: "Для компаний и профессионалов. До 20 устройств с возможностью расширения. Высокоскоростные сервера и приоритетная поддержка.",
    price: "1000 ₽/месяц",
    icon: businessLogo,
  },
];

// Карточка тарифа – изменена ссылка
const TariffCard = ({ index, title, description, price, icon }) => (
  <a
    href="https://t.me/EvolveVpnBot"
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <Tilt
      tiltMaxAngleX={30}
      tiltMaxAngleY={30}
      scale={1.05}
      transitionSpeed={450}
      className="xs:w-[260px] w-full sm:w-[280px] md:w-[300px]"
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.3, 0.75)}
        className="card-border shadow-card"
      >
        <div className="card-bg">
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[24px] font-bold text-center">
            {title}
          </h3>
          <p className="text-white text-[18px] text-center leading-relaxed">
            {description}
          </p>
          <p className="price-glow">
            {price}
          </p>
        </div>
      </motion.div>
    </Tilt>
  </a>
);

const Tariffs = () => {
  return (
    <>
      <style>{cardStyles}</style>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Тарифы</p>
        <h2 className={styles.sectionHeadText}>Выберите свой план.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Подберите подходящий тариф для ваших задач. Все планы включают надёжное
        соединение и круглосуточную поддержку.
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {tariffs.map((tariff, index) => (
          <TariffCard key={tariff.title} index={index} {...tariff} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tariffs, "tariffs");