import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

import logo from "../../assests/images/velvetit.png";

import "./footer.css";

const footerQuickLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "About",
    url: "/about",
  },
  {
    display: "Services",
    url: "/services",
  },
  {
    display: "Contact Us",
    url: "/contact",
  },
];

const footerInfoLinks = [
  {
    display: "Privacy Policy",
    url: "#",
  },
  {
    display: "Terms and Condtitons",
    url: "#",
  },
  {
    display: "Terms of Use",
    url: "#",
  },
  {
    display: "Terms of Service",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">
            <div className="logo">
              <div className="d-flex align-items-center gap-1">
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "150px", height: "auto" }}
                />
              </div>
            </div>

            <div className="follows">
              <br />
              <p className="mb-0">Follow us on social media</p>
              <span>
                <a
                  href="https://youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-youtube-line"></i>
                </a>
              </span>

              <span>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-github-line"></i>
                </a>
              </span>

              <span>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-linkedin-line"></i>
                </a>
              </span>
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem
                  key={index}
                  className="border-0 ps-0 link__item"
                >
                  <li className="footer-link-item">
                    <Link to={item.url}>{item.display}</Link>
                  </li>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem
                  key={index}
                  className="border-0 ps-0 link__item"
                >
                  <li className="footer-link-item">
                    <Link to={item.url}>{item.display}</Link>
                  </li>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h6 className="fw-bold">Get in Touch</h6>

            <p>Address: Ch. Sambhajinagar, Maharashtra..</p>
            <p>Phone: <strong>+91 90000000</strong></p>
            <p>Email: info@velvet.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
