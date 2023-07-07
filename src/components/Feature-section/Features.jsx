import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Web Development",
    desc: "We specialize in creating stunning and functional websites tailored to your business needs. Our expert developers use the latest technologies to deliver high-quality web solutions!",
    icon: "ri-code-line",
  },

  {
    title: "Android Development",
    desc:"Capture the vast potential of the Android platform with our expert development services. We create captivating and feature-rich Android applications that expand your brand's reach in the ever-growing mobile market.",
    icon: "ri-smartphone-line",
  },

  {
    title: "Digital Marketing",
    desc: "Boost your online presence and reach your target audience with our result-driven digital marketing strategies. We offer SEO, social media marketing, PPC advertising, and more.",
    icon: "ri-line-chart-line",
  },
];

const Features = () => {
  return (
    <section>
              <h2 style={{textAlign:'center',paddingBottom:'30px'}}>Hire Us For</h2>

      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
