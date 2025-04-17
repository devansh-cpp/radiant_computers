"use client"

import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";
export default function WhyChooseUs(){

  const websiteFeatures = [
    {
      title: 'Project-Based Learning',
      description:
        'Gain practical experience through real-world projects tailored to enhance your skills and prepare you for industry challenges.',
      slug: 'project-based-learning',
      isFeatured: true,
    },
    {
      title: 'Diverse Internship Programs',
      description:
        'Explore a range of internships in technologies like React, Python, Java, C++, MERN Stack, and Web Development.',
      slug: 'diverse-internship-programs',
      isFeatured: true,
    },
    {
      title: 'Flexible Learning Schedule',
      description:
        'Choose internships that fit your schedule, making it easier to balance learning with other commitments.',
      slug: 'flexible-learning-schedule',
      isFeatured: true,
    },
    {
      title: 'Certificate of Completion',
      description:
        'Receive a verified certificate upon successful completion of the internship to enhance your resume.',
      slug: 'certificate-of-completion',
      isFeatured: true,
    },
    {
      title: 'Career Support',
      description:
        'Access valuable career resources, resume-building tips, and mock interviews to help you prepare for job opportunities.',
      slug: 'career-support',
      isFeatured: true,
    },
    {
      title: 'Indian Industry Focus',
      description:
        'Internship programs designed with an understanding of the Indian IT landscape, providing relevant learning and growth opportunities.',
      slug: 'indian-industry-focus',
      isFeatured: false,
    },
  ];
  

    return(
        <>
        <div  className="p-12 bg-gradient-to-b from-[#8C52FF] to-[#e3d5ff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
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