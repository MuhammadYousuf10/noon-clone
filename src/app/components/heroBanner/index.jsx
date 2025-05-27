"use client";

import React, { Fragment } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "../heroBanner/style.scss";

const HeroBanner = () => {
  const bannerImages = [
    "https://f.nooncdn.com/mpcms/EN0001/assets/5002e50d-10e5-4a1c-b816-dff8b5fafce8.png",
    "https://f.nooncdn.com/mpcms/EN0002/assets/09f472dc-bcba-4f7f-bd9c-e6fe82ae99cd.png",
    "https://f.nooncdn.com/mpcms/EN0001/assets/7303d78a-f429-4f4a-a1fa-7f3b4a3cca56.png",
    "https://f.nooncdn.com/mpcms/EN0001/assets/5002e50d-10e5-4a1c-b816-dff8b5fafce8.png",
    "https://f.nooncdn.com/mpcms/EN0002/assets/09f472dc-bcba-4f7f-bd9c-e6fe82ae99cd.png",
    "https://f.nooncdn.com/mpcms/EN0001/assets/7303d78a-f429-4f4a-a1fa-7f3b4a3cca56.png",
  ];
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
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Fragment>
      <div className="banner-sec">
        <div className="right-sec">
          <Slider {...settings}>
            {bannerImages?.map((img, index) => (
              <div key={index}>
                <Image
                  src={img}
                  alt={`Banner ${index + 1}`}
                  width={1200}
                  height={400}
                  className="w-full h-[210px] object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="left-sec">
          <Image
            src="https://f.nooncdn.com/mpcms/EN0002/assets/09f472dc-bcba-4f7f-bd9c-e6fe82ae99cd.png"
            alt="banner"
            width={430}
            height={400}
            className="w-full h-[210px] object-cover"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default HeroBanner;
