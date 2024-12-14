import React from 'react'
import { LuArrowUpRight } from "react-icons/lu";
import { motion } from 'framer-motion';

function About() {
  return (
    <div className='text-[#7e7e7e] flex flex-col space-y-32 pb-24 pt-20'
    >
        <div className='grid grid-cols-1 space-y-10 md:grid-cols-3 md:space-y-0 md:space-x-8 mx-auto'
        >
            <motion.div 
                className='card lg:card-lg'
                initial={{opacity: 0, y:100}}
                whileInView={{ 
                    opacity: 1,
                    y: 0
                }}
                viewport={{ once: true }}
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
                className='card lg:card-lg'
                initial={{opacity: 0, y:100}}
                whileInView={{ 
                    opacity: 1,
                    y: 0
                }}
                viewport={{ once: true }}
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
                className='card flex items-center justify-center space-x-3 text-white lg:card-lg'
                initial={{opacity: 0, y:100}}
                whileInView={{ 
                    opacity: 1,
                    y: 0
                }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                    delay: 1
                }}
            >
                <div className='text-xl md:text-base lg:text-xl'>Explore New Collection</div>
                <LuArrowUpRight className='text-3xl lg:text-3xl'/>            
            </motion.div>
        </div>
        <motion.div 
            className='sm:w-[50vw] mx-auto text-lg sm:text-2xl text-center'
            initial={{
                opacity: 0,
                y: 100
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            viewport={{ once: true }}
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