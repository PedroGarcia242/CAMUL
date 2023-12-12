import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'

import Home from './views/Home';
import Info from './views/Info';
import Profile from './views/Profile';

import LogIn from './views/LogIn';
import SignUp from './views/SignUp';

import ModuleOne from './views/moduleOne/ModuleOne';
import ModuleTwo from './views/moduleTwo/ModuleTwo';
import ModuleThree from './views/moduleThree/ModuleThree';

import Metrics from './views/moduleMetrics/Metrics';

function App() {

    var isLoggedInString = localStorage['isLoggedIn'] || 'false';
    var isLoggedIn = (isLoggedInString === "true");

    const HomePage = () => <Home />;
    const InfoPage = () => <Info />;
    const ProfilePage = () => <Profile />;

    const LogInPage = () => <LogIn />;
    const SignUpPage = () => <SignUp />;

    const ModuleOnePage = () => <ModuleOne />;
    const ModuleTwoPage = () => <ModuleTwo />;
    const ModuleThreePage = () => <ModuleThree />;

    const MetricsPage = () => <Metrics />;

    const logOut = () => {
        localStorage['isLoggedIn'] = 'false';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.forceUpdate();
    };
    //FUNCTIONS
    //navbar
    const displayNavbar = () => {
        return (
            <>
                <nav className="navbar">
                    <ul className="navbar-items left">
                        <li className="text-button"><Link to="/">HOME</Link></li>
                        <li className="text-button"><Link to="/Info">INFO</Link></li>

                    </ul>
                    <ul className="navbar-items">
                        <li className="text-button"><Link to="/ModuleOne/1">MODULE 1</Link></li>
                        <li className="text-button"><Link to="/ModuleTwo/1">MODULE 2</Link></li>
                        <li className="text-button"><Link to="/ModuleThree/1">MODULE 3</Link></li>
                    </ul>
                    <ul className="navbar-items right">
                        {isLoggedIn ? <li className="text-button"><Link to="/Profile">PROFILE</Link></li> : null}
                        {!isLoggedIn ? <li className="text-button"><Link to="/Login">LOG IN</Link></li> : null}
                        {isLoggedIn ? <li className="text-button"><Link to="/Metrics">METRICS</Link></li> : null}
                        {isLoggedIn ? <li className="text-button"><Link to="/Login" onClick={logOut}>LOG OUT</Link></li> : null}
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

                    <Route path="/LogIn" element={<LogInPage />} />
                    <Route path="/SignUp" element={<SignUpPage />} />

                    <Route path="/ModuleOne/:currentLessonNumber" element={<ModuleOnePage />} />
                    <Route path="/ModuleTwo/:currentLessonNumber" element={<ModuleTwoPage />} />
                    <Route path="/ModuleThree/:currentLessonNumber" element={<ModuleThreePage />} />

                    <Route path="/Metrics" element={<MetricsPage />} />
                    {/*
                    <Route path="/ModuleTwoL1" element={<ModuleTwoL1Page />} />
                    <Route path="/ModuleTwoL2" element={<ModuleTwoL2Page />} />
                    <Route path="/ModuleTwoL3" element={<ModuleTwoL3Page />} />
                    <Route path="/ModuleTwoL4" element={<ModuleTwoL4Page />} />
                    <Route path="/ModuleTwoL5" element={<ModuleTwoL5Page />} />
                    <Route path="/ModuleTwoQuizL1" element={<ModuleTwoQuizL1Page />} />
                    <Route path="/ModuleTwoQuizL2" element={<ModuleTwoQuizL2Page />} />
                    <Route path="/ModuleTwoQuizL3" element={<ModuleTwoQuizL3Page />} />
                    <Route path="/ModuleTwoQuizL4" element={<ModuleTwoQuizL4Page />} />
                    <Route path="/ModuleTwoQuizL5" element={<ModuleTwoQuizL5Page />} />
                    */}
                </Routes>
            </Router>
        </>
    )
}

export default App
