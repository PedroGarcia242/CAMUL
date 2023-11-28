import banner1 from './assets/banner-1-image.jpg'
import banner2 from './assets/hw_poster.png'
import banner3 from './assets/infoSection_background.jpg'
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
                <div className="content">
                    <h3>
                    asdasdsa
                    </h3>
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
                }>HOME</h1>
                <div className="navbar-items">
                    <p className="text-button" onClick={() => {
                        setCurrentPage(Pages.INFO)
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }}>PROFILE</p>
                    <p className="text-button" onClick={() => {
                        setCurrentPage(Pages.TICKETS)
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }}>MENU</p>
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
