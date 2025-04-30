"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { carouselItems } from "@/constants";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselSection = () => {
  return (
    <div className="w-full overflow-hidden">
      <Carousel
        additionalTransfrom={0}
        autoPlaySpeed={5000}
        autoPlay
        arrows={false}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        partialVisible
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {carouselItems.map((itemData, index) => (
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
      </Carousel>
    </div>
  );
};

export default CarouselSection;
