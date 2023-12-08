import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

import module_one_background from '../../assets/module_one_bg.png';
import transcriptImage from '../../assets/transcriptImage.png';
import youtubeImage from '../../assets/youtubeImage.png';
import quizImage from '../../assets/quizImage.png';

const ModuleOne = () => {
    const navigate = useNavigate();

    const handleNavigateClick = () => {
        navigate('/');
    };

    const handleTranscriptClick = () => {
        const url = 'https://myisepipp-my.sharepoint.com/:b:/g/personal/1190956_isep_ipp_pt/Ef3iEo1EdklHugWWjvzotMsB2q5YDCWaZLph02xvpZU9YQ';
        window.open(url, '_blank');
    };
    const handleYoutubeClick = () => {
        const url = 'https://www.youtube.com/watch?v=5V5QDihsihY';
        window.open(url, '_blank');
    };
    const handleQuizClick = () => {
        const url = 'https://docs.google.com/forms/d/e/1FAIpQLSdqUsUVb7jxBc2lQHWOOcr4iRhPGNOl42dE1M36NvaIfGLD7w/viewform';
        window.open(url, '_blank');
    };

    //footer
    const displayFooter = () => {
        return (
            <>
                <div className="footer-module-one">
                </div>
            </>
        )
    }

    const transcriptCard = () => {
        return (
            <>
                <div className="card" onClick={handleTranscriptClick}>
                    <img className="card-img" src={transcriptImage} alt="transcript" />
                    <div className="card-content">
                        <h1 className="card-title">
                        Transcripts
                        </h1>
                        <h4 className="card-text">
                        Here you can find the transcripts for this lesson.
                        </h4>
                    </div>
                </div>
            </>
        )
    }

    const youtubeCard = () => {
        return (
            <>
                <div className="card" onClick={handleYoutubeClick} >
                    <img className="card-img" src={youtubeImage} alt="youtube" style={{ top: -40 + 'px'}} />
                    <div className="card-content">
                        <h1 className="card-title">
                            Youtube
                        </h1>
                        <h4 className="card-text">
                            Here you can watch the original video for this lesson.
                        </h4>
                    </div>
                </div>
            </>
        )
    }

    const quizCard = () => {
        return (
            <>
                <div className="card" onClick={handleQuizClick} >
                    <img className="card-img" src={quizImage} alt="quiz" />
                    <div className="card-content">
                        <h1 className="card-title">
                            Quiz
                        </h1>
                        <h4 className="card-text">
                            Here you can take the general quiz about the whole module.
                        </h4>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="content-module-one">
                <img className="background" src={module_one_background} alt="" />
                <div className="video-container">
                    <div className="video-background-module-one" />
                    <iframe
                        src="https://www.youtube.com/embed/5V5QDihsihY"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="video-description-module-one">
                    <h1>EXTRAS</h1>
                    <div className="video-description-content">
                        {transcriptCard()}
                        {youtubeCard()}
                        {quizCard()}
                    </div>
                </div>

                <div className="chapter-description">
                    <div className="chapter-description-header" >
                        <h1>CHAPTER 1: Introduction to Communication and Marketing</h1>
                    </div>
                    <div className="chapter-description-content" >
                        <h1 className="module-one-selected-chapter">Lesson 1: Introduction to Communication and Marketing</h1>
                        <h1>Lesson 2: Consumer Psychology </h1>
                        <h1>Lesson 3: Market Research Methods and Tendencies</h1>
                        <h1>Lesson 4: Media Planning</h1>
                        <h1>Lesson 5: Brand Loyalty and Customer Retention</h1>
                    </div>
                </div>
            </div>
            {displayFooter()}
        </>
    );
};

export default ModuleOne;