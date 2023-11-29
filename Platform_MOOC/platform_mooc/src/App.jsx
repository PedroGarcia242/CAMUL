import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css'
import Home from './views/Home';
import Info from './views/Info';
import Profile from './views/Profile';

function App() {

    const HomePage = () => <Home />;
    const InfoPage = () => <Info />;
    const ProfilePage = () => <Profile />;

    //FUNCTIONS
    //navbar
    const displayNavbar = () => {
        return (
            <>
                <nav className="navbar">
                    <li className="text-button"><Link to="/">HOME</Link></li>
                    <ul className="navbar-items">
                        <li className="text-button"><Link to="/profile">PROFILE</Link></li>
                        <li className="text-button"><Link to="/info">INFO</Link></li>
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
                    <Route path="/" element={<HomePage />} />
                    <Route path="/info" element={ <InfoPage /> } />
                    <Route path="/profile" element={<ProfilePage />} />
                </Routes>
                {displayFooter()}
            </Router>
        </>
    )
}

export default App
