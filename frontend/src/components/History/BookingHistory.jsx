import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";
import { AuthContext } from "../../context/AuthContext";
import { getToken } from "../../context/AuthController";
import Cookies from "js-cookie";
import { Card, CardBody } from "reactstrap";

const BookingHistory = ({ userId }) => {
  const { id } = useParams();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    console.log("id:", id); // Log the value of id
    fetchBookings();
  }, []);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    const formattedDate = date.toLocaleDateString(undefined, options);
    const parts = formattedDate.split(", ");
    const formattedString = parts[0] + ", " + parts[1] + " " + parts[2];
    return formattedString;
  };

  const fetchBookings = async () => {
    try {
      const token = getToken(); // Retrieve the token from localStorage
      console.log(token);

      const response = await axios.get(`${BASE_URL}/booking/user/${id}`, {
        withCredentials: true, // Include this option to send cookies
        headers: {
          Authorization: `Bearer ${Cookies.get("accessToken")}`, // Include the token in the Authorization header
        },
      });

      if (response.status === 200) {
        const data = response.data;
        setBookings(data.data);
      } else {
        throw new Error("Failed to fetch booking history");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Booking History</h1>
      <Card>
        <CardBody>
          <table className="table">
            <thead>
              <tr>
                <th>Tour Name</th>
                <th>User Email</th>
                <th>Full Name</th>
                <th>Group Size</th>
                <th>Phone</th>
                <th>Booked At</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.tour_name}</td>
                  <td>{booking.user_email}</td>
                  <td>{booking.full_name}</td>
                  <td>{booking.group_size}</td>
                  <td>{booking.phone}</td>
                  <td>{formatDate(booking.book_at)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
};

export default BookingHistory;
