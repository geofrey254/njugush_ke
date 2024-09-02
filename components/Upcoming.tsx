import React, { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";

import { VIDEOS } from "@/constants";

export default function Upcoming() {
  return (
    <section className="upcoming_sec">
      <div className="container justify-center items-center mx-auto p-8">
        <div className="mx-16 mb-8">
          <h2 className="font-semibold text-white">Latest Videos</h2>
        </div>
        <Carousel className="mx-12">
          <CarouselContent>
            {VIDEOS.map((vid) => (
              <HoverableCarouselItem key={vid.id} vid={vid} />
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white hover:text-yellow-300" />
          <CarouselNext className="text-white hover:text-yellow-300" />
        </Carousel>
      </div>
    </section>
  );
}

function HoverableCarouselItem({ vid }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CarouselItem
      className="md:basis-1/2 lg:basis-1/3 carousel-card relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={vid.image}
        width={1500}
        height={150}
        alt={vid.name}
        className="rounded-3xl carousel-image"
      />
      <div className="absolute inset-0 text-white flex items-center justify-center">
        <div
          className={` text-white font-semibold ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="absolute flex top-4 left-8">
            <Badge variant="outline" className="bg-[#be2afe86] shadow-lg">
              PG18
            </Badge>
          </div>

          <h3 className="carousel-title text-xl text-nowrap ml-8 mb-12">
            {vid.name}
          </h3>
          <p className="carousel-price ml-8 mb-2 bg-[#be2afe7e] p-2 rounded-3xl text-xs">
            {vid.price}
          </p>
        </div>
      </div>
      {/* Pop-out information when hovered */}
      <div
        className={`rounded-3xl absolute inset-14  flex items-center justify-center p-4 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="play text-center">
          <button>
            <FaCirclePlay size={100} />
          </button>{" "}
        </div>
      </div>
    </CarouselItem>
  );
}
