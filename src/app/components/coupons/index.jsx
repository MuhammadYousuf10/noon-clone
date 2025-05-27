"use client";

import React, { Fragment } from "react";
import Image from "next/image";

const Coupons = ({ imageUrl, imageWidth, imageHeight }) => {
  return (
    <Fragment>
      <div className="relative z-20">
        <Image
          src={imageUrl}
          alt="like"
          width={imageWidth}
          height={imageHeight}
          className="w-full object-cover"
        />
      </div>
    </Fragment>
  );
};

export default Coupons;
