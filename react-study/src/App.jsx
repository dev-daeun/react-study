import './App.css'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// Header, Main, Footer 컴포넌트는 App 컴포넌트의 자식 컴포넌트
function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
