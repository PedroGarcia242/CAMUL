import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';

import module_two_background from '../../assets/module_two_bg.png';
import transcriptImage from '../../assets/transcriptImage.png';
import youtubeImage from '../../assets/youtubeImage.png';
import quizImage from '../../assets/quizImage.png';

const ModuleTwo = () => {
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
        navigate('/ModuleTwo/' + lessonNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
        return; //please mete aqui os transcripts :)
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
                url = "https://www.youtube.com/watch?v=ecxbl_KMD-8";
                break;
            case '3':
                url = "https://www.youtube.com/watch?v=IMhrNpOVsSc";
                break;
            case '4':
                url = "https://www.youtube.com/watch?v=TbFkIsRAFps";
                break;
            case '5':
                url = "https://www.youtube.com/watch?v=hwwSeFGn1Og";
                break;
            default:
                url = "https://www.youtube.com/watch?v=oeh2TKq6PF4";
                break;
        }
        window.open(url, '_blank');
    };

    const handleQuizClick = () => {
        var url;
        switch (currentLessonNumber) {
            case '2':
                url = "https://docs.google.com/forms/d/e/1FAIpQLScvGvpj-qn-Z3CiKtKct029_jzpL-ClV-EORP5xgxLAJNS65g/viewform";
                break;
            case '3':
                url = "https://docs.google.com/forms/d/e/1FAIpQLSeOBVu4rC74xGqanFiJ1FOQ1l_p-VXqZFl4oNX6magsNivbgQ/viewform";
                break;
            case '4':
                url = "https://docs.google.com/forms/d/e/1FAIpQLSebk95MPndIjwadYXx81v6euL0-SJZOmYM8H7Iv_cjPTVsgKw/viewform";
                break;
            case '5':
                url = "https://docs.google.com/forms/d/e/1FAIpQLSc3FZ6jALcOxmidnSyaljVf5X9U3hdJwCksSJqAEFDnBF67vA/viewform";
                break;
            default:
                url = "https://docs.google.com/forms/d/e/1FAIpQLSf7OFIM22WWyIzHGZR55LKJ_v8nyB7SjtEFGd9zWOhRgQQurQ/viewform";
                break;
        }
        window.open(url, '_blank');
    };

    const lessonVideo = () => {
        var videoUrl;
        switch (currentLessonNumber) {
            case '2':
                videoUrl = "https://www.youtube.com/embed/ecxbl_KMD-8?si=UsQDukPkwu3OQdGi";
                break;
            case '3':
                videoUrl = "https://www.youtube.com/embed/IMhrNpOVsSc?si=dNslxRc8X26QCQVC";
                break;
            case '4':
                videoUrl = "https://www.youtube.com/embed/TbFkIsRAFps?si=emqzlDOa6BK-XZU9";
                break;
            case '5':
                videoUrl = "https://www.youtube.com/embed/hwwSeFGn1Og?si=UQZSUYypxdbFmBtG";
                break;
            default:
                videoUrl = "https://www.youtube.com/embed/oeh2TKq6PF4?si=xXxzqq_qSKOyJTTW";
                break;
        }
        return (
            <>
                <div className="video-background-module-two" >
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
                <div className="footer-module-two">
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
                    <img className="card-img" src={youtubeImage} alt="youtube" style={{ top: -40 + 'px' }} />
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
            <div className="content-module-two">
                <img className="background back-two" src={module_two_background} alt="" />
                <div style={{ zIndex: 10, position: 'relative' }}>
                    <div className="video-container">
                        {lessonVideo()}
                    </div>
                    <div className="video-description-module-two">
                        <h1>EXTRAS</h1>
                        <div className="video-description-content">
                            {transcriptCard()}
                            {youtubeCard()}
                            {quizCard()}
                        </div>
                    </div>

                    <div className="chapter-description">
                        <div className="chapter-description-header-module-two" >
                            <h1>CHAPTER 2: Ethics and Regulation</h1>
                        </div>
                        <div className="chapter-description-content" >
                            <h1 className={currentLessonNumber === '1' ? "module-two-selected-chapter" : ""} onClick={() => handleNavigateClick(1)} >Lesson 1: Ethical Dilemmas in Marketing</h1>
                            <h1 className={currentLessonNumber === '2' ? "module-two-selected-chapter" : ""} onClick={() => handleNavigateClick(2)} >Lesson 2: Regulation in Marketing </h1>
                            <h1 className={currentLessonNumber === '3' ? "module-two-selected-chapter" : ""} onClick={() => handleNavigateClick(3)} >Lesson 3: Social Responsibility and Sustainability</h1>
                            <h1 className={currentLessonNumber === '4' ? "module-two-selected-chapter" : ""} onClick={() => handleNavigateClick(4)} >Lesson 4: Crisis Communication</h1>
                            <h1 className={currentLessonNumber === '5' ? "module-two-selected-chapter" : ""} onClick={() => handleNavigateClick(5)} >Lesson 5: Responsible Advertising and Social Impact</h1>
                        </div>
                    </div>
                    {displayFooter()}
                </div>
            </div>
        </>
    );
};

export default ModuleTwo;