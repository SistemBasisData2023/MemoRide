import React, {useState, useEffect} from "react";
import Section from "../shared/Section";
import { Container, Row, Col } from "reactstrap";
import "../styles/gallery.css"
import Newsletter from "./../shared/Newsletter"
import img1 from "../assets/images/midjourney6.png"
import img2 from "../assets/images/midjourney7.png"
import img3 from "../assets/images/midjourney8.png"
import img4 from "../assets/images/midjourney9.png"
import img5 from "../assets/images/midjourney10.png"
import img6 from "../assets/images/midjourney11.png"

const Gallery = () => {
  return <>
    <Section title={'Gallery'}/>
    <section>
        <Container>
          <Row>
            <Col className="first_gallery">
              <div className="desc_text"> 
                <h2>Exploring the Vibrant Charm of Pasar Glodok, Jakarta</h2>
                <h6>Andreas Sanjaya</h6>
                <p>Pasar Glodok, located in Jakarta, is a captivating destination that offers a glimpse into the city's rich cultural heritage. 
                This bustling market is renowned for its vibrant atmosphere and diverse array of products. 
                From traditional Indonesian spices to electronic gadgets, Pasar Glodok has something for everyone.
                <br></br>
                <br></br>As you navigate through its narrow alleys, you'll encounter friendly locals and be surrounded by the scents of delicious street food. 
                The market's historical significance, coupled with its unique blend of old and new, creates an unforgettable experience. 
                Immerse yourself in the lively ambiance and explore the hidden treasures of Pasar Glodok, a true gem in the heart of Jakarta.</p>
              </div>
              <div className="image_desc">
                <img src={img1} alt=""/>
                <img src={img2} alt=""/>
              </div>
            </Col>
          </Row>
          <Row className="row_gallery">
            <Col className="second_gallery">
              <div className="image_desc2">
                <img src={img3} alt=""/>
                <img src={img4} alt=""/>
              </div>
              <div className="desc_text">
                <h2>Melawi River, Kalimantan: Exploring Borneo's Waterway</h2>
                <h6>Vincent Van Gogh</h6>
                <p>Embark on an extraordinary adventure along the untamed waters of Melawi River, located in the captivating land of Kalimantan. 
                This majestic river, winding through lush rainforests and remote villages, offers a glimpse into the rich biodiversity and cultural heritage of Borneo. 
                Cruise along its emerald waters, surrounded by dense foliage and exotic wildlife. 
                Immerse yourself in the enchanting melodies of nature as you witness stunning sunsets casting their golden hues upon the river's surface. 
                Engage with the warm-hearted locals, who will introduce you to their age-old traditions and fascinating way of life. 
                Melawi River is an unmissable destination, promising an unforgettable journey into the heart of Kalimantan's natural wonders.</p>
              </div>
            </Col>
          </Row>
          <Row className="row_gallery2">
            <Col className="third_gallery">
              <div className="desc_text">
                <h2>Discovering Kepulauan Seribu's Tropical Escape</h2>
                <h6>Tiara Andini</h6>
                <p>Escape the bustling city of Jakarta and set sail to the pristine paradise of Kepulauan Seribu, a breathtaking archipelago just off the coast. 
                With its crystal-clear turquoise waters and powdery white sandy beaches, this hidden gem offers a tropical oasis like no other. 
                Dive into vibrant coral reefs teeming with colorful marine life, snorkel alongside gentle sea turtles, or simply bask in the sun on secluded islands. 
                Indulge in fresh seafood delicacies and immerse yourself in the rich local culture. 
                Kepulauan Seribu is a true haven for relaxation and adventure, where every moment is filled with pure bliss.</p>
              </div>
              <div className="image_desc">
                <img src={img5} alt=""/>
                <img src={img6} alt=""/>
              </div>
            </Col>
          </Row>
        </Container>
    </section>
    <Newsletter/>
  </>
    
}

export default Gallery
