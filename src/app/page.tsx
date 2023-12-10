"use client";

import React from "react";
import {
  NextUIProvider,
} from "@nextui-org/react";
import Image from "next/image";

import Header from "@/components/Header";

import HeroImage from "../../public/image-hero.png";
import Databiz from "../../public/client-databiz.svg";
import AudioPhile from "../../public/client-audiophile.svg";
import Meet from "../../public/client-meet.svg";
import Maker from "../../public/client-maker.svg";

export default function Home() {
  return (
    <div className="bg-blue-white h-screen w-screen">
      <NextUIProvider>
        <Header />
        <main className="flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute w-3/4 h-4/5 items-center justify-around">
          <div className="flex flex-col justify-evenly h-full">
            <div>
              <div>
                <h1 className="font-bold text-6xl mt-10">
                  Make <br /> remote work
                </h1>
              </div>
              <div className="w-3/4 text-justify mt-7">
                <span className="text-sm text-gray-white font-semibold">
                  Get your team in sync, no matter your location. StreamLine
                  processes, create team rituals, and watch productivity soar.
                </span>
              </div>
              <div>
                <button className="mt-7 text-sm text-blue-white bg-dark-black rounded-xl px-5 py-[.62rem] font-semibold border border-black hover:bg-transparent hover:border-gray-white hover:text-dark-black transition-all">Learn More</button>
              </div>
            </div>
            <div className="flex gap-8 mt-8 pointer-events-none">
              <div>
                <Image src={Databiz} alt="Databiz" width={80} />
              </div>
              <div>
                <Image src={AudioPhile} alt="AudioPhile" width={60} />
              </div>
              <div>
                <Image src={Meet} alt="Meet" width={70} />
              </div>
              <div>
                <Image src={Maker} alt="Maker" width={70} />
              </div>
            </div>
          </div>
          <div>
            <Image src={HeroImage} alt="hero" width={850} className="pointer-events-none"/>
          </div>
        </main>
      </NextUIProvider>
    </div>
  );
}
