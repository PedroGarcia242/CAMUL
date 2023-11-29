import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import profile_background from '../assets/plataforma_fundo1.png';

import './Profile.css';
import '../App.css';

const Profile = () => {
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
    );
};

export default Profile;