 
import Link from "next/link";
export default function About() {
  return (
     <>
     <div className="px-2 bg-gradient-to-b from-[#8C52FF] to-[#e3d5ff]  py-20 w-full flex flex-col justify-center">
        <div className="flex flex-col justify-center items-center">
            <h2 className=" py-1 sm:text-4xl text-lg mb-4 font-bold text-white ">About  </h2>
            <h2>
            <span className="sm:text-4xl text-lg mb-8 font-bold px-3 py-2 bg-white rounded-2xl text-[#8c52ff]">Radiant Computer Institute</span>
                </h2>  

        </div>
        <div className="grid grid-cols-2">
            <div className="p-6">
                <img src="./bgimg.png" alt="" />
                
            </div>
            <div className="grid grid-cols-4">
                <div className="col-span-2 gap-4">
                    <div className="  bg-white m-4 h-1/2  border-4 ">
                    Hi
                    </div>
                    <div className=" bg-white m-4 h-1/2  border-4  ">
                    Hi
                    </div>
                </div>
                <div className="col-span-2">
                    <div className=" bg-white m-4 h-1/2  border-4 ">
                    Hi
                    </div>
                    <div className=" bg-white m-4 h-1/2  border-4  ">
                    Hi
                    </div>
                </div>

            </div>

        </div>
</div>
     </>
  );
}
