import React, {useEffect} from "react";
import "./footer.css"

import{Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import {Link, useLocation} from 'react-router-dom'
import logo from "../../assets/images/logo.jpg"

const menu = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About'
    },
    {
        path: '/tour',
        display: 'Tours'
    },
]

const company = [
    {
        path: '/help',
        display: 'Help/FAQ'
    },
    {
        path: '/gallery',
        display: 'Gallery'
    },
    {
        path: '/affilates',
        display: 'Affilates'
    },
]

const Footer = () => {

    const year = new Date().getFullYear()
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component mounts or location changes
    }, [location]);

    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='3'>
                        <div className="logo">
                            <img src={logo} alt=""/>
                            <p>Book your trip in a minute, get fully immerse in to the culture.</p>

                            <div className="social_links d-flex align-items-center gap-4">
                                <span>
                                    <Link to='#'><i class="ri-youtube-line"></i></Link>
                                </span>
                                <span>
                                    <Link to='#'><i class="ri-github-fill"></i></Link>
                                </span>
                                <span>
                                    <Link to='#'><i class="ri-facebook-circle-line"></i></Link>
                                </span>
                                <span>
                                    <Link to='#'><i class="ri-instagram-line"></i></Link>
                                </span>
                            </div>
                        </div>
                    </Col>

                    <Col lg='3'>
                        <h5 className="footer_link-title">Menu</h5>

                        <ListGroup className="footer_menu">
                            {
                                menu.map((item, index) => (
                                    <ListGroupItem key={index} className="ps-0 border-0">
                                        <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </Col>
                    <Col lg='3'>
                        <h5 className="footer_link-title">Company</h5>

                        <ListGroup className="footer_company">
                            {
                                company.map((item, index) => (
                                    <ListGroupItem key={index} className="ps-0 border-0">
                                        <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </Col>
                    <Col lg='3'>
                        <h5 className="footer_link-title">Contact</h5>

                        <ListGroup className="footer_quick-links">
                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                <h6 className="mb-0 d-flex align-items-center gap-2"> 
                                    <span><i class="ri-map-pin-line"></i></span>
                                    Address: 
                                </h6>

                                <p className="mb-0">DTE FTUI 2021, Depok, Jawa Barat</p>
                            </ListGroupItem>
                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                <h6 className="mb-0 d-flex align-items-center gap-2"> 
                                    <span><i class="ri-mail-line"></i></span>
                                    E-mail: 
                                </h6>

                                <p className="mb-0">amrita.deviayu@ui.ac.id</p>
                            </ListGroupItem>
                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                <h6 className="mb-0 d-flex align-items-center gap-2"> 
                                    <span><i class="ri-phone-fill"></i></span>
                                    Phone: 
                                </h6>

                                <p className="mb-0">021-3456-7890</p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col lg='12' className="text-center pt-5">
                        <p className="copyright">Copyright {year}, design and develop by Amrita Deviayu Tunjungbiru.
                        All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;