import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-col items-center gap-12">
      {/* заголовок с эффектом */}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white transition-all duration-300 cursor-default
                   hover:drop-shadow-[0_0_25px_rgba(255,255,255,1)] hover:scale-105"
      >
        ВЕРНИ СЕБЕ ЗАБЛОКИРОВАННЫЕ СЕРВИСЫ
      </h2>

      {/* 3d-шарики */}
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");