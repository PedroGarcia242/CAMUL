import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

import main_page_background from '../assets/module_two_bg.png';
import standalone_image from '../assets/standalone_image.png';

const Home = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };

    //footer
    const displayFooter = () => {
        return (
            <>
                <div className="footer-main-page">
                </div>
            </>
        )
    }

    return (
        <>
            <div className="content-mainpage">

                <img className="background" src={main_page_background} alt="" />

                <img className="promo_bit" src={standalone_image} alt="" />

                <a href="#" className="contents-button">SEE CONTENTS</a> 
               
            </div>
            {displayFooter()}
        </>
    );
};

export default Home;