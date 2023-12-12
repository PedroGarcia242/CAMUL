import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import loginBanner from '../assets/login_banner.png';
import loginTexture from '../assets/login_texture.png';

export default function SignUpView() {

    const goToInstaProfile = () => {
        const url = 'https://www.instagram.com/mrktng_cmmnctn/?next=%2Fd';
        window.open(url, '_blank');
    };

    return (
        <Row className="login-page">
            <Col className="d-none d-md-flex h-100 p-0" md={6}>
                <img src={loginBanner} alt="" className="login-banner" onClick={goToInstaProfile} />
            </Col>
            <Col className="login-form-container" md={4}>
                <Form className="login-form">
                    <h2>Create an Account</h2>

                    <Form.Control className="mb-3" type="email" placeholder="Email Address *" />
                    <Form.Control className="mb-3" type="password" placeholder="Password *" />
                    <Form.Control className="mb-4" type="password" placeholder="Confirm Password *" />

                    <Button variant="success" className="login-button w-100 mb-3" type="submit">Sign Up</Button>

                    <p className="text-end">
                        <a className="under-login-button" href="/CAMUL/#/LogIn" >Already have an account? Log In</a>
                    </p>
                </Form>
            </Col>
            <Col className="login-extra d-none d-md-flex h-100 p-0" md={2}>
                <img src={loginTexture} alt="" className="login-texture" />
            </Col>
        </Row>
    );
}