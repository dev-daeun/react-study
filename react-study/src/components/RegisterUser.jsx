import React, { useState, useRef } from "react";



const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        nation: "",
        bio: "",
    });
    const onChange = (e) => {
        console.log("name: ", e.target.name, "value: ", e.target.value)
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    }

    // useRef(): DOM 에 직접 접근하는 객체 리턴. state 에 의한 리랜더링에 영향 받지 않음.
    const inputNameRef = useRef();
    const inputBirthRef = useRef();
    const onSubmit = () => {
        if (input.name == "") {
            inputNameRef.current.focus();
        }
        else if (input.birth == "") { 
            inputBirthRef.current.focus();
        }
    };
    return (
        <>
            <h3>회원가입</h3>
            <h4>이름</h4>
            <div>
                <input name="name" ref={inputNameRef} placeholder="이름" onChange={onChange} value={input.name}/>
            </div>
            <h4>생년월일</h4>
            <div>
                <input name="birth" ref={inputBirthRef} type="date" onChange={onChange} value={input.birth}/>
            </div>
            <h4>국적</h4>
            <div>
                <select name="nation" onChange={onChange} value={input.nation}>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>
            <h4>자기소개</h4>
            <div>
                <textarea name="bio" onChange={onChange} value={input.bio}/>
            </div>
            <button onClick={onSubmit}>제출</button>
        </>
    )
}

export default Register;