import React, {useState, useEffect} from "react";
import '../styles/home.css'
import {Container, Row, Col} from 'reactstrap';
import icon from '../assets/images/icon_wayang.png'
import experience from '../assets/images/experience.jpg'

import Subtitle from './../shared/Subtitle';
import Faded from "../shared/Faded";

import SearchBar from "../shared/SearchBar";
import ServiceList from "../service/ServiceList";
import PopularTourList from "../components/Popular-Tour/PopularTourList";
import Testimonial from "../components/Testimonial/Testimonial";
import Newsletter from "../shared/Newsletter";

const Home = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        // Start the automated animation
        const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 3000);

        return () => {
        // Clear the interval on component unmount
        clearInterval(interval);
        };
    }, []);

    return <>
        <section className="home">
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="content">
                            <div className="content_subtitle d-flex align-items-center">
                                <Subtitle subtitle={'Explore the Culture!'}/>
                                <img src={icon} alt=""/>
                            </div>
                            <h1>Culture is not about the history,
                            <br></br><span className="highlight"> it's about life!</span></h1>
                            <p>
                                We believe that culture is not just about <span>the past</span>; <br></br>it's about <span>embracing life</span> and immersing yourself in authentic experiences.
                                <br/><span>Join us</span> and create unforgettable memories in your whole life!
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="section_search">
            <SearchBar/>
        </section>

        <section>
            <Container className="services">
                <Row>
                    <Col lg='3'>
                        <h5 className="services_subtitle">Why MemoRide?</h5>
                        <h2 className="services_title">MemoRide <span className="highlight">always</span> with users.</h2>
                    </Col>
                    <ServiceList />
                </Row>
            </Container>
        </section>

        <Faded>
            <section>
            <Container>
                <Row>
                    <Col lg='12' className="mb-5">
                        <Subtitle subtitle={'Our Popular'}/>
                        <h2 className="featured_tour-title">Tours!</h2>
                    </Col>
                    <PopularTourList/>
                </Row>
            </Container>
        </section>
        </Faded>
        
        <Faded>
            <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="experience_content">
                            <Subtitle subtitle={'Experience'}/>
                            <h2>With our all experience <br /> we will serve you</h2>
                            <p>
                                Lorem ipsum dolot sit amet, consecctetur adipisicing elit.
                                <br/>
                                Quas aliquam, hic tempora inventore suscipit unde.
                            </p>
                        </div>

                        <div className="counter_wrapper d-flex align-items-center gap-5">
                            <div className="counter_box">
                                <span>12k+</span>
                                <h6>Successfull Trips!</h6>
                            </div>
                            <div className="counter_box">
                                <span>3k+</span>
                                <h6>Regular Clients!</h6>
                            </div>
                            <div className="counter_box">
                                <span>2</span>
                                <h6>Years Experience!</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className="experience_img">
                            <img src={experience} alt=""/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </Faded>

        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <Subtitle subtitle={'See what'}/>
                        <h2 className="testimonial_title">They say about us!</h2>
                    </Col>
                    <Col lg='12'>
                        <Testimonial/>
                    </Col>
                </Row>
            </Container>
        </section>
        <Newsletter/>
    </>
};

export default Home;