import React, { useEffect, useState } from "react";


const ExUserEffect05 =() =>{
const[width,setwidth] =useState (window.innerWidth)
useEffect(() => {
    const hResize = () => setwidth(window.innerWidth)

    window.addEventListener("resize" ,hResize)
    console.log("윈도우 리사이즈 리스너 등록")
    return()=>{
        window.removeEventListener("resize",hResize)
        console.log("윈도우 리사이지 해제")
    }
},[])

    return(
        <div>
            <h1>현재 창의 너비 : {width}</h1>
        </div>
    )
}

export default ExUserEffect05;