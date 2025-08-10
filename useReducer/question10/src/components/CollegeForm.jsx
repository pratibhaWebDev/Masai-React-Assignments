import React, { useReducer, useState } from "react";

const initialState = {
  name: "",
  establishment_year: "",
  address: {
    building: "",
    street: "",
    city: {
      name: "",
      locality: {
        pinCode: "",
        landmark: ""
      }
    },
    state: "",
    coordinates: {
      latitude: "",
      longitude: ""
    }
  },
  courses_offered: []
};

function reducer(state, action) {
  switch (action.type) {
    case "update_field":
      return { ...state, [action.field]: action.value };

    case "update_address_field":
      return {
        ...state,
        address: { ...state.address, [action.field]: action.value }
      };

    case "update_city_field":
      return {
        ...state,
        address: {
          ...state.address,
          city: { ...state.address.city, [action.field]: action.value }
        }
      };

    case "update_locality_field":
      return {
        ...state,
        address: {
          ...state.address,
          city: {
            ...state.address.city,
            locality: {
              ...state.address.city.locality,
              [action.field]: action.value
            }
          }
        }
      };

    case "update_coordinates_field":
      return {
        ...state,
        address: {
          ...state.address,
          coordinates: {
            ...state.address.coordinates,
            [action.field]: action.value
          }
        }
      };

    case "add_course":
      return {
        ...state,
        courses_offered: [...state.courses_offered, action.course]
      };

    case "reset":
      return initialState;

    default:
      throw new Error("invalid action type");
  }
}

export default function CollegeForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [course, setCourse] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("College Data:", state);
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>College Form</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        {/* Basic Details */}
        <input
          type="text"
          placeholder="College Name"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "update_field", field: "name", value: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Establishment Year"
          value={state.establishment_year}
          onChange={(e) =>
            dispatch({ type: "update_field", field: "establishment_year", value: e.target.value })
          }
        />

        {/* Address */}
        <h4>Address</h4>
        <input
          type="text"
          placeholder="Building"
          value={state.address.building}
          onChange={(e) =>
            dispatch({ type: "update_address_field", field: "building", value: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Street"
          value={state.address.street}
          onChange={(e) =>
            dispatch({ type: "update_address_field", field: "street", value: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="City Name"
          value={state.address.city.name}
          onChange={(e) =>
            dispatch({ type: "update_city_field", field: "name", value: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Pincode"
          value={state.address.city.locality.pinCode}
          onChange={(e) =>
            dispatch({ type: "update_locality_field", field: "pinCode", value: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Landmark"
          value={state.address.city.locality.landmark}
          onChange={(e) =>
            dispatch({ type: "update_locality_field", field: "landmark", value: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="State"
          value={state.address.state}
          onChange={(e) =>
            dispatch({ type: "update_address_field", field: "state", value: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Latitude"
          value={state.address.coordinates.latitude}
          onChange={(e) =>
            dispatch({ type: "update_coordinates_field", field: "latitude", value: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Longitude"
          value={state.address.coordinates.longitude}
          onChange={(e) =>
            dispatch({ type: "update_coordinates_field", field: "longitude", value: e.target.value })
          }
        />

        {/* Courses */}
        <h4>Courses Offered</h4>
        <input
          type="text"
          placeholder="Course Name"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            if (course.trim()) {
              dispatch({ type: "add_course", course });
              setCourse("");
            }
          }}
        >
          Add Course
        </button>
        <ul>
          {state.courses_offered.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>

        {/* Buttons */}
        <button type="submit">Submit</button>
        <button type="button" onClick={() => dispatch({ type: "reset" })}>
          Reset
        </button>
      </form>

      {/* Display State */}
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
