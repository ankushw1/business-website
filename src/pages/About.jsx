import React from "react";
import { Container, Row, Col } from "reactstrap";
import aboutImg from '../assests/images/about-us.png'
import CountUp from "react-countup";
import ChooseUs from '../components/Choose-us/ChooseUs'

const About = () => {
  const counterStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "40px",
    marginBottom: "20px",
    color: "#555555",
  };

  const counterCardStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const counterNumberStyles = {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const counterTitleStyles = {
    fontSize: "16px",
    textTransform: "uppercase",
  };

  return (
    <section>
      <Container>
        <h2 style={{ textAlign: 'center', paddingBottom: '40px' }}>About Us</h2>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <p>
              <strong>VelWet I.T. Solutions </strong>  is a dynamic technology solutions provider, specializing in Internet of Things (IoT), Automation, Android, WordPress, and Web Development. With a team of skilled professionals, we empower businesses with innovative and customized IT solutions. Our commitment to staying ahead of industry trends ensures that we deliver cutting-edge solutions to drive business growth. We pride ourselves on our client-centric approach, understanding the unique needs of each business to provide tailored solutions. Experience the power of technology with VelWet I.T. Solutions and unlock your business's full potential.
              </p>
            </div>
          </Col>
        </Row>
        <div style={counterStyles}>
          <div style={counterCardStyles}>
            <span style={counterNumberStyles}>
              <CountUp start={0} end={150} duration={3} suffix="+" />
            </span>
            <p style={counterTitleStyles}>Completed Projects</p>
          </div>

          <div style={counterCardStyles}>
            <span style={counterNumberStyles}>
              <CountUp start={0} end={99} duration={3} suffix="+" />
            </span>
            <p style={counterTitleStyles}>Super Clients</p>
          </div>

          <div style={counterCardStyles}>
            <span style={counterNumberStyles}>
              <CountUp start={0} end={75} duration={3} suffix="+" />
            </span>
            <p style={counterTitleStyles}>Awesome Projects</p>
          </div>

          <div style={counterCardStyles}>
            <span style={counterNumberStyles}>
              <CountUp start={0} end={200} duration={3} suffix="+" />
            </span>
            <p style={counterTitleStyles}>Web Pages</p>
          </div>
        </div>

        <div>
          <h3 style={{ textAlign: 'center', marginBottom: '10px' }}>Our Vision:</h3>
          <p style={{ textAlign: 'center' }}>
          Our vision at <strong>VelWet I.T. Solutions</strong>  is to be a leading technology solutions provider, empowering businesses to thrive in the digital era. We aim to revolutionize industries through innovative and customized IT solutions that drive efficiency, growth, and success.
          </p>

          <h3 style={{ textAlign: 'center', marginBottom: '10px', marginTop: '30px' }}>Our Mission:</h3>
          <p style={{ textAlign: 'center' }}>
          Our mission is to deliver exceptional technology solutions that transform businesses and enable them to achieve their goals. We strive to provide cutting-edge services in Internet of Things (IoT), Automation, Android, WordPress, and Web Development, tailored to the unique needs of each client. By staying at the forefront of industry trends and fostering strong client relationships, we aim to be the trusted partner that propels businesses towards digital excellence.
          </p>
        </div>
      </Container>
      <ChooseUs/>
    </section>
  );
};

export default About;
