import React from 'react';

// const withLoading = (WrappedComponent) => {
//   return function EnhancedComponent({ isLoading, ...props }) {
//     return isLoading ? <p>Loading...</p> : <WrappedComponent {...props} />;
//   };
// };

// export default withLoading;

const withLoading = (WrappedComponent) => {
  return function EnhancedComponent({ isLoading, ...props }) {
    return isLoading ? <p>Loading...</p> : <WrappedComponent {...props} />;
  };
};

export default withLoading;
