"use client";
import { Toaster, toast } from "sonner";
import React, { useState } from "react";
import Image from "next/image";
import form_bg from "@/asset/img/bg/contact_form_bg.png";
import Link from "next/link";
import authService from "@/services/auth.service";
import { useRouter } from "next/navigation";

const SignUpForm: React.FC = () => {
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  });

  // check all fields are filled

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      formValues.firstname === "" ||
      formValues.lastname === "" ||
      formValues.email === "" ||
      formValues.password === ""
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const res = await authService.signUp(formValues);
      console.log(res);
      if (res.status === 201) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
      // reset form values
      setFormValues({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        password: "",
      });
      // redirect to login page
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    } catch (error: any) {
      console.log(error);
      toast.error("Something went wrong, please try again later");
    }
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
                    name="firstname"
                    id="firstname"
                    placeholder="First Name"
                    value={formValues.firstname}
                    onChange={handleChange}
                  />
                  <i className="fal fa-user"></i>
                </div>

                <div className="form-group col-12">
                  <input
                    type="text"
                    className="form-control"
                    name="lastname"
                    id="firstname"
                    placeholder="Last Name"
                    value={formValues.lastname}
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
                    type="text"
                    className="form-control"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    value={formValues.phone}
                    onChange={handleChange}
                  />
                  <i className="fal fa-phone"></i>
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
      <Toaster richColors position="top-left" />
    </div>
  );
};

export default SignUpForm;
