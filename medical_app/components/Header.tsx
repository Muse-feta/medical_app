"use client";
import React from "react";
import Image from "next/image";
import nav_bg from "@/asset/img/bg/logo_bg_1.png";
import Link from "next/link";
import axios from "axios";
import { useAuth } from "@/context/authContext";

const Header = () => {
  const { isLogedIn, userData } = useAuth();
console.log("isLogedIn", isLogedIn);
  const handleLogout = async () => {
    await axios.get("/api/users/logout");
    window.location.reload();
  };

  return (
    <header className="th-header header-layout1">
      <div className="header-top">
        <div className="container">
          <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
            <div className="col-auto d-none d-lg-block">
              <div className="header-links">
                <ul>
                  <li className="d-none d-sm-inline-block">
                    <i className="fas fa-phone icon-btn"></i>
                    <b>Phone:</b>
                    <a href="tel:+1636543569">+163-654-3569</a>
                  </li>
                  <li className="d-none d-sm-inline-block">
                    <i className="fas fa-envelope icon-btn"></i>
                    <b>Email:</b>
                    <a href="mailto:info@mediax.com">info@mediax.com</a>
                  </li>
                  <li className="d-none d-xxl-inline-block">
                    <i className="fas fa-location-dot icon-btn"></i> 1 Barnes
                    Jewish Hospital Plaza, United States
                  </li>
                </ul>
              </div>
            </div>
            {isLogedIn === true ? (
              // show welcom username
              <div className="col-auto">
                <span className="social-title text-white">Welcome: </span>
                <span className="social-title text-white">
                  {userData?.firstName}{" "}
                </span>
              </div>
            ) : (
              <div className="col-auto">
                <div className="header-links">
                  <ul>
                    <li>
                      <div className="social-links">
                        <span className="social-title">Follow Us On: </span>
                        <a href="https://www.facebook.com/">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.twitter.com/">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com/">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://www.instagram.com/">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="sticky-wrapper">
        <div className="menu-area">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="header-logo">
                  <div
                    className="logo-bg"
                    style={{ backgroundImage: `url(${nav_bg.src})` }}
                  ></div>
                  <a href="home-medical-clinic.html">
                    <img src="assets/img/logo.svg" alt="Mediax" />
                  </a>
                </div>
              </div>
              <div className="col-auto d-none d-lg-inline-block">
                <nav className="main-menu d-none d-lg-inline-block">
                  <ul>
                    <li className="">
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>

                    <li>
                      <Link href="appointement">appointement</Link>
                    </li>
                    <li>
                      <Link href="contact">Contact</Link>
                    </li>
                    <li>
                      {isLogedIn ? (
                        <Link href="" onClick={handleLogout}>
                          Logout
                        </Link>
                      ) : (
                        <Link href="/login">Login</Link>
                      )}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
