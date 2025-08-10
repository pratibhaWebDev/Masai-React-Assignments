import React, { useReducer } from "react";


function visibilityReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_VISIBILITY":
      return { ...state, isVisible: !state.isVisible };
    default:
      return state;
  }
}

const initialState = { isVisible: false };

export default function ToggleVisibility() {
 
  const [state, dispatch] = useReducer(visibilityReducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={() => dispatch({ type: "TOGGLE_VISIBILITY" })}>
        Toggle Message
      </button>

      
      {state.isVisible && <p>Hello, World!</p>}
    </div>
  );
}
