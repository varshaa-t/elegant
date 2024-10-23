import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

function HeroSection() {
    const img1 = new URL('../assets/img1.jpg', import.meta.url).href;
    const img2 = new URL('../assets/img2.jpg', import.meta.url).href;
    const img3 = new URL('../assets/img3.jpg', import.meta.url).href;
    const img4 = new URL('../assets/img4.jpg', import.meta.url).href;

  return (
    <div className='text-white -mt-20'>
        <div className='text-[24rem] relative z-10'> 
            Elegant
        </div>
        <div className='flex left-28 absolute top-[26rem]'>
            <img 
                src={img1}
                className='image object-top rounded-full'
            />
            <img
                src={img2}
                className='image rounded-[2.5rem]'
            />
            <div className='w-64 h-64 bg-[#53a826] rounded-full'>
                <GoArrowUpRight className='mt-24 ml-28 text-3xl'/>
                <div className='ml-12 text-xl'>Explore Catalog</div>
            </div>
            <img
                className='image rounded-[2.5rem]'
                src={img3}
            />
            <img
                className='image object-top rounded-full'
                src={img4}
            />
        </div>
    </div>
  )
}

export default HeroSection