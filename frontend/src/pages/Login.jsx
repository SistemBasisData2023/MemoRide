import React, { useContext, useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../context/AuthController";
import '../styles/login.css'
import loginImg from "../assets/images/login2.svg";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const navigate = useNavigate()
  const { setUser } = useContext(AuthContext)

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      // Perform login request
      await login(setUser, credentials); // Call the login function

      // Handle successful login
      console.log("Login successful");

      navigate("/home");
    } catch (error) {
      // Handle login failure
      console.error("Login failed:", error.message);
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login_container d-flex align-items-center justify-content-between">
              <div className="login_img">
                <img src={loginImg} alt="" />
              </div>

              <div className="login_form">
                <h2>Login</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      id="password"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button className="auth_btn btn secondary_btn" type="submit">
                    Login
                  </Button>
                </Form>
                <p>
                  Don't have an account?{" "}
                  <Link to="/register">Create an account now!</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
