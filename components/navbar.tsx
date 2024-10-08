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
    } else {
      setNav(false);
    }
  };

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
    };
  }, []);
  return (

    <div
      className={
        nav
          ? "bg-[#1F1530] font-aj bg-opacity-95s p-6 h-4 fixed w-full border-b-[1px] border-[#ceecf7]  md:p-10 flex items-center justify-between z-40"
          : "bg-transparent font-aj p-6 h-4 fixed w-full border-b-[1px] border-[#ceecf7] border-opacity-50  md:p-10 flex items-center justify-between z-40"
      }
    >
      <Link href='/' className="flex justify-center text-teal-600 sm:justify-start cursor-pointer">

        <Image width={100} height={50} src='/images/logo.svg' alt="" />
      </Link>
      <div
        className="cursor-pointer hidden text-xl
            md:flex space-x-10 items-center
            text-[#ceecf7] text-center "
      >
        <Link href="#mission" className="hover:text-[#f0c363]">
          المهمة
        </Link>
        <Link href="#mission" className="hover:text-[#f0c363]">
          الرؤية
        </Link>

        <Link href="#services" className="hover:text-[#f0c363]">
          خدماتنا
        </Link>
        <Link href="#about" className="hover:text-[#f0c363]">
          من نحن
        </Link>

        <Link href="/" className="hover:text-[#f0c363]">
          الرئيسية
        </Link>
      </div>
      <div className="flex flex-row-reverse items-center justify-center gap-6">
        <div className="flex md:hidden ">
          {isDropDownVisible ? (
            // display an x icon when the drop is visible
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-[#ceecf7] cursor-pointer"
            >
              <X />
              <DropDownMenu onClose={closeDropDown} />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-[#ceecf7] cursor-pointer"
            />
          )}
        </div>

        <div className="flex">
          <Link
            href="/contact"
            className="
            inline-flex h-10 animate-shimmer items-center justify-center 
            rounded-md border border-slate-800 bg-[linear-gradient(110deg,#1F1530,45%,#ceecf7,55%,#f0c363)] 
            bg-[length:200%_100%] px-4 font-medium text-[#ceecf7] transition-colors
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
