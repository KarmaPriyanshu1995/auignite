
import React from 'react'
import Header from './Header'
import { Carousel } from './Carousel'
import NavBar from './NavBar'
import Courses_Section from './Courses_Section'
import '../css/Home.css'
import Card_Slider from './Card_Slider'
import Placement from './Placement'
export default function Home() {
  return (
    <div className='mainPage'>
        <Header/>
        <NavBar/>
        <Carousel/>
        <Courses_Section/>
        <Card_Slider/>
        <Placement/>
    </div>
  )
}
