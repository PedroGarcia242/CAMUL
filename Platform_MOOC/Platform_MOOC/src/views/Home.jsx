import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import homeBackground from '../assets/home.png';
import transcriptImage from '../assets/transcriptImage.png';

const Home = () => {

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


    const displayFooter = () => {
        return (
            <>
                <div className="footer-home-page">
                </div>
            </>
        )
    }

    const moduleOneBlock = () => {
        return (
            <>
                <div className="block" onClick={handleModuleOneClick} >
                    <div className="block-content">
                        <h3 className="block-title">
                            Module 1
                        </h3>
                        <h5 className="block-text">
                            Learn the basics of Integrated Marketing Communication
                        </h5>
                    </div>
                </div>
            </>
        )
    }

    const moduleTwoBlock = () => {
        return (
            <>
                <div className="block" onClick={handleModuleTwoL1Click} >
                    <div className="block-content">
                        <h3 className="block-title">
                            Module 2
                        </h3>
                        <h5 className="block-text">
                            Learn about the ethics and regulations present in the Marketing field
                        </h5>
                    </div>
                </div>
            </>
        )
    }

    const moduleThreeBlock = () => {
        return (
            <>
                <div className="block" onClick={handleModuleThreeClick} >
                    <div className="block-content">
                        <h3 className="block-title">
                            Module 3
                        </h3>
                        <h5 className="block-text">
                            Learn how to create, manage and monitorize a Marketing Plan
                        </h5>
                    </div>
                </div>
            </>
        )
    }



    return (
        <>
            <div className="content-home-page">
                <img className="background" src={homeBackground} alt="" />

                <div className="home-header">
                    <h2>Learn With Us</h2>
                    <div className="home-header-content">
                        <h5>Looking for guidance on where to start your marketing journey? You came to the right place.</h5>
                        <h5>Explore our content, learn for free.</h5>
                    </div>
                </div>

                <Container className="mb-4">
                    <Row>
                        <Col xl={8}>
                            <div className="video-container-home-page">
                                <div className="video-background-home-page">
                                    <iframe
                                        src="https://www.youtube.com/embed/Ufs0Y6HkPD4"
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4}>
                            <div className="mooc-details">
                                {moduleOneBlock()}
                                {moduleTwoBlock()}
                                {moduleThreeBlock()}
                            </div>
                        </Col>
                    </Row>
                </Container>

                <div className="module-details pt-4">
                    <h1>Module Details</h1>
                    <div className="module-details-content">
                    </div>
                </div>
            </div>
            {displayFooter()}
        </>
    );
};

export default Home;