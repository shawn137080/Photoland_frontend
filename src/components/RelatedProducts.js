import React from 'react';

//useFetch
import useFetch from '../hooks/useFetch';

import ProductSlider from './ProductSlider';



const RelatedProducts = ({category}) => {
  const {data} = useFetch(`/products?populate=*&filters[categories][Title]=${category}`);
  return <div className='mb-16'>
    <div className="container mx-auto">
      <h2 className='h2 mb-6 text-center xl:text-left'>Related Products</h2>
      <ProductSlider data={data} />
    </div>
  </div>;
};

export default RelatedProducts;
