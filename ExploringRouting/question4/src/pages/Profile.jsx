import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>Profile Page</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
};

export default Profile;
