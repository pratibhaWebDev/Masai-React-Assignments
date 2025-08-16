import React, { useState } from 'react';

const TrackerForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    studyHours: 0,
    breakTime: 0,
    sleep: 0,
    stress: 5,
    focus: 5,
  });

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(form); }}>
      
      <label>Study Hours: {form.studyHours}</label>
      <input type="range" min="0" max="12" value={form.studyHours}
        onChange={(e) => setForm({ ...form, studyHours: e.target.value })} />
    
      <button type="submit">Log Today</button>
    </form>
  );
};

export default TrackerForm;
