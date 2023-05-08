import React from "react";
//import Link
import { Link } from "react-router-dom";
import { request } from "../request";

const Product = ({ data }) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  return (
    <Link to={`/product/${data.id}`}>
      <div className="group grad w-full h-[390px] rounded-[8px] overflow-hidden relative">
        {/* badge */}
        {data.attributes.isNew && (
          <div className="absolute bg-accent text-primary text-[10px] font-bold top-[10px] left-[10px] rounded-[4px] px-[5px] py-[2px] uppercaser z-10">
            NEW
          </div>
        )}
        {/* image */}
        <div className="w-full h-[200px] flex items-center justify-center relative">
          <img
            className="w-[160px] h-[160px] group-hover:scale-110 transition-all duration-300 ease-in-out"
            src={`${BASE_URL}${data.attributes.image.data.attributes.url}`}
            alt=""
          />
        </div>
        {/* text */}
        <div className="px-4 pb-8 flex flex-col pt-4">
          {/* title */}
          <div className="text-sm text-accent font-bold capitalize mb-2">
            {data.attributes.categories.data[0].attributes.Title}
          </div>
          {/* title */}
          <div className="text-[15px] mb-4 lg:mb-5">
            {data.attributes.Title.substring(0, 50)}...
          </div>
          {/* price */}
          <div className="text-lg text-accent">${data.attributes.Price}</div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
