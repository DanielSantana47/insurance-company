"use client"

import Lottie from "lottie-react"
import { TitleContact } from "./title"
import animation from '@/utils/Animation - 1714600053151.json'

export const Contact = ()=> {
    return(
        <footer id="contact" className="container w-screen ">
            <TitleContact/>
            <div className="flex flex-2 items-center justify-center">
                <Lottie className="w-[300px]" animationData={animation}/>
                <div className="flex-1">
                    
                </div>
            </div>
        </footer>   
    )
}