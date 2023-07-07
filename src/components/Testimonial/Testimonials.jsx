import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../../assests/images/testimonial01.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-100" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Our Clients Say</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      
                      <p>
                      "VelWet I.T. Solutions has been instrumental in transforming our business through their expertise in IoT development. Their innovative solutions have streamlined our operations and enhanced our efficiency, resulting in significant cost savings. Their team is highly professional and attentive to our needs. We highly recommend their services."                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Hirepro Technologies</h6>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      
                      <p>
                      "We are extremely satisfied with the web development services provided by VelWet I.T. Solutions. They created a stunning and user-friendly website for our business that perfectly represents our brand. Their attention to detail and quick turnaround time were impressive. Working with their team has been a pleasure, and we look forward to collaborating with them on future projects."                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Regex Tech Solutions</h6>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      
                      <p>
                      "Working with VelWet I.T. Solutions for our WordPress development needs has been a game-changer. They crafted a visually stunning and functional website that perfectly aligned with our brand image. Their attention to detail, prompt communication, and technical expertise exceeded our expectations. We are thrilled with the outcome and highly recommend their services.                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">webex Technologies</h6>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="single__testimonial">
                      
                      <p>
                      "VelWet I.T. Solutions has been our go-to partner for Android app development. They understood our requirements thoroughly and delivered a high-quality and feature-rich application within our timeline and budget. Their professionalism, technical expertise, and excellent communication made the entire process smooth and efficient. We highly recommend their services for anyone in need of top-notch app development."
                    </p>  <div className="student__info mt-4">
                        <h6 className="fw-bold">MountBlue Tech Solutions</h6>
                      
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="single__testimonial">
                    
                      <p>
                      "VelWet I.T. Solutions has been an invaluable partner for our web development projects. Their team consistently delivers high-quality solutions that are scalable and robust. Their professionalism, transparent communication, and ability to meet deadlines have made them our trusted technology partner. We are grateful for their exceptional service and look forward to continuing our collaboration."
                    </p>  <div className="student__info mt-4">
                        <h6 className="fw-bold">Inkers Technologies</h6>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
