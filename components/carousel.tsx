"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { carouselItems } from "@/constants";

function Carousel() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        ref={carousel}
        drag="x"
        whileDrag={{ scale: 0.95 }}
        dragElastic={0.2}
        dragConstraints={{ right: 0, left: -width }}
        dragTransition={{ bounceDamping: 30 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="flex will-change-transform cursor-grab active:cursor-grabbing"
      >
        {carouselItems.slice(0, 8)?.map((itemData, index) => (
          <motion.div className="min-w-[20rem] min-h-[25rem] p-2" key={index}>
            <Image
              src={itemData?.url}
              width={400}
              height={400}
              alt={itemData.title + "| Photo of Modou Aicha Diop"}
              className="w-[250px] h-[350px] object-fill pointer-events-none rounded-md grayscale"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Carousel;
