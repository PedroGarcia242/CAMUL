import 'bootstrap/dist/css/bootstrap.min.css';
import './Info.css';

import module_one_background from '../assets/module_one_bg.png';
import transcriptImage from '../assets/transcriptImage.png';

const Info = () => {


    const displayFooter = () => {
        return (
            <>
                <div className="footer-info-page">
                </div>
            </>
        )
    }

    const moduleOneBlock = () => {
        return (
            <>
                <div className="card">
                    <img className="card-img" src={transcriptImage} alt="transcript" />
                    <div className="card-content">
                        <h1 className="card-title">
                            Module 1
                        </h1>
                        <h4 className="card-text">
                            Learn the basics of Integrated Marketing Communication
                        </h4>
                    </div>
                </div>
            </>
        )
    }

    const moduleTwoBlock = () => {
        return (
            <>
                <div className="card">
                    <img className="card-img" src={transcriptImage} alt="transcript" />
                    <div className="card-content">
                        <h1 className="card-title">
                            Module 2
                        </h1>
                        <h4 className="card-text">
                            Learn about the ethics and regulations present in the Marketing field
                        </h4>
                    </div>
                </div>
            </>
        )
    }

    const moduleThreeBlock = () => {
        return (
            <>
                <div className="card">
                    <img className="card-img" src={transcriptImage} alt="transcript" />
                    <div className="card-content">
                        <h1 className="card-title">
                            Module 3
                        </h1>
                        <h4 className="card-text">
                            Learn how to create, manage and monitorize a Marketing Plan
                        </h4>
                    </div>
                </div>
            </>
        )
    }



    return (
        <>
            <div className="content-info-page">
                <img className="background" src={module_one_background} alt="" />
                <div className="video-container">
                    <div className="video-background" />
                    <iframe
                        src="https://youtu.be/Ufs0Y6HkPD4"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            <div className="video-description-info-page">
                <h1>Everything about Intregrated Marketing Communication in three Modules</h1>
                <div className="video-description-content">
                    {moduleOneBlock()}
                    {moduleTwoBlock()}
                    {moduleThreeBlock()}
                </div>
            </div>

            {displayFooter()}
        </>
    );
};

export default Info;