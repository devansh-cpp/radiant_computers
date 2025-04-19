 
import Link from "next/link";
export default function About() {
  return (
     <>
     <div className="px-2  mx-auto max-w-7xl pt-6  pb-4 w-full flex flex-col justify-center">
        <div className="flex flex-col gap-4 justify-center items-center">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi reiciendis consectetur est illo nostrum dolorem?</h3>
            <h2 className="text-3xl font-bold">Lorem ipsum dolor sit amet.</h2>
            <h3 className="text-xs text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />Reprehenderit labore numquam odit adipisci iste eaque illo commodi, aliquam sint architecto.</h3>
        </div>
        <div className="flex gap-8 h-[80vh] justify-center items-center">
            <div className="w-1/2">
                <img src="./about4.jpg" className="rounded-br-4xl rounded-tl-4xl" alt="" />
            </div>
            <div className="w-1/2 flex flex-col gap-4">
            <h2 className="text-xl font-bold">Lorem, ipsum.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam est ipsam consectetur tempore eaque, nihil vitae saepe reiciendis architecto assumenda?</p>
            <h2 className="text-xl font-bold">Lorem, ipsum.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam est ipsam consectetur tempore eaque, nihil vitae saepe reiciendis architecto assumenda?</p>
            <h2 className="text-xl font-bold">Lorem, ipsum.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam est ipsam consectetur tempore eaque, nihil vitae saepe reiciendis architecto assumenda?</p>
            <h2 className="text-xl font-bold">Lorem, ipsum.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam est ipsam consectetur tempore eaque, nihil vitae saepe reiciendis architecto assumenda?</p>
            <h2 className="text-xl font-bold">Lorem, ipsum.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam est ipsam consectetur tempore eaque, nihil vitae saepe reiciendis architecto assumenda?</p>
            </div>
        </div>
</div>
     </>
  );
}
