"use client"
import React from 'react'
import MasonryGrid from './MasonaryGrid';

function Gallery() {
  return (
    <div>  
     <div className="flex flex-col justify-center items-center mt-16">
    <h1 className="md:text-4xl text-blue-900  text-2xl font-bold p-4"> Our Gallery </h1>
     <MasonryGrid images={images} />
     </div>
     

    </div>
  )
}
const images = [
    "/gly1.jpg", 
    "/gly5.jpg", 
    "/gly6.jpg",
    "/gly4.jpg",
    "/gly7.jpg",
    "/gly8.jpg", 
    "/gly10.jpg", 
    "/gly2.jpg",
   
    
  ];
  

export default Gallery