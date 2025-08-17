import React from "react";
import useForm from "./useForm";

const FormComponent = () => {
  const { values, handleChange, resetForm } = useForm({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${values.name}, Email: ${values.email}`);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow w-80">
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          className="border px-2 py-1"
        />
      </div>
      <div className="mt-2">
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          className="border px-2 py-1"
        />
      </div>
      <button type="submit" className="mt-3 px-3 py-1 bg-blue-500 text-white rounded">
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
