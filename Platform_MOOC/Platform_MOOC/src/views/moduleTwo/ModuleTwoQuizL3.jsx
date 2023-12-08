import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

import module_two_background from '../../assets/module_two_bg.png';

const ModuleTwoQuizL3 = () => {
    const navigate = useNavigate();

    const handleModuleTwoL3Click = () => {
        navigate('/ModuleTwoL3');
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
                        <a onClick={handleModuleTwoL3Click} href="#" className="contents-button">GO BACK TO LESSON 3</a>
                    </div>

                    <div className="quiz_google-form-container">
                        <iframe
                           src="https://docs.google.com/forms/d/e/1FAIpQLSeOBVu4rC74xGqanFiJ1FOQ1l_p-VXqZFl4oNX6magsNivbgQ/viewform?embedded=true"
                            width="640"
                            height="2563"
                            frameBorder="0" 
                        ></iframe>
                    </div>
                </div>
            </div>

            {displayFooter()}
        </>
    );
};

export default ModuleTwoQuizL3;