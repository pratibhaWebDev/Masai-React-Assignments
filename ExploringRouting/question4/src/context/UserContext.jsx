import { createContext, useState } from 'react';

export const UserContext = createContext();

const mockUser = {
  name: "John Doe",
  email: "john@example.com"
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(mockUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
