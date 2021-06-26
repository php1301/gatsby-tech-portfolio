import React from "react";
import { Link } from "gatsby";

const BlogCard = ({ data }) => {
  const { image, title, url, date } = data;
  return (
    <div className="latestBlogItem">
      <div className="lbi_thumb">
        <img src={image} alt={title} />
      </div>
      <div className="lbi_details">
        <Link className="lbid_date" to={url}>
          {date}
        </Link>
        <h2>
          <Link to={url}>{title}</Link>
        </h2>
        <Link className="learnM" to={url}>
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
