"use client";

import { useState, useRef } from "react";
import Navbar from "@/components/navbar";
import { Spotlight } from "@/components/ui/spotlight";

import GraphicDesign from "@/components/vision-mission";
import Services from "@/components/services";
import FAQS from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>

        
      
      <div className=" w-full h-screen md:items-center md:justify-center bg-[url('/images/bg-hero.png')] bg-no-repeat bg-cover bg-fixed antialiased bg-grid-white/[0.02]  overflow-hidden">
       <Navbar />
        <Spotlight
          className="hidden md:flex md:-top-80 left-64  "
          fill="white"
        />

        <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-32 px-2">
          <div className="text-4xl pb-5 md:text-8xl px-6 text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
            قم بأنشاء أعمالك وتنميتها <br /> وتوصيلها اللي العالم اجمع
          </div>
          <p className="mt-4 text-md  md:text-3xl font-normal  text-neutral-100 max-w-lg text-center mx-auto px-4">
            حلول مخصصة لعملك <br />
            نحن فريق من المبدعين المتحمسين لمساعدتك على تنمية أعمالك
          </p>
        </div>
      </div>
      <div className="bg-[#120E1F] ">
        <GraphicDesign />
      </div>
      <div className="m-5 bg-[#120E1F] ">
        <FAQS />
      </div>
      <div className="bg-[#ECECEC]">
        <Services />
      </div>
      <div className="bg-[#ECECEC] ">
        <Footer />
      </div>
    </>
  );
}
