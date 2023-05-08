import React from "react";
//import slider css
import "../slider.css";
//import swiper component
import { Swiper, SwiperSlide } from "swiper/react";
//import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//import required modules
import { Pagination, Navigation } from "swiper";

//import Product
import Product from "../components/Product";

const ProductSlider = ({ data }) => {
  return (
    <Swiper
      navigation={true}
      modules={[Pagination, Navigation]}
      loop={false}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 30 },
        768: { slidesPerView: 2, spaceBetween: 30 },
        960: { slidesPerView: 3, spaceBetween: 30 },
        1440: { slidesPerView: 4, spaceBetween: 30 },
      }}
      pagination={{ clickable: true }}
      className="productSlider mx-auto max-w-[360px] sm:max-w-[600px] 
      md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1400px]"
    >
      <>
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <Product data={item} />
          </SwiperSlide>
        ))}
      </>
    </Swiper>
  );
};

export default ProductSlider;
