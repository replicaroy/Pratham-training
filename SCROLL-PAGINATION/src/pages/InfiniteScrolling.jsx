import React, { useEffect, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component'
import './products.css';

const url = 'https://fakestoreapi.in/api/products/category?type=mobile';

const InfiniteScrolling = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

    const fetchProducts = async () => {
    const limit = 10;
    try {
      // const response = await fetch(`${url}?limit=${limit}&offset=${(page - 1) * limit}`);
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data.products);
      // return data;

    } catch (err) {
      console.error('Failed to fetch:', err);
      setHasMore(false);
      return [];
    }
  };
  console.log(products);
  

const loadMore = async () => {
  const newProducts = await fetchProducts();

  if (newProducts.length === 0) {
    setHasMore(false);
    return;
  }

  setProducts((prev) => [...prev, ...newProducts]);
  setPage((prev) => prev + 1);
};

  useEffect(() => {
    loadMore();
  }, []);
  
return (
  <div>
    <h2>Product List</h2>
    <InfiniteScroll
      dataLength={products.length}  
      next={loadMore}               
      hasMore={hasMore}            
      loader={<p>Loading...</p>}
      endMessage={<p>End of list</p>}
    >
     <div className="products-container">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </InfiniteScroll>
  </div>
);

};

export default InfiniteScrolling;