import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsleter and stay updated</p>
      <div>
        <input type="email" placeholder="Your email Id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
