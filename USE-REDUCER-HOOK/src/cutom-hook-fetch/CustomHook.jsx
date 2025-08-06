import React from 'react';
import UseFetch from './UseFetch';

import './index.css';
import Loader from './Loader';

const CustomHook = () => {
  const { data, loading, error } = UseFetch('https://dummyjson.com/products');

  if (loading) return <Loader />;
  if (error) return <p className="error">{error.message}</p>;

  return (
    <div className="container grid">
      {data && data.products.map(item => (
        <div key={item.id} className="product-card">
          <img src={item.thumbnail} alt={item.title} />
          <h2>
            {item.title} <span>${item.price}</span>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default CustomHook;
