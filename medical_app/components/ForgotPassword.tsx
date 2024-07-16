"use client";
import Link from 'next/link';
import React from 'react'
import { toast, Toaster } from 'sonner';
import form_bg from "@/asset/img/bg/contact_form_bg.png";
import authService from '@/services/auth.service';


const ForgotPassword = () => {
    const [email, setEmail] = React.useState('');

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      // check all fields are filled
      if (email === "") {
        toast.error("Please fill in all fields");
        return;
      }
  
      try {
        const res = await authService.forgotPassword(email);
        console.log(res);
        if (res.status === 200) {
          toast.success(res.message);
        } else {
          toast.error(res.message);
        }
      } catch (error) {
        console.log("Error", error);
        toast.error("Something went wrong");
      }
    }
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
              <h2 className="sec-title">Forgot Password</h2>
              <div className="row">
                <div className="form-group col-12">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email Address"
                  />
                  <i className="fal fa-envelope"></i>
                </div>

               
                <div className="lg:ml-[30px] text-[12px] md:text-[15px]">
                  <p>
                    If you don't have an account?{" "}
                    <Link href="/signup">Sign Up</Link>
                  </p>
                  <p>
                    already have an account?{" "}
                    <Link href="/login">Login</Link>
                  </p>
                </div>
                <div className="form-btn col-12">
                  <button className="th-btn btn-fw">Send Email</button>
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
}

export default ForgotPassword