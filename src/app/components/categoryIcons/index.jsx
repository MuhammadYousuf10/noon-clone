"use client";

import React, { Fragment } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "../categoryIcons/style.scss";

const CategoryIcons = () => {
  const categories = [
    "https://f.nooncdn.com/mpcms/EN0001/assets/5645bfa7-f589-4464-8013-52a3647130d7.gif",
    "https://f.nooncdn.com/mpcms/EN0001/assets/f0bb1cad-2c19-4739-a25e-c2a23181607a.png",
    "https://f.nooncdn.com/mpcms/EN0001/assets/ea51975c-ece3-40d2-8103-12ba2e839f80.png",
    "https://f.nooncdn.com/mpcms/EN0001/assets/5645bfa7-f589-4464-8013-52a3647130d7.gif",
    "https://f.nooncdn.com/mpcms/EN0001/assets/f0bb1cad-2c19-4739-a25e-c2a23181607a.png",
    "https://f.nooncdn.com/mpcms/EN0001/assets/ea51975c-ece3-40d2-8103-12ba2e839f80.png",
    "https://f.nooncdn.com/mpcms/EN0001/assets/5645bfa7-f589-4464-8013-52a3647130d7.gif",
    "https://f.nooncdn.com/mpcms/EN0001/assets/f0bb1cad-2c19-4739-a25e-c2a23181607a.png",
    "https://f.nooncdn.com/mpcms/EN0001/assets/ea51975c-ece3-40d2-8103-12ba2e839f80.png",
    "https://f.nooncdn.com/mpcms/EN0001/assets/5645bfa7-f589-4464-8013-52a3647130d7.gif",
    "https://f.nooncdn.com/mpcms/EN0001/assets/f0bb1cad-2c19-4739-a25e-c2a23181607a.png",
    "https://f.nooncdn.com/mpcms/EN0001/assets/ea51975c-ece3-40d2-8103-12ba2e839f80.png",
    "https://f.nooncdn.com/mpcms/EN0001/assets/5645bfa7-f589-4464-8013-52a3647130d7.gif",
    "https://f.nooncdn.com/mpcms/EN0001/assets/f0bb1cad-2c19-4739-a25e-c2a23181607a.png",
    "https://f.nooncdn.com/mpcms/EN0001/assets/ea51975c-ece3-40d2-8103-12ba2e839f80.png",
    "https://f.nooncdn.com/mpcms/EN0001/assets/5645bfa7-f589-4464-8013-52a3647130d7.gif",
    "https://f.nooncdn.com/mpcms/EN0001/assets/f0bb1cad-2c19-4739-a25e-c2a23181607a.png",
    "https://f.nooncdn.com/mpcms/EN0001/assets/ea51975c-ece3-40d2-8103-12ba2e839f80.png",
  ];
  const NextArrow = ({ className, style, onClick }) => (
    <div
      className={`custom-arrow next ${className}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <img
        src="https://f.nooncdn.com/s/app/com/noon/design-system/simpleicons/chevron-right.svg"
        alt="Next"
      />
    </div>
  );

  const PrevArrow = ({ className, style, onClick }) => (
    <div
      className={`custom-arrow prev ${className}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <img
        src="https://f.nooncdn.com/s/app/com/noon/design-system/simpleicons/chevron-left.svg"
        alt="Previous"
      />
    </div>
  );

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 12,
    slidesToScroll: 12,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Fragment>
      <div className="category-sec">
        <Slider {...settings}>
          {categories?.map((cat, index) => (
            <div key={index}>
              <div key={index}>
                <Image
                  src={cat}
                  alt={`Products ${index + 1}`}
                  width={102}
                  height={150}
                  className="w-[102px] h-[150px] object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Fragment>
  );
};

export default CategoryIcons;
