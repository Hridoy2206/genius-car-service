import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, description, price,id } = service;
  const navigate= useNavigate()

  const navigateToServiceDetails= id =>{
    navigate(`/service/${id}`)
  }
  return (
    <div className="service-description">
      <div className="service-img">
        <img src={img} alt="" />
      </div>
      <h4>{name}</h4>
      <p>Price:{price}</p>
      <p>{description}</p>
      <button onClick={()=>navigateToServiceDetails(id)} className="booking-btn">Book {name}</button>
    </div>
  );
};

export default Service;
