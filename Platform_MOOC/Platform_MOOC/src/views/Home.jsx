import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Accordion from 'react-bootstrap/Accordion';

import homeBackground from '../assets/background_texture.png';

const Home = () => {
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

    const moduleTwoLessonOne = () => {
        return (
            <>
                <div className="lesson-content">
                    <h5 className="mb-3">Lesson 1: Ethical Dilemmas in Marketing</h5>
                    <h6> - Objective: Understand what is deceptive advertising and what are some of the ethical challenges found in digital marketing</h6>
                    <h6> - Chapters: Understanding Ethical Marketing; Ehtical Dilemmas in Marketing; Strategies to Navigate Ethical Dilemmas </h6>
                </div>
            </>
        )
    }

    const moduleTwoLessonTwo = () => {
        return (
            <>
                <div className="lesson-content">
                    <h5 className="mb-3">Lesson 2: Legal Regulations</h5>
                    <h6> - Objective: Learn about intellectual property rights and trademarks, as well as GDPR and Data Protection Laws</h6>
                    <h6> - Chapters: Understanding Legal Regulations in Marketing; Key Legal Regulations in Marketing; Ensuring Compliance and Best Practices</h6>
                </div>
            </>
        )
    }

    const moduleTwoLessonThree = () => {
        return (
            <>
                <div className="lesson-content">
                    <h5 className="mb-3">Lesson 3: Social Responsibility and Sustainability</h5>
                    <h6> - Objective: Learn about Sustainable Marketing Practices and Corporate Social Responsibility (CSR) initiatives</h6>
                    <h6> - Chapters: Understanding Social Responsibility and sustainability; Pratical Strategies for Social Responsability and Sustainability; Monitoring and Reporting</h6>
                </div>
            </>
        )
    }

    const moduleTwoLessonFour = () => {
        return (
            <>
                <div className="lesson-content">
                    <h5 className="mb-3">Lesson 4: Crisis Communication</h5>
                    <h6> - Objective: Learn how to handle public relations during scandals or crises and how to build trust between your brand and customers</h6>
                    <h6> - Chapters: Understanding Crisis Communication; Key Strategies for Crisis Communication; Rebuilding Trust</h6>
                </div>
            </>
        )
    }

    const moduleTwoLessonFive = () => {
        return (
            <>
                <div className="lesson-content">
                    <h5 className="mb-3">Lesson 5: Responsible Advertising and Social Impact</h5>
                    <h6> - Objective: Understand what are socially responsible advertising campaigns and how to address social issues through marketing</h6>
                    <h6> - Chapters: Understanding Responsible Advertising; Key Elements of Socially Responsible Advertising; Addressing Social Issues through Marketing</h6>
                </div>
            </>
        )
    }

    const moduleThreeLessonOne = () => {
        return (
            <>
                <div className="lesson-content">
                    <h5 className="mb-3">Lesson 1: Understanding the Essentials of Marketing Planning</h5>
                    <h6> - Objective: Understand the purpose of a Marketing Plan; Know the role of the Marketing Plan in achieving business objectives; Understand what is a Target Audience and ways to identify it</h6>
                    <h6> - Chapters: What is a Marketing Plan?; Target Audience Identification </h6>
                </div>
            </>
        )
    }

    const moduleThreeLessonTwo = () => {
        return (
            <>
                <div className="lesson-content">
                    <h5 className="mb-3">Lesson 2: Setting Marketing Objectives and Strategy with AIDA</h5>
                    <h6> - Objective: Can create SMART objectives; Can align marketing objectives with the overall business strategy; Understands the AIDA Model and how to apply it to marketing strategy</h6>
                    <h6> - Chapters: Marketing Objectives; AIDA Model in Marketing Strategy</h6>
                </div>
            </>
        )
    }

    const moduleThreeLessonThree = () => {
        return (
            <>
                <div className="lesson-content">
                    <h5 className="mb-3">Lesson 3: Developing Creative and Persuasive Marketing Materials</h5>
                    <h6> - Objective: Understand what are Creative Elements; Recognize the importance of Creative Elements in the creation of Marketing Materials; Understand the role Storytelling plays in Marketing; Recognizes the different types of stories that can be communicated to the audience</h6>
                    <h6> - Chapters: Creative Elements in Marketing; The Role of Storytelling in Marketing</h6>
                </div>
            </>
        )
    }

    const moduleThreeLessonFour = () => {
        return (
            <>
                <div className="lesson-content">
                    <h5 className="mb-3">Lesson 4: Implementation of Marketing Plans</h5>
                    <h6> - Objective: Is able to connect the AIDA model with Creative Elements; Understand what are Action Plans; Can implement an Action Plan</h6>
                    <h6> - Chapters: AIDA model revisited; Developing an Action Plan</h6>
                </div>
            </>
        )
    }

    const moduleThreeLessonFive = () => {
        return (
            <>
                <div className="lesson-content">
                    <h5 className="mb-3">Lesson 5: Monitorization and Evaluation of Marketing Plans</h5>
                    <h6> - Objective: Recognizes the importance of monitoring progress; Knows about different tools and ways of monitoring an Action Plan and as consequence a Marketing Plan; Knows different methods of analyzing results; Understands the role and importance of ROI and other metrics in monitoring and optimizing plans</h6>
                    <h6> - Chapters: Monitoring and adjusting; Analyzing results and ROI</h6>
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
                    </div >
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

    const moduleTwoDetails = () => {
        return (
            <>
                <div className="details-module" >
                    <div className="details-module-title">
                        <h4>Ethics and Regultaion</h4>
                    </div >
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
                                {moduleTwoLessonOne()}
                            </Tab>
                            <Tab eventKey="lesson-2" title="Lesson Two">
                                {moduleTwoLessonTwo()}
                            </Tab>
                            <Tab eventKey="lesson-3" title="Lesson Three">
                                {moduleTwoLessonThree()}
                            </Tab>
                            <Tab eventKey="lesson-4" title="Lesson Four">
                                {moduleTwoLessonFour()}
                            </Tab>
                            <Tab eventKey="lesson-5" title="Lesson Five">
                                {moduleTwoLessonFive()}
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </>
        )
    }

    const moduleThreeDetails = () => {
        return (
            <>
                <div className="details-module" >
                    <div className="details-module-title">
                        <h4>Creating and Managing a Marketing Plan</h4>
                    </div >
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
                                {moduleThreeLessonOne()}
                            </Tab>
                            <Tab eventKey="lesson-2" title="Lesson Two">
                                {moduleThreeLessonTwo()}
                            </Tab>
                            <Tab eventKey="lesson-3" title="Lesson Three">
                                {moduleThreeLessonThree()}
                            </Tab>
                            <Tab eventKey="lesson-4" title="Lesson Four">
                                {moduleThreeLessonFour()}
                            </Tab>
                            <Tab eventKey="lesson-5" title="Lesson Five">
                                {moduleThreeLessonFive()}
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
                <img className="background-home" src={homeBackground} alt="" />

                <div style={{ zIndex: 10, position: 'relative' }}>
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
                                        {moduleTwoDetails()}
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header className="module-three">Module Three</Accordion.Header>
                                    <Accordion.Body>
                                        {moduleThreeDetails()}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    {displayFooter()}
                </div>
            </div>
        </>
    );
};

export default Home;