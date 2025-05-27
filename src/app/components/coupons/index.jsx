"use client";

import React, { Fragment } from "react";
import Image from "next/image";

const Coupons = ({ imageUrl, imageWidth, imageHeight }) => {
  const aspectRatio = imageWidth / imageHeight;

  return (
    <Fragment>
      <div className="relative z-20 w-full">
        <div
          className="relative w-full"
          style={{
            aspectRatio: `${imageWidth} / ${imageHeight}`,
          }}
        >
          <Image
            src={imageUrl}
            alt="coupon"
            fill
            sizes="(max-width: 768px) 100vw, 1000px"
            priority
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Coupons;
