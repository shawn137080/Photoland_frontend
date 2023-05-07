import React from "react";
//useFetch hook
import useFetch from "../hooks/useFetch";

//import LatestProducts
import LatestProducts from "../components/LatestProducts";
//import Hero
import Hero from "../components/Hero";





const Home = () => {
  //get new products
  const { data } = useFetch("/products?populate=*&filters[isNew]=true");

  return (
    <section>
      <Hero />
      <LatestProducts data={data} />
    </section>
  );
};

export default Home;
