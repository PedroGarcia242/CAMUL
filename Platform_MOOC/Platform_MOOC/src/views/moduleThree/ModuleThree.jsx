import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';

import module_three_background from '../../assets/module_three_bg.png';
import transcriptImage from '../../assets/transcriptImage.png';
import youtubeImage from '../../assets/youtubeImage.png';
import quizImage from '../../assets/quizImage.png';
import ytubefooter from '../../assets/youtube_footer.png';
import igramfooter from '../../assets/instagram_footer.png';
const ModuleThree = () => {
    const navigate = useNavigate();
    var { currentLessonNumber } = useParams();
    if (currentLessonNumber !== '1' &&
        currentLessonNumber !== '2' &&
        currentLessonNumber !== '3' &&
        currentLessonNumber !== '4' &&
        currentLessonNumber !== '5') {
        currentLessonNumber = '1';
    }
    const goToYoutubeChannel = () => {
        window.location.href = 'https://www.youtube.com/@CAMUL2023';
    };
    const goToInstaProfile = () => {
        window.location.href = 'https://www.instagram.com/mrktng_cmmnctn/?next=%2Fd';
    };
    const handleNavigateClick = (lessonNumber) => {
        navigate('/ModuleThree/' + lessonNumber);
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
        var url;
        switch (currentLessonNumber) {
            case '1':
                url = "https://myisepipp-my.sharepoint.com/:b:/r/personal/1191457_isep_ipp_pt/Documents/Mestrado%20-%20Semestre%201/CAMUL/C3_Lesson1/C3L1_script.pdf?csf=1&web=1&e=MNFINf";
                break;
            case '2':
                url = "https://myisepipp-my.sharepoint.com/:b:/g/personal/1191457_isep_ipp_pt/EacIzxLtZllJpPpb2sw7pt8BSx9VFuS5XrxzsoExcpkzuA?e=u2hqnc";
                break;
            case '3':
                url = "https://myisepipp-my.sharepoint.com/:b:/g/personal/1191457_isep_ipp_pt/EeR7xisMXmpGs_xTxvCfCfYBJZoyoJcQ-TrNuEnM8q_6vQ?e=McDglG";
                break;
            case '4':
                url = "https://myisepipp-my.sharepoint.com/:b:/g/personal/1191457_isep_ipp_pt/EctjDN2X0P9Ck5aX7W-xGIYBpTs4wyf8yjpffMZMikQH-A?e=PThgZF";
                break;
            case '5':
                url = "https://myisepipp-my.sharepoint.com/:b:/g/personal/1191457_isep_ipp_pt/EYBqZdRaVq9HpOSR7dqMgsoBPkl_5PMJ-Ivs431b-0iTzQ?e=qiNKcq";
                break;
            default:
                url = "https://myisepipp-my.sharepoint.com/:b:/r/personal/1191457_isep_ipp_pt/Documents/Mestrado%20-%20Semestre%201/CAMUL/C3_Lesson1/C3L1_script.pdf?csf=1&web=1&e=MNFINf";
                break;
        }
        window.open(url, '_blank');
    };

    const handleYoutubeClick = () => {
        var url;
        switch (currentLessonNumber) {
            case '1':
                url = "https://www.youtube.com/watch?v=vDt4GVpCcKk";
                break;
            case '2':
                url = "https://www.youtube.com/watch?v=HcqjXUvmy8c";
                break;
            case '3':
                url = "https://www.youtube.com/watch?v=vkJb4o7_cFI";
                break;
            case '4':
                url = "https://www.youtube.com/watch?v=yX1RYd0isQE";
                break;
            case '5':
                url = "https://www.youtube.com/watch?v=MyBC2HDKzr8";
                break;
            default:
                url = "https://www.youtube.com/watch?v=vDt4GVpCcKk";
                break;
        }
        window.open(url, '_blank');
    };

    const handleQuizClick = () => {
        const url = "https://docs.google.com/forms/d/e/1FAIpQLSdogYZ7HQ0iP4VF5NO4uWxm75lWT16TrZJWcUn0xleNH0zuRw/viewform?pli=1";
        window.open(url, '_blank');
    };

    const lessonVideo = () => {
        var videoUrl;
        switch (currentLessonNumber) {
            case '1':
                videoUrl = "https://www.youtube.com/embed/vDt4GVpCcKk";
                break;
            case '2':
                videoUrl = "https://www.youtube.com/embed/HcqjXUvmy8c";
                break;
            case '3':
                videoUrl = "https://www.youtube.com/embed/vkJb4o7_cFI";
                break;
            case '4':
                videoUrl = "https://www.youtube.com/embed/yX1RYd0isQE";
                break;
            case '5':
                videoUrl = "https://www.youtube.com/embed/MyBC2HDKzr8";
                break;
            default:
                videoUrl = "https://www.youtube.com/embed/vDt4GVpCcKk";
                break;
        }
        return (
            <>
                <div className="video-background-module-three" >
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
                <div className="footer-module-three">

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
            <div className="content-module-three">
                <img className="background" src={module_three_background} alt="" />
                <div className="video-container">
                    {lessonVideo()}
                </div>
                <div className="video-description-module-three">
                    <h1>EXTRAS</h1>
                    <div className="video-description-content">
                        {transcriptCard()}
                        {youtubeCard()}
                        {quizCard()}
                    </div>
                </div>

                <div className="chapter-description">
                    <div className="chapter-description-header" >
                        <h1>CHAPTER 3: Creating and Managing a Marketing Plan</h1>
                    </div>
                    <div className="chapter-description-content" >
                        <h1 className={currentLessonNumber === '1' ? "module-three-selected-chapter" : ""} onClick={() => handleNavigateClick(1)} >Lesson 1: Understanding the Essentials of Marketing Planning</h1>
                        <h1 className={currentLessonNumber === '2' ? "module-three-selected-chapter" : ""} onClick={() => handleNavigateClick(2)} >Lesson 2: Setting Marketing Objectives and Strategy with AIDA</h1>
                        <h1 className={currentLessonNumber === '3' ? "module-three-selected-chapter" : ""} onClick={() => handleNavigateClick(3)} >Lesson 3: Developing Creative and Persuasive Marketing Materials</h1>
                        <h1 className={currentLessonNumber === '4' ? "module-three-selected-chapter" : ""} onClick={() => handleNavigateClick(4)} >Lesson 4: Implementation of Marketing Plans</h1>
                        <h1 className={currentLessonNumber === '5' ? "module-three-selected-chapter" : ""} onClick={() => handleNavigateClick(5)} >Lesson 5: Monitorization and Evaluation of Marketing Plans</h1>
                    </div>
                </div>
            </div>
            {displayFooter()}
        </>
    );
};

export default ModuleThree;