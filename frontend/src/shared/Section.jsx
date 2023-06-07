import React from 'react'
import './section.css'
import {Container, Row, Col} from 'reactstrap'

const CommonSection2 = ({title}) => {
  return (
    <section className='section_header'>
        <Container>
            <Row>
                <Col lg='12'>
                    <h1>{title}</h1>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default CommonSection2
