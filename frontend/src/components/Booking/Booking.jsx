import React, { useContext, useState } from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";

import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../utils/config";
import { AuthContext } from "../../context/AuthContext";

const Booking = ({ tour, avgRating }) => {
  const { price, title } = tour;
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const [booking, setBooking] = useState({
    userId: user && user.id,
    user_email: user && user.email,
    tour_name: title,
    full_name: "",
    phone: "",
    group_size: 1,
    book_at: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    const updatedBooking = { ...booking, [id]: value };
    setBooking(updatedBooking);
  };  

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(booking.group_size) + Number(serviceFee);

  //send data to server
  const handleClick = async (e) => {
    e.preventDefault();

    console.log(booking)

    try {
        if(!user || user === undefined || user === null){
            return alert('Please log in to book our tours.')
        }

        const res = await fetch(`${BASE_URL}/booking`, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(booking)
        })

        const result = await res.json()

        if(!res.ok) {
            return alert(result.message)
        }

        navigate("/thank-you");
    } catch (err) {
        alert(err.message)
    }
  };

  return (
    <div className="booking">
      <div className="booking_top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span>/per person</span>
        </h3>
        <span className="tour_rating d-flex align-items-center">
          <i class="ri-star-s-fill"></i>
          {avgRating === 0 ? (
            "Not rated"
          ) : (
            <>
              {avgRating.toFixed(1)} <span>({tour.totalRating})</span>
            </>
          )}
        </span>
      </div>

      <div className="booking_form">
        <h5>Information</h5>
        <Form className="booking_info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="full_name"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="phone"
              placeholder="Phone Number"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="book_at"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Person"
              id="group_size"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>

      <div className="booking_bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-tiems-center gap-1">
              ${price} <i class="ri-close-line"></i> 1 person
            </h5>
            <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service Charge</h5>
            <span>${serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="total border-0 px-0">
            <h5>Total</h5>
            <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>

        <Button className="btn primary_btn w-100 mt-4" onClick={handleClick}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Booking;
