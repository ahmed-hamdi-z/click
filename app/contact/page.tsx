"use client";

import React from "react";

import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "@/components/submit-btn";
import toast from "react-hot-toast";
import Navbar from "@/components/navbar";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-contact bg-no-repeat bg-cover overflow-hidden"></div>

      <div className="bg-[#1F1530] w-full h-screen flex md:flex-row flex-col-reverse p-2 gap-3 pt-5 ">

        <div className="  w-full h-full">

        </div>

        <div id="contact" ref={ref} className="w-full h-full">

          <form
            className=""
            action={async (formData) => {
              const { data, error } = await sendEmail(formData);
              if (error) {
                toast.error(error);
                return;
              }
              alert("Email sent successfully!");
              window.location.reload();
            }}>
            <div className="space-y-4 mt-8">
              <input type="text" placeholder="الاسم بالكامل"
                className="px-2 py-3 bg-transparent text-right pr-5 text-[#ceecf7] w-full text-md border-b border-[#ceecf7]  focus:border-[#f0c363] outline-none" />
              <input type="text" placeholder="العنوان"
                className="px-2 py-3 bg-transparent text-right pr-5 text-[#ceecf7] w-full text-md border-b border-[#ceecf7]  focus:border-[#f0c363] outline-none" />
        
              <input type="tel" placeholder="الجوال"
                className="px-2 py-3 bg-transparent text-right pr-5 text-[#ceecf7] w-full text-md border-b border-[#ceecf7]  focus:border-[#f0c363] outline-none" />

              <input type="email" placeholder="البريد الإلكتروني"
                className="px-2 py-3 bg-transparent text-right pr-5 text-[#ceecf7] w-full text-md border-b border-[#ceecf7]  focus:border-[#f0c363] outline-none" />

              <textarea placeholder="رسالتك"
                className="px-2 pt-3 bg-transparent text-right pr-5 text-[#ceecf7] w-full text-md border-b border-[#ceecf7]  focus:border-[#f0c363] outline-none"></textarea>
            </div>

            <button type="button"
              className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 tracking-wide text-[#1F1530] bg-[#f0c363] hover:bg-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currectColor' className="mr-2"
                viewBox="0 0 548.244 548.244">
                <path fill-rule="evenodd"
                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                  clip-rule="evenodd" data-original="#000000" />
              </svg>
              إرسال
            </button>
          </form>
        </div>
      </div>
    </>
  );
}