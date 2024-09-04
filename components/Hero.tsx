import React from "react";
import { VIDEOS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Fullscreen } from "lucide-react";

// icons
import { FaOpencart } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
export default function Hero() {
  return (
    <section className="bg-hero flex items-center justify-center p-16">
      <div className="vid_container container mx-auto flex justify-between items-center mt-20 p-0">
        {/* left side */}
        <div className="card-text w-1/2 space-y-4 p-20 text-white">
          <div className="flex gap-4">
            <Badge variant="outline" className="bg-[#c02afe] shadow-lg">
              PG18
            </Badge>
            <Badge variant="outline" className="bg-[#c02afe] shadow-lg">
              Trending
            </Badge>
          </div>
          <h2 className="text-white text-5xl vid_title font-bold">
            TTNT5 - REJECT!
          </h2>
          <span className="vid-more text-sm">2024 | 2hrs 10min</span>
          <p className="vid-desc text-gray-300 text-sm">
            Through Thick and Thin is a stand up special that started in 2020.
            The show in its 4th season delves into life as we know it and pokes
            fun at the *_thick and thin_* that life throws at us. It stars
            Njugush and Celestine Ndinda aka Wakavinye.
          </p>
          <div>
            <h4 className="text-xl font-bold font-[montserrat]">KES 350</h4>
          </div>
          <div className="">
            <Link
              href="#"
              className="support px-6 py-2 text-sm flex w-2/5 justify-between hover:bg-[#5d1586] hover:text-white"
            >
              Purchase
              <span>
                <FaOpencart size={20} />
              </span>
            </Link>
          </div>
        </div>
        {/* right side */}
        <div className="card_image">
          <Image
            src="/photos/img1.jpg"
            width={350}
            height={50}
            alt="photo"
            className="mx-auto crd_img"
          />
          <div className="play_btn">
            <button>
              <FaCirclePlay size={100} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
