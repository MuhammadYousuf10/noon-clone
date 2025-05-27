"use client";

import React, { Fragment } from "react";
import Slider from "react-slick";
import "../navbar/style.scss";

const Navbar = () => {
  const categories = [
    "Electronics",
    "Men's Fashion",
    "Women's Fashion",
    "Kids' Fashion",
    "Home & Kitchen",
    "Beauty & Fragrance",
    "Baby",
    "Toys",
    "Sports & Outdoors",
    "Health & Nutrition",
    "Automotive",
    "Stationery",
    "Books & media",
    "Food",
  ];
  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <img
          src="https://f.nooncdn.com/s/app/com/noon/design-system/simpleicons/chevron-right.svg"
          alt="Next"
          className="w-6 h-6"
        />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <img
          src="https://f.nooncdn.com/s/app/com/noon/design-system/simpleicons/chevron-left.svg"
          alt="Prev"
          className="w-6 h-6"
        />
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
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
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="slider-wrapper">
            <div className="left-sec">
              <Slider {...settings}>
                {categories?.map((cat, index) => (
                  <div key={index}>
                    <div className="slider-sec text-[17px] text-black font-semibold">
                      {cat}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="right-sec"></div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
