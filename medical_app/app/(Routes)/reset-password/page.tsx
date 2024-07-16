"use client";
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import form_bg from "@/asset/img/bg/contact_form_bg.png";
import { Toaster } from 'sonner';

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
    const [error, setError] = useState("");
      const [isVerified, setIsVerified] = useState(false);


        // const verifyUserEmail = async () => {
        //   try {
        //     await axios.post("/api/users/resetPassword", { token, password });
        //     setIsVerified(true);
        //   } catch (error: any) {
        //     console.log(error.message);
        //     setError(error.message);
        //   }
        // };

        useEffect(() => {
          const token = window.location.search.split("=")[1];
          setToken(token || "");
        }, []);

        const handleLogin  = async (e: React.FormEvent<HTMLFormElement>) => {
          try {
                const res = await axios.post("/api/users/resetPassword", { token, password });
                if(res.status === 200) {
                  setIsVerified(true);
                } else {
                  setIsVerified(false);
                }
          } catch (error: any) {
            console.log(error)
            setError(error.message);
          }
        }



  return (
    <div>
      {isVerified && (
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
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
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
      )}

      {error && (
    <div>
      Invalid Token
    </div>
      )}
    </div>
  );
}

export default ResetPasswordPage