"use client"

import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";
export default function WhyChooseUs(){

  const websiteFeatures = [
    {
      title: "Experienced Faculty",
      description:
        "Learn from certified and industry-experienced instructors who are passionate about teaching and student success.",
      slug: "experienced-faculty",
      isFeatured: true,
    },
    {
      title: "Industry-Relevant Courses",
      description:
        "Our curriculum is tailored to meet current industry demands in areas like Web Development, Advanced Excel, and Programming.",
      slug: "industry-relevant-courses",
      isFeatured: true,
    },
    {
      title: "Affordable & Accessible Education",
      description:
        "High-quality education at affordable fees, accessible to students from all backgrounds, especially in Tier 2 & Tier 3 cities.",
      slug: "affordable-accessible-education",
      isFeatured: true,
    },
    {
      title: "Hands-On Practical Training",
      description:
        "Focus on real-time projects and practical learning to ensure students are job-ready from day one.",
      slug: "hands-on-practical-training",
      isFeatured: true,
    },
    {
      title: "Government-Recognized Certification",
      description:
        "Receive valid certificates upon course completion that are recognized by institutions and employers alike.",
      slug: "government-recognized-certification",
      isFeatured: true,
    },
    {
      title: "Placement Assistance & Career Guidance",
      description:
        "We provide placement support, interview training, and career counseling to help you step confidently into the IT industry.",
      slug: "placement-assistance-career-guidance",
      isFeatured: true,
    },
  ];
  
  

    return(
        <>
        <div  className="p-12 bg-gradient-to-b from-[#593be7] to-white">
            <div className="sm:max-w-7xl w-full sm:mx-auto  sm:px-6">
                <div className="text-center">
                <h2 className="mb-4 text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Why Choose Us</h2>

                    <h2 className="sm:text-base text-xs text-yellow-300 font-bold tracking-wide uppercase">Unlock Your Potential with Hands-On Learning, Flexible Schedules, and Industry-Focused Programs</h2>
                </div>

                <div className="mt-10">
                 <HoverEffect items={websiteFeatures.map(webinar =>(
                    {
                        title:webinar.title,
                        description:webinar.description,
                        link:"/",
                      

                    }
                 ))}/>
                </div>


              
            </div>
        </div>
        </>
    )
}