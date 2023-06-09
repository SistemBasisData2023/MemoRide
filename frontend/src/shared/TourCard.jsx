import React, { useEffect, useState } from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";
import { BASE_URL } from "./../utils/config";

import "./tour-card.css";

const TourCard = ({ tour }) => {
  const { id, title, city, photo, price, featured } = tour;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`${BASE_URL}/reviews/${id}`);
        if (response.ok) {
          const data = await response.json();
          setReviews(data.data);
        } else {
          throw new Error("Failed to fetch reviews");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviews();
  }, [id]);

  const { totalRating, avgRating } = calculateAvgRating(reviews);
  const ratingText = avgRating === 0 ? "Not rated" : avgRating.toFixed(1);

  return (
    <div className="tour_card">
      <Card>
        <div className="tour_img">
          <img className="tour_img__image" src="https://picsum.photos/id/29/200/300" alt="tour-img" />
          {featured && <span>Featured</span>}
        </div>

        <CardBody>
          <div className="card_top d-flex align-items-center justify-content-between">
            <span className="tour_location d-flex align-items-center gap-1">
              <i className="ri-map-pin-line"></i> {city}
            </span>
            <span className="tour_rating d-flex align-items-center gap-1">
              <i className="ri-star-line"></i>{" "}
              {ratingText}
              {reviews.length === 0 ? null : <span>({reviews.length})</span>}
            </span>
          </div>

          <h5 className="tour_title">
            <Link to={`/tour/${id}`}>{title}</Link>
          </h5>

          <div className="card_bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              ${price} <span> /per person</span>
            </h5>

            <button className="btn booking_btn">
              <Link to={`/tour/${id}`}>Book Now</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TourCard;
