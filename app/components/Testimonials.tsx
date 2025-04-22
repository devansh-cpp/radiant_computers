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
    quote: "Radiant Computer Institute gave me a solid foundation in Web Development. The trainers were amazing and supportive throughout.",
    name: "Rohit Verma",
    title: "Web Development Student",
    people: "https://avatar.iran.liara.run/public/5"
  },
  {
    quote: "The ADCA course really boosted my confidence and skills. I highly recommend Radiant to anyone looking to upskill in computers.",
    name: "Priya Sharma",
    title: "ADCA Student",
    people: "https://avatar.iran.liara.run/public/5"
  },
  {
    quote: "I joined for MS Office and ended up mastering Excel and PowerPoint too. The environment is super friendly and professional.",
    name: "Amit Singh",
    title: "MS Office Student",
    people: "https://avatar.iran.liara.run/public/5"
  },
  {
    quote: "The FTP course was the best decision I made after school. I now feel ready to explore the IT world.",
    name: "Nikita Tiwari",
    title: "FTP Program Graduate",
    people: "https://avatar.iran.liara.run/public/5"
  },
  {
    quote: "Radiant’s DCA course helped me get a job as a data entry operator. Their practical approach really sets them apart.",
    name: "Rahul Yadav",
    title: "DCA Student",
    people: "https://avatar.iran.liara.run/public/5"
  },
  {
    quote: "The trainers at Radiant are very knowledgeable. I joined Advanced Excel and now I’m teaching others!",
    name: "Sneha Patel",
    title: "Advanced Excel Student",
    people: "https://avatar.iran.liara.run/public/5"
  },
  {
    quote: "The Video Editing course at Radiant helped me kickstart my freelancing career. Highly practical and up-to-date content.",
    name: "Arjun Mehra",
    title: "Video Mixing & Editing Student",
    people: "https://avatar.iran.liara.run/public/5"
  },
  {
    quote: "COPA course was intensive but worth every minute. Got certified and hired within weeks. Thanks Radiant!",
    name: "Simran Kaur",
    title: "COPA Certified",
    people: "https://avatar.iran.liara.run/public/5"
  },
  {
    quote: "Radiant taught me how to use computers from scratch. Their FTP program is great for complete beginners like me.",
    name: "Imran Ansari",
    title: "FTP Student",
    people: "https://avatar.iran.liara.run/public/5"
  },
  {
    quote: "I upgraded from MS Office to Advanced Excel and I can already see a huge improvement in my work efficiency.",
    name: "Pooja Kumari",
    title: "Advanced Excel Enthusiast",
    people: "https://avatar.iran.liara.run/public/5"
  },
  {
    quote: "Learning Web Development at Radiant gave me the confidence to build my own portfolio site. Totally worth it!",
    name: "Vikram Joshi",
    title: "Web Development Trainee",
    people: "https://avatar.iran.liara.run/public/5"
  },
  {
    quote: "Radiant Computer Institute is the best place to start your tech journey. Every class was interactive and fun.",
    name: "Neha Chauhan",
    title: "DCA Graduate",
    people: "https://avatar.iran.liara.run/public/5"
  }
];


