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
            className='text-[24rem] relative z-10'
            initial={{opacity: 0, y:100}}
            animate={{opacity: 1, y:0}}
            transition={{duration: 1, ease: "easeInOut", delay: "1"}}
        > 
            Elegant
        </motion.div>
        <div className='flex left-28 absolute top-[26rem]'>
            <motion.img 
                src={img1}
                className='image object-top rounded-full'
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
                className='image rounded-[2.5rem]'
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
                className='w-64 h-64 bg-[#53a826] rounded-full'
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
                className='image rounded-[2.5rem]'
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
                className='image object-top rounded-full'
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