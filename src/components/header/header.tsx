"use client"

import { Title } from "./title"
import Lottie, {LottieRefCurrentProps} from 'lottie-react'
import svg from "@/utils/Animation - 1714424930989.json"
import { useRef } from "react"

export const Header = ()=> {
    const phoneref = useRef<LottieRefCurrentProps>(null)
    return(
        <header id="header" className="container h-screen">
            <div className="w-full h-full flex flex-col items-center justify-center">
                <h1 className="">
                    <Title/>
                </h1>
                <div className="">
                    <Lottie onComplete={()=>{
                        phoneref.current?.setDirection(1)
                        phoneref.current?.play()
                    }} lottieRef={phoneref} loop={false} animationData={svg} className="w-[500px]"/>
                </div>
            </div>
        </header>
    )
}