import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// css анимка для градиента
const gradientStyles = `
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .gradient-text {
    background: linear-gradient(-45deg, #1a1a2e, #ff6b9d, #ffffff, #1a1a2e);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientShift 4s ease infinite;
    display: inline-block;
  }
`;

// измен стили таймлайна
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(135deg, #000000 0%, #000000 40%, #2a2a2a 100%)",
        color: "#fff",
        borderRadius: "20px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #ffffff" }}
      date={experience.date}
      iconStyle={{ background: "#000000" }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const AboutUs = () => {
  return (
    <>
      <style>{gradientStyles}</style>

      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Открой дверь в свободный интернет.
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          <span className="gradient-text">EVOLVE VPN</span>
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(AboutUs, "aboutus");   // ← изменён id