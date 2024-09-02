"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#5121aa]">
      {/* <div className="custom-loader h-12 w-12" /> */}
      <Image
        src={"/photos/bg.png"}
        layout={"responsive"}
        height={175}
        width={175}
        alt={`A cute animal!`}
        unoptimized={true}
        className="loading-img"
      />
    </div>
  );
}
