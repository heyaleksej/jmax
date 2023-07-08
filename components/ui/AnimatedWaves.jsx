import React from "react";
import Image from "next/image";

const AnimatedWaves = () => {
    return (
      <div className="w-full absolute left-0 top-40 overflow-hidden z-0" style={{UserSelect: 'none'}}>
        <div className="waves h-[550px] w-[3200px] relative ">
          <Image
            src="/wawes.webp"
            alt="wave"
            width={5690}
            height={100}
            className="absolute w-[5690px] max-h-[550px] "
            style={{ userSelect: 'none'}}
          />
        </div>
      </div>
    );
};

export default AnimatedWaves;
