import React from "react";
import { useState } from "react";
import MyComponent from "./Mycomponent";

function Home() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("john");
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
       count is
      </button>
       <h4> {count}</h4>
      <button onClick={() => setName("jane")}>
        {" "}
        <h4>Change name {name}</h4>
      </button>

      <MyComponent name={name} />
    </div>
  );
}

export default Home;
