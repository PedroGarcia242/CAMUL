import banner1 from './assets/banner-1-image_.jpg'
import './App.css'
import { useState } from 'react'

const Pages = { HOME: "HOME", INFO: "INFO", TICKETS: "TICKETS" }

function App() {
    const [currentPage, setCurrentPage] = useState(Pages.HOME);

    const displayPage = () => {
        switch (currentPage) {
            case Pages.INFO:
                return displayInfoPage();
            case Pages.TICKETS:
                return displayTicketsPage();
            default:
                return displayHomePage();
        }
    }

    const displayHomePage = () => {
        return (
            <>
                <div className="banner">
                    <img src={banner1} alt="banner" />
                    <p>Hell on Water</p>
                </div>
                <div className="card">
                    <p>PORTO - PORTUGAL</p>
                    <p>13 &gt; 15 AUGUST</p>
                </div>
            </>
        )
    }

    const displayInfoPage = () => {
        return (
            <>
                <div className="info">
                    <p>Info</p>
                </div>
                <div className="card">
                    <p>PORTO - PORTUGAL</p>
                    <p>13 &gt; 15 AUGUST</p>
                </div>
            </>
        )
    }

    const displayTicketsPage = () => {
        return (
            <>
                <div className="info">
                    <p>Tickets</p>
                </div>
                <div className="card">
                    <p>PORTO - PORTUGAL</p>
                    <p>13 &gt; 15 AUGUST</p>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="navbar">
                <h1 className="text-button" onClick={() => setCurrentPage(Pages.HOME)}>HW</h1>
                <div className="navbar-items">
                    <p className="text-button" onClick={() => setCurrentPage(Pages.INFO)}>INFO</p>
                    <p className="text-button" onClick={() => setCurrentPage(Pages.TICKETS)}>TICKETS</p>
                    <div className="navbar-language">
                        <p className="text-button">PT</p>
                        <p>|</p>
                        <p className="text-button">EN</p>
                    </div>
                </div>
            </div>
            {displayPage()}
        </>
    )
}

export default App
