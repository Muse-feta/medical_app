import React from 'react'
import "@/asset/css/app.min.css";
import "@/asset/css/style.css";
import "@/asset/css/fontawesome.min.css";
import Image from 'next/image';
import process_bg from "@/asset/img/bg/process_bg_1.jpg";
import icon1 from "@/asset/img/theme-img/title_icon.svg";
import card from "@/asset/img/normal/process_card_1.jpg";
import card2 from "@/asset/img/normal/process_card_2.jpg";
import card3 from "@/asset/img/normal/process_card_3.jpg";
import card4 from "@/asset/img/normal/process_card_4.jpg";

const Process = () => {
  return (
    <section className="space" 
    style={{ backgroundImage: `url(${process_bg.src})` }}>
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">
            <Image src={icon1} alt="icon" />
            Work Process
          </span>
          <h2 className="sec-title">Let’s See How We Work Process</h2>
        </div>
        <div className="process-card-wrap">
          <div className="process-card">
            <div className="box-img">
              <div className="img">
                <Image src={card} alt="icon" />
              </div>
              <p className="box-number">01</p>
            </div>
            <h3 className="box-title">Patient Registration</h3>
            <p className="box-text">
              The first step in our process is to welcome our patients and
              ensure they have a experience.
            </p>
          </div>
          <div className="process-card">
            <div className="box-img">
              <div className="img">
                <Image src={card2} alt="icon" />
              </div>
              <p className="box-number">02</p>
            </div>
            <h3 className="box-title">Check-Ups</h3>
            <p className="box-text">
              Once the patient is checked in, healthcare professional conduct a
              thorough evaluation.
            </p>
          </div>
          <div className="process-card">
            <div className="box-img">
              <div className="img">
                <Image src={card3} alt="icon" />
              </div>
              <p className="box-number">03</p>
            </div>
            <h3 className="box-title">Get Report</h3>
            <p className="box-text">
              Analyzing the result of diagnostic tests & incorporating them into
              the diagnosis.
            </p>
          </div>
          <div className="process-card">
            <div className="box-img">
              <div className="img">
                <Image src={card4} alt="icon" />
              </div>
              <p className="box-number">04</p>
            </div>
            <h3 className="box-title">Ongoing Care</h3>
            <p className="box-text">
              Our commitment to our patient extend beyond the initial visit. we
              ensure continuity of care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process