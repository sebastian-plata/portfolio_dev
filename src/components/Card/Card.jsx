import React from "react";

import "./Card.css";

const Card = ({ imgUrl, title, content, link }) => {
  return (
    <div className="app__card-container">
      <div className="app__card">
        <div className="app__card-front">
          <img src={imgUrl} alt="" />
        </div>
        <div className="app__card-back">
          <p className="app__card-info_head">{title}</p>
          <p className="app__card-info_para">{content}</p>
          <a target="_blank" className="app__card-info_link" href={link}>
            view more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
