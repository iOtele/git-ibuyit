import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
          ut cum reprehenderit id inventore itaque qui dolorum laborum
          necessitatibus impedit sint iure, omnis dolor ab sit corporis dolorem
          tenetur accusamus vel voluptate sed voluptatibus assumenda quidem?
          Doloribus cum modi, fugiat vel, sequi consectetur, ipsum nihil
          temporibus dolorem ratione sapiente dolorum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          nisi inventore eum dolore officia, quidem sequi voluptatibus soluta
          repellat placeat, incidunt in, magni quibusdam deleniti? Quos
          similique consequatur dolor sunt.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
