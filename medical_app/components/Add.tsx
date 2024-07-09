import React from 'react'
import Image from 'next/image';
import cta from "@/asset/img/normal/cta_1.png"
import cta_bg from "@/asset/img/bg/cta_bg_4.jpg"

const Add = () => {
  return (
    <section
      className="overflow-hidden cta-sec4"
      style={{ backgroundImage: `url(${cta_bg.src})` }}
    >
      <div className="container z-index-common">
        <div className="row align-items-end justify-content-center text-center text-xl-start">
          <div className="col-xl-7 col-lg-9 space-extra">
            <div className="title-area mb-32">
              <h2 className="sec-title text-white">
                We’re welcoming new patients and can’t wait to meet you!
              </h2>
              <p className="sec-text text-white">
                A brief statement outlining the purpose and mission of the
                clinic. This can include the commitment to patient care,
                community health, and any specific goals or values. Specify the
                types of medical services provided
              </p>
            </div>
            <div className="btn-group justify-content-center">
              <a href="contact.html" className="th-btn shadow-1">
                Book Appointment
              </a>
              <a href="contact.html" className="th-btn style2 shadow-1">
                Get Free Consulting
              </a>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="img-box2">
              <Image src={cta} alt="cta"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Add