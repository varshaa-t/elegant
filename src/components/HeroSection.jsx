import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { motion } from 'framer-motion'

const imageVariants1 = {
    hidden:{
        opacity: 0,
        x: -100
    },
    show:{
        opacity: 1,
        x: 0
    }
}

const imageVariants2 = {
    hidden: {
        opacity: 0,
        x: 100
    }, 
    show: {
        opacity: 1,
        x:0
    }
}

function HeroSection() {
    const img1 = new URL('../assets/img1.jpg', import.meta.url).href;
    const img2 = new URL('../assets/img2.jpg', import.meta.url).href;
    const img3 = new URL('../assets/img3.jpg', import.meta.url).href;
    const img4 = new URL('../assets/img4.jpg', import.meta.url).href;

  return (
    <div className='text-white -mt-20'>
        <motion.div
            className=' text-[24rem] relative z-10
                        xl:text-[15rem] xl:left-28 xl:top-10
                        lg:text-[13rem] lg:left-12 lg:top-16
                        md:text-[10rem] md:left-10 md:top-20
                        sm:text-[5rem] sm:left-28'
            initial={{opacity: 0, y:100}}
            animate={{opacity: 1, y:0}}
            transition={{duration: 1, ease: "easeInOut", delay: "1"}}
        > 
            Elegant
        </motion.div>
        <div className='flex left-28 absolute top-[26rem] xl:left-0 xl:top-[19rem]
                        lg:grid lg:grid-cols-2 lg:space-x-4 lg:space-y-4 lg:left-40 lg:top-[20rem]
                        md:grid md:grid-cols-1 md:space-y-10
                        sm:top-[12rem] sm:left-44'
        >
            <motion.img 
                src={img1}
                className='image object-top rounded-full image-size'
                variants={imageVariants1}
                initial={'hidden'}
                animate={'show'}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 1.7
                }}
            />
            <motion.img
                src={img2}
                className='image rounded-[2.5rem] image-size'
                variants={imageVariants1}
                initial={'hidden'}
                animate={'show'}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 1.7
                }}
            />
            <motion.div 
                className='w-64 h-64 bg-[#53a826] rounded-full lg:hidden'
                initial={{
                    opacity: 0,
                    y: -100
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 1.7
                }}
            >
                <GoArrowUpRight className='mt-24 ml-28 text-3xl'/>
                <div className='ml-12 text-xl'>Explore Catalog</div>
            </motion.div>
            <motion.img
                className='image rounded-[2.5rem] image-size'
                src={img3}
                variants={imageVariants2}
                initial='hidden'
                animate='show'
                transition={{
                    duration: 1,
                    ease: 'easeInOut',
                    delay: 1.7
                }}
            />
            <motion.img
                className='image object-top rounded-full image-size' 
                src={img4}
                variants={imageVariants2}
                initial='hidden'
                animate='show'
                transition={{
                    duration: 1,
                    ease: 'easeInOut',
                    delay: 1.7
                }}
            />
        </div>
    </div>
  )
}

export default HeroSection