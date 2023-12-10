import 'bootstrap/dist/css/bootstrap.min.css';
import searchIcon from '../assets/SEARCHBAR2.png';

import infoBackground from '../assets/INFO_BG.png';

const Info = () => {
    
    const displayFooter = () => {
        return (
            <>
                <div className="footer-info-page">
                </div>
            </>
        )
    }

    return (
        <>
            <div className="content-info-page">
                <img className="background" src={infoBackground} alt="" />

                <div className="info-header">
                    <h2>Do you need answers?</h2>
                    <div className="info-header-content">
                        <h5>You came to the right place</h5>
                    </div>
                </div>

                <div className="search-container">
                    <div className="search-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="search-input"
                        readOnly // Prevents user input in the field
                            style={{
                            fontSize: '18px', // Increase font size of the input text
                            backgroundImage: `url(${searchIcon})`,
                            backgroundSize: 'contain', // Fit the image within the input
                            backgroundRepeat: 'no-repeat', // Ensure the image doesn't repeat
                            backgroundPosition: '10px 50%', // Adjust background position
                            paddingLeft: '150px', // Set padding to accommodate the width of the image
                            height: '500px', // Adjust height as needed
                            width: '500px', // Adjust width as needed
                        }}
                    />
                    <button className="search-button" disabled>
                            {/* This button can be disabled to prevent interaction */}
                        Search
                        </button>
                    </div>
                </div>

                <div className="video-container">
                    <div className="video-background" />
                    <iframe
                        src="https://www.youtube.com/embed/Ufs0Y6HkPD4"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
                
            </div>
            {displayFooter()}
        </>
    );
};

export default Info;