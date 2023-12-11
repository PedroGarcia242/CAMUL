import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import loginBanner from '../assets/login_banner.png';

export default function SignInSide() {

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
            <Col className="login-form-container" md={6}>
                <Form className="login-form">
                    <h2 className="text-center mb-4">Log In</h2>

                    <Form.Control className="mb-3" type="email" placeholder="Email Address *" />
                    <Form.Control className="mb-3" type="password" placeholder="Password *" />

                    <Button className="w-100 mb-2" type="submit">Log In</Button>

                    <p className="text-end">
                        <a href="/" >Don&apos;t have an account? Sign Up</a>
                    </p>
                </Form>
            </Col>
        </Row>
    );
}