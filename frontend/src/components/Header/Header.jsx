import React, { useRef, useEffect, useContext, useState } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import logo from "../../assets/images/logo.jpg";
import "./header.css";

const nav_links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tour",
    display: "Tours",
  },
  {
    path: "/gallery",
    display: "Gallery",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const { user, handleLogout } = useContext(AuthContext);
  const userId = user ? user.id : null;
  const username = user ? user.username : null;
  const role = user ? user.role : null;
  console.log(user);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        if (headerRef.current) {
          headerRef.current.classList.add("sticky_header");
        }
      } else {
        if (headerRef.current) {
          headerRef.current.classList.remove("sticky_header");
        }
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return () => {
      window.removeEventListener("scroll", stickyHeaderFunc);
    };
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Row>
        <div className="nav_wrapper d-flex align-items-center justify-content-between">
          {/* Logo Start*/}
          <div className="Logo">
            <img src={logo} alt="" />
          </div>
          {/* Logo End */}

          {/* Menu Start*/}
          <div className="Navigation">
            <ul className="menu d-flex align-items-center gap-5">
              {nav_links.map((item, index) => (
                <li className="nav_item" key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "active_link" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* Menu End */}

          <div className="buttons nav_right d-flex align-items-center gap-4">
            {user !== null ? (
              <div className="nav_btn d-flex align-items-center gap-4">
                <div className="user_show">
                  {role === "admin" ? (
                    <Link to="/admin-profile" className="link">
                      <i className="ri-user-smile-fill"></i>
                    </Link>
                  ) : (
                    <Link to={`/user-profile/${userId}`} className="link">
                      <i className="ri-user-smile-fill"></i>
                    </Link>
                  )}
                </div>

                <div className="username_show">
                  {role === "admin" ? (
                    <Link to="/admin-profile" className="link">
                      <h5>{"Admin " + username}</h5>
                    </Link>
                  ) : (
                    <Link to={`/user-profile/${userId}`} className="link">
                      <h5>{username}</h5>
                    </Link>
                  )}
                </div>
                <Button className="btn btn-dark" onClick={handleLogout}>
                  <Link to={`/home`} className="link">
                    Log Out
                  </Link>
                </Button>
              </div>
            ) : (
              <div className="nav_btn d-flex align-items-center gap-4">
                <Button className="btn secondary_btn">
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="btn primary_btn">
                  <Link to="/register">Register</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </Row>
    </header>
  );
};

export default Header;
