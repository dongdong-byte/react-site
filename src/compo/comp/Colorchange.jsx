import { useState } from "react"

export default function Colorchange() {
    const[color ,setcolor] =useState("green")

    return (
        <>
            <h2 style={{color}}>색상변경</h2>
            <button onClick={() => setcolor("red")}>빨강</button>
            <button onClick={() => setcolor("yellow")}>노랑</button>
            <button onClick={() => setcolor("lightgreen")}>초록</button>
        </>
    )
}