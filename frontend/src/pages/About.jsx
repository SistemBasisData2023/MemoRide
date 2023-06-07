import React from "react";
import Section from "../shared/Section";
import { Container, Row, Col } from "reactstrap";
import "../styles/about.css";
import Newsletter from "./../shared/Newsletter";

const About = () => {
  return (
    <>
      <Section title={"About MemoRide"} />
      <section>
        <Container>
          <div className="about-container">
            <div className="about-circle"></div>
            <div className="about-content">
              <h2>About Me</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ac ultricies elit. Vivamus eleifend mauris sed
                venenatis pharetra. Nullam non pulvinar lorem. Nullam auctor
                sagittis erat, ac malesuada tortor. Sed at eros tristique,
                ullamcorper lorem non, dignissim quam. Proin semper lobortis
                justo.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default About;
