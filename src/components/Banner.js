import React from 'react';
import Button from './Button'; 

function Banner({ heading, text, primaryBtn, secondaryBtn }) {
    return (
      <div className="banner">
        <div className="container">
        <div className=" banner-content">
          <h2>{heading}</h2>
          <p>{text}</p>
          <div className="banner-buttons">
            <Button text={primaryBtn} type="primary" />
            <Button text={secondaryBtn} type="secondary" />
          </div>
        </div>
        </div>
      </div>
    );
}

export default Banner;
