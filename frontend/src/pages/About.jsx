import React from "react";
import Section from "../shared/Section";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/about.css";
import Newsletter from "./../shared/Newsletter";

const About = () => {
  return (
    <>
      <Section title={"About MemoRide"} />
      <section>
        <Container>
          <div className="about-container">
            <img src="https://i.gifer.com/XOsX.gif"></img>
            <div className="about-content">
              <h2>What is MemoRide?</h2>
              <p>
                MemoRide is a web-based application for booking cultural tourist
                destinations. On the homepage, users can select and search for
                cultural tourist destinations in Indonesia based on their
                preferences. When a user selects a destination, they can view
                ratings from other users. The application also provides features
                for viewing booking history as well as their tour history. There
                is also an admin user who can perform CRUD operations on tourist
                destinations.
              </p>
            </div>
          </div>
          <div className="job-container">
            <div className="job-content mt-2">
              <h2>Why we build MemoRide?</h2>
              <p>
                MemoRide was developed as the final project for the course
                Database System Lab (ENCE604016) in the fourth semester of the
                Computer Engineering program at Universitas Indonesia. MemoRide
                was create using PERN (PostgreSQL, Express.js, React.js, and
                Node.js). The project was carried out by Group M13, composed of
                3 team members, each assigned specific roles and
                responsibilities, which are outlined as follows:
              </p>
              <p>
                1. Amrita Deviayu Tunjungbiru (Main Contributor) : Responsible
                to create the whole Front-End and most of the Back-End.
                <br />
                2. Akmal Rabbani : Responsible to create part of the Back-End,
                the UML (Unified Modeling Language), and the ERD
                (Entity-Relational Diagram).
                <br />
                3. Sulthan Satrya Y. D. : Responsible to create the flowchart
                and the presentation.
              </p>
            </div>
            <div className="github-content">
              <h2>See more about our project here :</h2>
              <p className="github-link">
                <Link to="https://github.com/SistemBasisData2023/MemoRide" className="icon-link">
                  <i class="ri-github-fill"></i>
                </Link>
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
