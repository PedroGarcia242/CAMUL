import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css'

import Home from './views/Home';
import Info from './views/Info';
import Profile from './views/Profile';
import ModuleOne from './views/moduleOne/ModuleOne';

function App() {

    const HomePage = () => <Home />;
    const InfoPage = () => <Info />;
    const ProfilePage = () => <Profile />;
    const ModuleOnePage = () => <ModuleOne />;

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

    //RETURN
    //the base content of the page
    return (
        <>
            <Router>
                {displayNavbar()}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/Info" element={ <InfoPage /> } />
                    <Route path="/Profile" element={<ProfilePage />} />
                    <Route path="/ModuleOne" element={<ModuleOnePage />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
