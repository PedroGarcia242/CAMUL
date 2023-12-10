import 'bootstrap/dist/css/bootstrap.min.css';

import infoBackground from '../assets/INFO_BG.png';

const Info = () => {

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
                <img className="background" src={infoBackground} alt="" />

                <div className="info-header">
                    <h2>Do you need answers?</h2>
                    <div className="info-header-content">
                        <h5>You came to the right place</h5>
                    </div>
                </div>

                <div className="container-fluid mb-4">
                    <form className="d-flex justify-content-center" role="search">
                        <input className="form-control me-2 text-input-info-page" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>


                <div className="module-details pt-4">
                    <h2>Frequently Asked Questions</h2>
                    <div className="container pb-4 d-flex justify-content-center">
                        <div className="accordion accordion-class" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Accordion Item #1
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the first items accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Accordion Item #2
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the second items accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the third items accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="video-container">
                    <div className="video-background" />
                    <iframe
                        src="https://www.youtube.com/embed/Ufs0Y6HkPD4"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>

            </div>
            {displayFooter()}
        </>
    );
};

export default Info;