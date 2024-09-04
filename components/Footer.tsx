import React from "react";
import Image from "next/image";

// icons
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { AiFillTikTok } from "react-icons/ai";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { GrAppleAppStore } from "react-icons/gr";
export default function Footer() {
  const d = new Date();
  let date = d.getFullYear();
  return (
    <footer className="bg-[#1b0731] text-white">
      <div className="container mx-auto p-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  md:text-left justify-items-center">
          <div>
            <Image
              src="/logowhite.png"
              className="logo mx-auto md:mx-0 mb-4"
              width={120}
              height={50}
              alt="logo"
            />
            <p className="text-sm text-white/65">
              Join us on this incredible journey of laughter, creativity, and
              inspiration. Njugush.ke brings you closer to the hilarious and
              heartwarming world of Njugush, Kenya{"'"}s beloved comedian and
              content creator. Explore exclusive content, behind-the-scenes
              moments, and stay updated with our latest shows, videos, and
              projects.
            </p>
          </div>

          <div>
            <h4 className="foot-title text-sm font-semibold mb-10 text-purple-400">
              Special links
            </h4>
            <ul className="text-white grid gap-3 text-sm">
              <li>
                <a href="#" className="hover:text-purple-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300">
                  Merchandise
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300">
                  Terms & Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="foot-title text-sm font-semibold mb-10 text-purple-400">
              Follow Us
            </h4>
            <ul className="flex gap-6">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <BiLogoInstagramAlt className="text-white social-icons" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <BsFacebook className="text-white social-icons" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <BsYoutube className="text-white social-icons" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <AiFillTikTok className="text-white social-icons" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col-reverse justify-between lg:flex-row px-12 py-4">
        <p className="text-xs text-black">
          © Copyright {date}{" "}
          <span className="text-sm text-[#9033ce] font-semibold">
            Njugush Creatives Limited.
          </span>
        </p>
        <ul className="flex flex-col items-center mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              className="flex items-center mt-0.5 text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <span>
                <GrAppleAppStore />
              </span>
              iOS
            </a>
          </li>
          <li>
            <a
              href="/"
              className="flex items-center mt-0.5 text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <span>
                <IoLogoGooglePlaystore />
              </span>
              Android
            </a>
          </li>
        </ul>
      </div>{" "}
    </footer>
  );
}
