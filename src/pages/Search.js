import React from "react";
//useLocation hook to get the query string
import { useLocation } from "react-router-dom";

//useFetch
import useFetch from "../hooks/useFetch";

//components
import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("q");

  const { data } = useFetch(
    `/products?populate=*&filters[Title][$contains]=${searchTerm}`
  );
  return (
    <div className="mb-[30px] pt-40 xl:pt-0 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex gap-x-2">
          {/* category nav  */}
          <CategoryNav />
          <div>
            {/* title */}
            <div className="py-4 text-2xl text-center font-semibold lg:text-left">{data?.length > 0 ? 
            `${data.length} results for "${searchTerm}"` 
            : `No results found for "${searchTerm}"`}</div>
            {/* products grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {data?.map((product) => (
                <Product data={product} key={product.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
