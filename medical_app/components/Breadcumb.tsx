import React from 'react'
import Image from 'next/image';
import bg from "@/asset/img/bg/breadcumb-bg.jpg";
import Link from 'next/link';

type Props = {
    title: string
    subtitle: string
}

const Breadcumb = ({title, subtitle}: Props) => {
  return (
    <div
      className="breadcumb-wrapper"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="container">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">{title}</h1>
          <ul className="breadcumb-menu">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>{subtitle}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Breadcumb