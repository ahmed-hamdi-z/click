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
    <div   className=" bg-[#1F1530] w-full h-[100vh]  flex items-center justify-center   ">
 
    <div
      id="contact"
      ref={ref}
      className=" bg-[#1F1530] w-full max-h-screen mt-10  flex items-center justify-center  "
      
    >
   

      <form
        className=" flex flex-col "
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
         <input
          className="h-14 md:w-[30rem] lg:w-[30rem] w-[25rem] px-4 rounded-lg border border-black opacity-80 text-right "
       
          type="string"
          required
          maxLength={500}
          placeholder="الأسم الأول"
        />
         <input
          className="h-14 md:w-[30rem] lg:w-[30rem] w-[25rem] px-4 rounded-lg border border-black opacity-80 text-right "
   
          type="string"
          required
          maxLength={500}
          placeholder="الأسم الأخير"
        />
         <input
          className="h-14 md:w-[30rem] lg:w-[30rem] w-[25rem] px-4 rounded-lg border border-black  opacity-80 text-right "
          type="number"
          required
          maxLength={500}
          placeholder="رقم الهاتف"
        />
        <input
          className="h-14 md:w-[30rem] lg:w-[30rem] w-[25rem] px-4 rounded-lg border border-black  opacity-80 text-right "
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="البريد الألكتروني"
        />
        <textarea
          className="h-52 md:w-[30rem] lg:w-[30rem] w-[25rem] my-3 rounded-lg border border-black p-4 opacity-80 text-right"
          name="message"
          placeholder="طلبك أو خدمتك"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </div>
          
    </div>
    </>
  );
}