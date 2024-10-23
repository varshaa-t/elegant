import React from 'react'
import { LuArrowUpRight } from "react-icons/lu";

function About() {
  return (
    <div className='text-[#7e7e7e] mt-52 flex flex-col space-y-40'>
        <div className='flex space-x-4'>
            <div className='card'>
                Here you will find everything you need. Our 
                collection is constantly expanding to suit 
                your unique style.
            </div>
            <div className='card'>
                The women's clothing in our new collection is 
                both comfortable and stylish, ideal for both 
                casual days and special occasions, all at 
                affordable prices.
            </div>
            <div className='card flex items-center justify-center space-x-3 text-white text-xl'>
                <div>Explore New Collection</div>
                <LuArrowUpRight />            
            </div>
        </div>
        <div className='w-[50vw] mx-auto text-2xl text-center'>   
            At Elegant, we believe that <span className='text-[#a47e1b]'>fashion is an art</span> form -  one that should
            reflect individuality, confidence, and timeless beauty. Our journey
            began with a simple idea: to create clothing that not only fits your 
            body but also <span className='text-[#a47e1b]'>complements your spirit.</span>
        </div>
    </div>
  )
}

export default About