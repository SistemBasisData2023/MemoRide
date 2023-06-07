import React, { useState } from "react"
import {Container, Row, Col, Form, FormGroup, Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import '../styles/login.css'
import loginImg from '../assets/images/login2.svg'

const Login = () => {

    const [credentials, setCredentials] = useState({
        email:undefined,
        password:undefined
    });

    const handleChange = e => {
        setCredentials(prev => ({... prev, [e.target.id]:e.target.value}))
    }
    
    const handleClick = e => {
        e.preventDefault()
    }

    return <section>
        <Container>
            <Row>
                <Col lg='8' className="m-auto">
                    <div className="login_container d-flex align-items-center justify-content-between">
                        <div className="login_img">
                            <img src={loginImg} alt=""/>
                        </div>

                        <div className="login_form">
                            <h2>Login</h2>

                            <Form onSubmit={handleClick}>
                                <FormGroup>
                                    <input type="email" placeholder="Email" required id="email" onChange={handleChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <input type="password" placeholder="Password" required id="password" onChange={handleChange}/>
                                </FormGroup>
                                <Button className="auth_btn btn secondary_btn" type="submit">Login</Button>
                            </Form>
                            <p>Don't have an account? <Link to='/register'>Create an account now!</Link></p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
};

export default Login;