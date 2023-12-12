import ProgressBar from 'react-bootstrap/ProgressBar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

import profile_background from '../assets/background_texture.png';
import module1 from '../assets/module_1.png';
import module2 from '../assets/module_2.png';
import module3 from '../assets/module_3.png';
import quiz1 from '../assets/quiz_one.png';
import quiz2 from '../assets/quiz_two.png';
import quiz3 from '../assets/quiz_three.png';
import userIcon from '../assets/user_icon.png';
import ytubefooter from '../assets/youtube_footer.png';

import igramfooter from '../assets/instagram_footer.png';
const Profile = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const navigate = useNavigate();

    const handleModuleOneClick = () => {
        navigate('/ModuleOne/1');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleModuleTwoL1Click = () => {
        navigate('/ModuleTwo/1');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleModuleThreeClick = () => {
        navigate('/ModuleThree/1');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const goToYoutubeChannel = () => {
        const url = 'https://www.youtube.com/@CAMUL2023';
        window.open(url, '_blank');
    };
    const goToInstaProfile = () => {
        const url = 'https://www.instagram.com/mrktng_cmmnctn/?next=%2Fd';
        window.open(url, '_blank');
    };

    const handleQuizClick = (module) => {
        var url;
        switch (module) {
            case 2:
                url = "https://docs.google.com/forms/d/e/1FAIpQLSf7OFIM22WWyIzHGZR55LKJ_v8nyB7SjtEFGd9zWOhRgQQurQ/viewform";
                break;
            case 3:
                url = "https://docs.google.com/forms/d/e/1FAIpQLSdogYZ7HQ0iP4VF5NO4uWxm75lWT16TrZJWcUn0xleNH0zuRw/viewform?pli=1";
                break;
            default:
                url = "https://docs.google.com/forms/d/e/1FAIpQLSdqUsUVb7jxBc2lQHWOOcr4iRhPGNOl42dE1M36NvaIfGLD7w/viewform";
                break;
        }
        window.open(url, '_blank');
    };

    const moduleOneDetails = () => {
        return (
            <>
                <div className="module-one-details" onClick={() => handleQuizClick(1)}>
                    <img src={quiz1} alt="Quiz Module One" />
                </div>
            </>
        )
    }

    const moduleTwoDetails = () => {
        return (
            <>
                <div className="module-two-details" onClick={() => handleQuizClick(2)}>
                    <img src={quiz2} alt="Quiz Module Two"/>
                </div>
            </>
        )
    }

    const moduleThreeDetails = () => {
        return (
            <>
                <div className="module-three-details" onClick={() => handleQuizClick(3)}>
                    <img src={quiz3} alt="Quiz Module Three" />
                </div>
            </>
        )
    }

    //footer
    const displayFooter = () => {
        return (
            <>
               <div className="footer-profile">

                    <div onClick={goToYoutubeChannel}>
                        <img className="social-icon" src={ytubefooter} alt="" />
                    </div>

                    <div onClick={goToInstaProfile}>
                        <img className="social-icon" src={igramfooter} alt="" />
                    </div>

                </div>
            </>
        )
    }

    return (
        <>
            <div className="content-profile">
                <img className="background-home" src={profile_background} alt="" />

                <div className="banner" />

                <div style={{ zIndex: 10, position: 'relative' }}>
                    <div className="group">
                        <div className="profile">
                            <div className="picture" > 
                                <img src={userIcon} alt="Profile Picture"/>
                            </div>

                            <div className="about">
                                <h2>About Me</h2>

                                <div className="square">
                                    <h6>Here the user can write about himself, his hobbies, his goals, etc. He can also use this to take notes about the course.</h6>
                                </div>
                            </div>
                        </div>
                        <div className="mooc">
                            <h2>User Name</h2>
                            <ProgressBar striped variant="success" now={70} />

                            <Row className="modules">
                                <Col className="module_one" md={12} xl={4}>
                                    <div className="module_one_banner" onClick={handleModuleOneClick} >
                                        <img className="chapter_immage" src={module1} alt="" />
                                    </div>
                                    {moduleOneDetails()}
                                </Col>

                                <Col className="module_two" md={12} xl={4}>
                                    <div className="module_two_banner" onClick={handleModuleTwoL1Click} >
                                        <img className="chapter_immage" src={module2} alt="" />
                                    </div>
                                    {moduleTwoDetails()}
                                </Col>

                                <Col className="module_three" md={12} xl={4}>
                                    <div className="module_three_banner" onClick={handleModuleThreeClick} >
                                        <img className="chapter_immage" src={module3} alt="" />
                                    </div>
                                    {moduleThreeDetails()}
                                </Col>
                            </Row>
                        </div>
                    </div>
                    {displayFooter()}
                </div>
            </div>
        </>
    );
};

export default Profile;