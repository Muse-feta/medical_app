import React from 'react'
import "@/asset/css/app.min.css";
import "@/asset/css/style.css";
import "@/asset/css/fontawesome.min.css";

const Counter = () => {
  return (
    <div
      className="z-index-common"
      data-pos-for="#team-sec"
      data-sec-pos="bottom-half"
    >
      <div className="container">
        <div className="counter-card-wrap">
          <div className="counter-card">
            <h2 className="box-number">
              <span className="number">
                <span className="counter-number">69</span>k
              </span>
              <span className="plus">+</span>
            </h2>
            <p className="box-text">Satisfied Patients</p>
          </div>
          <div className="divider"></div>
          <div className="counter-card">
            <h2 className="box-number">
              <span className="number">
                <span className="counter-number">236</span>
              </span>
              <span className="plus">+</span>
            </h2>
            <p className="box-text">Professional Doctors</p>
          </div>
          <div className="divider"></div>
          <div className="counter-card">
            <h2 className="box-number">
              <span className="number">
                <span className="counter-number">19</span>k
              </span>
              <span className="plus">+</span>
            </h2>
            <p className="box-text">Operations Successful</p>
          </div>
          <div className="divider"></div>
          <div className="counter-card">
            <h2 className="box-number">
              <span className="number">
                <span className="counter-number">320</span>
              </span>
              <span className="plus">+</span>
            </h2>
            <p className="box-text">National Awards Win</p>
          </div>
          <div className="divider"></div>
        </div>
      </div>
    </div>
  );
}

export default Counter