import { useState } from 'react'
import banner1 from './assets/banner-1-image.jpg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="navbar">
                <h1>HW</h1>
                <div className="navbar-items">
                    <a>INFO</a>
                    <a>TICKETS</a>
                    <div className="navbar-language">
                        <a>PT</a>
                        <a>|</a>
                        <a>EN</a>
                    </div>
                </div>
            </div>
            <div className="banner">
                <img src={banner1} className="banner-image" alt="banner" />
                <a>Hell on Water</a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
