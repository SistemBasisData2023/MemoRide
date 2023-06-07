import React, { useEffect } from "react";
import TourCard from "../../shared/TourCard";
import { Col } from "reactstrap";

import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";

const PopularTourList = () => {
  const { data: featuredTours, error, loading } = useFetch(
    `${BASE_URL}/tours/search/getFeaturedTours`
  );

  useEffect(() => {
    if (error) {
      console.error("Error fetching tours:", error);
    }
  }, [error]);

  if (error) {
    return <div>Error: Failed to fetch tours</div>;
  }

  if (!featuredTours || featuredTours.length === 0) {
    return <div>No featured tours available</div>;
  }

  return (
    <>
      {featuredTours?.map((tour) => (
        <Col lg="3" className="mb-4" key={tour.id}>
          <TourCard tour={tour} />
        </Col>
      ))}
    </>
  );
};

export default PopularTourList;
