"use client";

import React, { Fragment } from "react";
import Image from "next/image";

const Coupons = () => {
  return (
    <Fragment>
      <div className="relative z-20">
        <Image
          src="https://f.nooncdn.com/mpcms/EN0001/assets/37298fc1-69ca-4033-a437-022ac938a465.gif"
          alt="like"
          width={1000}
          height={80}
          className="w-full h-[80px] object-cover"
        />
      </div>
    </Fragment>
  );
};

export default Coupons;
