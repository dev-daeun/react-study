import './App.css'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Button from './components/Button';
import State from "./components/State";
import BulbButton from './components/Bulb';
import Register from './components/RegisterUser';

// Header, Main, Footer 컴포넌트는 App 컴포넌트의 자식 컴포넌트
function App() {
  const buttonProps = {
    "text": "쇼핑",
    "color": "green",
    "a": 1234,
  }
  return (
    <>
      <Header/>

      <Button text={"메일"} color={"red"}/>
      <Button text={"블로그"} color={"yellow"}/>
      <Button text={"카페"}/>
      <Button {...buttonProps /* 스프레드 연산자 활용*/}/> 
      <Button text={"자식 컴포넌트 있는 버튼"}>
        <h3>자식 컴포넌트를 버튼 컴포넌트로 넘겼습니다. 자식 컴포넌트는 children 이라는 매개변수를 통해 접근 할 수 있습니다.</h3>
      </Button>

      <Main/>

      <BulbButton/>
      <State/>
    
      <Register/>
    
      <Footer/>
    </>
  )
}

export default App
