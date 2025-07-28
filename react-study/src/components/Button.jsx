const Button = ({children, text, color = "white"}) => { // 구조 해제 할당 활용
    return (
        <button style={{backgroundColor: color}}>
            {text}
            {children}
        </button>
    )
}

export default Button;