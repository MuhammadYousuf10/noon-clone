"use client";
import React, { Fragment, useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Fragment>
      {isMobile ? (
        <header
          className="text-black text-sm shadow-md sticky top-0 z-50"
          style={{ backgroundColor: "#feee00" }}
        >
          <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-y-4">
            {/* Group: Logo + Language + Deliver */}
            <div className="flex items-center gap-4 flex-wrap md:flex-nowrap w-full md:w-auto justify-between">
              {/* Logo */}
              <div className="w-[120px] flex-shrink-0">
                <img
                  src="https://f.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg"
                  alt="Noon Logo"
                  className="h-6"
                />
              </div>

              {/* Language */}
              <div>
                <span className="text-[14px] text-gray-700 font-semibold">
                  العربية
                </span>
              </div>

              {/* Deliver To */}
              <div className="flex items-center gap-2 cursor-pointer">
                <Image
                  src="https://f.nooncdn.com/s/app/com/common/images/flags/ae.svg"
                  alt="UAE Flag"
                  width={30}
                  height={20}
                  className="w-[30px] h-[20px]"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-[14px] text-gray-700">Deliver to</span>
                  <div className="flex items-center font-bold text-sm text-[14px]">
                    <span>Dubai</span>
                    <IoIosArrowDown className="ml-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="w-full md:flex-1">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full px-4 py-2 rounded-md text-sm bg-white"
              />
            </div>

            {/* User Menu */}
            <div className="flex gap-4 items-center justify-center md:justify-end w-full md:w-auto">
              <div className="flex items-center gap-2 cursor-pointer">
                <span className="text-gray-500 hidden md:inline">|</span>
                <span className="text-sm">Log In</span>
                <Image
                  src="https://f.nooncdn.com/s/app/com/noon/icons/user_thin.svg"
                  alt="log in"
                  width={14}
                  height={14}
                  className="w-[14px] h-[14px]"
                />
                <span className="text-gray-500 hidden md:inline">|</span>
              </div>
              <Image
                src="https://f.nooncdn.com/s/app/com/noon/icons/wishlist-dark.svg"
                alt="like"
                width={24}
                height={24}
                className="w-[24px] h-[24px] cursor-pointer"
              />
              <Image
                src="https://f.nooncdn.com/s/app/com/noon/icons/cart_2.svg"
                alt="cart"
                width={24}
                height={24}
                className="w-[24px] h-[24px] cursor-pointer"
              />
            </div>
          </div>
        </header>
      ) : (
        <header
          className="text-black text-sm shadow-md sticky top-0 z-50"
          style={{ backgroundColor: "#feee00" }}
        >
          <div className="container mx-auto px-4 py-3 flex items-center gap-4 flex-wrap">
            {/* Logo */}
            <div className="w-[120px]">
              <img
                src="https://f.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg"
                alt="Noon Logo"
                className="h-6"
              />
            </div>
            {/* Country & Language */}
            <div className="flex items-center gap-2 cursor-pointer">
              <Image
                src="https://f.nooncdn.com/s/app/com/common/images/flags/ae.svg"
                alt="UAE Flag"
                width={30}
                height={20}
                className="w-[30px] h-[20px]"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-[14px] text-gray-700">Deliver to</span>
                <div className="flex items-center font-bold text-sm text-[14px] ">
                  <span>Dubai</span>
                  <IoIosArrowDown className="ml-1" />
                </div>
              </div>
            </div>
            {/* Search Bar */}
            <div className="flex-1 flex justify-center max-w-[900px]">
              <div className="relative w-full ">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-full px-4 py-2 rounded-md text-sm bg-white"
                />
              </div>
            </div>

            <div>
              <span
                className="
            text-[14px] text-gray-700 font-semibold"
              >
                العربية
              </span>
            </div>
            {/* User Menu */}
            <div className="flex gap-6 items-center whitespace-nowrap">
              <div className="flex items-center gap-1 cursor-pointer">
                <span className="text-gray-500">|</span> {/* Vertical line */}
                <div className="flex items-center gap-2 px-2">
                  <span>Log In</span>
                  <Image
                    src="https://f.nooncdn.com/s/app/com/noon/icons/user_thin.svg"
                    alt="log in"
                    width={14}
                    height={14}
                    className="w-[14px] h-[14px]"
                  />
                </div>
                <span className="text-gray-500">|</span> {/* Vertical line */}
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                <Image
                  src="https://f.nooncdn.com/s/app/com/noon/icons/wishlist-dark.svg"
                  alt="like"
                  width={24}
                  height={24}
                  className="w-[24px] h-[24px]"
                />
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                <Image
                  src="https://f.nooncdn.com/s/app/com/noon/icons/cart_2.svg"
                  alt="like"
                  width={24}
                  height={24}
                  className="w-[24px] h-[24px]"
                />
              </div>
            </div>
          </div>
        </header>
      )}
    </Fragment>
  );
};

export default Header;
