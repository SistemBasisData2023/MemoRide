import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from "reactstrap"
import cloud from '../assets/images/cloud.svg'
import add_box from '../assets/images/add_box.svg'
import map from '../assets/images/map.svg'

const servicesData = [
    {
        imgUrl: cloud,
        title: "Weather Friendly",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        imgUrl: map,
        title: "Best Tour Guide",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        imgUrl: add_box,
        title: "Easy to Customize",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
]

const ServiceList = () => {
  return (
    <>
    {
        servicesData.map((item, index) => (
            <Col lg='3' key={index}>
                <ServiceCard item={item} />
            </Col>
        ))
    }
  </>
  )
}

export default ServiceList
