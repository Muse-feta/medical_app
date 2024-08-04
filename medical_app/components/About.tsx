import React from 'react'
import "@/asset/css/app.min.css";
import "@/asset/css/style.css";
import "@/asset/css/fontawesome.min.css";
import Image from 'next/image';
import shape1 from "@/asset/img/shape/pattern_shape_1.png";
import medicine from "@/asset/img/shape/medicine_1.png";
import about_1 from "@/asset/img/normal/about_1_3.png"

const About = () => {
  return (
    <div className="space" id="about-sec">
      <div className="shape-mockup" data-top="0" data-right="0">
        <Image src={shape1} alt="shape" />
      </div>
      <div className="shape-mockup jump" data-bottom="10%" data-right="3%">
        <Image src={medicine} alt="shape" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 mb-30 mb-xl-0">
            <div className="img-box1">
              <div className="img1">
                <Image src={about_1} alt="about" />
              </div>
              <div className="about-info">
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
                <span className="sub-title">
                  
                  About Us Company
                </span>
                <h2 className="sec-title">Affordable Health Care Solutions</h2>
                <p className="sec-text">
                  A brief statement outlining the purpose and mission of the
                  clinic. This can include the commitment to patient care,
                  community health, and any specifical goals for our values.
                </p>
              </div>
              <div className="mb-30 mt-n1">
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
                    <li>
                      <i className="fas fa-heart-pulse"></i> Services Offered
                    </li>
                    <li>
                      <i className="fas fa-heart-pulse"></i> Specializations
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <a href="about.html" className="th-btn">
                  More About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About