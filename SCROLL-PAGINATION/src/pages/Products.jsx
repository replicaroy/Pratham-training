import React, { useEffect, useRef, useState } from 'react';
import './products.css';

const url = 'https://fakestoreapi.com/products';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const loadRef = useRef(null);

  const fetchData = async () => {
    const limit = 10;
    try {
      const response = await fetch(`${url}?limit=${limit}&offset=${(page - 1) * limit}`);
      const data = await response.json();

      // API returns fewer than 10? No more items.
      if (data.length < limit) {
        setHasMore(false);
      }

      return data;
    } catch (err) {
      console.error('Failed to fetch:', err);
      setHasMore(false);
      return [];
    }
  };

  const loadMore = async () => {
    const newItems = await fetchData();

    if (newItems.length === 0) {
      setHasMore(false);
      return;
    }

    setProducts((prev) => [...prev, ...newItems]);
    setPage((prev) => prev + 1);
    setLoading(false);
  };

  // Load first page
  useEffect(() => {
    loadMore();
  }, []);

  // Infinite scroll observer
  useEffect(() => {
    if (!loadRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { rootMargin: '100px' }
    );

    observer.observe(loadRef.current);

    return () => {
      if (loadRef.current) observer.unobserve(loadRef.current);
    };
  }, [hasMore]);

  return (
    <div>
      <h1>Products Page</h1>
      <div className="products-container">
        {products.map((product) => (
          <div className="product-card" key={product.title}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>Price : ${product.price}</p>
          </div>
        ))}
      </div>

      {hasMore && (
        <div ref={loadRef} className="loading">
          Loading more...
        </div>
      )}

      {!hasMore && (
        <div className="loading">
          <p>No more products to load.</p>
        </div>
      )}
    </div>
  );
};

export default Products;


// import React, { useEffect, useRef, useState } from 'react';
// import  './products.css';

// const url = 'https://fakestoreapi.com/products';

// const Products = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [page, setPage] = useState(1)
//     const [hasMore, setHasMore] = useState(true);
//     const loadRef = useRef(null)
//     const limit = 10;

//     const fetchData = async () => {     
//             const response = await fetch(`${url}?limit=${limit}&offset=${(page-1)*limit}`);
//             const data = await response.json();        
//             return data;            
//     };

//     const loadMore = async () => {
//         const newItems = await fetchData()
//         console.log(newItems)
//         if(newItems.length === 0){
//             setHasMore(false)
//             return;
//         }
//         setProducts((prev)=>[...prev, ...newItems])
//         setPage((prev)=>prev+1)
//     }

//     useEffect(() => {
//         loadMore();
//     }, []);

//     useEffect(()=>{
//         if(!loadRef.current || !hasMore) return;

//         const observer = new IntersectionObserver((entries)=>{
//             if(entries[0].isIntersecting){
//                 console.log('foung element')
//                 loadMore();
//             }
//         },
//         {rootMargin: '100px'}
//     );
//     observer.observe(loadRef.current)
//     return ()=>{
//         if(loadRef.current) observer.unobserve(loadRef.current)
//     }       
//     },[loadRef,hasMore,])

//     if (loading) return <p>Loading products...</p>;

//   return (
//   <div>
//     <h1>Products Page</h1>
//     <div className="products-container">
//       {products.map((product) => (
//         <div className="product-card" key={product.id}>
//           <img src={product.image}  />
//           <h2>{product.title}</h2>
//           <p>${product.price}</p>
//         </div>
//       ))}
//     </div>
//     {hasMore && <div ref={loadRef} className='' > Loading more...</div> }
//     {!hasMore && <div ref={loadRef} className='' > All products loaded !...</div> }
//   </div>
// )
// };

// export default Products;
