import React, { useState } from "react";



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
    return (
        <>
            <h3>회원가입</h3>
            <h4>이름</h4>
            <div>
                <input name="name" placeholder="이름" onChange={onChange} value={input.name}/>
            </div>
            <h4>생년월일</h4>
            <div>
                <input name="birth" type="date" onChange={onChange} value={input.birth}/>
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
        </>
    )
}

export default Register;