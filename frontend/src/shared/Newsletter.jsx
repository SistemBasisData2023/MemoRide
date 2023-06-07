import React, { useState } from 'react'
import './newsletter.css'

import {Container, Row, Col} from 'reactstrap'
import subscribe from '../assets/images/subscribe.png'

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform database submission or other necessary actions
        alert(`Submitted email: ${email}`);
        setEmail('Enter you email'); // Reset the email input
    };

  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className='newsletter_img'>
                    <img src={subscribe}/>
                </div>
            </Col>
            <Col lg='6'>
                <div className='newsletter_content'>
                    <h2>Subscribe now to get our annual promos!</h2>
                    <div className='newsletter_input'>
                        <input
                            type="email"
                            placeholder='Enter your email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button className='btn newsletter_btn' onClick={handleSubmit}>
                            Subscribe
                        </button>
                    </div>

                    <p>Explore stunning destinations, experience local traditions, and create unforgettable memories with MemoRide.</p>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Newsletter
