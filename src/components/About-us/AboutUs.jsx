import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>
              At <strong>VelWet I.T. Solutions</strong> VelWet I.T. Solutions, we pride ourselves on being industry leaders in providing comprehensive technology solutions. With a team of highly skilled professionals, we bring expertise in Internet of Things (IoT), Automation, Android, WordPress, and Web Development. Our passion for innovation drives us to deliver exceptional results, ensuring client satisfaction and business growth. Partner with us and experience the power of cutting-edge technology combined with personalized service.
              </p>

            </div>
          </Col>
        </Row>
        <div className="about__counter d-flex align-items-center justify-content-between">
                <div className="single__counter">
                  <span className="counter">
                    <CountUp start={0} end={150} duration={3} suffix="+" />
                  </span>
                  <p className="counter__title">Completed Projects</p>
                </div>

                <div className="single__counter">
                  <span className="counter">
                    <CountUp start={0} end={99} duration={3} suffix="+" />
                  </span>
                  <p className="counter__title">Super Clients</p>
                </div>

                <div className="single__counter">
                  <span className="counter">
                    <CountUp start={0} end={75} duration={3} suffix="+" />
                  </span>
                  <p className="counter__title">Awesome Projects</p>
                </div>

                <div className="single__counter">
                  <span className="counter">
                    <CountUp start={0} end={200} duration={3} suffix="+" />
                  </span>
                  <p className="counter__title">Web Pages</p>
                </div>
              </div>
      </Container>
    </section>
  );
};

export default AboutUs;
