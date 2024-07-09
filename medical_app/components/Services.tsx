import React from 'react'
import Image from 'next/image';
import bg_img from "@/asset/img/bg/service_bg_1.png";
import card_img1 from "@/asset/img/bg/service_card_bg.png";
import card_bg1 from "@/asset/img/service/service_card_1.jpg";
import card1 from "@/asset/img/icon/service_card_1.svg";

import card_bg2 from "@/asset/img/service/service_card_2.jpg";
import card_img2 from "@/asset/img/bg/service_card_bg.png";
import card2 from "@/asset/img/icon/service_card_5.svg";

import card_bg3 from "@/asset/img/service/service_card_3.jpg";
import card_img3 from "@/asset/img/bg/service_card_bg.png";
import card3 from "@/asset/img/icon/service_card_3.svg";

import card_bg4 from "@/asset/img/service/service_card_4.jpg";
import card_img4 from "@/asset/img/bg/service_card_bg.png";
import card4 from "@/asset/img/icon/service_card_4.svg";


const Services = () => {
  return (
    <section
      className="overflow-hidden bg-smoke space"
      id="service-sec"
      data-bg-src=""
      style={{ backgroundImage: `url(${bg_img.src})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="title-area text-center">
              <span className="sub-title">Our Services</span>
              <h2 className="sec-title">
                Our Mediax specialties Technical service
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-4 justify-content-center">
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div
              className="service-card"
              style={{ backgroundImage: `url(${card_bg1.src})` }}
            >
              <div className="box-shape">
                <Image src={card_img1} alt="Service" />
              </div>
              <div className="flex items-center justify-center mb-14">
                <Image src={card1} alt="Icon" />
              </div>
              <h3 className="box-title">
                <a href="service-details.html">Internal Medicine</a>
              </h3>
              <p className="box-text">30+ Doctors</p>
              <a
                href="service-details.html"
                className="th-btn btn-sm style2 theme-color"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div
              className="service-card"
              style={{ backgroundImage: `url(${card_bg2.src})` }}
            >
              <div className="box-shape">
                <Image src={card_img2} alt="Service" />
              </div>
              <div className="flex items-center justify-center mb-14">
                <Image src={card2} alt="Icon" />
              </div>
              <h3 className="box-title">
                <a href="service-details.html">Dental Care</a>
              </h3>
              <p className="box-text">20+ Doctors</p>
              <a
                href="service-details.html"
                className="th-btn btn-sm style2 theme-color"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div
              className="service-card"
              style={{ backgroundImage: `url(${card_bg3.src})` }}
            >
              <div className="box-shape">
                <Image src={card_img3} alt="Service" />
              </div>
              <div className="flex items-center justify-center mb-14">
                <Image src={card3} alt="Icon" />
              </div>
              <h3 className="box-title">
                <a href="service-details.html">Urology Care</a>
              </h3>
              <p className="box-text">20+ Doctors</p>
              <a
                href="service-details.html"
                className="th-btn btn-sm style2 theme-color"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div
              className="service-card"
              style={{ backgroundImage: `url(${card_bg4.src})` }}
            >
              <div className="box-shape">
                <Image src={card_img4} alt="Service" />
              </div>
              <div className="flex items-center justify-center mb-14">
                <Image src={card4} alt="Icon" />
              </div>
              <h3 className="box-title">
                <a href="service-details.html">Neurology Care</a>
              </h3>
              <p className="box-text">10+ Doctors</p>
              <a
                href="service-details.html"
                className="th-btn btn-sm style2 theme-color"
              >
                Read More
              </a>
            </div>
          </div>

          {/* <div className="col-xl-3 col-lg-4 col-sm-6">
            <div
              className="service-card"
              data-bg-src="assets/img/service/service_card_5.jpg"
            >
              <div className="box-shape">
                <img src="assets/img/bg/service_card_bg.png" alt="Service" />
              </div>
              <div className="box-icon">
                <img src="assets/img/icon/service_card_5.svg" alt="Icon" />
              </div>
              <h3 className="box-title">
                <a href="service-details.html">Gynecologists</a>
              </h3>
              <p className="box-text">30+ Doctors</p>
              <a
                href="service-details.html"
                className="th-btn btn-sm style2 theme-color"
              >
                Read More
              </a>
            </div>
          </div> */}

          {/* <div className="col-xl-3 col-lg-4 col-sm-6">
            <div
              className="service-card"
              data-bg-src="assets/img/service/service_card_6.jpg"
            >
              <div className="box-shape">
                <img src="assets/img/bg/service_card_bg.png" alt="Service" />
              </div>
              <div className="box-icon">
                <img src="assets/img/icon/service_card_6.svg" alt="Icon" />
              </div>
              <h3 className="box-title">
                <a href="service-details.html">Ophthalmology</a>
              </h3>
              <p className="box-text">24+ Doctors</p>
              <a
                href="service-details.html"
                className="th-btn btn-sm style2 theme-color"
              >
                Read More
              </a>
            </div>
          </div> */}

          {/* <div className="col-xl-3 col-lg-4 col-sm-6">
            <div
              className="service-card"
              data-bg-src="assets/img/service/service_card_7.jpg"
            >
              <div className="box-shape">
                <img src="assets/img/bg/service_card_bg.png" alt="Service" />
              </div>
              <div className="box-icon">
                <img src="assets/img/icon/service_card_7.svg" alt="Icon" />
              </div>
              <h3 className="box-title">
                <a href="service-details.html">Orthopedics</a>
              </h3>
              <p className="box-text">26+ Doctors</p>
              <a
                href="service-details.html"
                className="th-btn btn-sm style2 theme-color"
              >
                Read More
              </a>
            </div>
          </div> */}

          {/* <div className="col-xl-3 col-lg-4 col-sm-6">
            <div
              className="service-card"
              data-bg-src="assets/img/service/service_card_8.jpg"
            >
              <div className="box-shape">
                <img src="assets/img/bg/service_card_bg.png" alt="Service" />
              </div>
              <div className="box-icon">
                <img src="assets/img/icon/service_card_8.svg" alt="Icon" />
              </div>
              <h3 className="box-title">
                <a href="service-details.html">Cardiology</a>
              </h3>
              <p className="box-text">20+ Doctors</p>
              <a
                href="service-details.html"
                className="th-btn btn-sm style2 theme-color"
              >
                Read More
              </a>
            </div>
          </div> */}
        </div>
        <div className="mt-5 pt-2 space-extra-bottom">
          <p className="round-text">
            <span className="text">
              You Get Our 20+ More services...
              <a href="service.html" className="line-btn">
                Explore All Services
              </a>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services