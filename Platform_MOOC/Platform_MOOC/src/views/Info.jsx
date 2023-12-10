import 'bootstrap/dist/css/bootstrap.min.css';
import './Info.css';
import { useNavigate } from 'react-router-dom';

import module_one_background from '../assets/module_one_bg.png';
import transcriptImage from '../assets/transcriptImage.png';

const Info = () => {

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
                <div className="footer-info-page">
                </div>
            </>
        )
    }

    const moduleOneBlock = () => {
        return (
            <>
                <div className="card" onClick={handleModuleOneClick} >
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
                <div className="card" onClick={handleModuleTwoL1Click} >
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
                <div className="card" onClick={handleModuleThreeClick} >
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
                    <div className="video-background-info-page" />
                    <iframe
                        src="https://www.youtube.com/embed/Ufs0Y6HkPD4"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="video-description-info-page">
                    <h1>Everything about Intregrated Marketing Communication in three Modules</h1>
                    <div className="video-description-content">
                        {moduleOneBlock()}
                        {moduleTwoBlock()}
                        {moduleThreeBlock()}
                    </div>
                </div>

                <div className="module-details">
                    <h1>Module Details</h1>
                    <div className="module-details-content">
                    </div>
                </div>

            </div>
            {displayFooter()}
        </>
    );
};

export default Info;