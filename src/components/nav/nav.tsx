"use client"

import { SiAlienware } from "react-icons/si";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { ModeToggle } from "./modeToggle";
import { useState } from "react";
import { NavLink } from "./navLink";

export const Nav = ()=> {
    const [openMenu, setOpenMenu] = useState(false)
    return(
        <nav className={`w-screen bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-12 sm:h-16 fixed flex items-center justify-center px-5 z-50 transition-all duration-300`}>
            <div className="container w-full h-full flex justify-center items-center mx-auto">
                <div className="w-full h-full flex justify-between items-center">
                    <a href="#header">
                        <SiAlienware className="text-xl sm:text-2xl md:text-3xl hover:text-primary hover:scale-110 transition-all duration-300"/>
                    </a>
                    <ul className="md:flex items-center md:gap-8 lg:gap-10 hidden ">
                        <NavLink hook="#header" label="Home"/>
                        <NavLink hook="#aboutus" label="About us"/>
                        <NavLink hook="#services" label="Services"/>
                        <NavLink hook="#ourteam" label="Our team"/>
                        <NavLink hook="#contact" label="Contact us"/>
                    </ul>
                    <ModeToggle/>
                    
                    <div onClick={()=> setOpenMenu(true)} className="flex md:hidden text-xl">
                        <RiMenu3Fill />
                    </div>
                        <div className={`bg-black fixed flex items-end flex-col md:hidden left-0 right-0 top-0 h-screen  ${openMenu == true ? 'translate-x-0' : '-translate-x-[100vw]'}   transition-all duration-500`}>
                            <div onClick={()=> setOpenMenu(false)} className="">
                                <IoMdClose className="m-2 text-3xl"/>
                            </div>
                                <ul className="h-full  flex flex-col mx-auto gap-12 pb-28 text-xl justify-center items-center font-semibold">
                                    <a onClick={()=> setOpenMenu(false)} href="#header" className="hover:text-primary transition-all duration-300">Home</a>
                                    <a onClick={()=> setOpenMenu(false)} href="#aboutus" className="hover:text-primary transition-all duration-300">About us</a>
                                    <a onClick={()=> setOpenMenu(false)} href="#services" className="hover:text-primary transition-all duration-300">Services</a>
                                    <a onClick={()=> setOpenMenu(false)} href="#ourteam" className="hover:text-primary transition-all duration-300">Our team</a>
                                    <a onClick={()=> setOpenMenu(false)} href="#contact" className="hover:text-primary transition-all duration-300">Contato</a>
                                </ul>
                        </div>
                </div>
            </div>
        </nav>
    )
}