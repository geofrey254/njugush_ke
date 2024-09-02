import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  md:text-left justify-items-center">
          <div>
            <Image
              src="/logowhite.png"
              className="logo_ncl mx-auto md:mx-0 mb-4"
              width={100}
              height={50}
              alt="logo"
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae, culpa totam minus libero eaque autem neque ipsam
              perferendis, nam molestias corrupti nisi, sit iste odit iusto odio
              doloribus obcaecati quam. Vel aliquid quis qui architecto sunt
              assumenda aperiam numquam impedit.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Special links</h4>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Merchandise
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms & Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Link 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
