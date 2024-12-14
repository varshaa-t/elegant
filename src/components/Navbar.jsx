import React, { useEffect, useState } from 'react'
import { IoRemoveOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { motion } from "framer-motion"
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NavLink } from 'react-router-dom';

function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  },[])

  return (
    <motion.nav 
      className={`fixed w-full top-0 left-0 z-20 pb-6 ${isScrolled ? "bg-black" : ""}`}
      initial={{ opacity: 0, y:-100}}
      animate={{ opacity: 1, y: 0}}
      transition={{
        duration: 1,
        ease: "easeInOut",
        delay: 0.2
      }}
    >
      <div className='text-white hidden lg:flex justify-between items-center px-14 pt-6'>
        <div className='text-xl'>
          <NavLink
            to={"/"}
          >
            <span className='text-red-700'>E</span>legant
          </NavLink>
        </div>
        <ul className='flex items-center space-x-8 font-lufga-light'
        >
            <li>
              <NavLink
                to="/home"
                className={({isActive}) => 
                  isActive ? "text-white" : "text-[#717171]"
                }
              >
                Home
              </NavLink>
            </li>
            <IoRemoveOutline className='rotate-90'/>
            <li>
              <NavLink 
                to={"/new-collection"}
                className={({isActive}) => 
                  isActive ? "text-white" : "text-[#717171]"
                }
              >
                New Collection
              </NavLink>
            </li>
            <IoRemoveOutline className='rotate-90'/>
            <li>
              <NavLink
                  to="/catalog"
                  className={({isActive}) => 
                    isActive ? "text-white" : "text-[#717171]"
                  }
                >
                  Catalog
                </NavLink>
            </li>
            <IoRemoveOutline className='rotate-90'/>
            <li>
              <NavLink
                to={"/delivery"}
                className={({isActive}) => 
                  isActive ? "text-white" : "text-[#717171]"
                }
              >
                Delivery
              </NavLink>
            </li>
            <IoRemoveOutline className='rotate-90'/>
            <li>
              <NavLink
                to={"/contact-us"}
                className={({isActive}) => 
                  isActive ? "text-white" : "text-[#717171]"
                }
              >
                Contact Us
              </NavLink>
            </li>
        </ul>
        <LuShoppingCart className='text-[#717171] text-xl'/> 
      </div>
      <div className='text-white flex lg:hidden justify-between items-center px-8 pt-6'>
        <div className='text-4xl'>
            <span className='text-red-700'>E</span>legant
        </div>
        <Sheet>
          <SheetTrigger>
            <RxHamburgerMenu className='text-3xl'/>
          </SheetTrigger>
          <SheetContent className="flex flex-col bg-black pt-20">
            <div className='text-4xl text-white text-center mb-10 font-lufga'>
              <span className='text-red-700'>E</span>legant
            </div>
            <ul 
              className='flex flex-col justify-between items-start pl-4 text-2xl space-y-4 font-lufga-light text-white'
            >
              <li>
                <NavLink
                  to="/home"
                  className={({isActive}) => 
                    isActive ? "text-[#717171]" : "text-white"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to={"/new-collection"}
                  className={({isActive}) => 
                    isActive ? "text-[#717171]" : "text-white"
                  }
                >
                  New Collection
                </NavLink>
              </li>
              <li>
                <NavLink
                    to="/catalog"
                    className={({isActive}) => 
                      isActive ? "text-[#717171]" : "text-white"
                    }
                  >
                    Catalog
                  </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/delivery"}
                  className={({isActive}) => 
                    isActive ? "text-[#717171]" : "text-white"
                  }
                >
                  Delivery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contact-us"}
                  className={({isActive}) => 
                    isActive ? "text-[#717171]" : "text-white"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  )
}

export default Navbar