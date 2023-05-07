import React, { useEffect } from "react";

//useParams to get the id of the product
import { useParams } from "react-router-dom";

//useFetch to get the product data
import useFetch from "../hooks/useFetch";

// categorynav and product component

import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";

const Products = () => {
  const {id} =  useParams();
  
  //get product based on category id
  const {data} = useFetch(`/products?populate=*&filters[categories][id][$eq]=${id}`);
  const [title, setTitle] = React.useState(null);

  useEffect(() => {
    if (data) {
      setTitle(data[0].attributes.categories.data[0].attributes.Title);
    }
  },[data]);

  return (
    <div className="mb-16 pt-40 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex gap-x-6">
          <CategoryNav />
          <main>
            {/* title */}
            <div className="py-3 text-xl uppercase text-center lg:text-left">{title} cameras</div>
            {/* product grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {data?.map((product, index) => (
                <Product key={index} data={product} />
                ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
