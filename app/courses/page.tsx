"use client";
 
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";
import courseData from "../data/music_courses.json"
import CourseHero from "../components/CourseHero";
import FAQ from "../components/Faq";



const faqData = [
  {
    question: "How secure is my insurance information?",
    answer:
      "We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.",
  },
  {
    question: "How can I customize my insurance coverage?",
    answer:
      "Our insurance plans are customizable. You can tailor your coverage to meet your specific needs and budget.",
  },
  {
    question: "Is there a waiting period for insurance claims?",
    answer:
      "There may be a waiting period for certain insurance claims, depending on the policy terms and conditions. Please refer to your policy documents for details.",
  },
];

export default function page (){
    return(
        <>
        <div className="  bg-gradient-to-b   to-fuchsia-200">

        <CourseHero/>
        <div id="course-offer" className="  py-12 pt-36">
          <h1 className="text-lg md:text-4xl text-center font-sans font-bold    text-blue-700 ">Courses we offer({courseData.courses.length})</h1>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 ">
          {courseData.courses.map((course) => (
            
  <CardContainer key={course.id} className="inter-var  bg-gray-100 ">
    <CardBody className="bg-gray-100  relative group/card :hover:shadow-2xl :hover:shadow-emerald-500/[0.1]    border-black/[0.1] w-auto sm:w-[25rem] h-[27rem] rounded-xl p-6 border">
      <CardItem translateZ="50" className="text-xl font-bold text-neutral-600  ">
        {course.title}
      </CardItem>
      <CardItem translateZ="100" className="w-full mt-4">
        <Image
          src={course.image}
          height="1000"
          width="1000"
          className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt={course.title}
        />
      </CardItem>
      <CardItem as="p" translateZ="60" className="text-neutral-500 pt-4 text-sm max-w-sm mt-2 ">
        {course.description}
      </CardItem>
      <div className="flex justify-end items-center ">
        <CardItem translateZ={20} as={Link} href="/contact" className="px-4 py-2  rounded-xl bg-black   text-white text-xs font-bold">
          Enroll Now
        </CardItem>
      </div>
    </CardBody>
  </CardContainer>
))}

          </div>
        </div>

        <div>
        <FAQ data={faqData} />
        </div>
        </div>
        </>
    )
}