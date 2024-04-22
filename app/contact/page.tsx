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
    <div   className=" bg-slate-950 w-full h-[100vh]  flex items-center justify-center   ">
 
    <div
      id="contact"
      ref={ref}
      className=" bg-slate-950 w-full max-h-screen mt-10  flex items-center justify-center  "
      
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
          className="h-14 w-[30rem] px-4 rounded-lg border border-black opacity-80 "
       
          type="string"
          required
          maxLength={500}
          placeholder="First Name"
        />
         <input
          className="h-14 w-[30rem] px-4 rounded-lg border border-black opacity-80 "
   
          type="string"
          required
          maxLength={500}
          placeholder="Last Name"
        />
         <input
          className="h-14 w-[30rem] px-4 rounded-lg border border-black  opacity-80 "
          type="number"
          required
          maxLength={500}
          placeholder="Phone Number"
        />
        <input
          className="h-14 w-[30rem] px-4 rounded-lg border border-black  opacity-80 "
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 w-[30rem] my-3 rounded-lg border border-black p-4 opacity-80"
          name="message"
          placeholder="Your message"
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