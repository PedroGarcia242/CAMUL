import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

import module_two_background from '../../assets/module_two_bg.png';

const ModuleTwoQuizL4 = () => {
    const navigate = useNavigate();

    const handleModuleTwoL4Click = () => {
        navigate('/ModuleTwoL4');
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


                <div className="quiz_container">
                    <div className="quiz_button-container">
                        <a onClick={handleModuleTwoL4Click} href="#" className="contents-button">GO BACK TO LESSON 4</a>
                    </div>

                    <div className="quiz_google-form-container">
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSebk95MPndIjwadYXx81v6euL0-SJZOmYM8H7Iv_cjPTVsgKw/viewform?embedded=true"
                            width="640"
                            height="2463"
                            frameBorder="0" 
                        ></iframe>
                    </div>
                </div>
            </div>

            {displayFooter()}
        </>
    );
};

export default ModuleTwoQuizL4;