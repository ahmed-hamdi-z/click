"use client";

import Navbar from "@/components/navbar";
import Mission from "@/components/vision-mission";
import Services from "@/components/services";
import Footer from "@/components/footer";
import About from "@/components/about";
import Goals from "@/components/goals";
import Carousel from "@/components/carousel";
import Image from "next/image";
import WhatsAppIcon from "@/components/whatsapp";

export default function Home() {

  return (
    <>
      <div className="w-full h-auto bg-no-repeat bg-cover overflow-hidden bg-gradient-to-r from-[#1F1530] to-[#6C5481]">
        <Navbar />
        <div className="md:mt-0 mt-12">
          <Carousel autoSlide={true} autoSlideInterval={3000}>
            <Image width={1500} height={500} src="/images/banner.jpeg" alt="click Agency" />
            <Image width={1500} height={500} src="/images/banner1.jpeg" alt="click Agency" />
            <Image width={1500} height={500} src="/images/banner2.jpeg" alt="click Agency" />
            {/* <Image width={1500} height={500} src="/images/banner3.jpeg" alt="click Agency" /> */}
          </Carousel>
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
      <WhatsAppIcon />
    </>
  );
}
