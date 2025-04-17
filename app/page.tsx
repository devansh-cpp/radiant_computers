import Image from "next/image"; 
import { ImageSlider } from "./components/image-slider";
import About from "./components/About";
import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/WhyChooseUs";
import { Testimonials } from "./components/Testimonials";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
    
     
     <Hero/>
    

    <About/>
    <FeaturedCourses/>
    <WhyChooseUs/>
    <Testimonials/>
    
     
    </>
  );
}
