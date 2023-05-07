import React from "react";

//import useFetch
import useFetch from "../hooks/useFetch";
//import Link
import { Link } from "react-router-dom";

const CategoryNav = () => {
  const { data } = useFetch("/categories");
  return (
    <aside className="hidden xl:flex">
      <div className="flex flex-col w-[268px] h-[500px] bg-primary rounded-[6px]">
        <div className="bg-accent text-primary text-center py-4 uppercase font-semibold flex items-center justify-center">Browse Categories</div>
        <div className="flex flex-col gap-y-6 p-6">
          {data?.map((category) => (
            <Link to={`/products/${category.id}`} key={category.id}
            className="uppercase cursor-pointer">
              {category.attributes.Title}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default CategoryNav;
