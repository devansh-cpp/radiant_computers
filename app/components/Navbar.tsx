"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { TiHome } from "react-icons/ti";
import { PiStudentFill } from "react-icons/pi";
import { HiAcademicCap } from "react-icons/hi2";
import { Gi3dGlasses } from "react-icons/gi";


  // Assuming logo is in the public folder

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

 

    return (
        <>
            <nav className='sm:w-full w-screen sm:block flex justify-between items-center lg:px-14 px-4 md:py-2 py-2 h-20  bg-gray-100 border-b-4 text-black border-blue-400  fixed top-0   z-50'>
               
               <div className='flex flex-row justify-evenly  items-center'>

                <div className='h-full sm:flex sm:items-center bg-gradient-to-br from-indigo-600 to-lime-700 bg-clip-text text-transparent font-bold text-2xl '>
                    <Link href='/logo2.png' className=''> 
                        <img src="logo.png" className='w-48' alt="" />
                    </Link>
                </div>

                <div className={`hidden md:block`}>
                    <ul className='text-blue  flex gap-16 text-lg font-semibold navlist'>
                        <li className='hover:text-white hover:bg-blue-500 sm:px-2 hover:py-1 rounded-xl duration-200 '>
                            <Link className='flex justify-center items-center gap-2' href='/'><TiHome/> Home</Link>
                        </li>
                        <li className='hover:text-white hover:bg-blue-500 sm:px-2 hover:py-1 rounded-xl duration-200'>
                            <Link  className='flex justify-center items-center gap-2' href='/courses'><HiAcademicCap/>Courses</Link>
                        </li>
                       
                        <li className='hover:text-white hover:bg-blue-500 sm:px-2 hover:py-1 rounded-xl duration-200'>
                            <Link  className='flex justify-center items-center gap-2' href='/student' ><PiStudentFill/>Student</Link>
                        </li>
                        <li className='hover:text-white hover:bg-blue-500 sm:px-2 hover:py-1 rounded-xl duration-200'>
                            <Link  className='flex justify-center items-center gap-2' href='/about'> <Gi3dGlasses/>About </Link>
                        </li>
                         
                    </ul>
                </div>

                <div className='hidden md:block'>
                    <Link href='/contact'>
                    <button className='px-4 py-2 rounded-2xl border-b-2 border-r-2 border-blue-300 bg-blue-600 text-white'>Contact Us</button>
                    </Link>
                </div>
               </div>

                <div className="">
                 
                    <div className='flex md:hidden'>
                        <button className='block lg:hidden' onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <RiCloseLine size={25} color='#344feb' /> : <RiMenu3Fill size={25} color='#344feb' />}
                        </button>
                    </div>
                </div>

                {isOpen && <MenuModal setOpen={() => setIsOpen(!isOpen)} />}
            </nav>
        </>
    );
};

export default Navbar;

export function MenuModal({ setOpen }: { setOpen: () => void }) {
    return (
        <>
            <div className='h-screen w-1/2    backdrop-blur-lg  lg:hidden absolute top-[110%] left-[50%] overflow-y-scroll'>
                <div className="container mt-2">
                    <ul className=' text-slate-700 flex flex-col gap-y-8 mt-16 gap-16 text-2xl font-semibold navlist justify-center items-center' onClick={setOpen}>
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='/about'>About</Link>
                        </li>
                        <li>
                            <Link href='/courses'>Courses</Link>
                        </li>
                        
                        <li>
                            <Link href='/student'  > Student</Link>
                        </li>
                        <li>
                            <Link href='/contact'>Contact us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}


