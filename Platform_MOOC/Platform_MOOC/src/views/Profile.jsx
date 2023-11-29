import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

import profile_background from '../assets/plataforma_fundo1.png';

import './Profile.css';
import '../App.css';

const Profile = () => {
    const navigate = useNavigate();

    const handleModuleOneClick = () => {
        navigate('/');
    };

    return (
        <>
            <div className="content">
                <img className="background" src={profile_background} alt="" />
                <div className="banner" />

                <div className="group">
                    <div className="profile">
                        <div className="picture" />

                        <div className="about">
                            <h2>About Me</h2>

                            <div className="square" />
                        </div>
                    </div>
                    <div className="mooc">
                        <ProgressBar striped variant="success" now={70} />

                        <div className="modules">
                            <div className="module_one">
                                <div className="module_one_banner" onClick={handleModuleOneClick}/>
                                <div className="module_one_details"/>
                            </div>

                            <div className="module_two">
                                <div className="module_two_banner" />
                                <div className="module_two_details" />
                            </div>

                            <div className="module_three">
                                <div className="module_three_banner" />
                                <div className="module_three_details" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;