import React from "react";
//useParams to get the product id from the url
import { useParams } from "react-router-dom";

//useFetch hook to fetch the product details
import useFetch from "../hooks/useFetch";

//components
import RelatedProducts from "../components/RelatedProducts";

//context
import { CartContext } from "../context/CartContext";





const ProductDetails = () => {
  //use context add to cart
  const { addToCart } = React.useContext(CartContext);


  const { id } = useParams();
  //get product based on the id
  const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);
  if (!data) {
    //loading page
    return <div className="container mx-auto">Loading...</div>;
  }
  //category title
  const category = data[0].attributes.categories.data[0].attributes.Title;

  return (
    <div className="mb-16 pt-44 lg:pt-[30px] xl:pt-0">
      <div className="container mx-auto">
        {/* text */}
        <div className="flex flex-col lg:flex-row gap-4 mb-4">
          <div className="flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center items-center">
            <img
              className="w-full max-w-[65%]"
              src={`http://localhost:1337${data[0].attributes.image.data.attributes.url}`}
              alt=""
            />
          </div>
          <div className="flex-1 bg-primary p-12 xl:p-20 rounded-lg flex flex-col justify-center">
            {/* category */}
            <div className="uppercase text-accent text-xl font-medium mb-2">
              {data[0].attributes.categories.data[0].attributes.Title} Camera
            </div>
            {/* title */}
            <h2 className="h2 mb-4">{data[0].attributes.Title}</h2>
            {/* description  */}
            <p className="mb-12">{data[0].attributes.Description}</p>
            {/* price and btn */}
            <div className="flex items-center gap-x-8">
              {/* price */}
              <div className="text-3xl text-accent font-semibold">{"$" + data[0].attributes.Price}</div>
              {/* button */}
              <button 
              onClick={() => addToCart(data,id)}
              className="btn btn-accent">Add to cart</button>
            </div>
          </div>
        </div>
        {/* related products */}
        <RelatedProducts category={category}/>
      </div>
    </div>
  );
};

export default ProductDetails;
