import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import loginBanner from '../assets/login_banner.png';

export default function LogInView() {

    const handleSubmit = () => {
        localStorage['isLoggedIn'] = 'true';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.forceUpdate()
    };

    return (
        <Row className="login-page">
            <Col className="d-none d-md-flex h-100 p-0" md={6}>
                <img src={loginBanner} alt="" className="login-banner"/>
            </Col>
            <Col className="login-form-container" md={4}>
                <Form className="login-form">
                    <h2>Log In</h2>

                    <Form.Control className="mb-3" type="email" placeholder="Email Address *" />
                    <Form.Control className="mb-4" type="password" placeholder="Password *" />

                    <Button className="w-100 mb-3" type="submit" onClick={handleSubmit} href="/">Continue</Button>

                    <p className="text-end">
                        <a href="/SignUp" >Don&apos;t have an account? Sign Up</a>
                    </p>
                </Form>
            </Col>
            <Col className="login-extra d-none d-md-flex h-100 p-0" md={2}>
            </Col>
        </Row>
    );
}