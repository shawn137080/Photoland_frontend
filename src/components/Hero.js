import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
//import CategoryNav
import CategoryNav from "../components/CategoryNav";
import MainSlider from "../components/MainSlider";
//import image
import PromoImg1 from "../img/promo_img1.png";
import PromoImg2 from "../img/promo_img2.png";

const Hero = () => {
  const {data} = useFetch(`/categories?populate=*&filters[isOnPromote]=true`);
  console.log(data)
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  return (
    <section className="mb-[30px] pt-36 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]">
          {/* sidebar */}
          <div>
            <CategoryNav />
          </div>
          {/* main slider  */}
          <div className="w-full max-x-lg lg:max-w-[734px] mx-auto">
            <MainSlider />
          </div>
          {/* promos */}
          <div className="flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px]">
            {/* promo img1 */}
            <div className="grad flex-1 h-[250px] rounded-[6px] overflow-hidden relative p-6">
              <div className="flex flex-col max-w-[144px] h-full justify-center">
                <div className="text-[20px] font-medium leading-tight mb-4 uppercase">
                  35% off all dslr cameras
                </div>
                <Link
                  to={`/products/1`}
                  className="uppercase cursor-pointer text-accent font-bold"
                >
                  Shop now
                </Link>
              </div>
              <img
                className="absolute z-20 -top-2 -right-4"
                src={PromoImg1}
                alt="promo1"
              />
            </div>
            {/* promo img2  */}
            <div className="grad flex-1 h-[250px] rounded-[6px] overflow-hidden relative p-6">
              <div className="flex flex-col max-w-[144px] h-full justify-center">
                <div className="text-[20px] font-medium leading-tight mb-4 uppercase">
                  25% off all mirrorless cameras
                </div>
                <Link
                  to={`/products/2`}
                  className="uppercase cursor-pointer text-accent font-bold"
                >
                  Shop now
                </Link>
              </div>
              <img
                className="absolute z-20 top-4 -right-6"
                src={PromoImg2}
                alt="promo2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
