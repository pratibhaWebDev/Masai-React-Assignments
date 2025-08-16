
import React from "react";
import useForm from "../hooks/useForm";

function RegisterForm() {
  const { values, handleChange, resetForm } = useForm({ email: "", password: "", confirmPassword: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering:", values);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded w-80">
      <h2 className="text-xl font-bold mb-2">Register Form</h2>

      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Enter Email"
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

      <input
        type="password"
        name="confirmPassword"
        value={values.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm Password"
        className="border p-2 mb-2 w-full"
      />

      <button type="submit" className="bg-green-500 text-white p-2 w-full rounded">
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
