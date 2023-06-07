import React, { useRef, useEffect } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";

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
                    className={(navClass) =>
                      navClass.isActive ? "active_link" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* Menu End */}

          <div className="nav_right d-flex align-items-center gap-4">
            <div className="nav_btn d-flex align-items-center gap-4">
              <Button className="btn secondary_btn">
                <Link to="/login">Login</Link>
              </Button>
              <Button className="btn primary_btn">
                <Link to="/register">Register</Link>
              </Button>
            </div>

            <span className="menu">
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Row>
    </header>
  );
};

export default Header;
