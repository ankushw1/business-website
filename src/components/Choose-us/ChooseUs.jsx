import { Container, Row, Col } from "reactstrap";
import chooseImg from "../../assests/images/choose.jpg";
import "./choose-us.css";
import { Link } from "react-router-dom";

const ChooseUs = () => {
  const buttonStyles = {
    display: "inline-block",
    backgroundColor: "#ff9900",
    color: "#ffffff",
    padding: "10px 20px",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: "bold",
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Why Choose Us ?</h2>
              <p>
              Choose <strong>VelWet I.T. Solutions</strong>  for our expertise in Internet of Things (IoT), Automation, Android, WordPress, and Web Development. We are committed to delivering exceptional results, staying ahead of industry trends, and providing personalized service. Experience our dedication to excellence and let us be your trusted technology partner.
              </p>
              <h6>Take your business to new heights. Let's discuss your project today!</h6>
              <Link to="/contact" style={buttonStyles}>Get in Touch</Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              <img src={chooseImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
