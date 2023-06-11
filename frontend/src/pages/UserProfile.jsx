import React, { useContext, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import BookingHistory from "../components/History/BookingHistory";
import { AuthContext } from "../context/AuthContext";
import femaleImage from "../assets/images/female.jpg";
import maleImage from "../assets/images/male.jpg";
import "../styles/user-profile.css";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [selectedGender, setSelectedGender] = useState("Female");

  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="details">
                <h1>
                  Welcome, <span>Memoar!</span>
                </h1>
                <h5>
                  <span>Username</span>: {user?.username}
                </h5>
                <h5>
                  <span>Email</span>: {user?.email}
                </h5>
                <div className="gender-switch">
                  <h5>
                    <span>Gender</span>:
                  </h5>
                  <button
                    className={`gender-option ${
                      selectedGender === "Female" ? "selected" : ""
                    }`}
                    onClick={() => handleGenderSelection("Female")}
                  >
                    Female
                  </button>
                  <button
                    className={`gender-option ${
                      selectedGender === "Male" ? "selected" : ""
                    }`}
                    onClick={() => handleGenderSelection("Male")}
                  >
                    Male
                  </button>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="avatar">
                <img
                  src={selectedGender === "Female" ? femaleImage : maleImage}
                  alt="Avatar"
                />
              </div>
            </Col>
          </Row>
        </Container>
        <Container>{user && <BookingHistory userId={user?.id} />}</Container>
      </section>
    </>
  );
};

export default UserProfile;
