import React, { useEffect, useState } from "react";

const ExUserEffect02 = () => {

    const [count, setCount] = useState(0)
    useEffect(
        () => {
            console.log(`count 값이 바꾸리때마다 실행 ${count}`)
        }, [count])
    return (
        <div>
            <p>카운트 {count}</p>
            <button onClick={() => setCount(count + 1)}>++1증가</button>
        </div>
    )

}

export default ExUserEffect02;