import React, { Fragment } from "react";
import Image from "next/image";
import "../products/style.scss";

const Products = ({ heading, products, deal, column }) => {
  return (
    <Fragment>
      <div className={`products-sec ${column ? "sty-1" : ""}`}>
        <div className="head-sec">
          <div className="text-[24px] font-bold text-black">{heading}</div>
          {deal && <div className="tag">All Deals</div>}
        </div>
        <div className={`items-wrapper ${column ? "sty-1" : ""}`}>
          {products?.map((item) => (
            <div className="item" key={item.id}>
              <Image
                src={item.src}
                alt={item.alt}
                width={column ? 300 : 208}
                height={column ? 150 : 204}
                className={`h-auto ${
                  column ? "w-full" : "w-[208px] h-[204px]"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
