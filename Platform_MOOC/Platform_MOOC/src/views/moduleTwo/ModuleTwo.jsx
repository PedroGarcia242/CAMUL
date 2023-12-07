import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

import module_two_background from '../../assets/module_two_bg.png';

const ModuleTwo = () => {
    const navigate = useNavigate();

    const handleModuleTwoClick = () => {
        navigate('/');
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

    return (
        <>
            <div className="content-module-two">
                <img className="background" src={module_two_background} alt="" />
                <div className="video-container">
                    <div className="video-background" />
                    <iframe
                        src="https://www.youtube.com/embed/5V5QDihsihY"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="video-description">
                    <div className="video-description-background">
                        <h1>THIS LESSON</h1>
                    </div>
                    <div className="video-description-background-hole" >
                        <h1> &gt; TRANSCRIPTS</h1>
                    </div>
                </div>

                <div className="chapter-description">
                    <div className="chapter-description-background" >
                        <h1>CHAPTER 2: Ethics and Regulation</h1>
                    </div>
                    <div className="chapter-description-background-hole" >
                        <h1> &gt; Lesson 1: </h1>
                        <h1> &gt; Lesson 2: </h1>
                        <h1> &gt; Lesson 3: </h1>
                        <h1> &gt; Lesson 4: </h1>
                        <h1> &gt; Lesson 5: </h1>
                    </div>
                </div>
            </div>
            {displayFooter()}
        </>
    );
};

export default ModuleTwo;