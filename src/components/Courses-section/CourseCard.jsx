import React from "react";
import { useNavigate } from "react-router-dom";

const CourseCard = (props) => {
  const navigate = useNavigate();

  function moreHandler() {
    navigate("/services");
  }

  const { imgUrl, title, desc } = props.item;

  return (
    <div className="single__course__item">
      <div className="course__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="course__details">
        <h6 className="course__title mb-4">{title}</h6>
        <p>{desc}</p>

        <div className=" d-flex justify-content-between align-items-center"></div>

        <div className="d-flex justify-content-between align-items-center">
          <p className="enroll d-flex align-items-center gap-1">
            <a onClick={moreHandler} style={{ cursor: "pointer" }}>
              Read More
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
