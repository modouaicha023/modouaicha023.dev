"use client";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Image from "next/image";
import { CarouselItem as CarouselItemType } from "@/types";
import Autoplay from "embla-carousel-autoplay";

interface GalleryProps {
  images: CarouselItemType[];
}

const CarouselSection = ({ images }: GalleryProps) => {
  return (
    <div className="w-full sm:w-[350px] h-[400px] mx-auto">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="">
          {images.map((image, index) => (
            <CarouselItem key={index} className="relative aspect-square w-full">
              <Image
                src={image.url}
                alt={image.title}
                width={1280}
                height={1280}
                className="grayscale w-full sm:w-[350px] h-[400px] object-fill"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselSection;
