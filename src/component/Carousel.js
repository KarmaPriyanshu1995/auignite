import React, { useState } from "react";
import "../css/Carousel.css";
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs'
import IMAGES from "./Images";
export const Carousel = () => {
  const [slide,setSlide]=useState(0)
  const slider = [
    {
      src:IMAGES.BHAI,
      alt: "Image 1 for carousel",
    },
    {
      src: "https://picsum.photos/seed/img2/600/400",
      alt: "Image 2 for carousel",
    },
    {
      src: "https://picsum.photos/seed/img3/600/400",
      alt: "Image 3 for carousel",
    },
  ];
const nextSlide =()=>{
setSlide(slide === slider.length - 1?0 :slide + 1)
}

const prevSlide =()=>{
setSlide(slide === 0 ? slider.length - 1 :slide -1)
}
  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
      {slider.map((item, idx) => {
        return <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide" : "slide slide-hidden"}/>;
      })}
      <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
      <span className="indicators">
        {slider.map((_,idx)=>{
          return <button key={idx} onClick={null} className={slide === idx ? "indicator" : "indicator indicator-inactive"}></button>
        })}
      </span>
    </div>
  );
};
