import React from 'react'
import faq_bg from "@/asset/img/bg/faq_bg_1.jpg";
import "@/asset/css/app.min.css";
import "@/asset/css/style.css";
import "@/asset/css/fontawesome.min.css";

const Faq = () => {
  return (
    <div
      className="overflow-hidden"
      id="faq-sec"
      style={{ backgroundImage: `url(${faq_bg.src})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 text-center text-xl-start align-self-center">
            <div className="pe-xl-4 space-top pt-xl-0 pb-40 pb-xl-0">
              <div className="title-area text-center text-xl-start">
                <span className="sub-title">
                  <img src="assets/img/theme-img/title_icon_2.svg" alt="Icon" />
                  Faqs
                </span>
                <h2 className="sec-title text-white">
                  Frequently Asked Have
                  <br />
                  Any Question?
                </h2>
              </div>
              <div className="accordion" id="faqAccordion">
                <div className="accordion-card">
                  <div className="accordion-header" id="collapse-item-1">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1"
                      aria-expanded="true"
                      aria-controls="collapse-1"
                    >
                      01. What services does the clinic offer?
                    </button>
                  </div>
                  <div
                    id="collapse-1"
                    className="accordion-collapse collapse show"
                    aria-labelledby="collapse-item-1"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Our clinic is strategically located for easy access,
                        ensuring that you can reach us conveniently from various
                        parts of the community. We also provide accessibility.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card">
                  <div className="accordion-header" id="collapse-item-2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-2"
                      aria-expanded="false"
                      aria-controls="collapse-2"
                    >
                      02. How do I schedule an appointment?
                    </button>
                  </div>
                  <div
                    id="collapse-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-2"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Our clinic is strategically located for easy access,
                        ensuring that you can reach us conveniently from various
                        parts of the community. We also provide accessibility.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card">
                  <div className="accordion-header" id="collapse-item-3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-3"
                      aria-expanded="false"
                      aria-controls="collapse-3"
                    >
                      03. What are the clinic hours of operation?
                    </button>
                  </div>
                  <div
                    id="collapse-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-3"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Our clinic is strategically located for easy access,
                        ensuring that you can reach us conveniently from various
                        parts of the community. We also provide accessibility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="ps-xxl-4">
              <div className="faq-img1">
                <img src="assets/img/normal/faq_1.png" alt="faq" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq