import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ServiceCard = (props) => {
  const navigate = useNavigate();

  function moreHandler() {
    navigate("/services");
  }

  const buttonStyles = {
    display: "inline-block",
    backgroundColor: "#ff9900",
    color: "#ffffff",
    padding: "10px 20px",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: "bold",
  };

  const { imgUrl, title, desc } = props.item;

  return (
    <div className="single__course__item">
      <div className="course__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="course__details">
        <h6 className="course__title mb-4">{title}</h6>
        <p>{desc}</p>
        <Link to="/contact" style={buttonStyles}>Contact Us</Link>
      </div>
    </div>
  );
};

export default ServiceCard;
