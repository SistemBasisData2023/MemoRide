import React, { useState } from "react"
import {Container, Row, Col, Form, FormGroup, Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import '../styles/register.css'
import registerImg from '../assets/images/register.svg'

const Register = () => {

    const [credentials, setCredentials] = useState({
        userName: undefined,
        email: undefined,
        password: undefined
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
                            <img src={registerImg} alt=""/>
                        </div>

                        <div className="login_form">
                            <h2>Register</h2>

                            <Form onSubmit={handleClick}>
                            <FormGroup>
                                    <input 
                                    type="text" 
                                    placeholder="Username" 
                                    required id="userName" 
                                    onChange={handleChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <input 
                                    type="email" 
                                    placeholder="Email" 
                                    required id="email" 
                                    onChange={handleChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <input 
                                    type="password" 
                                    placeholder="Password" 
                                    required id="password" 
                                    onChange={handleChange}/>
                                </FormGroup>
                                <Button className="auth_btn btn secondary_btn" type="submit">Sign Up</Button>
                            </Form>
                            <p>Already have an account? <Link to='/login'>Login here!</Link></p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
};

export default Register;