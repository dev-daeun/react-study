const Button = ({children, text, color = "white"}) => { // 구조 해제 할당 활용
    
    /* 클릭 이벤트 핸들러 */
    const onClickButton = (e) => {
        // e : 이벤트에 대한 정보가 들어있는 객체 (SyntheticBaseEvent 타입)
        // SyntheticBaseEvent : 브라우저 별로 서로 다른 이벤트에 대한 정보를 일관되게 취합한 객체
        console.log("onClick", e)
    }

    /* 마우스 커서 진입 이벤트 핸들러 */
    const onMouseEnterButton = (e) => {
        console.log("onMouseEnter", e)

    }

    return (
        <button onClick={onClickButton} onMouseEnter={onMouseEnterButton} style={{backgroundColor: color}}>
            {text}
            {children}
        </button>
    )
}

export default Button;