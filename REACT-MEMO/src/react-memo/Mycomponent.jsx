import React from 'react';

const MyComponent = React.memo(({ name }) => {
  console.log('My component rendered');
  return (
    <div>
      <p>Hello {name}</p>
    </div>
  );
});

export default MyComponent;
