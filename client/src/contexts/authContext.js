import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isUser, setIsUser] = useState(null);
  const navigate = useNavigate();

  const logout = () => {
    setIsUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ isUser, setIsUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
