import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";
import cloud from "../assets/images/cloud.svg";
import add_box from "../assets/images/add_box.svg";
import map from "../assets/images/map.svg";

const servicesData = [
  {
    imgUrl: cloud,
    title: "Weather Friendly",
    desc: "Travelers appreciate MemoRide's ability to provide tour options suitable for various weather conditions, ensuring their comfort and enjoyment regardless of the forecast.",
  },
  {
    imgUrl: map,
    title: "Best Tour Guide",
    desc: "With MemoRide, travelers have access to the best tour guides in the industry, ensuring they receive expert guidance and an immersive experience filled with valuable insights.",
  },
  {
    imgUrl: add_box,
    title: "Easy to Customize",
    desc: "MemoRide's intuitive customization options make it effortless for travelers to personalize their tours, creating an itinerary that perfectly aligns with their preferences.",
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
