"use client";

import Navbar from "@/components/navbar";
import Mission from "@/components/vision-mission";
import Services from "@/components/services";
import Footer from "@/components/footer";
import About from "@/components/about";
import Goals from "@/components/goals";
import Heading from "@/components/heading";

export default function Home() {
  return (
    <>
      <div
        className=" w-full h-screen  bg-[url('/images/bg-hero.png')] bg-no-repeat bg-cover overflow-hidden " 
      >
        <Navbar />

        <div className=" mx-auto h-full w-full flex flex-col font-aj ">
          <div
            className="text-5xl md:leading-normal xl:leading-normal leading-normal h-full flex items-center justify-center md:text-7xl text-center  bg-clip-text 
            text-[#ceecf7] bg-opacity-50 sm:text-5xl sm:mt-36 font-aj"
          >
            قم بإنشاء أعمالك وتنميتها <br /> وتوصيلها اللي العالم أجمع
          </div> 
          <div className="text-[#ceecf7] w-full  font-aj" >
            <Heading
            text=" حلول مخصصة لعملك  نحن فريق من المبدعين المتحمسين لمساعدتك على تنمية أعمالك"
          />
          </div>
          
        </div>
      </div>
      <div className="bg-[#EFF9FB] rounded-t-3xl ">
        <About />
      </div>

      <div className="  bg-[#1F1530]  rounded-t-3xl">
        <Mission />
      </div>
      <div className=" bg-[#1F1530] ">
        <Goals />
      </div>
      <div className="bg-[#1F1530]  rounded-b-3xl">
        <Services />
      </div>
      <div className=" mt-[0.5px]">
        <Footer />
      </div>
    </>
  );
}
