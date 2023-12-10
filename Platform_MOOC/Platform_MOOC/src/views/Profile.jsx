import ProgressBar from 'react-bootstrap/ProgressBar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

import profile_background from '../assets/profile_bg.png';
import module1 from '../assets/module_1.png';
import module2 from '../assets/module_2.png';
import module3 from '../assets/module_3.png';

const Profile = () => {
    const navigate = useNavigate();

    const handleModuleOneClick = () => {
        navigate('/ModuleOne/1');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleModuleTwoL1Click = () => {
        navigate('/ModuleTwoL1');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleModuleThreeClick = () => {
        navigate('/ModuleThree/1');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    //footer
    const displayFooter = () => {
        return (
            <>
                <div className="footer-profile">
                </div>
            </>
        )
    }

    return (
        <>
            <div className="content-profile">
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

                        <Row className="modules">
                            <Col className="module_one" md={12} xl={4}>
                                <div className="module_one_banner" onClick={handleModuleOneClick} >
                                    <img className="chapter_immage" src={module1} alt="" />
                                </div>
                                <div className="module_one_details"/>
                            </Col>

                            <Col className="module_two" md={12} xl={4}>
                                <div className="module_two_banner" onClick={handleModuleTwoL1Click} >
                                    <img className="chapter_immage" src={module2} alt="" />
                                </div>
                                <div className="module_two_details" />
                            </Col>

                            <Col className="module_three" md={12} xl={4}>
                                <div className="module_three_banner" onClick={handleModuleThreeClick} >
                                    <img className="chapter_immage" src={module3} alt="" />
                                </div>
                                <div className="module_three_details" />
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            {displayFooter()}
        </>
    );
};

export default Profile;