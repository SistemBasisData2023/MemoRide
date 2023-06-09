import React, { useState, useEffect } from "react";
import CommonSection from "./../shared/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useLocation } from "react-router-dom";
import TourCard from "../shared/TourCard";
import Newsletter from "./../shared/Newsletter"

const SearchList = () => {
  const location = useLocation();
  const [data, setData] = useState(location.state);

  useEffect(() => {
    setData(location.state);
  }, [location.state]);

  return (
    <>
      <CommonSection title={"Tour Search Result"} />
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <h4 className="text-center">No tours found</h4>
            ) : (
              data.map((tour) => (
                <Col lg="3" className="mb-4" key={tour.id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <Newsletter/>
    </>
  );
};

export default SearchList;
