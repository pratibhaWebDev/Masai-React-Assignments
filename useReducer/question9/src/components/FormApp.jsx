import React, { useReducer } from "react";


const initialState = {
  email: "",
  password: "",
  submitted: false,
};


function formReducer(state, action) {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "submit":
      return { ...state, submitted: true };
    case "reset":
      return initialState;
    default:
      throw new Error("invalid action type");
  }
}

export default function FormApp() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.email.trim() === "" || state.password.trim() === "") return;
    dispatch({ type: "submit" });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Login Form</h2>

      
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={state.email}
            onChange={(e) =>
              dispatch({ type: "email", payload: e.target.value })
            }
            required
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Password: </label>
          <input
            type="password"
            value={state.password}
            onChange={(e) =>
              dispatch({ type: "password", payload: e.target.value })
            }
            required
          />
        </div>

        <div style={{ marginTop: "15px" }}>
          <button type="submit">Submit</button>
          <button
            type="button"
            style={{ marginLeft: "10px" }}
            onClick={() => dispatch({ type: "reset" })}
          >
            Reset
          </button>
        </div>
      </form>

      
      <div style={{ marginTop: "20px" }}>
        {!state.submitted ? (
          <div>No details found</div>
        ) : (
          <div>
            <div>User Email: {state.email}</div>
            <div>User Password: {state.password}</div>
          </div>
        )}
      </div>
    </div>
  );
}
