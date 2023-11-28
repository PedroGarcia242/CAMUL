import profile_background from './assets/plataforma_fundo1.png'

import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import { useState } from 'react'

//definition of possible pages
const Pages = { HOME: "HOME", INFO: "INFO", TICKETS: "TICKETS" }

//THIS IS CURRENTLY A ONE PAGE APP, WE CAN CHANGE IT LATER
function App() {
    //create a variable, assign a value
    const [currentPage, setCurrentPage] = useState(Pages.HOME);

    //FUNCTIONS
    
    //displays the content of the currently selected page
    const displayPage = () => {
        //check currentPage
        switch (currentPage) {
            case Pages.INFO: //if currentPage == Pages.INFO 
                return displayInfoPage(); //display InfoPage content
            case Pages.TICKETS: //if currentPage == Pages.Tickets 
                return displayTicketsPage(); //display TicketsPage content
            default: //else 
                return displayHomePage(); //display HomePage content
        }
    }

    //home Page content
    const displayHomePage = () => {
        //returns ONE html element
        return (
            //create one element and put the desired html inside
            <>
                <div className="content">
                    <img className="background" src={profile_background} alt=""/>
                    <div className="banner"/>

                    <div className="group">
                        <div className="profile">
                            <div className="picture"/>

                            <div className="about">
                                <h2>About Me</h2>

                                <div className="square"/>
                            </div>
                        </div>
                        <div className="mooc">
                            <ProgressBar striped variant="success" now={70} />

                            <div className="modules">
                                <div className="module_one">

                                </div>
                                <div className="module_two">

                                </div>
                                <div className="module_three">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    //info Page content
    const displayInfoPage = () => {
        return (
            <>
                <div className="info">
                    <p>Info</p>
                </div>
            </>
        )
    }

    //tickets Page content
    const displayTicketsPage = () => {
        return (
            <>
                <div className="info {currentPage == Pages.TICKETS ? 'fadeIn' : 'fadeOut'}">
                    <p>Tickets</p>
                </div>
            </>
        )
    }

    //RETURN
    //the base content of the page
    return (
        <>
            <div className="navbar">
                <h1 className="text-button" onClick={() => {
                    setCurrentPage(Pages.HOME)
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}>
                    HOME
                </h1>

                <div className="navbar-items">
                    <p className="text-button" onClick={() => {
                        setCurrentPage(Pages.INFO)
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }}>
                        PROFILE
                    </p>

                    <p className="text-button" onClick={() => {
                        setCurrentPage(Pages.TICKETS)
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }}>
                        MENU
                    </p>
                </div>
            </div>

            {displayPage()}

            <div className="footer">
            </div>
        </>
    )
}

export default App
