import React from "react";
import { Container, Row, Col } from "reactstrap";
import ecom from "../assests/images/comm.png";
import digital from "../assests/images/digital.png";
import code from "../assests/images/web-design.png";
import social from '../assests/images/social.png'
import app from '../assests/images/web-development.png'
import web from '../assests/images/logo.png'
import "./services.css";
import ServiceCard from "../components/ServiceCard";
import { useNavigate } from "react-router-dom";



const coursesData = [
  {
    id: "01",
    title: "Web Development",
    imgUrl: code,
    desc:"With our web development expertise, we bring your vision to life online. Our skilled team crafts visually appealing, user-friendly websites that deliver an immersive digital experience, cater to your specific needs, and leave a lasting impression on your audience."
  },

  {
    id: "02",
    title: "Digital Marketing and SEO",
    imgUrl: digital,
    desc:'Our digital marketing services encompass various strategies to help businesses improve their online presence. We specialize in search engine optimization (SEO), social media marketing, content marketing, and online advertising. Our goal is to help you reach your target audience, increase brand visibility, and drive conversions through effective digital marketing campaigns.'
  },
  {
    id: "03",
    title: "WordPress Development",
    imgUrl: ecom,
    desc:'Elevate your online presence with our dynamic WordPress development solutions. From stunning designs to seamless functionality, we build responsive and scalable websites that showcase your brand, engage visitors, and drive conversions.'
},{
  id: "04",
  title: "Automation",
  imgUrl: code,
  desc:"Streamline your workflows and boost productivity through automation. Our tailored solutions automate repetitive tasks, improve accuracy, and free up valuable resources, allowing your business to focus on strategic initiatives and achieve higher levels of efficiency."
},

{
  id: "05",
  title: "App Development",
  imgUrl: app,
  desc:' Our team has the capability to develop custom mobile applications for iOS and Android platforms. We follow a comprehensive app development process, including UI/UX design, coding, testing, and deployment. Whether you need a consumer-facing app or an enterprise solution, we can bring your app ideas to life and provide ongoing support and maintenance.'
},{
  id: "06",
  title: "Android Development",
  imgUrl: social,
  desc:"Capture the vast potential of the Android platform with our expert development services. We create captivating and feature-rich Android applications that captivate users, drive engagement, and expand your brand's reach in the ever-growing mobile market."
},];

const Services = () => {

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
                <h2 style={{textAlign:'center',paddingBottom:'40px'}}>Our Services</h2>
                <p>
                At <strong>VelWet I.T. Solutions,</strong> we are committed to being your trusted technology partner, offering a comprehensive range of services tailored to meet the demands of the digital landscape. Our team of passionate professionals is driven by the pursuit of excellence, delivering exceptional results that empower businesses to harness the full potential of technology. Let us guide you on your digital journey and unlock new opportunities for success.                 </p>
              </div>

            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <ServiceCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services ;
