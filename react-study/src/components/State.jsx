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


/* 컴포넌트가 리랜더링 되는 경우 
1. 자기가 관리하는 state 변경될 경우
2. 자기가 제공받는 property 변경될 경우
3. 부모 컴포넌트에 리랜더링 발생하는 경우
*/
const State = () => {
    const [count, setCount] = useState(0);
    const [state, setState] = useState("INIT");

    return (
        <>
            <div>
                <h3>상태 프로세싱</h3>
                <button onClick={() => {
                    setState(getNextState(state));
                }}>{state}</button>
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

export default State;