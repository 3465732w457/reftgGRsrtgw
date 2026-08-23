import React from "react";
import Tilt from "react-parallax-tilt";

const TiltCard = ({ imageSrc }) => {
  return (
    <div className="w-[400px] h-[300px] sm:w-[450px] sm:h-[330px] lg:w-[500px] lg:h-[370px]">
      <Tilt
        scale={1.00}
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        transitionSpeed={2500}
        glareEnable={false}      // свечение выключено
        gyroscope={true}
        className="w-full h-full rounded-2xl overflow-hidden"
      >
        <img
          src={imageSrc}
          alt="VPN Card"
          className="w-full h-full object-cover"
        />
      </Tilt>
    </div>
  );
};

export default TiltCard;