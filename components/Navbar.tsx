import React from "react";
import Image from "next/image";
import Link from "next/link";

// icons
import { BsCurrencyExchange } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="fixed w-full px-8 py-4 bg-nav z-20">
      <div className="flex justify-between items-center h-full w-full">
        <div className="left">
          <div className="logo">
            <Image
              src="/logowhite.png"
              className="logo_ncl"
              width={100}
              height={50}
              alt="logo"
            />
          </div>
        </div>
        <div className="conter">
          <ul className="flex space-x-16 font-semibold text-white">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>Videos</li>
            <li>Merchandise</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="right">
          <Link
            href="#"
            className="support px-6 py-2 text-sm flex gap-4 text-white"
          >
            Support
            <span>
              <BsCurrencyExchange size={20} />
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
