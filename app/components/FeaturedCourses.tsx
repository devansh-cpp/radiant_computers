'use client'

import courseData from "../data/music_courses.json"
import Link from "next/link"
import { BackgroundGradient } from "./ui/background-gradient"
import Image from "next/image"
import CertificateSection from "./CertificateSection"

interface Course{
    id: number,
    image:string,
    title: string,
    slug :string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    
}

export default function FeaturedCourses(){
   const FeaturedCourse = courseData.courses.filter((course:Course)=>course.isFeatured)
    return(
        <>
        <div className="py-12   bg-gray-100">
           <div>
            <div className="text-center flex  flex-col justify-center items-center">
                <h2 className="sm:text-xl text-base text-[#393be7]  px-4 py-2      rounded-2xl w-fit font-extrabold tracking-wide uppercase">FEATURED COURSES</h2>
                <p className="my-2    font-bold tracking-tight px-4  w-fit text-center text-gray-700 sm:text-4xl text-2xl">Explore our trending Courses </p>
            </div>
           </div>
           <div className="mt-10 scale-95">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
                {FeaturedCourse.map((course:Course)=>(
                    <div key={course.id} className="flex justify-center">
                      <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-amber-50 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <Image src={course.image} width="1000" height="1000" alt="" />
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 ">{course.title}</p>
                                <p className="text-sm text-neutral-600   flex-grow">{course.description}</p>
                                <Link className="my-4 text-blue-500" href='/contact'>
                                Enroll Now
                                </Link>
                            </div>
                        </BackgroundGradient>
                     </div>
                ))}
              </div>
           </div>
           <div className="my-8 text-center">
            <Link href="/courses">
            <button className="bg-[#393be7]   text-gray-100 hover:bg-transparent hover:border-[2px] border-[2px] hover:border-[#393be7] hover:text-gray-800 duration-200 font-bold px-8 py-3 mt-8  ">Explore more</button>
            </Link>
           </div>
           <CertificateSection/>
        </div>
        </>
    )
}