"use client"
import { useEffect } from "react"

interface ContainerProps{
    children:React.ReactNode
}
const Container :React.FC<ContainerProps> = ({children}) => {
    


    return ( 
    <div className=" relative  max-w-[1920px] xl:px-20 md:px-2  ml-0 w-full  ">
        {children}
    </div> );
}

export default Container;