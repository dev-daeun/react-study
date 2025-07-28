import "./Main.css"


const SignIn = () => {
    const user = {
        "name": "자두",
        "isLoggedIn": true,
    }
    if (user.isLoggedIn) {
         return (
            <div className="logout">로그아웃</div>
         )
    } else {
        return (
            <div>로그인</div>
        )
    }
}

const Main = () => {
    // 1. 컴포넌트가 리턴하는 HTML doc 내에서 자바스크립트 표현식 사용 가능
    // 2. 단 숫자, 문자, 배열 외에 다른 타입의 객체는 표현식에 사용 불가능
    // 3. 컴포넌트가 리턴하는 HTML doc 내에서는 최상위 태그가 1개만 있어야 함 ex) 아래의 경우 main 태그와 동일한 계층에 있는 다른 태그가 있으면 안됨 
    
    const n = Math.floor(Math.random() * 10);

    return (
        <main>
            <SignIn/>
            <p>랜덤한 숫자 {n} : {n % 2 == 0 ? "짝수" : "홀수"}</p>
            <p>{true}{undefined}{null}{/* 출력 안됨 */}</p> 
        </main>
    )
}

export default Main