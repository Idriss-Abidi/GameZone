import React, { useState } from 'react'; // Import useState
import { FaTimes, FaBars } from 'react-icons/fa';
import logo from "../assets/eitcLogo.png"
import { motion } from "framer-motion"

import { NAVIGATION_LINKS } from "../constants";
const navbar = () => {
    const logoMove=(duration)=>({
        initial:{ y:-7},
        animate:{
            y:[7, -7],
            transition:{
                duration: duration,
                ease:"linear",
                repeat:Infinity,
                repeatType:"reverse",
            }
        }
    });
    
    const [isMobileMenuOpen, setIsMobileMenuOpen]=useState (false);
    const toggleMobileMenu=()=>{
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }
    const handleLinkClick=(e,href)=>{
        e.preventDefault();
        const targetElement=document.querySelector(href);
        if(targetElement){
            const offset = -85;
            const elementPosition =targetElement.getBoundingClientRect().top;
            const offsetPosition=elementPosition+window.scrollY+offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            })
        }
        setIsMobileMenuOpen(false);
    }
  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50">
        {/* Desktop Menu */}
        <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-md border border-stone-50/30 bg-black/20 py-3 backdrop-blur-md md:flex">
        <motion.div variants={logoMove(3)} initial="initial" animate="animate" className="flex items-center justify-between gap-6 pr-8">
            <div><a href="#">
                <img src={logo} width={45} alt="logo"/>
            </a>
            </div>
        </motion.div>
        <div>
            <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((item, index)=>(
                    <li key={index}> <a className={`text-sm hover:text-cyan-400 ${index === NAVIGATION_LINKS.length - 1 ? 'bg-gradient-to-r from-yellow-700 via-gray-400 to-yellow-300 bg-clip-text text-transparent' : 'text-gl'} `} href={item.href} onClick={(e)=>handleLinkClick(e, item.href)} >{item.label}</a></li>
                ))}
            </ul>
        </div>

        </div>
        {/* Mobile Menu */}
        <div className="mr-20 ml-20 rounded-md backdrop-blur-md md:hidden">
           <div className="flex items-center justify-between">
            <motion.div variants={logoMove(3)} initial="initial" animate="animate">
                <a href="#">
                    <img src={logo} alt="logo" width={45} className="m-2"/>
                </a>
            </motion.div>
            <div className="flex item-center">
                <button className='focus:outline-non md:hidden' onClick={toggleMobileMenu}>{isMobileMenuOpen ? (
                <FaTimes className="m-2 h-6 w-5"/>):(<FaBars className="m-2 h-6 w-5"/>)}
                </button>
            </div>
           </div>
           {isMobileMenuOpen && (
            <ul className="ml-4 mt-4 text-center flex-col gap-4 backdrop-blur-md">
            {NAVIGATION_LINKS.map((item,index)=>(
                <li key={index}>
                    <a href={item.href} className={`w-full ${index === NAVIGATION_LINKS.length - 1 ? 'bg-gradient-to-r from-yellow-700 via-gray-400 to-yellow-300 bg-clip-text text-transparent' : 'text-gl'}`} onClick={(e)=>handleLinkClick(e,item.href)}>{item.label}</a>
                </li>
            ))}
            </ul>
           )}
        </div>
      </nav>
    </div>
  )
}

export default navbar
