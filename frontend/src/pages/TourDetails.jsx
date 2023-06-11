import React, { useEffect, useRef, useState, useContext } from "react";
import "../styles/detail-tour.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";
import Booking from "../components/Booking/Booking";
import Newsletter from "../shared/Newsletter";
import axios from "axios";
import useFetch from "./../hooks/useFetch";
import { BASE_URL } from "./../utils/config";
import { AuthContext } from "./../context/AuthContext";
import { getToken } from "../context/AuthController";
import Cookies from "js-cookie";

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(0);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);

  //fetch data from database
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

  //destructure properties from tour object
  const {
    photo,
    title,
    description,
    price,
    address,
    city,
    distance,
    max_group_size,
  } = tour;

  const { totalRating, avgRating } = reviews
    ? calculateAvgRating(reviews)
    : { totalRating: 0, avgRating: 0 };

  // format date
  const options = { day: "numeric", month: "long", year: "numeric" };

  // Submit review
  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    // Check if the user is logged in
    if (!user) {
      alert("Please log in to write a review.");
      return;
    }

    try {
      const token = getToken(); // Retrieve the token from localStorage
      console.log(token);

      const response = await axios.post(
        `${BASE_URL}/reviews/${id}`,
        {
          reviewText,
          rating: tourRating,
          username: user.username,
          role: "user",
        },
        {
          withCredentials: true, // Include this option to send cookies
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`, // Include the token in the Authorization header
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
        setReviews([...reviews, data.data]);
      } else {
        throw new Error("Failed to submit review");
      }
    } catch (error) {
      console.error(error);
    }

    // Clear the input field
    reviewMsgRef.current.value = "";
  };

  useEffect(() => {
    // Fetch the reviews associated with the tour
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

  const handleRatingClick = (rating) => {
    if (selectedRatings.includes(rating)) {
      setSelectedRatings(selectedRatings.filter((r) => r !== rating));
    } else {
      setSelectedRatings([...selectedRatings, rating]);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

  return (
    <>
      <section>
        <Container>
          {loading && <h4 className="text-center pt-5">Loading...</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              <Col lg="8">
                <div className="tour_content">
                  <img src="https://picsum.photos/300/200" alt="" />
                  <div className="tour_info">
                    <h2>{title}</h2>
                    <div className="d-flex align-items-center gap-5">
                      <span className="tour_rating d-flex align-items-center gap-1">
                        <i
                          className="ri-star-s-fill"
                          style={{ color: "var(--secondary-color)" }}
                        ></i>{" "}
                        {avgRating === 0 ? null : avgRating}
                        {totalRating === 0 ? (
                          "Not rated"
                        ) : (
                          <span>({reviews?.length})</span>
                        )}
                      </span>

                      <span>
                        <i className="ri-compass-3-line"></i>
                        {address}
                      </span>
                    </div>
                    <div className="tour_extra-details">
                      <span>
                        <i className="ri-map-pin-2-line"></i>
                        {city}
                      </span>
                      <span>
                        <i className="ri-wallet-3-line"></i>${price} /per person
                      </span>
                      <span>
                        <i className="ri-pin-distance-line"></i>
                        {distance} Km
                      </span>
                      <span>
                        <i className="ri-group-line"></i>
                        {max_group_size} people
                      </span>
                    </div>
                    <h5>Description</h5>
                    <p>{description}</p>
                  </div>

                  <div className="tour_reviews mt-4">
                    <h4>Reviews ({reviews?.length} reviews)</h4>

                    <Form onSubmit={submitHandler}>
                      <div className="rating_group d-flex align-items-center gap-3 mb-4">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <span
                            key={rating}
                            className={`${
                              selectedRatings.includes(rating) ? "clicked" : ""
                            }`}
                            onClick={() => handleRatingClick(rating)}
                          >
                            {rating} <i className="ri-star-s-fill"></i>
                          </span>
                        ))}
                      </div>
                      <div className="review_input">
                        <input
                          type="text"
                          ref={reviewMsgRef}
                          placeholder="Write a review"
                          required
                        />
                        <button
                          className="btn primary_btn text-white"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </Form>

                    <ListGroup className="user_reviews">
                      {reviews?.map((review) => (
                        <div className="review_item">
                          <img src="https://i.pravatar.cc/300" alt="" />
                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>{review.username}</h5>
                                <p>
                                  {new Date(
                                    review.created_at
                                  ).toLocaleDateString("en-US", options)}
                                </p>
                              </div>
                              <span className="d-flex align-items-center">
                                {review.rating}
                                <i className="ri-star-s-fill"></i>
                              </span>
                            </div>

                            <h6>{review.review_text}</h6>
                          </div>
                        </div>
                      ))}
                    </ListGroup>
                  </div>
                </div>
              </Col>

              <Col lg="4">
                <Booking tour={tour} avgRating={avgRating} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default TourDetails;
