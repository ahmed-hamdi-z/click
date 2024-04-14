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
        className=" w-full h-screen 
       bg-[url('/images/bg-hero.png')] bg-no-repeat bg-cover
        bg-fixed overflow-hidden"
      >
        <Navbar />

        <div className=" mx-auto h-full w-full flex flex-col items-center justify-center ">
          <div
            className="text-5xl  md:text-7xl text-center  bg-clip-text 
          text-transparent bg-gradient-to-b
           from-neutral-50 to bg-neutral-400 bg-opacity-50 sm:text-5xl sm:mt-36"
          >
            قم بأنشاء أعمالك وتنميتها <br /> وتوصيلها اللي العالم اجمع
          </div>
          <div className="text-inherit" >
            <Heading
            text=" حلول مخصصة لعملك  نحن فريق من المبدعين المتحمسين لمساعدتك على تنمية أعمالك"
          />
          </div>
          
        </div>
      </div>
      <div className="bg-[#ECECEC] rounded-t-3xl ">
        <About />
      </div>

      <div className="bg-[#120E1F] rounded-t-3xl">
        <Mission />
      </div>
      <div className="pb-1 bg-[#120E1F] ">
        <Goals />
      </div>
      <div className="bg-[#120E1F] rounded-b-3xl">
        <Services />
      </div>
      <div className="bg-[#ECECEC] ">
        <Footer />
      </div>
    </>
  );
}