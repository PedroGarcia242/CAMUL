import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Accordion from 'react-bootstrap/Accordion';

import infoBackground from '../assets/background_texture.png';

const Info = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const displayFooter = () => {
        return (
            <>
                <div className="footer-info-page">
                </div>
            </>
        )
    }

    return (
        <>
            <div className="content-info-page">
                <img className="background-home" src={infoBackground} alt="" />

                <div style={{ zIndex: 10, position: 'relative' }}>
                    <div className="info-header">
                        <h2>Do you need answers?</h2>
                        <div className="info-header-content mb-5">
                            <h5>You came to the right place</h5>
                        </div>
                    </div>


                    <div className="faq-details">
                        <h2 className="my-4">Frequently Asked Questions</h2>
                        <div className="faq-content">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>How much does your product cost?</Accordion.Header>
                                    <Accordion.Body>
                                        <h6>Nothing! Our product is free. Come experience our course and learn all about Marketing and Communication.</h6>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Module Two</Accordion.Header>
                                    <Accordion.Body>
                                        <h6>ASDSADASDAS</h6>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Module Three</Accordion.Header>
                                    <Accordion.Body>
                                        <h6>ASDSADASDAS</h6>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>

                    <div className="review mt-4">
                        <h2>Send a Review</h2>
                        <div className="review-form mb-5">
                            <h5 className="mb-3">Help us improve</h5>
                            <textarea className="form-control form-control-lg" rows="6" placeholder="Write your review here..."></textarea>
                        </div>
                    </div>

                    {displayFooter()}
                </div>
            </div>
        </>
    );
};

export default Info;