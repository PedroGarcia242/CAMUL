import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BarChart from './BarChart'
import overallMetrics from '../../assets/overall_metrics.png';
import homeBackground from '../../assets/background_texture.png';
import ytubefooter from '../../assets/youtube_footer.png';
import igramfooter from '../../assets/instagram_footer.png';

const Metrics = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const goToYoutubeChannel = () => {
        window.location.href = 'https://youtu.be/oeh2TKq6PF4?feature=shared';
    };
    const goToInstaProfile = () => {
        window.location.href = 'https://www.instagram.com/mrktng_cmmnctn/?next=%2Fd';
    };
    const displayFooter = () => {
        return (
            <>
                <div className="footer-info-page">

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

    const averageData = [
        {
            "module": "1",
            "you": 15,
            "youColor": "hsl(55, 70%, 50%)",
            "average": 17,
            "averageColor": "hsl(145, 44%, 10%)"
        },
        {
            "module": "2",
            "you": 17,
            "youColor": "hsl(55, 70%, 50%)",
            "average": 16,
            "averageColor": "hsl(0, 34%, 54%)"
        },
        {
            "module": "3",
            "you": 16,
            "youColor": "hsl(55, 70%, 50%)",
            "average": 17,
            "averageColor": "hsl(281, 27%, 18%)"
        },
    ];

    const averageKeys = [
        'you',
        'average'
    ];

    const moduleOneData = [
        {
            "lesson": "1",
            "you": 2,
            "youColor": "hsl(55, 70%, 50%)",
            "average": 3,
            "averageColor": "hsl(145, 44%, 10%)"
        },
        {
            "lesson": "2",
            "you": 3,
            "youColor": "hsl(55, 70%, 50%)",
            "average": 4,
            "averageColor": "hsl(0, 34%, 54%)"
        },
        {
            "lesson": "3",
            "you": 4,
            "youColor": "hsl(55, 70%, 50%)",
            "average": 2,
            "averageColor": "hsl(281, 27%, 18%)"
        },
        {
            "lesson": "4",
            "you": 4,
            "youColor": "hsl(55, 70%, 50%)",
            "average": 4,
            "averageColor": "hsl(281, 27%, 18%)"
        },
        {
            "lesson": "5",
            "you": 4,
            "youColor": "hsl(55, 70%, 50%)",
            "average": 3,
            "averageColor": "hsl(281, 27%, 18%)"
        },
    ];

    const moduleOneKeys = [
        'you',
        'average'
    ];

    const moduleTwoData = [
        {
            "lesson": "1",
            "you": 3,
            "youColor": "hsl(55, 70%, 50%)",
            "average": 4,
            "averageColor": "hsl(145, 44%, 10%)"
        },
        {
            "lesson": "2",
            "you": 2,
            "youColor": "hsl(55, 70%, 50%)",
            "average": 3,
            "averageColor": "hsl(0, 34%, 54%)"
        },
        {
            "lesson": "3",
            "you": 4,
            "youColor": "hsl(55, 70%, 50%)",
            "average": 4,
            "averageColor": "hsl(281, 27%, 18%)"
        },
        {
            "lesson": "4",
            "you": 3,
            "youColor": "hsl(55, 70%, 50%)",
            "average": 3,
            "averageColor": "hsl(281, 27%, 18%)"
        },
        {
            "lesson": "5",
            "you": 3,
            "youColor": "hsl(55, 70%, 50%)",
            "average": 3,
            "averageColor": "hsl(281, 27%, 18%)"
        },
    ];

    const moduleTwoKeys = [
        'you',
        'average'
    ];

    const moduleThreeData = [
        {
            "lesson": "1",
            "you": 3,
            "youColor": "hsl(55, 70%, 50%)",
            "average": 3,
            "averageColor": "hsl(145, 44%, 10%)"
        },
        {
            "lesson": "2",
            "you": 3,
            "youColor": "hsl(55, 70%, 50%)",
            "average": 4,
            "averageColor": "hsl(0, 34%, 54%)"
        },
        {
            "lesson": "3",
            "you": 3,
            "youColor": "hsl(55, 70%, 50%)",
            "average": 2,
            "averageColor": "hsl(281, 27%, 18%)"
        },
        {
            "lesson": "4",
            "you": 4,
            "youColor": "hsl(55, 70%, 50%)",
            "average": 4,
            "averageColor": "hsl(281, 27%, 18%)"
        },
        {
            "lesson": "5",
            "you": 4,
            "youColor": "hsl(55, 70%, 50%)",
            "average": 3,
            "averageColor": "hsl(281, 27%, 18%)"
        },
    ];

    const moduleThreeKeys = [
        'you',
        'average'
    ];  

    return (
        <>
            <Col className="content-metrics-page">
                <img className="background-home" src={homeBackground} alt="" />

                <div style={{ zIndex: 10, position: 'relative' }}>
                    <div className="home-header">
                        <h2>User Metrics</h2>
                        <div className="home-header-content">
                            <h5>Here you can check on your results and compare them to the average results obtained in our platform.</h5>
                            <h5>Explore the charts, read carefully, revisit your weaker lessons.</h5>
                        </div>
                    </div>
                    <Row className="global-metrics">
                        <Col className="metrics-col">
                            <h3>Module Progression</h3>
                            <img className="overall-metrics" src={overallMetrics} alt="Overall Metrics" />
                        </Col>
                        <Col className="metrics-col">
                            <h3>Average Comparison</h3>
                            {BarChart(averageData, averageKeys, "module", "modules", "scores", "paired")}
                        </Col>
                    </Row>
                    <Row className="module-metrics">
                        <Col className="metrics-col">
                            <h3>Module 1 Average Comparison</h3>
                            {BarChart(moduleOneData, moduleOneKeys, "lesson", "lessons", "scores", "dark2")}
                        </Col>
                        <Col className="metrics-col">
                            <h3>Module 2 Average Comparison</h3>
                            {BarChart(moduleTwoData, moduleTwoKeys, "lesson", "lessons", "scores", "nivo")}
                        </Col>
                        <Col className="metrics-col">
                            <h3>Module 3 Average Comparison</h3>
                            {BarChart(moduleThreeData, moduleThreeKeys, "lesson", "lessons", "scores", "purpleRed_green")}
                        </Col>
                    </Row>
                </div>
                {displayFooter()}   
            </Col>
        </>
    );
};

export default Metrics;