import { useState } from "react"

export default function Togglebutton() {

    const [inOn, setinOn] = useState(false)
    return (
        <>
            <button onClick={() => setinOn(!inOn)}>
                {inOn ? "ON " : "OFF"} 버튼
            </button>
        </>
    )
}