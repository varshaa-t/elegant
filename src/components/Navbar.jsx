import React from 'react'
import { IoRemoveOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { easeInOut, motion } from "framer-motion"

function Navbar() {
  return (
    <motion.div 
      className='text-white flex justify-between items-center'
      initial={{ opacity: 0, y:-100}}
      animate={{ opacity: 1, y: 0}}
      transition={{
        duration: 1,
        ease: "easeInOut",
        delay: 0.2
      }}
    >
        <div className='text-xl xl:text-4xl sm:text-2xl'>
            <span className='text-red-700'>E</span>legant
        </div>
        <ul className=' flex items-center space-x-8 font-lufga-light text-[#717171]
                        xl:hidden'
        >
            <li>Home</li>
            <IoRemoveOutline className='rotate-90'/>
            <li>New Collection</li>
            <IoRemoveOutline className='rotate-90'/>
            <li>Catalog</li>
            <IoRemoveOutline className='rotate-90'/>
            <li>Delivery</li>
            <IoRemoveOutline className='rotate-90'/>
            <li>Contact Us</li>
        </ul>
        <LuShoppingCart className='text-[#717171] text-xl xl:text-4xl sm:text-2xl'/> 
    </motion.div>
  )
}

export default Navbar