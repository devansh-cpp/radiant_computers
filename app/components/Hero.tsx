import { div } from 'motion/react-client'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (

    <div>

    <div className="hidden mt-16   bg-[#393be7] sm:block    -z-40 h-[95vh] w-[screen]">
        <div className='absolute left-[50%] bottom-[2%]'>
            <img src="/mobilebg.png" className='w-[90%] '  alt="" />
        </div>
        <div className='absolute top-50 left-30'>
            <div>
            <h3 className='text-yellow-300 mb-6 text-3xl font-bold italic '>Upgrade your</h3>
            <h2 className='text-white text-6xl font-extralight  '>SKILLS AND</h2>
            <h2 className='text-white text-6xl font-extralight  '>    <span className='text-yellow-300'>KNOWLEDGE</span></h2>
            <h2 className='text-white text-6xl font-extralight  '>WITH OUR COURSES</h2>
            <div className='flex items-center mt-4 gap-3'>
                <div className='w-64 h-1 bg-white'></div>
                <h5 className='text-yellow-300 font-extralight text-xl'>TOP RATED COMPUTER INSTITUTE</h5>
            </div>
            </div>

            <div>
                <h5 className='mt-28 text-yellow-300 text-2xl'>NOW OPEN FOR NEW ADMISSIONS</h5>
                <h5 className='mt-2 mb-6  text-white font-bold text-2xl'>Do check our amazing courses and <br />enroll yourself on our website</h5>
                <Link href='/contact' className='border-2 bg-[#c5ffbc] rounded-full hover:bg-green-500 hover:text-white border-white text-[#393be7] font-light text-xl px-8 py-2 '>Enroll Now</Link>
            </div>
        </div>
    </div>

    <div className='mobileview   sm:hidden block mt-16  pl-4 pt-4   w-screen bg-[#393be7]'>
    <div>
            <h3 className='text-yellow-300 sm:text-3xl text-2xl font-bold italic '>Upgrade your</h3>
            <h2 className='text-white sm:text-6xl text-5xl font-extralight  '>SKILLS AND <span className='text-yellow-300'>KNOWLEDGE</span></h2>
            <h2 className='text-white sm:text-6xl text-5xl font-extralight  '>WITH OUR COURSES</h2>
            <div className='flex items-center mt-4 gap-3'>
                <div className='w-12 h-1 bg-white'></div>
                <h5 className='text-yellow-300 font-extralight text-lg sm:text-xl'>TOP RATED COMPUTER INSTITUTE</h5>
            </div>
            </div>

            <div className=' '>
                <h5 className='mt-16 text-yellow-300 text-xl sm:text-2xl'>NOW OPEN FOR NEW ADMISSIONS</h5>
                <h5 className='mt-2 mb-6  text-white font-bold text-xl sm:text-2xl'>Do check our amazing courses and <br />enroll yourself on our website</h5>
                <Link href='/contact' className='border-4  hover:bg-yellow-700 hover:text-white border-white text-yellow-300 font-bold text-xl sm:text-2xl px-4 py-2 '>Enroll Now</Link>            </div>
            <img className=''  src="./mobilebg.png" alt="" />
    </div>
    </div>
  )
}

export default Hero