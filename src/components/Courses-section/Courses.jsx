import React from "react";
import { Container, Row, Col } from "reactstrap";
import ecom from "../../assests/images/web-development.png";
import digital from "../../assests/images/digital.png";
import code from "../../assests/images/web-design.png";
import "./courses.css";
import CourseCard from "./CourseCard";
import { useNavigate } from "react-router-dom";


const coursesData = [
  {
    id: "01",
    title: "Android Development",
    imgUrl: code,
    desc:"Capture the vast potential of the Android platform with our expert development services. We create captivating and feature-rich Android applications that captivate users, drive engagement, and expand your brand's reach in the ever-growing mobile market."
  },

  {
    id: "02",
    title: "Automation",
    imgUrl: digital,
    desc:'Streamline your workflows and boost productivity through automation. Our tailored solutions automate repetitive tasks, improve accuracy, and free up valuable resources, allowing your business to focus on strategic initiatives and achieve higher levels of efficiency.'
  },

  {
    id: "03",
    title: "WordPress Development",
    imgUrl: ecom,
    desc:'Elevate your online presence with our dynamic WordPress development solutions. From stunning designs to seamless functionality, we build responsive and scalable websites that showcase your brand, engage visitors, and drive conversions.'
}];

const Courses = () => {

  const navigate = useNavigate()

  function seeallHandler (){
    navigate('/services')
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left ">
                <h2>Our Services</h2>
                <p>
                At <strong>VelWet I.T. Solutions, </strong>  we are committed to being your trusted technology partner, offering a comprehensive range of services tailored to meet the demands of the digital landscape. Our team of passionate professionals is driven by the pursuit of excellence, delivering exceptional results that empower businesses to harness the full potential of technology. Let us guide you on your digital journey and unlock new opportunities for success.                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn" onClick={seeallHandler}>See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
