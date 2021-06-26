import React from "react";
import { Link } from "gatsby";

const ServiceCardThree = ({ data }) => {
  const { title, image, url } = data;
  return (
    <div className="single_wedo">
      <img src={image} alt={title} />
      <div className="overlay_wedo">
        <Link to={url}>{title}</Link>
      </div>
    </div>
  );
};

export default ServiceCardThree;
