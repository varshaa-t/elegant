import React from 'react'
import { LuArrowUpRight } from "react-icons/lu";
import { motion } from 'framer-motion';

function About() {
  return (
    <div className='text-[#7e7e7e] mt-52 flex flex-col space-y-32 pb-24
                        xl:pt-24 lg:pt-[35rem] md:pt-[95rem] sm:pt-[67rem]'
    >
        <div className='flex space-x-4 xl:justify-center 
                        lg:grid lg:grid-cols-1 lg:mx-auto lg:space-y-10
                        md:ml-24'
        >
            <motion.div 
                className='card xl:card-xl lg:card-lg lg:ml-5'
                initial={{opacity: 0, y:100}}
                whileInView={{ 
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 0.5,
                    ease: 'easeInOut'
                }}
            >
                Here you will find everything you need. Our 
                collection is constantly expanding to suit 
                your unique style.
            </motion.div>
            <motion.div 
                className='card xl:card-xl lg:card-lg'
                initial={{opacity: 0, y:100}}
                whileInView={{ 
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                    delay: 0.5
                }}
            >
                The women's clothing in our new collection is 
                both comfortable and stylish, ideal for both 
                casual days and special occasions, all at 
                affordable prices.
            </motion.div>
            <motion.div 
                className=' card flex items-center justify-center space-x-3 text-white text-xl
                            xl:card-xl lg:card-lg'
                initial={{opacity: 0, y:100}}
                whileInView={{ 
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                    delay: 1
                }}
            >
                <div>Explore New Collection</div>
                <LuArrowUpRight className='sm:text-5xl'/>            
            </motion.div>
        </div>
        <motion.div 
            className='w-[50vw] mx-auto text-2xl text-center'
            initial={{
                opacity: 0,
                y: 100
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            transition={{
                duration: 0.5,
                ease: 'easeInOut',
                delay: 0.4
            }}
        >   
            At Elegant, we believe that <span className='text-[#a47e1b]'>fashion is an art</span> form -  one that should
            reflect individuality, confidence, and timeless beauty. Our journey
            began with a simple idea: to create clothing that not only fits your 
            body but also <span className='text-[#a47e1b]'>complements your spirit.</span>
        </motion.div>
    </div>
  )
}

export default About