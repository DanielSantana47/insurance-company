"use client"

import Lottie from "lottie-react"
import { TitleContact } from "./title"
import animation from '@/utils/Animation - 1714685667416.json'
import { LoginForm } from "./loginForm"

export const Contact = ()=> {
    return(
        <footer id="contact" className="container w-screen ">
            <TitleContact/>
            <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="w-full lg:flex-1">
                    <LoginForm/>
                </div>
                <Lottie className="flex-1" animationData={animation}/>
            </div>
        </footer>   
    )
}