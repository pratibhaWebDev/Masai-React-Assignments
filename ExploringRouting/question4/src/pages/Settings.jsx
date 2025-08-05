import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/UserContext';

const Settings = () => {
  const { user, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setUser(formData);
    alert('User info updated!');
  };

  return (
    <div>
      <h2>Settings Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email: </label>
          <input name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Settings;
