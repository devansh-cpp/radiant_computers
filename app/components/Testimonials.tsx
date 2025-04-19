"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinity-moving-cards";
export function Testimonials() {
  return (


<section id="testimonies" className="pt-20 bg-white pb-8 ">

  <div className="max-w-6xl mb-4 mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
    <div className="text-center mb-12 flex flex-col justify-between items-center   space-y-5 md:mb-16">
      <div
        className="inline-block px-3 py-1 text-lg   font-semibold text-[#593be7]   "
      >
        Words from Students
      </div>
      <h1 className="text-3xl md:text-5xl font-semibold text-black    ">What the say about us.</h1>
     </div>
    

   
  </div>
  <div className="   flex flex-col antialiased   items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
        className=""
      />
    </div>
</section>

  );
}

const testimonials = [
  {
    quote:
      "Atif innovative mindset and dedication to excellence have been a driving force behind his success. He consistently delivers outstanding results.",
    name: "Dr. Shah Alam Qadri",
    title: "Founder of QCL Institutes",
    people : 'https://avatar.iran.liara.run/public/5'
  },
  {
    quote:
      "Atif innovative mindset and dedication to excellence have been a driving force behind his success. He consistently delivers outstanding results.",
    name: "Dr. Shah Alam Qadri",
    title: "Founder of QCL Institutes",
    people : 'https://avatar.iran.liara.run/public/5'
  },
  {
    quote:
      "Atif innovative mindset and dedication to excellence have been a driving force behind his success. He consistently delivers outstanding results.",
    name: "Dr. Shah Alam Qadri",
    title: "Founder of QCL Institutes",
    people : 'https://avatar.iran.liara.run/public/5'
  },
  {
    quote:
      "Atif innovative mindset and dedication to excellence have been a driving force behind his success. He consistently delivers outstanding results.",
    name: "Dr. Shah Alam Qadri",
    title: "Founder of QCL Institutes",
    people : 'https://avatar.iran.liara.run/public/5'
  },
  {
    quote:
      "Atif innovative mindset and dedication to excellence have been a driving force behind his success. He consistently delivers outstanding results.",
    name: "Dr. Shah Alam Qadri",
    title: "Founder of QCL Institutes",
    people : 'https://avatar.iran.liara.run/public/5'
  },
  {
    quote:
      "Atif innovative mindset and dedication to excellence have been a driving force behind his success. He consistently delivers outstanding results.",
    name: "Dr. Shah Alam Qadri",
    title: "Founder of QCL Institutes",
    people : 'https://avatar.iran.liara.run/public/5'
  },
  {
    quote:
      "Atif innovative mindset and dedication to excellence have been a driving force behind his success. He consistently delivers outstanding results.",
    name: "Dr. Shah Alam Qadri",
    title: "Founder of QCL Institutes",
    people : 'https://avatar.iran.liara.run/public/5'
  },
   
];

