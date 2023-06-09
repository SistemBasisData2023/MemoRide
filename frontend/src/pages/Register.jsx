import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../context/AuthController";
import registerImg from "../assets/images/register.svg";
import "../styles/register.css"
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      // Perform registration request
      console.log("credentials:", credentials);

      await register(setUser, credentials); // Call the register function

      // Handle successful registration
      console.log("Registration successful");

      navigate("/login");
    } catch (error) {
      // Handle registration failure
      console.error("Registration failed:", error.message);
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login_container d-flex align-items-center justify-content-between">
              <div className="login_img">
                <img src={registerImg} alt="" />
              </div>

              <div className="login_form">
                <h2>Register</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Username"
                      required
                      id="username"
                      onChange={handleChange}
                    />
                  </FormGroup>
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
                  <Button
                    className="auth_btn btn secondary_btn"
                    type="submit"
                  >
                    Sign Up
                  </Button>
                </Form>
                <p>
                  Already have an account? <Link to="/login">Login here!</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
