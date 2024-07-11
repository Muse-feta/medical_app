import React from "react";
import Image from "next/image";
import form_bg from "@/asset/img/bg/contact_form_bg.png";
import Link from "next/link";

const Login: React.FC = () => {
  return (
    <div>
      <div className="space-bottom">
        <div className="container">
          <form
            action=""
            method="POST"
            className="contact-form ajax-contact"
            style={{ backgroundImage: `url(${form_bg.src})` }}
          >
            <div className="input-wrap">
              <h2 className="sec-title">Login</h2>
              <div className="row">
                <div className="form-group col-12">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                  />
                  <i className="fal fa-envelope"></i>
                </div>

                <div className="form-group col-12">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                  />
                  <i className="fal fa-lock"></i>
                </div>
                {/* add here signup and forgot password link */}
               <div className="lg:ml-[30px] text-[12px] md:text-[15px]">
                <p>If you don't have an account? <Link href="/signup">Sign Up</Link></p>
                <p>If you forgot your password?<Link href="/forgot-password">Forgot Password</Link></p>
               </div>
                <div className="form-btn col-12">
                  <button className="th-btn btn-fw">Login</button>
                </div>
              </div>
              <p className="form-messages mb-0 mt-3"></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
