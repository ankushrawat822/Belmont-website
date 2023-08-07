import React from "react";

function Hero() {
  return (
    <>
      <div className="hero-div">
        <h1 className="hero-title">Your Mental <br></br> Health Matters</h1>
        <h3 className=" hero-text">Rediscover Happiness</h3>
        <h2 className="hero-desc">
          Ready to embrace a colorful life again? Embark on your healing journey
          at Belmont Hospital.
        </h2>

        <button className="hero-button">
          <span className="mr-2">Get Started</span>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </>
  );
}

export default Hero;
