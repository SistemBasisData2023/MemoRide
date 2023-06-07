import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import calculateAvgRating from '../utils/avgRating';

import './tour-card.css';

const TourCard = ({ tour }) => {
  const { id, title, city, photo, price, featured, reviews } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <div className="tour_card">
      <Card>
        <div className="tour_img">
          <img className="tour_img__image" src={photo} alt="tour-img" />
          {featured && <span>Featured</span>}
        </div>

        <CardBody>
          <div className="card_top d-flex align-items-center justify-content-between">
            <span className="tour_location d-flex align-items-center gap-1">
              <i className="ri-map-pin-line"></i> {city}
            </span>
            <span className="tour_rating d-flex align-items-center gap-1">
              <i className="ri-star-line"></i>{" "}
              {avgRating === 0 ? null : avgRating}
              {reviews && reviews.length === 0 ? (
                "Not rated"
              ) : (
                <span>({reviews && reviews.length})</span>
              )}
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
