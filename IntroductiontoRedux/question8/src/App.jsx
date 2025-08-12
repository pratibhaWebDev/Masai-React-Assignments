import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/reducer"

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Counter</h1>
      <h2>Count: {count}</h2>
      
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      {/* Display state in stringified format */}
      <pre>{JSON.stringify({ count }, null, 2)}</pre>
    </div>
  );
}

export default App;
