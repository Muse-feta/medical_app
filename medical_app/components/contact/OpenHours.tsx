import React from 'react'

const OpenHours = () => {
  return (
    <div>
      <div className="space">
        <div className="container">
          <div className="row gy-4">
            
          {/* open hours card starts here */}
            <div className="col-xl-12 col-md-12">
              <div className="location-card">
                <h3 className="box-title">Australia Branch</h3>
                <p className="footer-info">
                  <i className="far fa-location-dot"></i> 260 Lygon St, Brunswick
                  East VIC 3057, Australia
                </p>
                <p className="footer-info">
                  <i className="far fa-envelope"></i>
                  <a href="mailto:info@contactaus.com" className="info-box_link">
                    info@contactaus.com
                  </a>
                </p>
                <p className="footer-info">
                  <i className="far fa-phone"></i>
                  <a href="tel:+61399882015" className="info-box_link">
                    +613 9988 2015
                  </a>
                </p>
              </div>
              <div className="contact-feature">
                <div className="box-icon">
                  <i className="far fa-clock"></i>
                </div>
                <div className="media-body">
                  <h3 className="box-title">Opening Hours</h3>
                  <p className="box-text">Mon to sat: 8:00am - 9:00pm</p>
                  <p className="box-schedule">Monday - Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenHours