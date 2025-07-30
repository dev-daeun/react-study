import React, { useState, useEffect, useRef } from "react";


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



/* 컴포넌트의 생애주기
1. mount: 최초로 랜더링
2. update: mount 이후 리랜더링
3. unmount: DOM 제거 및 메모리에서 관련 리소스 삭제
*/
const Even = () => {
    const isMounted = useRef();
    isMounted.current = false;

    /* Even 컴포넌트가 mount 되었을 때 콜백 수행 (비어있는 dependency array 매개변수로 넘김) */
    useEffect(() => {
        console.log("Even component mounted");
    }, []);

    /* Even 컴포넌트가 update 될 때마다 콜백 수행 (dependency 매개변수 넘겨주지 않음) */
    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            return;
        }
        console.log("Even component updated");
    });

    /* Even 컴포넌트가 unmount 될 때 콜백 수행 ( 콜백 함수 내부에서 cleanup 함수 리턴) */
    useEffect(() => {
        return () => {
            console.log("Even component unmounted");
        };
    }, []); 

    return <p>짝수입니다.</p>
};



/* 컴포넌트가 리랜더링 되는 경우 
1. 자기가 관리하는 state 변경될 경우
2. 자기가 제공받는 property 변경될 경우
3. 부모 컴포넌트에 리랜더링 발생하는 경우
*/
const State = () => {
    const [count, setCount] = useState(0);
    const [state, setState] = useState("INIT");

    /* 특정 state/ref 가 바뀌었을 때마다 effect 콜백 수행 (dependency array 내에 ) */
    useEffect(() => {
        console.log("count updated");
    }, [count]);

    
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
            { count % 2 == 0 ? <Even/> : <></>}
        </>
   )
}

export default State;