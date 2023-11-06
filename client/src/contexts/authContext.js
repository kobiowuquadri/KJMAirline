import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isUser, setIsUser] = useState(null);
  const [userDatas, setUserData] = useState(null); // Define the userData state
  const navigate = useNavigate();

  const logout = () => {
    setIsUser(null);
    setUserData(null); // Reset the userData state when the user logs out
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ isUser, setIsUser, userDatas, setUserData, logout }}> 
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };