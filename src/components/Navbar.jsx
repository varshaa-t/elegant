import React from 'react'
import { IoRemoveOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";

function Navbar() {
  return (
    <div className='text-white flex justify-between items-center'>
        <div className='text-xl'>
            <span className='text-red-700'>E</span>legant
        </div>
        <ul className='flex items-center space-x-8 font-lufga-light text-[#717171]'>
            <li className='list-element'>Home</li>
            <IoRemoveOutline className='rotate-90'/>
            <li className='list-element'>New Collection</li>
            <IoRemoveOutline className='rotate-90'/>
            <li className='list-element'>Catalog</li>
            <IoRemoveOutline className='rotate-90'/>
            <li className='list-element'>Delivery</li>
            <IoRemoveOutline className='rotate-90'/>
            <li className='list-element'>Contact Us</li>
        </ul>
        <LuShoppingCart className='text-[#717171] text-xl'/> 
    </div>
  )
}

export default Navbar