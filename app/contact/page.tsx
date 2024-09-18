"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import Navbar from "@/components/navbar";
import Image from "next/image";
import WhatsAppIcon from "@/components/whatsapp";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <div className="bg-gradient-to-r from-[#1F1530] to-[#6C5481]">
      <Navbar />

      <div className="w-full h-72 md:h-screen bg-contact bg-center md:bg-fixed md:bg-cover bg-contain bg-no-repeat overflow-hidden "></div>

      <div className="bg-gradient-to-r from-[#1F1530] to-[#6C5481] w-full flex md:flex-row flex-col-reverse p-6 pt-10 items-center justify-center space-y-8 md:space-y-0 md:space-x-10 md:mt-0 mt-[-50px]"
      >
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/form.svg"
            width={600}
            height={600}
            alt="Contact Form"
            className="scale-90 md:scale-100 transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div id="contact" ref={ref} className="w-full md:w-1/2">
          <form
            className=" p-6  shadow-lg shadow-[#f0c363]"
            action={async (formData) => {
              const { data, error } = await sendEmail(formData);
              if (error) {
                toast.error(error);
                return;
              }
              alert("Email sent successfully!");
              window.location.reload();
            }}
          >
            <div className="space-y-6">
              <input
                type="text"
                placeholder="الاسم"
                className="px-4 py-3 bg-transparent text-right text-[#f7d68a] w-full text-md  rounded-lg border-b border-[#ceecf7] focus:border-[#f0c363] outline-none focus:ring-1 focus:ring-[#f0c363] transition-all duration-300 ease-in-out"

              />
              <input
                type="text"
                placeholder="العنوان"
                className="px-4 py-3 bg-transparent text-right text-[#f0c363] w-full text-md rounded-lg border-b border-[#ceecf7] focus:border-[#f0c363] outline-none focus:ring-1 focus:ring-[#f0c363] transition-all duration-300 ease-in-out"
              />
              <input
                type="tel"
                placeholder="الجوال"
                className="px-4 py-3 bg-transparent text-right text-[#f0c363] w-full text-md rounded-lg border-b border-[#ceecf7] focus:border-[#f0c363] outline-none focus:ring-1 focus:ring-[#f0c363] transition-all duration-300 ease-in-out"
              />
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="px-4 py-3 bg-transparent text-right text-[#f0c363] w-full text-md rounded-lg border-b border-[#ceecf7] focus:border-[#f0c363] outline-none focus:ring-1 focus:ring-[#f0c363] transition-all duration-300 ease-in-out"
              />
              <textarea
                placeholder="رسالتك"
                className="px-4 py-3 bg-transparent text-right text-[#f0c363] w-full text-md rounded-lg border-b border-[#ceecf7] focus:border-[#f0c363] outline-none focus:ring-1 focus:ring-[#f0c363] transition-all duration-300 ease-in-out"
              ></textarea>
            </div>


            <button
              type="button"
              className="mt-8 flex items-center justify-center text-sm w-full rounded-lg px-6 py-3 tracking-wide text-[#1F1530] bg-[#f0c363] hover:bg-yellow-500 shadow-lg transition-all transform hover:scale-105 hover:shadow-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="currentColor"
                className="mr-2"
                viewBox="0 0 548.244 548.244"
              >
                <path
                  fillRule="evenodd"
                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                  clipRule="evenodd"
                  data-original="#000000"
                />
              </svg>
              إرسال
            </button>
          </form>
        </div>
      </div>
      <WhatsAppIcon />
    </div>
  );
}
