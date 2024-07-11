import React from 'react'
import Image from 'next/image'
import bg from "@/asset/img/bg/why_bg_3.jpg";
import title from "@/asset/img/theme-img/title_icon.svg";

import card1 from "@/asset/img/bg/why_feature_bg.png";
import cardIcon from "@/asset/img/icon/choose_feature_1.svg";

import card2 from "@/asset/img/bg/why_feature_bg.png";
import cardIcon2 from "@/asset/img/icon/choose_feature_2.svg";

import card3 from "@/asset/img/bg/why_feature_bg.png";
import cardIcon3 from "@/asset/img/icon/choose_feature_3.svg";

import card4 from "@/asset/img/bg/why_feature_bg.png";
import cardIcon4 from "@/asset/img/icon/choose_feature_4.svg";

const WhyChooseAbout = () => {
  return (
    <div>
      <section
        className="why-sec3 space-top"
        id="why-sec"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="container pb-5 mb-2">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-8">
              <div className="title-area text-center">
                <span className="sub-title">
                  <Image src={title} alt="icon" />
                  Why Choose Us
                </span>
                <h2 className="sec-title">
                  We Have 25 Years Experience in Medical Health Services
                </h2>
              </div>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-xl-3 col-sm-6">
              <div
                className="why-feature"
                style={{ backgroundImage: `url(${card1.src})` }}
              >
                <div className="box-icon">
                  <Image src={cardIcon} alt="icon" />
                </div>
                <h3 className="box-title">Experience Doctor</h3>
                <p className="box-text">
                  Our products are certified by reputable organic.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div
                className="why-feature"
                style={{ backgroundImage: `url(${card2.src})` }}
              >
                <div className="box-icon">
                  <Image src={cardIcon2} alt="icon" />
                </div>
                <h3 className="box-title">Painless Treatment</h3>
                <p className="box-text">
                  Our products are certified by reputable organic.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div
                className="why-feature"
                style={{ backgroundImage: `url(${card3.src})` }}
              >
                <div className="box-icon">
                  <Image src={cardIcon3} alt="icon" />
                </div>
                <h3 className="box-title">Top Equipment</h3>
                <p className="box-text">
                  Our products are certified by reputable organic.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div
                className="why-feature"
                style={{ backgroundImage: `url(${card4.src})` }}
              >
                <div className="box-icon">
                  <Image src={cardIcon4} alt="icon" />
                </div>
                <h3 className="box-title">24/7 Advance Care</h3>
                <p className="box-text">
                  Our products are certified by reputable organic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhyChooseAbout