import React, { useEffect } from "react";

const ExUserEffect01 = () => {

    useEffect( () => {
        console.log("컴포넌트가 마운트 되었습니다"),
        []})
    return(
        <div>
            <h1>안녕 ExUserEffect01</h1>
        </div>
    );
};

export default ExUserEffect01;