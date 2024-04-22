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
        bg-fixed overflow-hidden bg-opacity-75" 
      >
        <Navbar />

        <div className=" mx-auto h-full w-full flex flex-col  ">
          <div
            className="text-5xl md:leading-normal xl:leading-normal leading-normal h-full flex items-center justify-center md:text-7xl text-center  bg-clip-text 
            text-[#ffffff] bg-opacity-50 sm:text-5xl sm:mt-36 font-aj"
          >
            قم بإنشاء أعمالك وتنميتها <br /> وتوصيلها اللي العالم اجمع
          </div>
          <div className="text-black" >
            <Heading
            text=" حلول مخصصة لعملك  نحن فريق من المبدعين المتحمسين لمساعدتك على تنمية أعمالك"
          />
          </div>
          
        </div>
      </div>
      <div className="bg-[#ECECEC] rounded-t-3xl ">
        <About />
      </div>

      <div className="md:bg-slate-950 xl:bg-slate-950  bg-slate-950 md:bg-[url('/images/footer.png')] xl:bg-[url('/images/footer.png')] bg-[url('/images/bgmobile.png')] bg-no-repeat bg-cover rounded-t-3xl">
        <Mission />
      </div>
      <div className="pb-1 bg-slate-950xl:bg-slate-950  bg-slate-950 md:bg-[url('/images/footer.png')] xl:bg-[url('/images/footer.png')] bg-[url('/images/bgmobile.png')] bg-no-repeat bg-cover ">
        <Goals />
      </div>
      <div className="bg-slate-950xl:bg-slate-950  bg-slate-950 md:bg-[url('/images/footer.png')] xl:bg-[url('/images/footer.png')] bg-[url('/images/bgmobile.png')] bg-no-repeat bg-cover rounded-b-3xl">
        <Services />
      </div>
      <div className=" ">
        <Footer />
      </div>
    </>
  );
}
