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
        <nav className={`w-screen h-12 sm:h-16 fixed flex items-center justify-center px-5 z-50 shadow-sm transition-all duration-300`}>
            <div className="container w-full h-full flex justify-center items-center mx-auto">
                <div className="w-full h-full flex justify-between items-center">
                    <a href="#header">
                        <SiAlienware className="text-xl sm:text-2xl md:text-3xl hover:text-primary hover:scale-110 transition-all duration-300"/>
                    </a>
                    <ul className="sm:flex items-center gap-10 md:gap-16 hidden sm:text-md md:text-lg lg:text-lg">
                        <NavLink hook="#header" label="Home"/>
                        <NavLink hook="#aboutus" label="About us"/>
                        <NavLink hook="#services" label="Services"/>
                        <NavLink hook="#ourteam" label="Our team"/>
                        <NavLink hook="#contact" label="Contact us"/>
                    </ul>
                    <ModeToggle/>
                    
                    <div onClick={()=> setOpenMenu(true)} className="flex sm:hidden text-xl">
                        <RiMenu3Fill />
                    </div>
                        <div className={`fixed flex items-end flex-col sm:hidden left-0 right-0 top-0 bottom-0 transition-all duration-500`}>
                            <div onClick={()=> setOpenMenu(false)} className="">
                                <IoMdClose className="m-2 text-3xl"/>
                            </div>
                                <ul className="h-full  flex flex-col mx-auto gap-12 pb-28 text-xl justify-center items-center font-semibold">
                                    <a onClick={()=> setOpenMenu(false)} href="#header" className="hover:text-primary transition-all duration-300">Home</a>
                                    <a onClick={()=> setOpenMenu(false)} href="#technologies" className="hover:text-primary transition-all duration-300">Tecnologias</a>
                                    <a onClick={()=> setOpenMenu(false)} href="#projects" className="hover:text-primary transition-all duration-300">Projetos</a>
                                    <a onClick={()=> setOpenMenu(false)} href="#contact" className="hover:text-primary transition-all duration-300">Contato</a>
                                </ul>
                        </div>
                </div>
            </div>
        </nav>
    )
}