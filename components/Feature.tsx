import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

import { FaOpencart } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";

export default function Feature() {
  return (
    <section className="bg-hero flex items-center justify-center p-16">
      <div className="container mx-auto flex justify-between items-center  p-0 relative">
        <Image
          src="/sample.jpg"
          width={1020}
          height={1050}
          alt="photo"
          className="mx-auto rounded-3xl"
        />
        <div className="overlay-feature rounded-3xl"></div>
        <div className="play_btn">
          <button>
            <FaCirclePlay size={100} />
          </button>
        </div>
        {/* left side */}
        <div className="card-text w-1/2 space-y-4 p-20 text-white absolute">
          <div className="flex gap-4">
            <Badge variant="outline" className="bg-[#c02afe] shadow-lg">
              PG18
            </Badge>
            <Badge variant="outline" className="bg-[#c02afe] shadow-lg">
              Trending
            </Badge>
          </div>
          <h2 className="text-white text-5xl vid_title font-bold">
            Masaibu ya Njugush
          </h2>
          <span className="vid-more text-sm">2024 | 2hrs 10min</span>
          <p className="vid-desc text-gray-300 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa ea
            esse sed mollitia harum rerum enim sequi aperiam! Maiores, non.
          </p>
          <div>
            <h4 className="text-xl font-bold font-[montserrat]">KES 350</h4>
          </div>
          <div className="">
            <Link
              href="#"
              className="support px-6 py-2 text-sm flex w-2/5 justify-between"
            >
              Purchase
              <span>
                <FaOpencart size={20} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
