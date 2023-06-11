import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../utils/config";
import { getToken } from "../context/AuthController";
import { Form, FormGroup, Input, Button } from "reactstrap";
import Cookies from "js-cookie";
import "../styles/create-tour.css";

const CreateTour = ({ updateTourData }) => {
  const [tourData, setTourData] = useState({
    title: "",
    description: "",
    price: 1,
    city: "",
    address: "",
    distance: 1,
    max_group_size: 1,
    photo: "",
  });

  const handleCreateTour = async (e) => {
    e.preventDefault();

    try {
      const token = getToken();
      console.log(token);
      const response = await axios.post(`${BASE_URL}/tours`, tourData, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${Cookies.get("accessToken")}`,
        },
      });
      const { data } = response.data;
      console.log("Create Tour success! : ", response.data);
      // Optionally, you can reset the tourData state after creating a tour
      setTourData({
        title: "",
        description: "",
        price: 1,
        city: "",
        address: "",
        distance: 1,
        max_group_size: 1,
        photo: "",
      });
      // Update the tour data in the parent component
      updateTourData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setTourData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div className="create_tour">
      <div className="create_forn">
        <h2>Create Tour</h2>
        <Form className="create_info-form" onSubmit={handleCreateTour}>
          <FormGroup>
            <label htmlFor="title">Title:</label>
            <Input
              type="text"
              id="title"
              value={tourData.title}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="description">Description:</label>
            <Input
              type="textarea"
              id="description"
              value={tourData.description}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup className="d-flex align-items-center gap-3">
            <label htmlFor="price">Price:</label>
            <Input
              type="number"
              id="price"
              value={tourData.price}
              onChange={handleChange}
              required
            />

            <label htmlFor="distance">Distance:</label>
            <Input
              type="number"
              id="distance"
              value={tourData.distance}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup className="d-flex align-items-center gap-3">
            <label htmlFor="city">City:</label>
            <Input
              type="text"
              id="city"
              value={tourData.city}
              onChange={handleChange}
              required
            />
            <label htmlFor="address">Address:</label>
            <Input
              type="text"
              id="address"
              value={tourData.address}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup className="d-flex align-items-center gap-3">
            <label htmlFor="max_group_size">Max People:</label>
            <Input
              type="number"
              id="max_group_size"
              value={tourData.max_group_size}
              onChange={handleChange}
              required
            />

            <label htmlFor="photo">Photo:</label>
            <Input
              type="text"
              id="photo"
              value={tourData.photo}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <div className="text-center">
            <Button className="btn primary_btn mt-2 create_btn" type="submit">
              Create Tour
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateTour;
