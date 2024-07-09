import React from 'react'
import Image from 'next/image';
import img1 from "@/asset/img/theme-img/title_icon.svg";
import img2 from "@/asset/img/normal/why_1.jpg";

const WhyChoose = () => {
  return (
    <div className="overflow-hidden space">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 text-center text-xl-start">
            <div className="pe-xxl-5 mb-40 mb-xl-0">
              <div className="title-area mb-32">
                <span className="sub-title">
                  <Image src={img1} alt="icon" />
                  Why Choose Us
                </span>
                <h2 className="sec-title">
                  We Are Always Open For Your Health Services
                </h2>
              </div>
              <div className="choose-feature-wrap">
                <div className="choose-feature">
                  <div className="box-number">01</div>
                  <div className="media-body">
                    <h3 className="box-title">Compassionate & Expert Care</h3>
                    <p className="box-text">
                      Our team of dedicated healthcare professionals combines
                      years of experience with a genuine commitment to
                      providing.
                    </p>
                  </div>
                </div>
                <div className="choose-feature">
                  <div className="box-number">02</div>
                  <div className="media-body">
                    <h3 className="box-title">Patient-Centered Approach</h3>
                    <p className="box-text">
                      Your health and well-being are our top priorities. We take
                      the time to listen to your concerns, answer your
                      questions.
                    </p>
                  </div>
                </div>
                <div className="choose-feature">
                  <div className="box-number">03</div>
                  <div className="media-body">
                    <h3 className="box-title">Personalized Treatment Plans</h3>
                    <p className="box-text">
                      We understand that every patient is unique, and their
                      healthcare needs may vary. That's why we create
                      individualized treatment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="img-box3">
              <Image src={img2} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose