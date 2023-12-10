import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Accordion from 'react-bootstrap/Accordion';

import homeBackground from '../assets/home.png';

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

    const moduleOneLessonOne = () => {
        return (
            <>
                <div className="lesson-content">
                    <h5 className="mb-3">Lesson 1: Basics of Communication and Marketing (IMC)</h5>
                    <h6> - Objective: Understand what is the strategic approach of IMC and the necessity of Communication in the Marketing field</h6>
                    <h6> - Chapters: Introduction to Communication and Marketing; The IMC - Integrated Marketing Communications </h6>
                </div>
            </>
        )
    }

    const moduleOneLessonTwo = () => {
        return (
            <>
                <div className="lesson-content">
                    <h5 className="mb-3">Lesson 2: Consumer Psychology</h5>
                    <h6> - Objective: Understand how the consumer behaves, such as their motivations, perceptions, buying behaviour and the psychological factors involved in decision making</h6>
                    <h6> - Chapters: Consumer Behavior in Marketing; Motivation in Marketing Communication; Psychological Techniques in Marketing </h6>
                </div>
            </>
        )
    }

    const moduleOneLessonThree = () => {
        return (
            <>
                <div className="lesson-content">
                    <h5 className="mb-3">Lesson 3: Market Research: Methods and Tendencies</h5>
                    <h6> - Objective: Learn about the most recent market tendencies, as well as qualitative and quantitative research methods, data analysis and interpretation</h6>
                    <h6> - Chapters: Introduction to Market Research; Types of Market Research; Tendencies in Market Research; Integration with IMC</h6>
                </div>
            </>
        )
    }

    const moduleOneLessonFour = () => {
        return (
            <>
                <div className="lesson-content">
                    <h5 className="mb-3">Lesson 4: Media Planning</h5>
                    <h6> - Objective: Understand the importance of media planning when it comes to reaching the target audience</h6>
                    <h6> - Chapters: Introduction to Media Planning; Development Process of a Media Plan </h6>
                </div>
            </>
        )
    }

    const moduleOneLessonFive = () => {
        return (
            <>
                <div className="lesson-content">
                    <h5 className="mb-3">Lesson 5: Brand Loyalty and Customer Retention</h5>
                    <h6> - Objective: Learn how to build a strong brand and strategies for customer retention and churn reduction</h6>
                    <h6> - Chapters: Definitions; The Customer Journey; Strategies for building brand loyalty and retain customers </h6>
                </div>
            </>
        )
    }

    const moduleOneDetails = () => {
        return (
            <>
                <div className="details-module" >
                    <div className="details-module-title">
                        <h4>Essential Concepts of Integrated Marketing Communication (IMC)</h4>
                    </div>
                    <div className="details-module-content">
                        <Tabs
                            defaultActiveKey="lesson-1"
                            transition={false}
                            id="noanim-tab-example"
                            className="mb-3"
                            variant="underline"
                            fill
                        >
                            <Tab eventKey="lesson-1" title="Lesson One">
                                {moduleOneLessonOne()}
                            </Tab>
                            <Tab eventKey="lesson-2" title="Lesson Two">
                                {moduleOneLessonTwo()}
                            </Tab>
                            <Tab eventKey="lesson-3" title="Lesson Three">
                                {moduleOneLessonThree()}
                            </Tab>
                            <Tab eventKey="lesson-4" title="Lesson Four">
                                {moduleOneLessonFour()}
                            </Tab>
                            <Tab eventKey="lesson-5" title="Lesson Five">
                                {moduleOneLessonFive()}
                            </Tab>
                        </Tabs>
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

                <div className="home-video">
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
                </div>


                <div className="module-details">
                    <h2 className="mb-4">Module Details</h2>
                    <div className="module-details-content">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="module-one">Module One</Accordion.Header>
                                <Accordion.Body>
                                    {moduleOneDetails()}
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header className="module-two">Module Two</Accordion.Header>
                                <Accordion.Body>
                                    {moduleOneDetails()}
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header className="module-three">Module Three</Accordion.Header>
                                <Accordion.Body>
                                    {moduleOneDetails()}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
            {displayFooter()}
        </>
    );
};

export default Home;