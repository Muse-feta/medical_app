"use client";
import React, { useState } from "react";
import Image from "next/image";
import form_bg from "@/asset/img/bg/contact_form_bg.png";
import Link from "next/link";

const SignUpForm: React.FC = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Here you can add your form submission logic
    // For example, send formValues to your API
  };

  return (
    <div>
      <div className="space-bottom">
        <div className="container">
          <form
            onSubmit={handleSubmit}
            method="POST"
            className="contact-form ajax-contact"
            style={{ backgroundImage: `url(${form_bg.src})` }}
          >
            <div className="input-wrap">
              <h2 className="sec-title">Sign Up</h2>
              <div className="row">
                <div className="form-group col-12">
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    id="username"
                    placeholder="Username"
                    value={formValues.username}
                    onChange={handleChange}
                  />
                  <i className="fal fa-user"></i>
                </div>

                <div className="form-group col-12">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                  <i className="fal fa-envelope"></i>
                </div>

                <div className="form-group col-12">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={formValues.password}
                    onChange={handleChange}
                  />
                  <i className="fal fa-lock"></i>
                </div>

                <div className="form-group col-12">
                  <input
                    type="password"
                    className="form-control"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    value={formValues.confirmPassword}
                    onChange={handleChange}
                  />
                  <i className="fal fa-lock"></i>
                </div>

                <div className="lg:ml-[30px] text-[12px] md:text-[15px]">
                  <p>
                    Already have an account? <Link href="/login">Login</Link>
                  </p>
                  {/* <p>
                    Forgot your password?{" "}
                    <Link href="/forgot-password">Forgot Password</Link>
                  </p> */}
                </div>

                <div className="form-btn col-12">
                  <button type="submit" className="th-btn btn-fw">
                    Sign Up
                  </button>
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

export default SignUpForm;
