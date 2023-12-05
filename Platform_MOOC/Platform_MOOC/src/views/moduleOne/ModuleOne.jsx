import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

import module_one_background from '../../assets/module_one_bg.png';

const ModuleOne = () => {
    const navigate = useNavigate();

    const handleModuleOneClick = () => {
        navigate('/');
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

    return (
        <>
            <div className="content-module-one">
                <img className="background" src={module_one_background} alt="" />
                <div className="video-container">
                    <iframe
                        src="https://www.youtube.com/embed/5V5QDihsihY"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            {displayFooter()}
        </>
    );
};

export default ModuleOne;