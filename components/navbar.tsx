"use client";
import { useEffect, useState } from "react";

import { AlignJustify, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "./drop-down-menu";



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const changeBg = () => {
      if (window.scrollY >= 50) {
          setNav(true);
      }
      else {
          setNav(false);
      }
  }


  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };
useEffect(() => {
  window.addEventListener("scroll", changeBg);
  return () => {
      window.addEventListener("scroll", changeBg);
  }
},[])
  return (
    <div className="w-full">


    <div className={nav ? "bg-[#120E1F] bg-opacity-95 p-6 h-4 fixed w-full border-b-2 border-[#D9D9D9]   md:p-10 flex items-center justify-between z-40" : "bg-transparent p-6 h-4 fixed w-full border-b-2 border-[#D9D9D9]   md:p-10 flex items-center justify-between z-40"}>
     
        <div>
          <Link className="cursor-pointer" href="/">
            <Image
              priority
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-10 h-10 md:w-14 md:h-14"
            />
          </Link>
        </div>
        <div
          className="cursor-pointer hidden text-xl
            md:flex space-x-10 items-center
             text-white text-center "
        >
          <Link href="#mission" className="hover:text-gray-300">
            المهمة
          </Link>
          <Link href="#vision" className="hover:text-gray-300">
            الرؤية
          </Link>

          <Link href="#services" className="hover:text-gray-300">
            خدماتنا
          </Link>
          <Link href="#about" className="hover:text-gray-300">
            من نحن
          </Link>

          <Link href="/" className="hover:text-gray-300">
            الرئيسية
          </Link>
        </div>

        <div className="flex md:hidden">
          {isDropDownVisible ? (
            // display an x icon when the drop is visible
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            >
              <X />
              <DropDownMenu onClose={closeDropDown} />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            />
          )}
        </div>

        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="
            inline-flex h-12 animate-shimmer items-center justify-center 
            rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
            bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors
             focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
              focus:ring-offset-slate-50
            "
          >
            تواصل معنا 
          </Link>
        </div>
        </div>
    </div>
  );
};

export default Navbar;
