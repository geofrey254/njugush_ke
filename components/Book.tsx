import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FaOpencart } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";

export default function Book() {
  return (
    <section className="bg-book flex items-center justify-center p-12">
      <div className="container mx-auto flex justify-between items-center p-0">
        {/* left side */}
        <div className="card-text w-1/2 space-y-6 p-20 text-white">
          <h2 className="text-cyan-500 text-5xl font-bold book-title">
            Whispers from my Childhood
          </h2>
          <span className="text-sm text-gray-500">
            By <span className="text-lg font-semibold">Timothy Kimani</span>
          </span>
          <p className="book-desc text-gray-900 text-sm">
            A witty documentation of a journey, that paints humor in the
            unlikeliest of situations. This memoir juxtaposes various events to
            the drama of a childhood full of twists while telling the story of a
            child growing up in the 90s. It is insipiring, captivating and
            hilarious. TImothy Kimani has told a story worth reading.
          </p>
          <div className="">
            <Link
              href="#"
              className="book_support px-6 py-2 text-sm flex w-2/5 justify-between"
            >
              Purchase
              <span>
                <FaOpencart size={20} />
              </span>
            </Link>
          </div>
        </div>
        {/* right side */}
        <div className="card_image mr-32 mb-12">
          <Image
            src="/photos/book.webp"
            width={350}
            height={50}
            alt="photo"
            className="mx-auto books border-8 rounded-3xl border-[#3702554f] shadow-2xl rotate-12"
          />
        </div>
      </div>
    </section>
  );
}
