import './App.css'


function Header() {
  return (
    <header>
      <h1> This is Header</h1>
    </header>
  )
}


// Header 컴포넌트는 App 컴포넌트의 자식 컴포넌트
function App() {
  return (
    <>
      <Header/>
      <h1>Hello, React!</h1>
    </>
  )
}

export default App
