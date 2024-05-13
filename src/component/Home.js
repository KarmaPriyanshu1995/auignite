
import React from 'react'
import Header from './Header'
import { Carousel } from './Carousel'
import NavBar from './NavBar'
import Courses_Section from './Courses_Section'
import '../css/Home.css'
export default function Home() {
  return (
    <div className='mainPage'>
        <Header/>
        <NavBar/>
        <Carousel/>
        <Courses_Section/>
    </div>
  )
}
