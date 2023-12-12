import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import loginBanner from '../assets/login_banner.png';

export default function SignUpView() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <Row className="login-page">
            <Col className="d-none d-md-flex h-100 p-0" md={6}>
                <img src={loginBanner} alt="" className="login-banner"/>
            </Col>
            <Col className="login-form-container" md={4}>
                <Form className="login-form">
                    <h2>Create an Account</h2>

                    <Form.Control className="mb-3" type="email" placeholder="Email Address *" />
                    <Form.Control className="mb-4" type="password" placeholder="Password *" />
                    <Form.Control className="mb-4" type="password" placeholder="Confirm Password *" />

                    <Button className="w-100 mb-3" type="submit">Sign Up</Button>

                    <p className="text-end">
                        <a href="/LogIn" >Already have an account? Log In</a>
                    </p>
                </Form>
            </Col>
            <Col className="login-extra d-none d-md-flex h-100 p-0" md={2}>
            </Col>
        </Row>
    );
}