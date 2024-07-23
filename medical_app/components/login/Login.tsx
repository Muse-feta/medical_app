"use client";
import React, { useState } from "react";
import Image from "next/image";
import form_bg from "@/asset/img/bg/contact_form_bg.png";
import Link from "next/link";
import { toast, Toaster } from "sonner";
import authService from "@/services/auth.service";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // check all fields are filled
    if (formValues.email === "" || formValues.password === "") {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const res = await authService.login(formValues);
      console.log(res);
      if (res.status === 200) {
        toast.success(res.message);
        // redirect to homepage
        setTimeout(() => {
          router.push("/");
        }, 3000);
      } else {
        toast.error(res.message);
      }

      // reset form values
      setFormValues({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log("Error", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <div className="space-bottom">
        <div className="container">
          <form
            onSubmit={handleLogin}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
                    placeholder="Your Password"
                  />
                  <i className="fal fa-lock"></i>
                </div>
                <div className="lg:ml-[30px] text-[12px] md:text-[15px]">
                  <p>
                    If you don't have an account?{" "}
                    <Link href="/signup">Sign Up</Link>
                  </p>
                  <p>
                    If you forgot your password?{" "}
                    <Link href="/forgot-password">Forgot Password</Link>
                  </p>
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

      <Toaster position="top-left" richColors />
    </div>
  );
};

export default Login;
