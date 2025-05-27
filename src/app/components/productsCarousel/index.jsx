"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "../productsCarousel/style.scss";

const ProductsCarousel = ({
  carouselProductsData = [],
  heading = "Maximize your savings",
  slidesToShow = 4,
  imageWidth = 350,
  imageHeight = 320,
  viewBtn,
  variation,
}) => {
  const NextArrow = ({ onClick }) => (
    <div className="custom-arrow next" onClick={onClick}>
      <img
        src="https://f.nooncdn.com/s/app/com/noon/design-system/simpleicons/chevron-right.svg"
        alt="Next"
      />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="custom-arrow prev" onClick={onClick}>
      <img
        src="https://f.nooncdn.com/s/app/com/noon/design-system/simpleicons/chevron-left.svg"
        alt="Previous"
      />
    </div>
  );

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(slidesToShow, 3),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(slidesToShow, 2),
        },
      },
    ],
  };

  return (
    <div className={`product-carousel-sec ${variation ? "sty-1" : ""}`}>
      <div className="head-sec">
        <div className="text-[18px] sm:text-[22px] md:text-[24px] font-bold text-black mb-4">
          {heading}
        </div>
        {viewBtn && <button className="btn">View All</button>}
      </div>
      <Slider {...settings}>
        {carouselProductsData.map((img, index) => (
          <div key={index}>
            <Image
              src={img}
              alt={`Banner ${index + 1}`}
              width={imageWidth}
              height={imageHeight}
              className="object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductsCarousel;
