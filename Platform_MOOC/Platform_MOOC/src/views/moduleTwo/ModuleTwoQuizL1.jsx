import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

import module_two_background from '../../assets/module_two_bg.png';

const ModuleTwoQuizL1 = () => {
    const navigate = useNavigate();

    const handleModuleTwoL1Click = () => {
        navigate('/ModuleTwoL1');
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
                        <a onClick={handleModuleTwoL1Click} href="#" className="contents-button">GO BACK TO LESSON 2</a>
                    </div>


                    <div className="quiz_google-form-container">
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSf7OFIM22WWyIzHGZR55LKJ_v8nyB7SjtEFGd9zWOhRgQQurQ/viewform?embedded=true"
                            width="640"
                            height="2461"
                            frameBorder="0"
                        ></iframe>
                    </div>
                </div>
            </div>

            {displayFooter()}
        </>
    );
};

export default ModuleTwoQuizL1;