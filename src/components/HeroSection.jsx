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
    <div className='flex flex-col text-white mt-20'>
        <motion.div
            className='relative z-10 mx-auto text-7xl sm:text-[10rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] 2xl:text-[24rem]'
            initial={{opacity: 0, y:100}}
            animate={{opacity: 1, y:0}}
            transition={{duration: 1, ease: "easeInOut", delay: "1"}}
        > 
            Elegant
        </motion.div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mx-auto mt-8 lg:-mt-10 lg:space-x-0'
        >
            <motion.img 
                src={img1}
                className='image image-size object-top rounded-full mr-8 mb-8 lg:mb-0 lg:mr-0'
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
                className='image image-size rounded-[2.5rem] mb-8 lg:mb-0'
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
                className='w-48 h-48 hidden lg:block xl:w-64 xl:h-64 bg-[#53a826] rounded-full'
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
                <GoArrowUpRight className='mt-[70px] xl:mt-24 mx-auto text-3xl'/>
                <div className='text-lg ml-8 xl:ml-12 xl:text-xl'>Explore Catalog</div>
            </motion.div>
            <motion.img
                className='image image-size rounded-[2.5rem] mb-8 lg:mb-0'
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
                className='image image-size object-top rounded-full' 
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