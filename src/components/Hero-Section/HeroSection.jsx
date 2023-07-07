import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img1.png";
import "./hero-section.css";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {

  const navigate = useNavigate()

  function startHandler (){
    navigate('/contact')
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
              
VelWet I.T. Solutions
Technology we build for you
            </h2>
              <p className="mb-5">
              Welcome to <strong>VelWet I.T. Solutions!</strong> We are a team of creative minds and technical experts dedicated to delivering exceptional Internet of Things (IoT), Automation, Android, WordPress, and Web Development solutions. With our innovative approach and unwavering commitment, we help businesses thrive in the digital era. Let us be your trusted partner in harnessing the power of technology to drive your success.              </p>
            </div>
            <div className="get-started">
              <button className="btn" onClick={startHandler}>Get Started</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
