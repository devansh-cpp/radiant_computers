 
import Link from "next/link";
export default function About() {
  return (
     <>
     <div className="px-2  mx-auto max-w-7xl pt-6  pb-4 w-full flex flex-col justify-center">
        <div className="flex flex-col py-4 gap-4 justify-center items-center">
             <h2 className="sm:text-3xl text-2xl text-center font-bold">
           About Radiant Computer Institute</h2>
            <h3 className="text- text-gray-600 text-center">Join Radiant Computer Institute and take the first step towards a brighter, <br /> tech-driven future!</h3>
        </div>
        <div className="flex flex-col px-4 sm:flex-row gap-8 sm:h-[] justify-center items-start">
            <div className="sm:w-1/2">
                <img src="./founder.png" className="scale-95 rounded-br-4xl rounded-tl-4xl" alt="" />
            </div>
            <div className="sm:w-1/2 mt-8 flex items-start justify-start flex-col gap-4">
           <p>
           Radiant Computer Institute, established in 2012 by Mr. Mohit Gupta, is a trusted name in computer education located in Rudauli, Ayodhya, Uttar Pradesh. Since our inception, we have been committed to providing high-quality and affordable computer training to students, professionals, and individuals seeking to enhance their digital skills.

           </p>
           <p>
           With over a decade of experience, Radiant has helped hundreds of learners build strong foundations in technology and prepare for successful careers in the IT field.

           </p>
           <p>
           We offer a wide range of professional courses including:
<br />
ADCA (Advanced Diploma in Computer Applications)
<br />
DCA (Diploma in Computer Applications)
<br />
FTP (Fundamental Training Program)
<br />
MS Office (Word, Excel, PowerPoint, etc.)
<br />
Web Development
<br />
Video Mixing & Editing
<br />
Advanced Excel
<br />
COPA (Computer Operator and Programming Assistant)
 

           </p>
           <p>

            At Radiant, we focus on practical learning, personalized attention, and career-oriented training. Our mission is to bridge the digital divide by empowering our students with the knowledge and skills needed in today’s competitive world.

           </p>

           <Link href="/about">
            <button className="bg-[#393be7]   text-gray-100 hover:bg-transparent hover:border-[2px] border-[2px] hover:border-[#393be7] hover:text-gray-800 duration-200 font-bold px-8 py-3 mt-8  ">Explore more</button>
            </Link>
           </div>
        </div>
</div>
     </>
  );
}
