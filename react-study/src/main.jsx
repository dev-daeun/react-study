import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// App: 루트 컴포넌트
createRoot(document.getElementById('root')).render(
    <App />
)
