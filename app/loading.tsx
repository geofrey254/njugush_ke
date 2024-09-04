"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#1b0731] gap-12">
      <Image
        src={"/logowhite.png"}
        height={500}
        width={500}
        alt="Logo_NCL"
        unoptimized={true}
        className="loading-img"
      />
      <h2 className="text-4xl text-white font-bold ncl_title nerko">
        Njugush Creatives
      </h2>
    </div>
  );
}
