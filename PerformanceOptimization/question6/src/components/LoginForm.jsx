import React from "react";
import useForm from "../hooks/useForm";

function LoginForm() {
  const { values, handleChange, resetForm } = useForm({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${values.username}, Password: ${values.password}`);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded w-80">
      <h2 className="text-xl font-bold mb-2">Login Form</h2>
      
      <input
        type="text"
        name="username"
        value={values.username}
        onChange={handleChange}
        placeholder="Enter Username"
        className="border p-2 mb-2 w-full"
      />

      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="Enter Password"
        className="border p-2 mb-2 w-full"
      />

      <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
