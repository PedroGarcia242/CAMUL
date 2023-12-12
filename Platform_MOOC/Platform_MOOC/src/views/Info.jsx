import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Accordion from 'react-bootstrap/Accordion';

import infoBackground from '../assets/background_texture.png';

import ytubefooter from '../assets/youtube_footer.png';

import igramfooter from '../assets/instagram_footer.png';

const Info = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const goToYoutubeChannel = () => {
        window.location.href = 'https://www.youtube.com/@CAMUL2023';
    };
    const goToInstaProfile = () => {
        window.location.href = 'https://www.instagram.com/mrktng_cmmnctn/?next=%2Fd';
    };

    const displayFooter = () => {
        return (
            <>
                <div className="footer-info-page">

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

    const submitFeedback = () => {
        // Get the text from the textarea
        var reviewText = document.getElementById("reviewText").value;

        // Perform any necessary actions with the reviewText (e.g., send it to a server)

        // Clear the textarea
        document.getElementById("reviewText").value = "";

        // Display the thank you message
        document.getElementById("thankYouMessage").style.display = "block";
    }

    return (
        <>
            <div className="content-info-page">
                <img className="background-home" src={infoBackground} alt="" />

                <div className="home-header">
                    <h2>Introduction Video</h2>
                    <div className="home-header-content">
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
                        </Row>
                    </Container>
                </div>
                
                <div style={{ zIndex: 10, position: 'relative' }}>
                    <div className="home-header">
                        <h2>Frequently asked questions</h2>
                        <div className="home-header-content">
                            <h5>We have the answers</h5>
                        </div>
                    </div>

                    <div className="faq-details">
                        <div className="faq-content">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>How much does your product cost?</Accordion.Header>
                                    <Accordion.Body>
                                        <h6>Nothing! Our product is free for everyone. Come experience our course and learn all about Marketing and Communication.</h6>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>I have little to no experience in the Marketing and Communication fields. Do I need it to take this course?</Accordion.Header>
                                    <Accordion.Body>
                                        <h6>You do not need any previous experience or knowledge in the meantioned fields in order to take our course!
                                            We aim to introduce our students to the art of Integrated Marketing Communication by being their first contact with these topics.
                                            As such, we provide every bit of contextualization and knowledge you might need in order to understand and learn each concept.</h6>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Do I need to create an account in order to access the lessons?</Accordion.Header>
                                    <Accordion.Body>
                                        <h6>No! Just about anyone with the desire for knowledge can access and enjoy the lessons curated by us.</h6>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Do I need to follow the lessons in a sequential order, from Module One to Module Three?</Accordion.Header>
                                    <Accordion.Body>
                                        <h6>No! Students can progress through the course by their own accord. While some lessons and concepts can be easier to understand if the student
                                            has acquired knowledge from previous lessons and/or Modules (and for this reason we do recommmend following the lessons in a sequential order), the truth is
                                            that our lessons were created in a way that each one of them is unique and independent from the others. Students can access any of the lessons at any given time,
                                            creating their own view order, without worrying about missing out important context or knowledge!</h6>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Are my quiz results shared with everyone?</Accordion.Header>
                                    <Accordion.Body>
                                        <h6>Yes, but anonymously. By creating an account in our website, users consent to anonymously share with us the results they obtain in the various quizzes.
                                            This data is then used to create the Metrics page that can be found in our website.</h6>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>

                    <div className="review mt-4">
                        <h2>Send a Review</h2>
                        <div className="review-form mb-5">
                            <h5 className="mb-3">Help us improve</h5>
                            <textarea id="reviewText" className="form-control form-control-lg" rows="6" placeholder="Write your review here..."></textarea>
                            <button onClick={submitFeedback} className="btn btn-primary mt-3">Submit your feedback</button>
                            <div id="thankYouMessage" style={{ display: 'none', color: 'green', marginTop: '40px' }}>Thank you for your feedback!</div>
                        </div>
                    </div>

                    {displayFooter()}
                </div>
            </div>
        </>
    );
};

export default Info;