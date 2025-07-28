import React, { useState } from "react";


const getNextState = (currentState) => {
    const init = "INIT";
    const processing = "PROCESSING";
    const completed = "COMPLETED";

    if (currentState == init) {
        return processing
    }
    else if (currentState == processing) {
        return completed
    }
    else {
        return completed
    }
}

const Bulb = () => {
    const [count, setCount] = useState(0);
    const [light, setLight] = useState("INIT");

    return (
        <>
            <div>
                <h3>전구 프로세싱</h3>
                <button onClick={() => {
                    setLight(getNextState(light));
                }}>{light}</button>
            </div>
            <div>
                <h3>숫자 늘리기</h3>
                <button onClick={() => {
                    setCount(count + 1);
                }}>{count}</button>
            </div>
        </>
   )
}

export default Bulb;