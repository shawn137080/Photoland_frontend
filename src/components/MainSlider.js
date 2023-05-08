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
import { Pagination } from "swiper";
//import useFetch hook
import useFetch from "../hooks/useFetch";

import CameraImg from "../img/camera.png";

const sliderData = [
  {
    img: CameraImg,
    pretitle: "special offer",
    title_1: "New Arrivals",
    title_2: "on sale",
    title_3: "Online Only",
    btnText: "shop now",
  },
  {
    img: CameraImg,
    pretitle: "special offer",
    title_1: "New Arrivals",
    title_2: "on sale",
    title_3: "Online Only",
    btnText: "shop now",
  },
  {
    img: CameraImg,
    pretitle: "special offer",
    title_1: "New Arrivals",
    title_2: "on sale",
    title_3: "Online Only",
    btnText: "shop now",
  }
];

const MainSlider = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const { data } = useFetch("/products?populate=*&filters[isOnSale]=true");
  return (
    <Swiper
      modules={[Pagination]}
      loop={true}
      pagination={{ clickable: true }}
      className="mainSlider h-full bg-primary xl:bg-mainSlider xl:bg-no-repeat max-w-lg lg:max-w-none rounded-[8px] overflow-hidden drop-shadow-2xl"
    >
      <>
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col lg:flex-row h-full p-[20px] md:p-[60px]">
              {/* text */}
              <div className="w-full lg:flex-1">
                <div className="uppercase mb-1 text-center lg:text-left">{item.pretitle}</div>
                <div className="text-3xl md:text-[46px] font-semibold uppercase leading-none text-center lg:text-left mb-8 xl:mb-20">
                  {item.title_1}<br/>
                  {item.title_2}<br/>
                  {item.title_3}
                </div>
                <button className="btn btn-accent mx-auto lg:mx-0">Shop Now</button>
              </div>
              {/* img */}
              <div className="flex-1 ">
                <img src={`${BASE_URL}${data.attributes.image.data.attributes.url}`} alt="" 
                className="xl:absolute xl:-right-16 xl:-bottom-12"/>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </>
    </Swiper>
  );
};

export default MainSlider;
