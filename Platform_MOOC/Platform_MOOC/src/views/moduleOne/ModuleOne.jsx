import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';

import module_one_background from '../../assets/module_one_bg.png';
import transcriptImage from '../../assets/transcriptImage.png';
import youtubeImage from '../../assets/youtubeImage.png';
import quizImage from '../../assets/quizImage.png';
import ytubefooter from '../../assets/youtube_footer.png';
import igramfooter from '../../assets/instagram_footer.png';
const ModuleOne = () => {
    const navigate = useNavigate();
    var { currentLessonNumber } = useParams();
    if (currentLessonNumber !== '1' &&
        currentLessonNumber !== '2' &&
        currentLessonNumber !== '3' &&
        currentLessonNumber !== '4' &&
        currentLessonNumber !== '5') {
        currentLessonNumber = '1';
        }

    const handleNavigateClick = (lessonNumber) => {
        navigate('/ModuleOne/' + lessonNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const goToYoutubeChannel = () => {
        window.location.href = 'https://www.youtube.com/@CAMUL2023';
    };
    const goToInstaProfile = () => {
        window.location.href = 'https://www.instagram.com/mrktng_cmmnctn/?next=%2Fd';
    };
    const handleNextLessonClick = () => {
        var nextLesson = + currentLessonNumber + 1;
        if (nextLesson > 5) {
            nextLesson = 1;
        }
        handleNavigateClick(nextLesson);
    };

    const handlePreviousLessonClick = () => {
        var previousLesson = + currentLessonNumber - 1;
        if (previousLesson < 1) {
            previousLesson = 5;
        }
        handleNavigateClick(previousLesson);
    };

    const handleTranscriptClick = () => {
        var url;
        switch (currentLessonNumber) {
            case '2':
                url = "https://myisepipp-my.sharepoint.com/:b:/g/personal/1190956_isep_ipp_pt/ERJa0kBnV2ZBlgvIcPcskEQBKPygFJOOrGkrDpbQrPlnbg?e=juyAYa";
                break;
            case '3':
                url = "https://myisepipp-my.sharepoint.com/:b:/g/personal/1190956_isep_ipp_pt/EXbtE6MjIQFNopGnxEnL0ykBzNa85nCLCvSbNfEZ08tpVA?e=6UGCYX";
                break;
            case '4':
                url = "https://myisepipp-my.sharepoint.com/:b:/g/personal/1190956_isep_ipp_pt/EazEGhr0JO1LhGLccEeQn5oBbnp2lxQERKjIqwsEK8Ijug?e=BSYgfT";
                break;
            case '5':
                url = "https://myisepipp-my.sharepoint.com/:b:/g/personal/1190956_isep_ipp_pt/EXiyz59z1BVOlIpQnB0Ek24BbaDniWgsqL_IIRG0Dj0IEA?e=rjEPi5";
                break;
            default:
                url = "https://myisepipp-my.sharepoint.com/:b:/g/personal/1190956_isep_ipp_pt/Ef3iEo1EdklHugWWjvzotMsB2q5YDCWaZLph02xvpZU9YQ";
                break;
        }
        window.open(url, '_blank');
    };

    const handleYoutubeClick = () => {
        var url;
        switch (currentLessonNumber) {
            case '2':
                url = "https://www.youtube.com/watch?v=Z5JAXSm1wvQ";
                break;
            case '3':
                url = "https://www.youtube.com/watch?v=C1IBY--JqTk";
                break;
            case '4':
                url = "https://www.youtube.com/watch?v=2dkGEd0PrfE";
                break;
            case '5':
                url = "https://www.youtube.com/watch?v=hQ2YuNalU7Q";
                break;
            default:
                url = "https://www.youtube.com/watch?v=5V5QDihsihY";
                break;
        }
        window.open(url, '_blank');
    };

    const handleQuizClick = () => {
        const url = "https://docs.google.com/forms/d/e/1FAIpQLSdqUsUVb7jxBc2lQHWOOcr4iRhPGNOl42dE1M36NvaIfGLD7w/viewform";
        window.open(url, '_blank');
    };

    const lessonVideo = () => {
        var videoUrl;
        switch (currentLessonNumber) {
            case '2':
                videoUrl = "https://www.youtube.com/embed/Z5JAXSm1wvQ";
                break;
            case '3':
                videoUrl = "https://www.youtube.com/embed/C1IBY--JqTk";
                break;
            case '4':
                videoUrl = "https://www.youtube.com/embed/2dkGEd0PrfE";
                break;
            case '5':
                videoUrl = "https://www.youtube.com/embed/hQ2YuNalU7Q";
                break;
            default:
                videoUrl = "https://www.youtube.com/embed/5V5QDihsihY";
                break;
        }
        return (
            <>
                <div className="video-background-module-one" >
                    <h1 onClick={handlePreviousLessonClick} >{'<'}</h1>
                    <h1 onClick={handleNextLessonClick} >{'>'}</h1>
                </div>
                <iframe
                    src={videoUrl}
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </>
        )
    }

    const displayFooter = () => {
        return (
            <>
                <div className="footer-module-one">

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
                    {lessonVideo()}
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
                        <h1 className={currentLessonNumber === '1' ? "module-one-selected-chapter" : ""} onClick={() => handleNavigateClick(1)} >Lesson 1: Introduction to Communication and Marketing</h1>
                        <h1 className={currentLessonNumber === '2' ? "module-one-selected-chapter" : ""} onClick={() => handleNavigateClick(2)} >Lesson 2: Consumer Psychology </h1>
                        <h1 className={currentLessonNumber === '3' ? "module-one-selected-chapter" : ""} onClick={() => handleNavigateClick(3)} >Lesson 3: Market Research Methods and Tendencies</h1>
                        <h1 className={currentLessonNumber === '4' ? "module-one-selected-chapter" : ""} onClick={() => handleNavigateClick(4)} >Lesson 4: Media Planning</h1>
                        <h1 className={currentLessonNumber === '5' ? "module-one-selected-chapter" : ""} onClick={() => handleNavigateClick(5)} >Lesson 5: Brand Loyalty and Customer Retention</h1>
                    </div>
                </div>
            </div>
            {displayFooter()}
        </>
    );
};

export default ModuleOne;