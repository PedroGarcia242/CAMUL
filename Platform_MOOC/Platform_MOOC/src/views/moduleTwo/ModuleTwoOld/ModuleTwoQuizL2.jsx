import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

import module_two_background from '../../assets/module_two_bg.png';

const ModuleTwoQuizL2 = () => {
    const navigate = useNavigate();

    const handleModuleTwoL2Click = () => {
        navigate('/ModuleTwoL2');
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
                        <a onClick={handleModuleTwoL2Click} href="#" className="contents-button">GO BACK TO LESSON 2</a>
                    </div>

                    <div className="quiz_google-form-container">
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLScvGvpj-qn-Z3CiKtKct029_jzpL-ClV-EORP5xgxLAJNS65g/viewform?embedded=true" 
                            width="640"
                            height="2397"
                            frameBorder="0"
                        ></iframe>
                    </div>
                </div>
            </div>

            {displayFooter()}
        </>
    );
};

export default ModuleTwoQuizL2;