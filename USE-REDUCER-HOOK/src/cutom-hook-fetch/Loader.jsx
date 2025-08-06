// components/Loader.jsx
import React from "react";

const Loader = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <div className="spinner" />
      <p>Loading...</p>
      <style>
        {`
          .spinner {
            width: 40px;
            height: 40px;
            border: 4px solid #ccc;
            border-top: 4px solid #007bff;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 10px;
          }

          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
