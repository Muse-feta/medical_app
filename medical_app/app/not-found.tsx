import React from 'react'
import Image from 'next/image';
import error_img from "@/asset/img/theme-img/error.svg";
import { Breadcumb } from '@/components';

const NotFound = () => {
  return (
    <div>
        <Breadcumb title="404 - Error Page" subtitle="404 - Error Page"/>
      <section className="space">
        <div className="container">
          <div className="error-img">
            <Image src={error_img} alt="error" />
          </div>
          <div className="error-content">
            <h2 className="error-title">OooPs! Page Not Found</h2>
            <p className="error-text">
              Oops! The page you are looking for does not exist. It might have
              been moved or deleted. Please check and try again.
            </p>
            <a href="home-medical-clinic.html" className="th-btn">
              <i className="fal fa-home me-2"></i>Back To Home
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFound