import React from 'react'
import '../css/Placement.css'
import IMAGES from './Images'
import Marquee from "react-fast-marquee";
export default function Placement() {

    const LOGO1 =[
     {
        image:IMAGES.AMAZON
     },
     {
        image:IMAGES.BLACKROCK
     },
     {
        image:IMAGES.BLOOMBERG
     },
     {
        image:IMAGES.CONSENSE
     },
     {
        image:IMAGES.FACEBOOK
     },
     {
        image:IMAGES.GOOGLE
     }
    ]
    const LOGO2 =[
        {
           image:IMAGES.MICROSOFT
        },
        {
           image:IMAGES.MORGAN
        },
        {
           image:IMAGES.NBC
        },
        {
           image:IMAGES.SIMON
        },
        {
           image:IMAGES.TWOSIGMA
        },
        {
           image:IMAGES.ZILLOW
        }
       ]
  return (
    <div>
        <div className="coursesHeader">OUR PLACEMENT PARTNERS</div>

        <div className='placementMainDiv'>
        <Marquee 
        pauseOnHover={true} direction='left' className='marqueeClass'>
           { LOGO1.map((item,index)=>{
            return(
                <div>
                <img src={item.image} className='marqueImage'/>
            </div>)}
            )
           }
          
           </Marquee>
           <Marquee 
        pauseOnHover={true} direction='right' className='marqueeClass'>
           { LOGO2.map((item,index)=>{
            return(
                <div>
                <img src={item.image} className='marqueImage'/>
            </div>)}
            )
           }
          
           </Marquee>
        </div>
    </div>
  )
}
