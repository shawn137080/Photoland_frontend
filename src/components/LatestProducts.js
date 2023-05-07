import React from "react";
//import productSlider
import ProductSlider from "../components/ProductSlider";

const LatestProducts = ({data}) => {
  return (
    <div>
      <div className="container mx-auto">
        <h2 className="h2 mb-6 text-center xl:text-left">Latest Products</h2>
      </div>
      <ProductSlider data={data} />
    </div>
  );
};

export default LatestProducts;
