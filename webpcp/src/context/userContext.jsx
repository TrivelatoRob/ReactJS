import React, { createContext, useState } from 'react';

// Create a context with a default value
const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [pecas, setPecas] = useState([]);
  const [loading, setLoading] = useState(true)

  return (
    <UserContext.Provider value={{ pecas, setPecas, loading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };