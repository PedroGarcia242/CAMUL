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
            </>
        )
    }

    const displayTicketsPage = () => {
        return (
            <>
                <div className="info {currentPage == Pages.TICKETS ? 'fadeIn' : 'fadeOut'}">
                    <p>Tickets</p>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="navbar">
                <h1 className="text-button" onClick={() => {
                    setCurrentPage(Pages.HOME)
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }
                }>HW</h1>
                <div className="navbar-items">
                    <p className="text-button" onClick={() => {
                        setCurrentPage(Pages.INFO)
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }}>INFO</p>
                    <p className="text-button" onClick={() => {
                        setCurrentPage(Pages.TICKETS)
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }}>TICKETS</p>
                    <div className="navbar-language">
                        <p className="text-button">PT</p>
                        <p>|</p>
                        <p className="text-button">EN</p>
                    </div>
                </div>
            </div>
            {displayPage()}
            <div className="footer">
                <div className="footer-items">
                <p className="text-button">Contact</p>
                <p>|</p>
                <p className="text-button">General Information</p>
                <p>|</p>
                    <p className="text-button">Media</p>
                </div>
            </div>
        </>
    )
}

export default App
