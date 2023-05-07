import React from "react";

//import close icon
import { FiX } from "react-icons/fi";
//import Link
import { Link } from "react-router-dom";

//useFetch
import useFetch from "../hooks/useFetch";



const CategoryNavMobile = ({ setCatNavMobile }) => {
  //useFetch
  const { data: categories } = useFetch("/categories");
  
  //if categories is null
  if (!categories) return null;
  
  //if categories is not null
  //render
  return (
    <div className="w-full h-full bg-primary p-8">
      {/* close icon */}
      <div className="flex justify-end">
        <FiX
          className="text-white text-2xl cursor-pointer"
          onClick={() => setCatNavMobile(false)}
        />
      </div>
      <div className="flex flex-col gap-4">
        {categories.map((category) => (
          <Link
          onClick={() => setCatNavMobile(false)}
            key={category.id}
            to={`/products/${category.id}`}
            className="text-accent text-lg font-medium uppercase"
          >
            {category.attributes.Title} cameras
          </Link>
        ))}
      </div>
    </div>
  );
}
//   return (
//     <div className="w-full h-full bg-primary p-8">
//       {/* close icon */}
//       <div className="flex justify-end">
//         <FiX
//           className="text-white text-2xl cursor-pointer"
//           onClick={() => setCatNavMobile(false)}
//         />
//       </div>
//       CategoryNavMobile
//     </div>
//   );
// };

export default CategoryNavMobile;
