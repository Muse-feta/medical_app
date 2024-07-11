"use client"
import React from 'react'

const loading = () => {
  return (
    <div className="preloader">
      {/* <button className="th-btn preloaderCls">Cancel Preloader</button> */}
      <div className="preloader-inner">
        <div className="loader"></div>
      </div>
    </div>
  );
}

export default loading