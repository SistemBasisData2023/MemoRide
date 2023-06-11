import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/config";
import { getToken } from "../context/AuthController";
import CreateTour from "./CreateTour";
import { Container, Row, Col, FormGroup, Input } from "reactstrap";
import Cookies from "js-cookie";
import "../styles/admin-profile.css";
import { AuthContext } from "../context/AuthContext";

const AdminProfile = () => {
  const { user } = useContext(AuthContext);
  const [tours, setTours] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [editedTourData, setEditedTourData] = useState({
    title: "",
    description: "",
    price: 1,
    city: "",
    address: "",
    distance: 1,
    max_group_size: 1,
    photo: "",
  });
  const [editingTourId, setEditingTourId] = useState(null);

  useEffect(() => {
    fetchTours();
  }, [currentPage]);

  const fetchTours = async () => {
    try {
      const token = getToken();
      const response = await axios.get(`${BASE_URL}/tours`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { page: currentPage, limit: 10 },
      });
      const { data } = response;
      setTours((prevTours) => [...prevTours, ...data.data]);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateTour = async (id) => {
    try {
      const token = getToken();
      console.log(token);
      const response = await axios.put(
        `${BASE_URL}/tours/${id}`,
        editedTourData, // Pass editedTourData as the request payload
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );
      const { data } = response;
      const updatedTours = tours.map((tour) =>
        tour.id === data.id ? data : tour
      );
      setTours(updatedTours);
      console.log("Updated tour success! : ", updatedTours);
      setEditingTourId(null); // Reset editingTourId after successful update
    } catch (error) {
      console.error(error);
      // Handle error message or perform any other actions
    }
  };

  const handleDeleteTour = async (id) => {
    try {
      const token = getToken();
      console.log(token);
      await axios.delete(`${BASE_URL}/tours/${id}`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${Cookies.get("accessToken")}`,
        },
      });
      const updatedTours = tours.filter((tour) => tour.id !== id);
      setTours(updatedTours);
      console.log("Updated tour success! : ", updatedTours);
    } catch (error) {
      console.error(error);
      // Handle error message or perform any other actions
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleEditTour = (tour) => {
    setEditedTourData(tour);
    setEditingTourId(tour.id);
  };

  const handleCancelEdit = () => {
    setEditedTourData({
      title: "",
      description: "",
      price: 1,
      city: "",
      address: "",
      distance: 1,
      max_group_size: 1,
      photo: "",
    });
    setEditingTourId(null);
  };

  return (
    <>
      <section>
        <Container>
          <Row>
            <div className="details">
              <h1>Hi, Admin!</h1>
              <Col lg="12">
                <div className="info">
                  <h5>
                    <span>Username</span>: {user?.username}
                  </h5>
                  <h5>
                    <span>Email</span>: {user?.email}
                  </h5>
                  <h5>
                    <span>Role</span>: {user?.role}
                  </h5>
                </div>
              </Col>

              <CreateTour
                updateTourData={handleUpdateTour}
                editedTourData={editedTourData}
                editingTourId={editingTourId}
                onCancelEdit={handleCancelEdit}
              />

              <h2>All Tours</h2>

              <ul className="button-list">
                {tours.map((tour) => (
                  <li key={tour.id}>
                    {editingTourId === tour.id ? (
                      <div>
                        <FormGroup>
                          <label htmlFor="title">Title:</label>
                          <Input
                            type="text"
                            id="title"
                            value={editedTourData.title}
                            onChange={(e) =>
                              setEditedTourData({
                                ...editedTourData,
                                title: e.target.value,
                              })
                            }
                            required
                          />
                        </FormGroup>

                        <FormGroup>
                          <label htmlFor="description">Description:</label>
                          <Input
                            type="textarea"
                            id="description"
                            value={editedTourData.description}
                            onChange={(e) =>
                              setEditedTourData({
                                ...editedTourData,
                                description: e.target.value,
                              })
                            }
                            required
                          />
                        </FormGroup>

                        <FormGroup>
                          <label htmlFor="price">Price:</label>
                          <Input
                            type="number"
                            id="price"
                            value={editedTourData.price}
                            onChange={(e) =>
                              setEditedTourData({
                                ...editedTourData,
                                price: e.target.value,
                              })
                            }
                            required
                          />
                        </FormGroup>

                        <FormGroup>
                          <label htmlFor="city">City:</label>
                          <Input
                            type="text"
                            id="city"
                            value={editedTourData.city}
                            onChange={(e) =>
                              setEditedTourData({
                                ...editedTourData,
                                city: e.target.value,
                              })
                            }
                            required
                          />
                        </FormGroup>

                        <FormGroup>
                          <label htmlFor="address">Address:</label>
                          <Input
                            type="text"
                            id="address"
                            value={editedTourData.address}
                            onChange={(e) =>
                              setEditedTourData({
                                ...editedTourData,
                                address: e.target.value,
                              })
                            }
                            required
                          />
                        </FormGroup>

                        <FormGroup>
                          <label htmlFor="distance">Distance:</label>
                          <Input
                            type="number"
                            id="distance"
                            value={editedTourData.distance}
                            onChange={(e) =>
                              setEditedTourData({
                                ...editedTourData,
                                distance: e.target.value,
                              })
                            }
                            required
                          />
                        </FormGroup>

                        <FormGroup>
                          <label htmlFor="max_group_size">
                            Max Group Size:
                          </label>
                          <Input
                            type="number"
                            id="max_group_size"
                            value={editedTourData.max_group_size}
                            onChange={(e) =>
                              setEditedTourData({
                                ...editedTourData,
                                max_group_size: e.target.value,
                              })
                            }
                            required
                          />
                        </FormGroup>

                        <FormGroup>
                          <label htmlFor="photo">Photo:</label>
                          <Input
                            type="text"
                            id="photo"
                            value={editedTourData.photo}
                            onChange={(e) =>
                              setEditedTourData({
                                ...editedTourData,
                                photo: e.target.value,
                              })
                            }
                            required
                          />
                        </FormGroup>

                        <div className="button-gap">
                          <button
                            className="btn primary_btn"
                            onClick={() => handleUpdateTour(tour.id)}
                          >
                            Save
                          </button>
                          <button
                            className="btn btn-dark"
                            onClick={handleCancelEdit}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <h3>{tour.title}</h3>
                        <p>{tour.description}</p>
                        <div className="button-gap">
                          <button
                            className="btn primary_btn"
                            onClick={() => handleEditTour(tour)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-dark"
                            onClick={() => handleDeleteTour(tour.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              <div>
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    disabled={currentPage === index + 1}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AdminProfile;
