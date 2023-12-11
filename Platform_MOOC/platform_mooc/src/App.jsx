import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'

import Home from './views/Home';
import Info from './views/Info';
import Profile from './views/Profile';

import Login from './views/Login';

import ModuleOne from './views/moduleOne/ModuleOne';
import ModuleTwo from './views/moduleTwo/ModuleTwo';
import ModuleThree from './views/moduleThree/ModuleThree';

import Metrics from './views/moduleMetrics/Metrics';


/*
import ModuleTwoL1 from './views/moduleTwo/ModuleTwoL1';
import ModuleTwoL2 from './views/moduleTwo/ModuleTwoL2';
import ModuleTwoL3 from './views/moduleTwo/ModuleTwoL3';
import ModuleTwoL4 from './views/moduleTwo/ModuleTwoL4';
import ModuleTwoL5 from './views/moduleTwo/ModuleTwoL5';
import ModuleTwoQuizL1 from './views/moduleTwo/ModuleTwoQuizL1';
import ModuleTwoQuizL2 from './views/moduleTwo/ModuleTwoQuizL2';
import ModuleTwoQuizL3 from './views/moduleTwo/ModuleTwoQuizL3';
import ModuleTwoQuizL4 from './views/moduleTwo/ModuleTwoQuizL4';
import ModuleTwoQuizL5 from './views/moduleTwo/ModuleTwoQuizL5';
*/

function App() {

    window.isLoggedIn = true;

    const HomePage = () => <Home />;
    const InfoPage = () => <Info />;
    const ProfilePage = () => <Profile />;

    const LoginPage = () => <Login />;

    const ModuleOnePage = () => <ModuleOne />;
    const ModuleTwoPage = () => <ModuleTwo />;
    const ModuleThreePage = () => <ModuleThree />;

    const MetricsPage = () => <Metrics />;

    /*
    const ModuleTwoL1Page = () => <ModuleTwoL1 />;
    const ModuleTwoL2Page = () => <ModuleTwoL2 />;
    const ModuleTwoL3Page = () => <ModuleTwoL3 />;
    const ModuleTwoL4Page = () => <ModuleTwoL4 />;
    const ModuleTwoL5Page = () => <ModuleTwoL5 />;
    const ModuleTwoQuizL1Page = () => <ModuleTwoQuizL1 />;

    const ModuleTwoQuizL2Page = () => <ModuleTwoQuizL2 />;
    const ModuleTwoQuizL3Page = () => <ModuleTwoQuizL3 />;
    const ModuleTwoQuizL4Page = () => <ModuleTwoQuizL4 />;
    const ModuleTwoQuizL5Page = () => <ModuleTwoQuizL5 />;
    */

    //FUNCTIONS
    //navbar
    const displayNavbar = () => {
        return (
            <>
                <nav className="navbar">
                    <ul className="navbar-items">
                        <li className="text-button"><Link to="/">HOME</Link></li>
                        <li className="text-button"><Link to="/info">INFO</Link></li>
                        <li className="text-button"><Link to="/profile">PROFILE</Link></li>
                        <li className="text-button"><Link to="/Login">LOGIN</Link></li>
                        <li className="text-button"><Link to="/Metrics">METRICS</Link></li>

                    </ul>
                    <ul className="navbar-items">
                        <li className="text-button"><Link to="/ModuleOne/1">MODULE 1</Link></li>
                        <li className="text-button"><Link to="/ModuleTwo/1">MODULE 2</Link></li>
                        <li className="text-button"><Link to="/ModuleThree/1">MODULE 3</Link></li>
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

                    <Route path="/Login" element={<LoginPage />} />

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
