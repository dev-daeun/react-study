import {useState} from "react";

/* Hook 의 특징
1. 함수 컴포넌트 내부에서만 호출 가능
2. 분기문 내에서 호출할 수 없음
3. 커스텀 훅을 만들 수 있음
*/


// 커스텀 훅 만드는 방법 : 접두사에 'use' 붙이기
const useInput = () => {
    const [input, setInput] = useState();
    const onChange = (e) => {
        console.log(e.target.value);
        setInput(e.target.value);
    }
    return [input, onChange];
};

export default useInput;