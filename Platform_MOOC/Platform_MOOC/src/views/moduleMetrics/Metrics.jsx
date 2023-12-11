import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BarChart from './BarChart'

const Metrics = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const displayFooter = () => {
        return (
            <>
                <div className="footer-home-page">
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
                <Row className="global-metrics">
                    <Col>{BarChart(averageData, averageKeys, "module", "modules", "scores", "paired")}</Col>
                    <Col>{BarChart(averageData, averageKeys, "module", "modules", "scores", "paired")}</Col>
                </Row>
                <Row className="module-metrics">
                    <Col>{BarChart(moduleOneData, moduleOneKeys, "lesson", "modules", "scores", "set2")}</Col>
                    <Col>{BarChart(moduleTwoData, moduleTwoKeys, "lesson", "modules", "scores", "nivo")}</Col>
                    <Col>{BarChart(moduleThreeData, moduleThreeKeys, "lesson", "modules", "scores", "spectral")}</Col>
                </Row>
                {displayFooter()}
            </Col>
        </>
    );
};

export default Metrics;