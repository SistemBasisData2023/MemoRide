import React, { useState, useEffect } from "react";
import CommonSection from "../shared/CommonSection";
import { Container, Row, Col } from "reactstrap";
import "../styles/tours.css";
import TourCard from "./../shared/TourCard";
import SearchBar from "./../shared/SearchBar";
import Newsletter from "./../shared/Newsletter";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours?page=${page}`);
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`);

  useEffect(() => {
    const pages = Math.ceil(tourCount / 8); //cards per page
    setPageCount(pages);
    window.scrollTo(0,0);
  }, [page, tourCount, tours]);


  return (
    <>
      <CommonSection title={"All Tours"} />
      <section className="search_section">
        <Container>
          <Row className="justify-content-center">
            <Col lg="8">
              <SearchBar className="searchTour" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
        {loading ? (
        <h4 className="text-center pt-5">Loading...</h4>
        ) : error ? (
        <h4 className="text-center pt-5">{error}</h4>
        ) : null}

          {!loading && !error && tours.length === 0 && (
            <h4 className="text-center pt-5">No tours found</h4>
          )}
          {!loading && !error && (
            <>
              <Row>
                {tours?.map((tour) => (
                  <Col lg="3" md='6' sm='6' className="mb-4" key={tour.id}>
                    <TourCard tour={tour} />
                  </Col>
                ))}
              </Row>
              <Row>
                <Col lg="12">
                    <div className="pagination d-flex aligns-items-center justify-content-center mt-4 gap-3">
                    {[...Array(pageCount).keys()].map((number) => (
                        <span
                        key={number}
                        onClick={() => setPage(number)}
                        className={page === number ? "active_page" : ""}
                        >
                        {number + 1}
                        </span>
                    ))}
                    </div>
                </Col>
              </Row>
            </>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Tours;
