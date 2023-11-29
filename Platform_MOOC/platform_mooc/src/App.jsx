import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import profile_background from './assets/plataforma_fundo1.png'

import './App.css'

function App() {

    const Home = () => displayTicketsPage();
    const About = () => displayInfoPage();
    const Profile = () => displayProfilePage();

    //FUNCTIONS

    //home Page content
    const displayProfilePage = () => {
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

    //navbar
    const displayNavbar = () => {
        return (
            <>
                <nav className="navbar">
                    <li className="text-button"><Link to="/">HOME</Link></li>
                    <ul className="navbar-items">
                        <li className="text-button"><Link to="/profile">PROFILE</Link></li>
                        <li className="text-button"><Link to="/about">ABOUT</Link></li>
                    </ul>
                </nav>
            </>
        )
    }

    //footer
    const displayFooter = () => {
        return (
            <>
                <div className="footer">
                </div>
            </>
        )
    }

    //RETURN
    //the base content of the page
    return (
        <>
            <Router>
                {displayNavbar()}
                <Routes>
                    <Route path="/" element={ <Home/> } />
                    <Route path="/about" element={ <About/> } />
                    <Route path="/profile" element={ <Profile/> } />
                </Routes>
                {displayFooter()}
            </Router>
        </>
    )
}

export default App
