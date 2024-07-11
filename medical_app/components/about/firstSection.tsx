import React from 'react'
import Image from 'next/image';
import shape1 from "@/asset/img/shape/pattern_shape_1.png";
import medicine from "@/asset/img/shape/medicine_1.png";
import about_img from "@/asset/img/normal/about_1_3.png";
import about2 from "@/asset/img/normal/about_1_4.jpg";

const firstSection = () => {
  return (
    <div className="overflow-hidden space" id="about-sec">
      <div className="shape-mockup" data-top="0" data-right="0">
        <Image src={shape1} alt="shape" />
      </div>
      <div
        className="shape-mockup jump d-none d-xl-none"
        data-bottom="10%"
        data-left="2%"
      >
        <Image src={medicine} alt="shape" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-8">
            <div className="title-area text-center">
              <span className="sub-title">
                
                About Our Company
              </span>
              <h2 className="sec-title">
                Taking Care of Your Health is Our Top Priority
              </h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-6 mb-30 mb-xl-0">
            <div className="img-box1">
              <div className="img1">
                <Image src={about_img} alt="about" />
              </div>
              <div className="about-info style2">
                <h3 className="box-title">Dr. Esita Jabed</h3>
                <p className="box-text">
                  Mention the languages
                  <br />
                  in which the staff.
                </p>
                <div className="box-review">
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <i className="fa-sharp fa-solid fa-star"></i>
                </div>
                <a href="tel:+16356478965" className="box-link">
                  <i className="fa-solid fa-phone"></i> +163 564 78965
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="ps-xxl-4 ms-xl-2 text-center text-xl-start">
              <div className="title-area mb-32">
                <p className="sec-text mt-n2">
                  A brief statement outlining the purpose and mission of the
                  clinic. This can include the commitment to patient care,
                  community health, and any specifical goals for our values.
                </p>
              </div>
              <div className="mb-25 mt-n1">
                <div className="checklist style2 list-two-column">
                  <ul>
                    <li>
                      <i className="fas fa-heart-pulse"></i> Medical Professionals
                    </li>
                    <li>
                      <i className="fas fa-heart-pulse"></i> Facilities and
                      Equipment
                    </li>
                    <li>
                      <i className="fas fa-heart-pulse"></i> Emergency Care
                    </li>
                    <li>
                      <i className="fas fa-heart-pulse"></i> Medical Consulting
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <a href="about.html" className="th-btn">
                  More About Us
                </a>
              </div>
              <div className="about-video-wrap">
                <div className="th-video about-video">
                  <Image src={about2} alt="video" />
                 
                </div>
                <div className="box-content">
                  <p className="box-text">
                    We offer flexible appointment scheduling options to
                    accommodate your busy lifestyle. Whether you prefer to book
                    in advance or need. Your health and well-being are our top
                    priorities.
                  </p>
                  <div className="about-contact-wrap">
                    <div className="about-contact">
                      <p className="box-label">Support Line 24/7</p>
                      <h3 className="box-title">
                        <i className="fal fa-envelope"></i>
                        <a href="mailto:info@contact.com">info@contact.com</a>
                      </h3>
                    </div>
                    <div className="about-contact">
                      <p className="box-label">Online Schedule</p>
                      <h3 className="box-title">
                        <i className="fal fa-calendar-alt"></i>
                        <a href="contact.html">Book Here</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default firstSection