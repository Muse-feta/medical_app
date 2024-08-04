import Link from 'next/link'
import React from 'react'

type Props = {}

const MainNav = (props: Props) => {
  return (
    <div className="hidden md:flex">
      <nav className="main-menu d-none d-lg-inline-block">
        <ul>
          <li className="">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li className="">
            <a href="/appointement">Appointements</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainNav