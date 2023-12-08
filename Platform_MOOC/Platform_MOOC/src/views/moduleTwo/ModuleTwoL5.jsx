import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

import module_two_background from '../../assets/module_two_bg.png';
import transcriptImage from '../../assets/transcriptImage.png';
import youtubeImage from '../../assets/youtubeImage.png';
import quizImage from '../../assets/quizImage.png';

const ModuleTwoL5 = () => {
    const navigate = useNavigate();

    const handleModuleTwoL1Click = () => {
        navigate('/ModuleTwoL1');
    };
    const handleModuleTwoL2Click = () => {
        navigate('/ModuleTwoL2');
    };
    const handleModuleTwoL3Click = () => {
        navigate('/ModuleTwoL3');
    };
    const handleModuleTwoL4Click = () => {
        navigate('/ModuleTwoL4');
    };
    const handleModuleTwoL5Click = () => {
        navigate('/');
    };
    const handleModuleTwoQuizL5Click = () => {
        navigate('/ModuleTwoQuizL5');
    };
    const goToYoutubeL5 = () => {
        window.location.href = 'https://youtu.be/hwwSeFGn1Og?feature=shared';
    };


    //footer
    const displayFooter = () => {
        return (
            <>
                <div className="footer-module-two">
                </div>
            </>
        )
    }

    const transcriptCard = () => {
        return (
            <>
                <div className="card">
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
                <div className="card" onClick={goToYoutubeL5}>
                    <img className="card-img" src={youtubeImage} alt="youtube" style={{ top: -40 + 'px' }} />
                    <div className="card-content">
                        <h1 className="card-title">
                            Youtube
                        </h1>
                        <h4 className="card-text">
                            Here you can see the original video for this lesson.
                        </h4>
                    </div>
                </div>
            </>
        )
    }

    const quizCard = () => {
        return (
            <>

                <div onClick={handleModuleTwoQuizL5Click} className="card">
                    <img className="card-img" src={quizImage} alt="quiz" />
                    <div className="card-content">
                        <h1 className="card-title">
                            Quiz
                        </h1>
                        <h4 className="card-text" onClick="window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSf7OFIM22WWyIzHGZR55LKJ_v8nyB7SjtEFGd9zWOhRgQQurQ/viewform?vc=0&c=0&w=1&flr=0'">
                            Here you can take the quiz about this lesson.
                        </h4>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="content-module-two">
                <img className="background" src={module_two_background} alt="" />
                <div className="video-container">
                    <div className="video-background" />
                    <iframe
                        src="https://www.youtube.com/embed/hwwSeFGn1Og?si=UQZSUYypxdbFmBtG"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="video-description">
                    <h1>EXTRAS</h1>
                    <div className="video-description-content">
                        {transcriptCard()}
                        {youtubeCard()}
                        {quizCard()}
                    </div>
                </div>

                <div className="chapter-description">
                    <div className="chapter-description-header" >
                        <h1>CHAPTER 2: Ethics and Regulation</h1>
                    </div>
                    <div className="chapter-two-description-content" >
                        <h1 onClick={handleModuleTwoL1Click}>Lesson 1: Ethical Dilemmas in Marketing</h1>
                        <h1 onClick={handleModuleTwoL2Click}>Lesson 2: Regulation in Marketing </h1>
                        <h1 onClick={handleModuleTwoL3Click}>Lesson 3: Social Responsibility and Sustainability</h1>
                        <h1 onClick={handleModuleTwoL4Click}>Lesson 4: Crisis Communication</h1>
                        <h1 className="module-two-selected-chapter">Lesson 5: Responsible Advertising and Social Impact</h1>
                    </div>
                </div>
            </div>
            {displayFooter()}
        </>
    );
};

export default ModuleTwoL5;